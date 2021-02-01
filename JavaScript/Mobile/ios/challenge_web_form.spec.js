//This is for the challenge in https://www.linkedin.com/learning/mobile-testing-with-appium/challenge-automate-a-web-form?u=2198273

describe("Testing Appium Pro Contact Form", function() {
    it("with bad captcha", function() {
        browser.url("https://appiumpro.com/")

        //Hamburger menu
        $("#toggleMenu").click()

        //Menu "Contact" link
        $("//a[@href='/contact']").click()

        //Wait for page load
        $("#contactEmail").waitForDisplayed()
        $("#contactEmail").setValue("cbagdon119@gmail.com")

        $("#contactText").setValue("Hello! This is in regards to my LinkedIn Learning course.")

        //Send button
        $("//input[@value='Send']").click()

        const errorText = $("//div[contains(@class, 'response')]")
        errorText.waitForDisplayed()

        expect(errorText).toHaveTextContaining("Captcha")
    })
})