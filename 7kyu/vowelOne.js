// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

let s = "123, arou";

function vowelOne(s){
  console.log(s.toLowerCase())
  let sLower = s.toLowerCase();
  let resultStirng = "";
  for (let i = 0; i < s.length; i++){
    if (sLower[i] === "a" || sLower[i] === "e" || sLower[i] === "i" || sLower[i] === "o" || sLower[i] === "u") {
      resultStirng += '1';
    }
    else{
      resultStirng += '0';
    }
  }
  return resultStirng;
}

console.log(vowelOne(s));
