let items = { 'b' : 'asdsad', 'c' : 'masdas', 'a' : 'dsfdsfsdf' }

let newobj = Object.keys(items).sort().reduce((obj, key)=> {
	obj[key] = items[key];
	return obj
},{})

console.log(newobj)


function sortObject(unordered, sortArrays = false) {
	if (!unordered || typeof unordered !== 'object') {
	  return unordered;
	}
  
	if (Array.isArray(unordered)) {
	  const newArr = unordered.map((item) => sortObject(item, sortArrays));
	  if (sortArrays) {
		newArr.sort();
	  }
	  return newArr;
	}
  
	const ordered = {};
	Object.keys(unordered)
	  .sort()
	  .forEach((key) => {
		ordered[key] = sortObject(unordered[key], sortArrays);
	  });
	return ordered;
  }
  
  const json = {
	b: 5,
	a: [2, 1],
	d: {
	  b: undefined,
	  a: null,
	  c: false,
	  d: true,
	  g: '1',
	  f: [],
	  h: {},
	  i: 1n,
	  j: () => {},
	  k: Symbol('a')
	},
	c: [
	  {
		b: 1,
		a: 1
	  }
	]
  };
  console.log(sortObject(json, true));

// 

const obj = {z: 'three', a: 'one', b: 'two'};

// 👇️ ['a', 'b', 'z']
console.log(Object.keys(obj).sort());

const sorted = Object.keys(obj)
  .sort()
  .reduce((accumulator, key) => {
    accumulator[key] = obj[key];

    return accumulator;
  }, {});

console.log(sorted); // 👉️ {a: 'one', b: 'two', z: 'three'}
