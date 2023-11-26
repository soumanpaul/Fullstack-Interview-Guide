const reverseInt = number =>
	number.toString().split('').reverse().join('')

console.log(reverseInt(123456))



describe("Integer Reversal", () => {
	it("Should reverse numers", () => {
		assert.equal(reverseInt(123456), 654321)
	})
})
