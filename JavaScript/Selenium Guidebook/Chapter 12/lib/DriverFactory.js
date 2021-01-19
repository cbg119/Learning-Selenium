const { Builder } = require("selenium-webdriver")
const config = require("./config")

class DriverFactory {
    async build() {
        this.driver = await new Builder().forBrowser(config.browser).build()
    }

    async quit() {
        await this.driver.quit()
    }
}

module.exports = DriverFactory