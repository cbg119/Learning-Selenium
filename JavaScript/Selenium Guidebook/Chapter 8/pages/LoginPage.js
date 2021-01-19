const USERNAME_FIELD = { id: "username" };
const PASSWORD_FIELD = { id: "password" };
const SUBMIT_BUTTON = { css: "button" };
const SUCCESS_BANNER = { css: ".flash.success" };
const FAIL_BANNER = { css: ".flash.error" };

class LoginPage {
    constructor(driver) {
        this.driver = driver
    }
    
    async load() {
        await this.driver.get("http://the-internet.herokuapp.com/login")
    }

    async authenticate(username, password) {
        let username_field = this.driver.findElement(USERNAME_FIELD)
        await username_field.sendKeys(username)

        let password_field = this.driver.findElement(PASSWORD_FIELD)
        await password_field.sendKeys(password)

        let submit_button = this.driver.findElement(SUBMIT_BUTTON)
        await submit_button.click()
    }

    async successDisplayed() {
        return await this.driver.findElement(SUCCESS_BANNER).isDisplayed()
    }

    async failureDisplayed() {
        return await this.driver.findElement(FAIL_BANNER).isDisplayed()
    }
}

module.exports = LoginPage