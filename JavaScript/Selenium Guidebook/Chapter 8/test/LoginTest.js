const { Builder } = require("selenium-webdriver")
const assert = require("assert")

const LoginPage = require("../pages/LoginPage")

describe("Test Login Functionality", function() {
    this.timeout(30000)
    let driver
    let page

    beforeEach(async function() {
        driver = await new Builder().forBrowser("safari").build()
        page = new LoginPage(driver)
        await page.load()
    })

    afterEach(async function() {
        await driver.quit()
    })

    it("with valid credentials", async function() {
        await page.authenticate("tomsmith", "SuperSecretPassword!")
        assert(await page.successDisplayed(), "Banner not found")
    })

    it("with invalid credentials", async function() {
        await page.authenticate("tomsmith", "wrong_password")
        assert(await page.failureDisplayed())
    })
})