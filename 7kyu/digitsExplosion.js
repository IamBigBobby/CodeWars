// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

let s = "000";

function explode(s) {
  let numberArr = s.split('');
  let convertNumberArr = numberArr.map(function(item){
    return Number(item);
  })
  let explodeArr = [];
  for (let number of convertNumberArr){
    for (let i = 0; i < number; i++){
      explodeArr.push(number);
    }
  }
  return explodeArr.join('').toString();
}

console.log(explode(s));