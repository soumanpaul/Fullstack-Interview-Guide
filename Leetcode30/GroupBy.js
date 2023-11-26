const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Alice', age: 30 }
  ];

let output = {
    '25': [
      { name: 'John', age: 25 },
      { name: 'Bob', age: 25 }
    ],
    '30': [
      { name: 'Jane', age: 30 },
      { name: 'Alice', age: 30 }
    ]
}
  
Array.prototype.groupBy = function(fn) {
    let result = {}
    for(let i=0; i <this.length; i++ ){
       if(result[fn(this[i])])
        result[fn(this[i])].push((this[i]));
       else {
           result[fn(this[i])] = []
            result[fn(this[i])].push((this[i]));
       } 
    }
    return result;
};

fn = function (n) { 
    return String(n > 5);
  }

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.groupBy(fn);

