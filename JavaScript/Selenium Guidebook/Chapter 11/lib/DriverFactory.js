const { Builder } = require("selenium-webdriver")

class DriverFactory {
    async build() {
        this.driver = await new Builder().forBrowser("chrome").build()
    }

    async quit() {
        await this.driver.quit()
    }
}

module.exports = DriverFactory