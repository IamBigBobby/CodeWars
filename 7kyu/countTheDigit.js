// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

let n = 11011;
let d = 2;

function nbDig(n, d) {
  let squareNumbers = '';
  let coincidence = 0;

  for (let i = 0; i <= n; i++){
    let squareNumber = i ** 2; 
    squareNumbers += squareNumber.toString();
  }

  for (let i = 0; i < squareNumbers.length; i++){
    if (squareNumbers[i] == d.toString())
    coincidence++
  }

  return coincidence;
}

console.log(nbDig(n, d));