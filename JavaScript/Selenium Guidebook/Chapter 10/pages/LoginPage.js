const BasePage = require("./BasePage")

const USERNAME_FIELD = { id: "username" };
const PASSWORD_FIELD = { id: "password" };
const SUBMIT_BUTTON = { css: "button" };
const SUCCESS_BANNER = { css: ".flash.success" };
const FAIL_BANNER = { css: ".flash.error" };
const LOGIN_FORM = { id: "login" }

class LoginPage extends BasePage {
    constructor(driver) {
        super(driver)
    }

    async load() {
        await this.visit("https://the-internet.herokuapp.com/login")
        if (await !this.isDisplayed(LOGIN_FORM))
            throw new Error("Page not loaded!")
    }

    async authenticate(username, password) {
        await this.type(USERNAME_FIELD, username)
        await this.type(PASSWORD_FIELD, password)
        await this.click(SUBMIT_BUTTON)
    }

    successDisplayed() {
        return this.isDisplayed(SUCCESS_BANNER)
    }

    failureDisplayed() {
        return this.isDisplayed(FAIL_BANNER)
    }
}

module.exports = LoginPage