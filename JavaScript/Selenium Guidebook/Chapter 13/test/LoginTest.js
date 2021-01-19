const assert = require("assert")
const LoginPage = require("../pages/LoginPage")
require("./spec_helper")

describe("Test Login Functionality", function() {
    let page

    beforeEach(async function() {
        page = new LoginPage(this.driver)
        await page.load()
    })

    it("with valid credentials", async function() {
        await page.authenticate("tomsmith", "SuperSecretPassword!")
        assert(await page.successDisplayed(), "Banner not found!")
    })

    it("with invalid credentials", async function() {
        await page.authenticate("tomsmith", "wrong_password")
        assert(await page.failureDisplayed(), "Banner not found!")
    })
})