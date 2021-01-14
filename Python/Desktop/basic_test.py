import pytest, time
from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By

#Pytest fixtures are ran before each test
#Tests are prefixed with test_
@pytest.fixture
def driver():
    driver = webdriver.Safari()
    
    #Anything after this yield is executed after the test
    yield driver

    driver.quit()

def test_valid_credentials(driver):
    driver.get("http://the-internet.herokuapp.com/login")

    username_field = driver.find_element_by_id("username")
    username_field.send_keys("tomsmith")

    password_field = driver.find_element_by_id("password")
    password_field.send_keys("SuperSecretPassword!")

    submit_button = driver.find_element_by_css_selector("button")
    submit_button.click()

    try:
        flash_banner = WebDriverWait(driver, 1).until(EC.presence_of_element_located((By.CSS_SELECTOR, ".flash.success")))
    except:
        pytest.fail()