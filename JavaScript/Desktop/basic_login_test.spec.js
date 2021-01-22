describe("Login", function() {
    it("with valid credentials", function() {
        const successBanner = $("div.flash.success")

        browser.set_sauce_title("Login - with valid credentials")

        browser.url("/login")

        $("#username").setValue("tomsmith")
        $("#password").setValue("SuperSecretPassword!")

        $("button").click()

        expect(successBanner).toBeDisplayed()
    })
})