
let a = {
    "p1": "p1a",
    "p2": [
        "a",
        "b",
        "c"
    ],
    "p3": true,
    "p5": null,
    "p6": {
        "p61": "p61a",
        "p62": "p62a",
        "p63": [
            "aa",
            "bb",
            "cc"
        ],
        "p64": {
            "p641": "p641a"
        }
    }
};

let b = {
    "p1": "p1b",
    "p2": [
        "d",
        "e",
        "f"
    ],
    "p3": false,
    "p4": true,
    "p6": {
        "p61": "p61b",
        "p64": {
            "p642": "p642b"
        }
    }
};
let c = {
    "p1": "p1c",
    "p3": null,
    "p6": {
        "p62": "p62c",
        "p64": {
            "p643": "p641c"
        }
    }
};

var obj2 = { animal: 'dog', car: 'Tesla'  }
var obj1 = { food: 'pizza', car: 'ford' }

// 1
let merged = {...obj1, ...obj2};

console.log(merged);

// 2
Object.assign(obj1,obj2);
console.log(obj1);

// 3
for(var attributes in obj1){
	obj2[attributes] = obj1[attributes];
}
console.log(obj2);

// 4

function merge_options(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    return obj3;
}

function nNumberOfMerges(){
	var dst = {}
	var src, p, args = [].slice.call(arguments, 0);
	
	console.log(args);
	

}

console.log(nNumberOfMerges(a,b,c));	




