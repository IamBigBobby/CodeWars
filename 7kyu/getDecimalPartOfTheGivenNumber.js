// Write a function that returns only the decimal part of the given number.

// You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

let n = -10.3234;

function getDecimal(n){
  if (Number.isInteger(n)){
    return 0;
  }
  else{
    let digitsString = Math.abs(n).toString().split('.')[1];
    return Number(`0.${digitsString}`);
  }
}

console.log(getDecimal(n));