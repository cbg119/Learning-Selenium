const { Builder } = require("selenium-webdriver")
const assert = require("assert")
const DynamicLoadingPage = require("../pages/DynamicLoadingPage")

describe("Dynamic Loading", function() {
    this.timeout(30000)
    let dynamicPage
    let driver

    beforeEach(async function() {
        driver = await new Builder().forBrowser("chrome").build()
        dynamicPage = new DynamicLoadingPage(driver)
    })

    afterEach(async function() {
        await driver.quit()
    })

    it("hidden element", async function() {
        await dynamicPage.loadExample("1")
        assert(await dynamicPage.finishTextPresent(), "Finish text not displayed")
    })

    it("rendered element", async function() {
        await dynamicPage.loadExample("2")
        assert(await dynamicPage.finishTextPresent(), "Finish text no displayed")
    })
})