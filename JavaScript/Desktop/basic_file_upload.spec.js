const FILE_PATH = "/Users/christianbagdon/Downloads/"
const FILE = "ios_sauce_labs.zip"

describe("File upload", function() {
    it("Test - Desktop", function() {
        browser.url("/upload")

        $("#file-upload").setValue(FILE_PATH + FILE)
        $("#file-submit").click()

        expect($("#uploaded-files")).toHaveTextContaining(FILE)
    })
})