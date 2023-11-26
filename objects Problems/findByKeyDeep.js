const input = [{
	'title': "some title",
	'channel_id': '123we',
	'options': [{
	  'channel_id': 'abc',
	  'image': 'http://asdasd.com/all-inclusive-block-img.jpg',
	  'title': 'All-Inclusive',
	  'options': [{
		'channel_id': 'dsa2',
		'title': 'Some Recommends',
		'options': [{
		  'image': 'http://www.asdasd.com',
		  'title': 'Sandals',
		  'id': '1',
		  'content': {}
		}]
	  }]
	}]
}];
const items = [
    {
        id: 1,
        imageUrl: "http://placehold.it/65x65",
        display: "Shop Women",
        link: "#",
        type: "image",
        nextItems: [
            {
                id: 10,
                display: "홈",
                link: "#",
                type: "menuitem"
            },
            {
                id: 20,
                display: "의류",
                link: "#",
                type: "menuitem-withmore",
                nextItems: [
                    {
                        id: 100,
                        display: "I'm inside one nest",
                        link: "#",
                        type: "menuitem"
                    }
                ]
            },
            {
                id: 30,
                display: "가방",
                link: "#",
                type: "menuitem-withmore",
                nextItems: []
            },
            {
                id: 40,
                display: "신발",
                link: "#",
                type: "menuitem-withmore",
                nextItems: []
            },
            {
                id: 50,
                display: "악세서리",
                link: "#",
                type: "menuitem-withmore",
                nextItems: []
            },
            {
                id: 60,
                display: "SALE",
                link: "#",
                type: "menuitem-withmore",
                style: "bold",
                nextItems: []
            },
            {
                id: 70,
                display: "브랜드",
                link: "#",
                type: "menuitem-withmore",
                nextItems: []
            },
            {
                type: "separator"
            },
            {
                id: 80,
                display: "위시리스트",
                link: "#",
                type: "menuitem"
            },
            {
                id: 90,
                display: "고객센터",
                link: "#",
                type: "menuitem"
            },
            {
                id: 99,
                display: "앱 다운로드",
                link: "#",
                type: "menuitem"
            }
        ]
    },
    {
        id: 2,
        imageUrl: "http://placehold.it/65x65",
        display: "Shop Men",
        link: "#",
        type: "image",
        nextItems: [
            {
                id: 95,
                display: "MEN's ITEMS.",
                link: "#",
                type: "menuitem"
            }
        ]
    }
];

function findNestedObj (obj, key, value) {
	try {
	  JSON.stringify(obj, (_, nestedValue) => {
		if (nestedValue && nestedValue[key] === value) throw nestedValue
		return nestedValue
	  })
	} catch (result) {
	  return result
	}
  }
  const item = findNestedObj(items, 'id', 95)
  console.log('result:', item)



console.log(findNestedObjJSON(input, 'id', '1'));

function findNestedObjJSON(entireObj, keyToFind, valToFind) {
	let foundObj;
	JSON.stringify(entireObj, (_, nestedValue) => {
	  if (nestedValue && nestedValue[keyToFind] === valToFind) {
		foundObj = nestedValue;
	  }
	  return nestedValue;
	});
	return foundObj;
};

function getObject(theObject){
	var result = null;
	if(theObject instanceof Array){
		for(var i = 0; i < theObject.length; i++){
			result = getObject(theObject[i]);
			if(result){
				break;
			}
		}
	}
	else {
		for(var prop in theObject) {
			if(prop == 'id'){
				if(theObject[prop] == 1){
					return theObject;
				}
			}
			if(theObject[prop] instanceof Object || theObject[prop] instanceof Array){
				result = getObject(theObject[prop]);
				if(result){
					break;
				}
			}	
		}
	}
	return result;
}

console.log(getObject(input, 'id', '1'));

// Two lines of code
if( JSON.stringify(input).indexOf("id") > -1 ) {
    console.log("Key Found");
}
else{
    console.log("Key not Found");
}


// 
const findByKey = (obj, kee) => {
    if (kee in obj) return obj[kee];
    for(n of Object.values(obj).filter(Boolean).filter(v => typeof v === 'object')) {
        let found = findByKey(n, kee)
        if (found) return found
    }
}

const findByProperty = (obj, predicate) => {
    if (predicate(obj)) return obj
    for(n of Object.values(obj).filter(Boolean).filter(v => typeof v === 'object')) {
        let found = findByProperty(n, predicate)
        if (found) return found
    }
}

let findByValue = (o, val) => {
    if (o === val) return o;
    if (o === NaN || o === Infinity || !o || typeof o !== 'object') return;
    if (Object.values(o).includes(val)) return o;
    for (n of Object.values(o)) {
        const found = findByValue(n, val)
        if (found) return n
    }
}

const arry = [{ foo: 0 }, null, { bar: [{ baz: { nutherKey: undefined, needle: "gotcha!" } }]}]
const obj = { alice: Infinity, bob: NaN, charlie: "string", david: true, ebert: arry }

console.log( findByKey(obj, 'needle'))
// 'gotcha!'

console.log(findByProperty(obj, val => val.needle === 'gotcha!'))
// { nutherKey: undefined, needle: "gotcha!" }

console.log(findByValue(obj, 'gotcha!'))
// { nutherKey: undefined, needle: "gotcha!" }

// Get First element
function customFilter(object){
    if(object.hasOwnProperty('id') && object["id"] == 1)
        return object;

    for(var i=0; i<Object.keys(object).length; i++){
        if(typeof object[Object.keys(object)[i]] == "object"){
            var o = customFilter(object[Object.keys(object)[i]]);
            if(o != null)
                return o;
        }
    }

    return null;
}

// Get all elements in the collection
function customFilter(object, result){
    if(object.hasOwnProperty('id') && object.id == 1)
        result.push(object);

    for(var i=0; i<Object.keys(object).length; i++){
        if(typeof object[Object.keys(object)[i]] == "object"){
            customFilter(object[Object.keys(object)[i]], result);
        }
    }
}


function deepSearchByKey(data, originalKey, matches = []){

	if(data != null){
		if(Array.isArray(data)){
			for(let arrayItem of data) {
				deepSearchByKey(arrayItem, originalKey, matches);
			}
		} else if(typeof data == 'object'){
			for(let key of Object.keys(object)){
				if(key == originalKey) {
					matches.push(key);
				} else {
					deepSearchByKey(data[key], originalKey, matches)
				}
			}
		}
	}
	return matches;
}

let result = deepSearchByKey(arrayOrObject, 'key');
// returns an array with the objects containing the key

// Some method
const findChild = (array, id) => {
	let result;
	array.some(
	  (child) =>
		(child.id === id && (result = child)) ||
		(result = findChild(child.options || [], id))
	);
	return result;
  };
  
findNode(array, 1)

// 
function _find(collection, key, value) {
	for (const o of collection) {
	  for (const [k, v] of Object.entries(o)) {
		if (k === key && v === value) {
		  return o
		}
		if (Array.isArray(v)) {
		  const _o = _find(v, key, value)
		  if (_o) {
			return _o
		  }
		}
	  }
	}
  }
  
  console.log(_find(data, 'channel_id', 'dsa2'))

// 
  function  deepSearch (object, key, predicate) {
	if (object.hasOwnProperty(key) && predicate(key, object[key]) === true) return object
  
	for (let i = 0; i < Object.keys(object).length; i++) {
	  const nextObject = object[Object.keys(object)[i]];
	  if (nextObject && typeof nextObject === "object") {
		let o = deepSearch(nextObject, key, predicate)
		if (o != null) return o
	  }
	}
	return null
  }