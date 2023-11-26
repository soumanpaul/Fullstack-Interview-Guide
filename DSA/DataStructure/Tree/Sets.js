function mySet() {
  var collection = [];

  // check the presence or an element and return true or false
  this.has = function(element) {
    return collection.indexOf(element) !== -1;
  };

  // return all the values in the set
  this.values = function() {
    return collection;
  };

  // will add an element to the set
  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // will remove an element from a set
  this.remove = function(element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  // will return the union of two sets
  this.union = function(otherSet) {
    var unionSet = new this.Set();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach(function(e) {
      unionSet.add(e);
    });
    secondSet.forEach(function(e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  // return intersection of two sets as a new set
  this.intersection = function(otherSet) {
    var intersectionSet = new this.Set();
    var firstSet = this.values();
    firstSet.forEach(function(e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  // this method will return the different of two sets as a new set
  this.difference = function(otherSet) {
    var differenceSet = new Set();
    var firstSet = this.valuse();
    firstSet.forEach(function(e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  // subset
  this.subset = function(otherSet) {
    var firstSet = this.values();
    return firstSet.every(function(value) {
      return otherSet.has(value);
    });
  };
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values());
setD.delete("a");

const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// expected output: true

console.log(set1.has(5));
// expected output: true

console.log(set1.has(6));
// expected output: false



// // An empty set is created by using the operator new and Set( ) constructor:

// const list = new Set();

// // add values

// list.add(1);
// list
//   .add(2)
//   .add(3)
//   .add(4); // adding mutiple values

// // Adding multiple values using an array

// const numbers = new Set([1, 2, 3]);

// //Using Strings as arguments
// const letters = new Set("Souman");
// letters;

// // words
// const words = new Set()
//   .add("the")
//   .add("fellow")
//   .add("students");
// words;

// // arrays
// const arrays = new Set().add([1]).add([1]);
// arrays;

// // size
// words.size();

// // value cheack
// words.has("fellow");

// words.delete("fellow");

// // clear all
// words.clear();

// //Converting Sets using spread operator
// const shoppingSet = new Set()
//   .add("Apples")
//   .add("Bananas")
//   .add("Beans");
// shoppingSet;

// // set to array
// const shoppingArray = [...shoppingSet];

// // conver it can be Array.from ( )
// const shoppingArray1 = Array.from(shoppingSet);

// // non duplicate array
// const nonduplicate = [...new Set(repeatedArray)];
