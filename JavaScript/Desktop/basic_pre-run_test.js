const { Builder, By } = require("selenium-webdriver")
const SCRIPT_GIST = "https://gist.githubusercontent.com/cbg119/ed878891480ede93f3f060318ee57acf/raw/abd2b2bc87a4aa17f6810f092f8d747701717bd8/say_prerun.sh"

describe("Test", function() {
    let driver
    this.timeout(30000)

    const desired_caps = {
        "browserName": "chrome",
        "browserVersion": "latest",
        "platformName": "macOS 10.15",
        "sauce:options": {
            username: process.env.SAUCE_USERNAME,
            accessKey: process.env.SAUCE_ACCESS_KEY,
            extendedDebugging: true,
            name: "Pre-run test",
            prerun: {
                executable: SCRIPT_GIST,
                background: false
            }
        }
    }

    beforeEach(async function() {
        driver = await new Builder().usingServer("https://ondemand.saucelabs.com/wd/hub").withCapabilities(desired_caps).build()
    })

    afterEach(async function() {
        await driver.quit()
    })

    it("pre-run script", async function() {
        await driver.get("http://the-internet.herokuapp.com/login")

        await driver.findElement(By.id("username")).sendKeys("tomsmith")
        await driver.findElement(By.id("password")).sendKeys("SuperSecretPassword!")
        await driver.findElement(By.css("button")).click()
    })
})