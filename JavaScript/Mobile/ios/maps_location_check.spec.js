/*
*   This test will use Appium to set device location.
*   It will verify the device location using the Maps app.

*   To use, set the "bundleId" capability to com.apple.Maps
*/

describe("Location test", function() {
    it("With fake location", function() {
        //Dismiss What's new in maps screen if exist
        try {
            $("//XCUIElementTypeButton[@name='Continue']").waitForDisplayed({ timeout: 1000 })
            $("//XCUIElementTypeButton[@name='Continue']").click()
        } catch {};

        //Allow app to use location
        try {
            $("~Allow While Using App").click()
        } catch {};

        //Set new location. Pauses are to see map location before/after.
        browser.pause(4000)
        driver.setGeoLocation({ latitude: 32.599200, longitude: -97.051560 })
        browser.pause(4000)
    })
})