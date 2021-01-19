const DriverFactory = require("../lib/DriverFactory")
const config = require("../lib/config")

const driverFactory = new DriverFactory(config)

beforeEach(async function() {
    const jobName = this.currentTest.fullTitle()

    await driverFactory.build(jobName)
    this.driver = driverFactory.driver


})

afterEach(async function() {
    const testPassed = this.currentTest.state == "passed"
    await driverFactory.quit(testPassed)
})