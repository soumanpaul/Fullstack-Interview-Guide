
// 1 - Access object methods

let cap = {
    firstName: "Steve",
    sayHi: function () {
        console.log("Hi from ", this.firstName);
    }
}

cap.sayHi();
let sayHiAdd = cap.sayHi;
cap.sayHiAdd();


// 2 - fix the bug
// arrow function does not have own this it takes this from lexical near scope

let cap2 = {
    firstName: "Steve",
    sayHi: function () {
        console.log("1", this.firstName);
        const iAmInner =  function() {
            console.log("2", this.firstName);
        }
        iAmInner();
    }
}

cap2.sayHi();


// Person constructor function
// A constructor function is a reusable blueprint for creating objects with a specific structure and behavior. 
// Inside a constructor function, the properties and methods of the object are defined using the this keyword.
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    
    this.fullName = function(){  console.log(this.firstName+" "+this.lastName)}
  }
  
  // Create a Person object
  const myFather = new Person("John", "Doe", 50, "blue");
  

  myFather.fullName()

//   Person Objects

const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  },
};


// Implement this -> ladder.up().up().up().down().showStep();

const ladder = {

    step: 0,

     up() {
        this.step++;
        return this
    },

    down() {
        this.step--;
        return this
    },

    showStep: function () {
        console.log(this.step);
    }
}

ladder.up().up().up().down().showStep();


// 

const array = ['foo', 'bar']
array[10] = 'baz'
console.log(array)
console.log(array.length)
array.length = 1
console.log(array)

// ['foo', 'bar', ...., 'baz']
// 11
// ['foo']

console.log( 3 + 4 + '5')
// 75

let x = 1;
function foo(){
    let x = 2
    console.log(x)
}

foo()
console.log(x);

// 
const arr = [1,2,3,4,5]
arr.splice(2,1, 'one', 'two') // first index to start, second number of item to replace, 
console.log(arr)

// 

console.log('1')
setTimeout(() => console.log('2'), 0)
console.log('3')

// 

const a = (1,2,3)
console.log(a) // 3

//  shallow copy 
const obj1 = {value:10}
const obj2 = obj1        // same object
const obj3 = {value: 10}
console.log(obj1 === obj2)
console.log(obj1 === obj3)


//  

const obj = {
    'first-name': 'conner'
}
console.log(obj[obj.first-name]) // - substruction

// 

const promise = Promise.resolve(5);
const promise2 = promise.then(value => {
    console.log(value)
    return value * 2
}) 


console.log(promise2)

promise2.then(value => {
    console.log(value * 2)
})

// 



