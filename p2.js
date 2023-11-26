

// Access object methods

const obj = {
    name: "Souman",
    getName: function () {
      return this.name;
    }
 }

 const objInstance = obj.getName

 console.log(objInstance())


//  Frequency of words

let str = "a a ab bb cc dd d cc aa ab bb"

function countFrequency(sentence) {
    let words = sentence.toLowerCase().split(' ')
    let frequency = {}
    
    for(let i = 0; i < words.length; i++){
        const word = words[i]
        word in frequency ? frequency[word]++ : frequency[word] = 1;
    }
  
  return frequency;
}

const frequency =   countFrequency(str)

for(const word in frequency) {
  console.log(`${word} : ${frequency[word]}`)
}


// Arrow function in constructor and prototype function 

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = () => {
    console.log(`Hello, my name is ${this.name}.`);
  };
}

const person1 = new Person("John", 30);
person1.greet(); // Output: Hello, my name is John.

// The greet function is defined inside the Person constructor function using an arrow function expression, assigned to the
// property this.greet. This means that each instance of the Person object created using the constructor will have its 
// own greet method. Arrow functions capture the lexical context (the value of this) from their surrounding scope 
// (the constructor function in this case).

Person.prototype.Hello = () => {
  console.log(`Say hello`, this.age, this.name);
};
person1.Hello(); // Output: Say hello undefined undefined

// The Hello function is added to the prototype of the Person constructor using an arrow function expression.
// The prototype is a shared object that all instances of Person objects inherit from. 
// Arrow functions in this context will capture the lexical this value of the surrounding scope
// (the global object in this case, or undefined in strict mode), not the instance of Person.


// Fix
Person.prototype.Hello = function() {
  console.log(`Say hello`, this.age, this.name);
};

person1.Hello(); // Output: Say hello 30 John