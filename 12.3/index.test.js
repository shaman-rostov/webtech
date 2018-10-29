const should = require("should")
const chai = require("chai")
const index = require("../src/index")

describe("Test index", function() {
    it("object", function() {
        index.table.should.have.property("leg",4)
    })
    it("function", function() {
        index.fib.assert.equal(fib(8),21)

    })
    it("class", function() {
    index.CL.expect (CL.add(1,4)).to.equal(5);
    })
})