// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

let number = 9;
function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

console.log(evenOrOdd(number))