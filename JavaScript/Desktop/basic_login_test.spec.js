const { Browser } = require("selenium-webdriver")

describe("Login", function() {
    it("with valid credentials", function() {
        const successBanner = $("div.flash.success")
        browser.url("/login")

        $("#username").setValue("tomsmith")
        $("#password").setValue("SuperSecretPassword!")

        $("button").click()

        expect(successBanner).toBeDisplayed()
    })
})