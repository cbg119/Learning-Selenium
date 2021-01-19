const assert = require("assert")
const DynamicLoadingPage = require("../pages/DynamicLoadingPage")
require("./spec_helper")

describe("Dynamic Loading", function() {
    let dynamicPage

    beforeEach(async function() {
        dynamicPage = new DynamicLoadingPage(this.driver)
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