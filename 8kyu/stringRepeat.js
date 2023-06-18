// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

let n = 3;
let s = "abc";

function repeatStr (n, s) {
  return s.repeat(n);
}

console.log(repeatStr(n, s));