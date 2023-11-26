
# 0. Create Hello World Function

```js
var createHelloWorld = function (){
  return function(...args) {
    return "hello world"
  }
}

```
# 02 Counter problem

```js
var createCounter = function(n) {
    return function() {
        return n++;
    };
};
```

# 03 Counter 2

## Object and Closure


# Classes and Prototypes
- You can also define classes in JavaScript. The classes's constructor returns an object which is an instance of that class.
- JavaScript implements classes with special objects call prototypes. All the methods (in this case greet) are functions stored on the object's prototype.

```js
const alice = {
  name: "Alice",
  age: 25,
  __proto__: {
    greet: function() {
      console.log("My name is", this.name);
    }
  }
};
alice.greet(); // Logs: "My name is Alice"
```
- The reason is that accessing keys on an object is actually slightly more complicated than just looking at the object's keys. There is actually an algorithm that traverse the prototype chain. First, JavaScript looks at the keys on the object. If the requested key wasn't found, it then looks on the keys of the prototype object. If it still wasn't found, it looks at the prototype's prototype, and so on. This is how inheritance is implemented in JavaScript!
- You might also wonder why JavaScript has this strange prototype concept at all. Why not just store the functions on the object itself? The answer is efficiency. Every time a new Person is created, age and name fields are added to the object. However only a single reference to the prototype object is added. So no matter how many instances of Person are created or how many methods are on the class, only a single prototype object is generated.

```js
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let value = init;    
    
    return {
        increment : () => ++value,
        reset : () => value = init,
        decrement : () => --value
      }
  
};
```

# 04 Apply Transform Over Each Element in Array
<!-- Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4] -->
```js
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function(arr, fn) {
    let newArray = new Array(arr.length) 
    //  const newArr = new Int32Array(arr.length); Bit Integer Array

   for(let i=0; i< arr.length; i++){
      newArray[i] = fn(arr[i],i)
   }
   return newArray; 
};

function plusone(n) { return n + 1; }
```

# 05 Filter Elements from Array
- 

```js
// 1. Push Values onto New Array
var filter = function(arr, fn) {
    let newArr = []  //  
   for(let i=0; i<arr.length; i++) {
        if(fn(arr[i],i))
            newArr.push(arr[i])
    }
    return newArr;
};

// 2. for...in
var filter = function(arr, fn) {
    const newArr = [];
    for (const stringIndex in arr) {
        const i = Number(stringIndex);
        if (fn(arr[i], i)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};
// 3. Preallocate Memory
var filter = function(arr, fn) {
    let size = 0;
    const newArr = new Array(arr.length);
    for (let i = 0; i < arr.length; ++i) {
        if (fn(arr[i], i)) {
            newArr[size] = arr[i];
            size++;
        }
    }
    // Ensure new array is of length size
    while (newArr.length > size) {
        newArr.pop();
    }
    return newArr
};

// 4. Perform Operations In-Place
var filter = function(arr, fn) {
    let size = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (fn(arr[i], i)) {
            arr[size] = arr[i];
            size++;
        }
    }
    // Ensure array is of length size
    while (arr.length > size) {
        arr.pop();
    }
    return arr
};
```

# 06 Array Reduce Transformation
- Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
<!-- filter - map - reducer -->
```js

var reduce = function(nums, fn, init) {
    let accumulator=init;
    for(let i=0; i <nums.length; i++){
        accumulator= fn(accumulator,nums[i])
    }
    return accumulator;
};

// for....in loop through index
var reduce = function(arr, fn, initialVal) {
  let accumulator = initialVal;
  for (const index in arr) {
    accumulator = fn(accumulator, arr[index]);
  } 
  return accumulator;
};

// for...of   loop through item
var reduce = function(arr, fn, initialVal) {
  let accumulator = initialVal;
  for (const element of arr) {
      accumulator = fn(accumulator, element);
  }
  return accumulator;
};

const groceries = [
  { id: 173, name: "Soup" }, 
  { id: 964, name: "Apple" },
  { id: 535, name: "Cheese" }
];

/** With filter and map */
var names = groceries
  .filter(item => item.id > 500)
  .map(item => item.name)

/** With reduce */
var names = groceries.reduce((accumulator, val) => {
  if (val.id > 500) {
    accumulator.push(val.name);
  }
  return accumulator;
}, []);

console.log(names); // ["Apple", "Cheese"]
```

# 07 Function Composition

- Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

