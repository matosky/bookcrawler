const addFunction = require("../src/routes/ttt");
describe("Sum of two items", () => {
    test("should equal 4", async () => {
        expect(addFunction(2, 2)).toBe(4)
    })
})


