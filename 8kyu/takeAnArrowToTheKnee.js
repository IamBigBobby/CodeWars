// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

let arr = [84,101,115,116];

let ArrowFunc = function(arr) {
  return arr.map(element => String.fromCharCode(element)).join(''); //Complete this function
}

console.log(ArrowFunc(arr))