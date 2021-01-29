/*
* browser.touchAction({}) or browser.touchAction([{}, {}, {}]) for multi actions
*/

describe("Basic Movement Theory", function() {
    it("On iOS", function() {
        //Wait for the app to load, then click the list demo
        $("~List Demo").waitForDisplayed()
        $("~List Demo").click()
    
        $("~Check out these clouds").waitForDisplayed()

        //Emulates a swipe from the Cirrus list item to the original position of Altocumulus.
        browser.touchAction([
           { action: "press", element: $("~Cirrus") },
           { action: "wait", ms: 200 },
           { action: "moveTo", element: $("~Altocumulus") },
           "release" 
        ])

        expect($("~Stratus")).toBeDisplayed()
    })
})