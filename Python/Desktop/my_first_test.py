#Goes to google, searches "Sauce Labs", goes to the first result.

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def my_first_test():
    driver = webdriver.Safari()
    driver.get("https://google.com")
    
    search_bar = driver.find_element_by_name("q")
    search_bar.send_keys("Sauce Labs")
    search_bar.send_keys(Keys.ENTER)
    
    sauce_link = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, "h3")))
    sauce_link.click()
    driver.quit()


if __name__ == "__main__":
    my_first_test()