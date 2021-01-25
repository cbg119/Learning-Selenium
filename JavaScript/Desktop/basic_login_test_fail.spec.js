describe("Login", function() {
    it("with valid credentials", function() {
        const failBanner = $("div.flash.error")

        browser.set_sauce_title("Login - with invalid credentials")

        browser.url("/login")

        $("#username").setValue("tomsmith")
        $("#password").setValue("Wrong Password")

        $("button").click()

        expect(failBanner).toBeDisplayed()
    })
})