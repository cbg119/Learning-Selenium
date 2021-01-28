describe("Get app XML Tree", function() {
    it("on iOS", function() {
        $("~Login Screen").click()
        browser.pause(3000)
        console.log(browser.getPageSource())
    })
})