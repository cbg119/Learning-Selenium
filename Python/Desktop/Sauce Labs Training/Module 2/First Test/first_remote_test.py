import pytest, time, os
from sauceclient import SauceClient
from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By

#Pytest fixtures are ran before each test
#Tests are prefixed with test_

SAUCE_USERNAME = os.environ.get("SAUCE_USERNAME")
SAUCE_KEY = os.environ.get("SAUCE_ACCESS_KEY")
SAUCE_URL = "http://%s:%s@ondemand.saucelabs.com/wd/hub" % (SAUCE_USERNAME, SAUCE_KEY)

sauce_client = SauceClient(SAUCE_USERNAME, SAUCE_KEY)

my_caps = {
    'browserName': 'chrome',
    'browserVersion': 'latest',
    'platformName': 'Windows 10',
    'sauce:options': {
    }
}

@pytest.fixture
def driver():
    driver = webdriver.Remote(command_executor=SAUCE_URL, desired_capabilities=my_caps)
    
    #Anything after this yield is executed after the test
    yield driver

    driver.quit()

def test_valid_credentials(driver):

    #Update Job name in Sauce
    sauce_client.jobs.update_job(driver.session_id, name="Christian's First Remote Test in Python")

    driver.get("http://the-internet.herokuapp.com/login")

    username_field = driver.find_element_by_id("username")
    username_field.send_keys("tomsmith")

    password_field = driver.find_element_by_id("password")
    password_field.send_keys("SuperSecretPassword!")

    submit_button = driver.find_element_by_css_selector("button")
    submit_button.click()

    try:
        flash_banner = WebDriverWait(driver, 1).until(EC.presence_of_element_located((By.CSS_SELECTOR, ".flash.success")))
        sauce_client.jobs.update_job(driver.session_id, passed=True)
    except:
        sauce_client.jobs.update_job(driver.session_id, passed=False)
        pytest.fail()