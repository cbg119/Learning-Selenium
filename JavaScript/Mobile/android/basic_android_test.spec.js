describe("Basic Appium Test", function() {
    it("Basic Android", function() {
        $("~test-Username").setValue("standard_user")
        $("~test-Password").setValue("secret_sauce")
        $("~test-Login").click()

        browser.pause(5000)
    })
})