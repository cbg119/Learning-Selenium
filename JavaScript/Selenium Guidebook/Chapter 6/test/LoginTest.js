const { Builder, By } = require("selenium-webdriver")
const assert = require("assert")

describe("Test Login Functionality", function() {
    this.timeout(30000)
    let driver

    beforeEach(async function() {
        driver = await new Builder().forBrowser("safari").build()
    })

    afterEach(async function() {
        await driver.quit()
    })

    it("with valid credentials", async function() {
        await driver.get("http://the-internet.herokuapp.com/login")

        let username_field = driver.findElement(By.id("username"))
        await username_field.sendKeys("tomsmith")

        let password_field = driver.findElement(By.id("password"))
        await password_field.sendKeys("SuperSecretPassword!")

        let submit_button = driver.findElement(By.css("button"))
        await submit_button.click()

        let success_banner = driver.findElement(By.css(".flash.success"))
        assert(!success_banner.isDisplayed(), "Banner not found")

    })
})