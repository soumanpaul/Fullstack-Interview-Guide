
const isPalindrom = str => 
	str.split('').every((char, index) => 
		char === str[str.length - index-1]
	)


console.log(isPalindrom("aaaaa"))

// describe("Palindrom", () => {
// 	it("Should return true", () => {
// 		assert.equal(isPalindrom("Souman"), true)
// 	})
// 	it("Should return false", () => {
// 		assert.equal(isPalindrom("Souman"), false)
// 	})
// })