```js
var compose = function(functions) {
	return function(x) {
       let input = x;
       for(let i=functions.length-1; i >=0; i--){
           input = functions[i](input);
       }
       return input;
    }
};

var compose = function(functions) {
	return (x) => functions.reduceRight((ace, fn) =>  fn(ace), x)
};


let functions = [x => x + 1, x => x * x, x => 2 * x], x = 4

const obj = {
  value: 1,
  increment: function() { this.value++; return this.value; },
  double: function() { this.value *= 2; return this.value; },
};

// Composing the methods while preserving `this`
const goodCompose = function(functions, context) {
  return function(x) {
    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i].call(context, result);           // binding
    }
    return result;
  };
};

const goodComposedFn = goodCompose([obj.increment, obj.double], obj);
console.log(goodComposedFn(1));  // This works as expected, because `this` is `obj` inside `increment` and `double`
```

# 08  Allow One Function Call
- Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

- This question asks you to write a function that modifies a function such that it can only be called once. This is an example of a higher-order function.

```js
var once = function(fn) {
    let hasBeenCalled = false
    return function(...args){
        if(!hasBeenCalled){
            hasBeenCalled = true
           return fn.apply(this,args)
        }
    }
};


const Person = function(name) {
  this.name = name;
}

Person.prototype.getName = once(function() {
  return this.name;
});

const alice = new Person('Alice');
alice.getName(); // Expected Output: "Alice"


```

# 09  Memoize
- Given a function fn, return a memoized version of that function.

```js
// Approach 1: Rest/Spread Syntax + JSON.stringify()
function memoize(fn) {
    const cache = {};
    return function(...args) {
        let key = JSON.stringify(args)
        if(key in cache) return cache[key];

        const functionOutput = fn(...args)
        cache[key] = functionOutput
        return functionOutput;
    }
}

// Approach 2: : Optimize Based on Numeric Constraints + Function.apply
function memoize(fn) {
  const cache = new Map();
  return function() {
    let key = arguments[0];
    if (arguments[1]) {
      key += arguments[1] * 100001;
    }
    const result = cache.get(key);
    if (result !== undefined) {
      return result;
    }
    const functionOutput = fn.apply(null, arguments);
    cache.set(key, functionOutput);
    return functionOutput;
  }
}
// Approach 4: One Liner
var memoize = (fn, cache = {}) => (...args) => cache[args.join()] ?? (cache[args.join()] = fn(...args)) 

```

# 09 Curry
- Given a function fn, return a curried version of that function.
- A curried function is a function that accepts fewer or an equal number of parameters as the original function and returns either another curried function or the same value the original function would have returned.
- Currying is a powerful technique in functional programming that transforms a function with multiple arguments into a sequence of functions.

- Inside curried, a check is performed to see if the accumulated arguments are sufficient. If the number of arguments passed (args.length) is greater than or equal to the original function's arity (fn.length), then all required arguments have been provided. This is our base case.
- If the sufficient arguments check passes, invoke fn with the spread syntax (...args) to pass all the collected arguments, and return the result.
- If the number of arguments passed is not sufficient, then return an anonymous function that also uses the rest parameter syntax (...nextArgs). This allows for further accumulation of arguments.
- When the anonymous function is called, it invokes curried again with the accumulated arguments from both args and nextArgs. This ensures that the arguments are passed in the correct order and merged together.
- The process of accumulating arguments and invoking curried continues until the necessary number of arguments is met. This enables the flexibility to apply arguments in any combination of calls.

```js
var curry = function(fn) {
    return function curried(...args) {
        if(args.length >= fn.length)
            return fn(...args)
        return (...nextArgs) => curried(...args, ...nextArgs);    
    };
};

// If the number of arguments passed is not sufficient, then return a new function created with the bind method. This allows for further accumulation of arguments while preserving the this context. The bind method creates a new function similar to the function we were returning in Approach 1. It's essentially equivalent to (...nextArgs) => curried.apply(this, args).

var curry = function(fn) {
    return function curried(...args) {
        console.log(args, fn.length)
        if(args.length >= fn.length)
            return fn.apply(this,args)
        return curried.bind(this,...args);    
    };
};
```

# 10 


# 09  Memoize II
- A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.




<!-- throttled -->
### 1. Given a function fn and a time in milliseconds t, return a throttled version of that function.


```js
var throttle = function(fn, t) {
  let timeoutInProgress = null;
  let argsToProcess = null;
  
  const timeoutFunction = () => {
    if (argsToProcess === null) {
      timeoutInProgress = null; // enter the waiting phase
    } else {
      fn(...argsToProcess);
      argsToProcess = null;
      timeoutInProgress = setTimeout(timeoutFunction, t);
    }
  };

  return function (...args) {
    if (timeoutInProgress) {
      argsToProcess = args;
    } else {
      fn(...args); // enter the looping phase
      timeoutInProgress = setTimeout(timeoutFunction, t);
    }
  }
};
```

