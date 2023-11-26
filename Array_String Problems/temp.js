//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function printArray(arr) {
    let s = "";
    for (let i of arr) {
        s = s + i + " ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.constructLowerArray(arr, n);
        printArray(res);

    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]}
 */

class Solution {
    constructLowerArray(arr, n) {
        //code here
				let ans = []
				
    }
}


class Solution {
   constructLowerArray(arr, n) {
       let ans = []
       let x = n-2
       let sorted_arr = [];
       sorted_arr.push(arr[n-1]);
       ans[n-1] = 0
       for(let i=n-2; i>=0; i--){
           let idx = dfs(sorted_arr, arr[i], 0, sorted_arr.length-1);
           sorted_arr.splice(idx, 0, arr[i]);
           ans[x] = idx;
           x--;
       }
       return ans
   }
}

function dfs(arr, key, l, h){
   if(l<=h){
       let mid = Math.floor((l+h)/2);
       if(arr[mid] >= key){
           return dfs(arr, key, l, mid-1)
       }else{
           return dfs(arr, key, mid+1, h)
       }
   }
 return l
}

 