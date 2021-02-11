describe("Hover", function() {
    it("Test - Dekstop", function() {
        browser.url("/hovers")

        //we are not hovered over anything, should not see any text
        expect($("//h5[text()='name: user1']").isDisplayed()).toBeFalsy()

        //move cursor
        $$("//img[@src='/img/avatar-blank.jpg']")[0].moveTo()

        //should now see some sort of caption
        expect($("//h5[text()='name: user1']")).toBeDisplayed()
    })
})