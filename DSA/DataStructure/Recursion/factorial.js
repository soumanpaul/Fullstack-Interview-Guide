
const factorialize = number => {
	let product = 1;
	for (let i = 2; i <= number; i++) {
	  product *= i;
	}
	return product;
};

const factorial = number => {
	return number < 2 ? 1 : number * factorial(number - 1);
};


mocha.setup("bdd");
const { assert } = chai;

describe("Factorial", () => {
  it("Should implement factorial", () => {
    assert.equal(factorial(0), 1);
    assert.equal(factorial(1), 1);
    assert.equal(factorial(2), 2);
    assert.equal(factorial(3), 6);
    assert.equal(factorial(4), 24);
    assert.equal(factorial(5), factorialize(5));
  });
});

mocha.run();