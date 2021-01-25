describe("Basic Auth", function() {
    it("Using URL", function() {
        //Unfortunately there is no way to individually access the user and pass fields
        //in an alert, so we must include the details in a url
        browser.url("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        browser.set_sauce_title("Basic HTTP Auth")

        expect($("div.example p")).toBeDisplayed()
        expect($("div.example p")).toHaveTextContaining("Congratulations!")
    })
})