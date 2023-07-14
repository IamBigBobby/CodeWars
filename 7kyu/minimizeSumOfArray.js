// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .


let arr = [5,4,2,3];

function minSum(arr) {
  let result = 0;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length / 2; i++){
    result += arr[i] * arr[arr.length - 1 - i];
  }

  return result;
}

console.log(minSum(arr));