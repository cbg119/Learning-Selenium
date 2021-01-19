const BasePage = require("./BasePage")

const START_BUTTON = { css: "#start button" }
const FINISH_TEXT = { id: "finish" }
const BASE_URL = "http://the-internet.herokuapp.com/dynamic_loading/"

class DynamicLoadingPage extends BasePage {
    constructor(driver) {
        super(driver)
    }

    async loadExample(exampleNumber) {
        await this.visit(BASE_URL + exampleNumber)
        await this.click(START_BUTTON)
    }

    async finishTextPresent() {
        return this.isDisplayed(FINISH_TEXT, 10000)
    }
}

module.exports = DynamicLoadingPage