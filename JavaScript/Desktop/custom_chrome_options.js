const { Builder, By, Capabilities } = require("selenium-webdriver")

describe("Test", function() {
    let driver
    this.timeout(30000)

    const desired_caps = {
        "browserName": "chrome",
        "browserVersion": "latest",
        "platformName": "macOS 10.15",
        "goog:chromeOptions": {
            args: ["start-maximized", "disable-infobars", "ignore-gpu-blacklist", "test-type", "disable-gpu", "--lang=es"]
        },
        "sauce:options": {
            username: process.env.SAUCE_USERNAME,
            accessKey: process.env.SAUCE_ACCESS_KEY,
            extendedDebugging: true,
            name: "Custom Chrome Options",
        }
    }

    beforeEach(async function() {
        driver = await new Builder().usingServer("https://ondemand.saucelabs.com/wd/hub").withCapabilities(desired_caps).build()
    })

    afterEach(async function() {
        await driver.quit()
    })

    it("Custom Chrome Options", async function() {
        await driver.get("http://the-internet.herokuapp.com/login")

        await driver.findElement(By.id("username")).sendKeys("tomsmith")
        await driver.findElement(By.id("password")).sendKeys("SuperSecretPassword!")
        await driver.findElement(By.css("button")).click()
    })
})