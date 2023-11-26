
// Q1 :- Reverse a given string using JavaScript? ()

var str = "Full Stack Tutorials";
var reverse = str.split("").reverse().join("");
// recursion method
var reserse2 = (str) => {
}

console.log("Reverse : ", reverse);

//  Q 2 :- Given a string, find the length of the string without using any built-in function?



// Q 3 Find the sum of all elements/numbers of a given array?
var arr = [1, 2, 5, 10, 20];

// 1
var sum = arr.reduce((total, item) => total + item);

// 2
var sum1 = 0;
for (let i = 0; i < arr.length; i++) {
	sum += arr[i];
}
console.log("Sum : ", sum, sum1);

// Q 4 Tell output

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
	setTimeout(() => console.log(a[i]), 1000);
}



// 5






