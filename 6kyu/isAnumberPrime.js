// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

let num = 2;

function isPrime(num) {
  let isPrime = true;

  if (num <= 1){
    return false
  }
  else{
    for (let i = 2; i * i <= num; i++){
      if (num % i === 0){
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime){
    return true;
  }
  else{
    return false;
  }
}

console.log(isPrime(num));