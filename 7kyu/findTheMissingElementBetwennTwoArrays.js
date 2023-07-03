// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

let arr1 = [6, 1, 3, 6, 8, 2];

let arr2 = [3, 6, 6, 1, 2];


function findMissing(arr1, arr2) {
  let arr3 = [...arr1, ...arr2];
  let arrUniq = [];

  arr3.sort((a, b) => a - b);

  for (let i = 0; i < arr3.length; i = i + 2){
    if (arr3[i] !== arr3[i + 1]){
      if(arr3[i + 1] == undefined){
        arrUniq.push(arr3[i]);
        arr3.splice(i, 1)
      }
      else if (arr3[i] == undefined){
        arrUniq.push(arr3[i + 1]);
        arr3.splice(i + 1, 1)
      }
      else{
        arrUniq.push(arr3[i]);
        arr3.splice(i, 1)
      }
    }
  }
  
  return arrUniq[0]
}

// other best solution 
// function findMissing(arr1, arr2) {
//   arr1.sort();
//   arr2.sort();
  
//   for (var i = 0; i < arr1.length; i++) {
//     if(arr1[i] != arr2[i]) {
//       return arr1[i];
//     }
//   }
// }

console.log(findMissing(arr1, arr2));