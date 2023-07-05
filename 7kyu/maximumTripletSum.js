// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

let numbers = [2,1,8,0,6,4,8,6,2,4];

function maxTriSum(numbers){
  numbers.sort((a, b) => a - b);

  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] === numbers[i + 1]){
      numbers.splice(i + 1, 1);
    }
  }

  return numbers[numbers.length - 1] + numbers[numbers.length - 2] + numbers[numbers.length - 3]
}

console.log(maxTriSum(numbers))