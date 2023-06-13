// We need a function that can transform a string into a number. What ways of achieving this do you know?

let str = '123';

const stringToNumber = function(str){
  return Number(str);
}

console.log(stringToNumber(str))