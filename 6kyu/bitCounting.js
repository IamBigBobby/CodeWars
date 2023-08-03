// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

let n = 1234;

function countBits(n) {
  let count = 0;
  let binary = n.toString(2);

  for (let i = 0; i < binary.length; i++){
    if (binary[i] === '1'){
      count++;
    }
  }
  
  return count;
};

console.log(countBits(n));