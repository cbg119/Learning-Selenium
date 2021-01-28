describe("Basic Test", function() {
    it("With iOS Simulator", function() {
        $("~Login Screen").click()

        $("[name='username']").setValue("alice")
        $("[name='password']").setValue("mypassword")

        const LOGIN_BUTTON = $$('[name="loginBtn"]')[1]
        LOGIN_BUTTON.click()

        const VALID_LOGIN_TEXT = $("//XCUIElementTypeStaticText[contains(@name, 'You are logged in as')]")
        VALID_LOGIN_TEXT.waitForDisplayed({ timeout: 3000 })
        expect(VALID_LOGIN_TEXT).toHaveTextContaining("alice")
    })
})