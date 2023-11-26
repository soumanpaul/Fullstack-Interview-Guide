

var map = function(arr, fn) {
    arr.forEach((item,index) => {
       arr[index] = fn(item,index);
    })
    return arr; 
 };

 function plusone(n) { return n + 1; }