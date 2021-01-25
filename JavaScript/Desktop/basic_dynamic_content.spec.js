describe("Load Dynamic Content", function() {
    it("Hidden", function() {
        browser.set_sauce_title("Load Dynamic Content - Hidden")
        browser.url("/dynamic_loading/1")

        const start_button = $("div#start button")
        start_button.click()

        const finish_text = $("div#finish h4")
        finish_text.waitForDisplayed({ timeout: 6000 })

        expect(finish_text).toBeDisplayed()
    })
})