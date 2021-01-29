describe("Basic Mobile Web Test", function() {
    it("on iOS", function() {
        browser.url("http://the-internet.herokuapp.com/login")

        $("#username").setValue("tomsmith")
        $("#password").setValue("SuperSecretPassword!")
        $("button").click()

        try { $(".flash.success").waitForDisplayed({ timeout: 1000 }) } catch {};
        expect($(".flash.success")).toBeDisplayed()
    })
})