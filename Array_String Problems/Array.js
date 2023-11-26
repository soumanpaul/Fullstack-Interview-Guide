class Arr {	
	constructor(...items) {
	  this.arr = new Array(...items);
	}
	sort(compareFunction) {
	  return this.arr.sort(compareFunction);
	}
	reverse() {
	  return this.arr.reverse();
	}
  
	slice(start, end) {
	  return this.arr.slice(start, end);
	}
  
	splice(start, ...params) {
	  // params = deleteCount, ...items
	  return this.arr.splice(start, ...params);
	}
  }
  
  class Str {
	constructor(str) {
	  this.str = new String(str);
	}
	
	split(separator, limit) {}
	
	replace(regex_or_substr, substr_or_function) {}
  }
  
  mocha.setup("bdd");
  const { assert } = chai;
  
  describe("Arrays", () => {
	it("Should implement sort", () => {
	  const arr = new Arr(1, 4, 3, 2, 5);
	  assert.deepEqual(arr.sort(), [1, 2, 3, 4, 5]);
	  assert.deepEqual(arr.sort((a, b) => b - a), [5, 4, 3, 2, 1]);
	  assert.deepEqual(arr.sort((a, b) => a - b), [1, 2, 3, 4, 5]);
  
	  const words = new Arr(
		{ word: "apple" },
		{ word: "orange" },
		{ word: "banana" }
	  );
	  assert.deepEqual(
		words.sort((a, b) => {
		  if (a.word < b.word) return -1;
		  if (a.word > b.word) return 1;
		  return 0;
		}),
		[{ word: "apple" }, { word: "banana" }, { word: "orange" }]
	  );
	});
  
	it("Should implement reverse", () => {
	  const arr = new Arr(1, 2, 3, 4, 5);
	  assert.deepEqual(arr.reverse(), [5, 4, 3, 2, 1]);
	});
  
	it("Should implement slice", () => {
	  const arr = new Arr(1, 2, 3, 4, 5);
	  assert.deepEqual(arr.slice(), [1, 2, 3, 4, 5]);
	  assert.deepEqual(arr.slice(1), [2, 3, 4, 5]);
	  assert.deepEqual(arr.slice(2, 4), [3, 4]);
	});
  
	it("Should implement splice", () => {
	  const arr = new Arr(1, 2, 3, 4, 5);
	  assert.deepEqual(arr.splice(2, 0, 6), []);
	  assert.deepEqual(arr.arr, [1, 2, 6, 3, 4, 5]);
	  assert.deepEqual(arr.splice(3, 1), [3]);
	  assert.deepEqual(arr.arr, [1, 2, 6, 4, 5]);
	  assert.deepEqual(arr.splice(2, 1, 3), [6]);
	  assert.deepEqual(arr.arr, [1, 2, 3, 4, 5]);
	  assert.deepEqual(arr.splice(0, 2, 6, 7, 8), [1, 2]);
	  assert.deepEqual(arr.arr, [6, 7, 8, 3, 4, 5]);
	  assert.deepEqual(arr.splice(arr.arr.length - 3, 2), [3, 4]);
	  assert.deepEqual(arr.arr, [6, 7, 8, 5]);
	  assert.deepEqual(arr.splice(-2, 1), [8]);
	  assert.deepEqual(arr.arr, [6, 7, 5]);
	  assert.deepEqual(arr.splice(1), [7, 5]);
	  assert.deepEqual(arr.arr, [6]);
	});
  });
  
  xdescribe("Strings", () => {
	it("Should implement split", () => {})
	
	it("Should implement replace", () => {})
  });
  
  mocha.run();