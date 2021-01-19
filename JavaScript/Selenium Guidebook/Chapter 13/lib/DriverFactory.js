const { Builder } = require("selenium-webdriver")

class DriverFactory {
    constructor(config) {
        this.config = config
    }

    _configure() {
        let builder = new Builder()

        switch (this.config.host) {
            case "saucelabs":
                const url = "https://ondemand.saucelabs.com/wd/hub"
                builder.usingServer(url)
                builder.withCapabilities(this.config.sauce)
                break

            case "localhost":
                builder.forBrowser(this.config.browser)
                break
        }
        return builder
    }

    async build(jobName) {
        if (this.config.host == "saucelabs")
            this.jobName = jobName
        this.driver = await this._configure().build()

        const { id_ } = this.driver.getSession()
        this.id = id_
    }

    async quit(jobResult) {
        if (this.config.host == "saucelabs")
        {
            this.driver.executeScript("sauce:job-name=" + this.jobName)
            this.driver.executeScript("sauce:job-result=" + jobResult)

            if (!jobResult) {
                console.log("See a video of the run at https://app.saucelabs.com/tests/" + this.id)
            }
        }
        await this.driver.quit()
    }
}

module.exports = DriverFactory