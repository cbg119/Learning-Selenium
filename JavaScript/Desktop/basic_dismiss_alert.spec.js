describe("Dismiss", function() {
    it("alert", function() {
        browser.set_sauce_title("Dismiss Alert - Regular Alert")
        browser.url("/javascript_alerts")

        //Trigger alert
        const regular_alert_button = $("ul").$$("li")[0].$("button")
        regular_alert_button.click()
        
        browser.pause(1000)
        expect(browser.isAlertOpen()).toBeTruthy()

        //Dismiss
        browser.dismissAlert()
        browser.pause(1000)

        expect(browser.isAlertOpen()).toBeFalsy()
    })
})