```js
var throttle = function(fn, t) {
    let timeoutId = null, restTime = 0;
    return function(...args) {
        const currentTime = Date.now();
        const delay = Math.max(0, restTime - currentTime);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => { 
            fn(...args);
            restTime = Date.now() + t;
        }, delay);
    }
};
```

```js
var throttle = function(fn, t) {
  let intervalInProgress = null;
  let argsToProcess = null;
  
  const intervalFunction = () => {
    if (argsToProcess === null) {
      clearInterval(intervalInProgress);
      intervalInProgress = null; // enter the waiting phase
    } else {
      fn(...argsToProcess);
      argsToProcess = null;
    }
  };

  return function throttled(...args) {
    if (intervalInProgress) {
      argsToProcess = args;
    } else {
      fn(...args); // enter the looping phase
      intervalInProgress = setInterval(intervalFunction, t);
    }
  }
};
```

- In the below code, the existence of timeoutInProgress represents if the code in the looping state or not. If the code is in the looping state, argsToProcess is just set to the most recent args. If the code is in the waiting state, fn is immediately called and a recursive loop is created.

- Inside this recursive loop, it first check if there were any function calls since the last time the loop was executed. If the answer is there were none, the code goes back to the waiting state. Otherwise, fn is executed with the last known arguments, argsToProcess is set to null, and timeoutFunction is recursively called with a delay.





![](https://assets.leetcode.com/uploads/2023/04/08/screen-shot-2023-04-08-at-120313-pm.png)


<!-- debounced -->
#### 2. Given a function fn and a time in milliseconds t, return a debounced version of that function

```js
var debounce = function(fn, t) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() =>{
            fn(...args)
        }, t)
    }
};


var debounce = function(fn, t) {
  let interval;
  return function(...args) {
    const lastCall = Date.now()
    clearInterval(interval);
    interval = setInterval(() => {
      if (Date.now() - lastCall >= t) {
        fn(...args);
        clearInterval(interval);
      }
    }, 1);
  }
};

const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms
``` 


![](https://assets.leetcode.com/uploads/2023/04/08/screen-shot-2023-04-08-at-11048-pm.png)


### 3. Check if Object Instance of Class


```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

const alice = new Person("Alice");
console.log(alice);  // Output: {name: 'Alice'}
alice.sayHello(); // Output: "Hello, my name is Alice"
```

```js
var checkIfInstanceOf = function(obj, classFunction) {
    if(obj == null || classFunction == null) return false;

    let currproto = Object.getPrototypeOf(obj);                   // all properties and methods accessible by obj
    
    while(currproto !== null){
        if(currproto === classFunction.prototype) return true;
        currproto = Object.getPrototypeOf(currproto)
    }
    return false;
};

```

<!-- Generator Solutions -->

```js
function* prototypeGenerator(obj) {
  let currPrototype = Object.getPrototypeOf(obj);
  while (currPrototype !== null) {
    yield currPrototype;
    currPrototype = Object.getPrototypeOf(currPrototype);
  }
}

var checkIfInstanceOf = function (obj, classFunction) {
  if (obj === null || obj === undefined || typeof classFunction !== "function")
    return false;

  for (const prototype of prototypeGenerator(obj)) {
    if (prototype === classFunction.prototype) return true;
  }

  return false;
};
```

### 4. Call Function with Custom Context

- When used with the new keyword, this function is called with a newly created object as its this context, and assigns the provided name and age to this new object's properties.
- We then add a method greet() to Person.prototype. This method can be accessed by instances of Person, as shown when we call cosmic.greet().

```js
function Person(name, age) {
this.name = name;
this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

const cosmic = new Person('CosmicPhantom', 20);
cosmic.greet(); // Output: "Hello, my name is CosmicPhantom and I'm 20 years old."

```

- The Function.prototype object, specifically, is the prototype for all function objects in JavaScript. Since functions are also objects in JavaScript, they have properties and methods accessible through their prototype
- In the case of the problem at hand, we add the callPolyfill method to Function.prototype so that it becomes accessible to all functions.


```js

let increment = function () {
  this.count++;
  return this.count;
}
Function.prototype.callPolyfill = function(context, ...args) {
  console.log(context.count)
}
increment.callPolyfill({count: 1});

```


# Function Context Binding:
- 