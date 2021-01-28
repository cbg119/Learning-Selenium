describe("Appium LinkedIn - Find New Element Challenge", function() {
    it("iOS", function() {
        const ECHO_BOX_MENU_ITEM = $("~Echo Box")
        ECHO_BOX_MENU_ITEM.click()

        const TEXT_FIELD = $('//XCUIElementTypeTextField[@name="messageInput"]')
        TEXT_FIELD.waitForDisplayed({ timeout: 3000 })
        TEXT_FIELD.setValue("Hello World, from Appium!")

        const SAVE_BUTTON = $$('//XCUIElementTypeOther[@name="messageSaveBtn"]')[1]
        SAVE_BUTTON.click()

        const SAVED_TEXT = $("~savedMessage")
        SAVED_TEXT.waitForDisplayed({ timeout: 3000 })
        expect(SAVED_TEXT).toHaveText("Hello World, from Appium!")
        browser.pause(3000)
    })
})