// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

let objA = { a: 10, b: 20, c: 30 };
let objB = { a: 3, c: 6, d: 3 };

function combine(...obj) {
let result = {};

  for (let i = 0; i < obj.length; i++){
    for (let key in obj[i]){
      let object = obj[i];
      if (result[key]){
        result[key] += object[key];
      }
      else {
        result[key] = object[key];
      }
    }
  }

  return result;
}

console.log(combine(objA, objB));