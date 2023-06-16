// The blocksize is a by a and a ≥ 1.

// What is the perimeter of the nth shape in the sequence (n ≥ 1) ?

let a = 1;
let n = 3;

function perimeterSequence(a,n) {
  return n * 4 * a;
}

console.log(perimeterSequence(a, n));