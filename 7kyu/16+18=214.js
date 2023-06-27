// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

let num1 = 16;
let num2 = 18;

function add(num1, num2) {
  let resultArr = [];
  let arrNum1 = num1.toString().split('').reverse();
  let arrNum2 = num2.toString().split('').reverse();

  for (let i = 0; i < arrNum1.length + arrNum2.length; i++){
    if(arrNum1[i] == undefined){
      resultArr.push(Number(arrNum2[i]));
    }
    else if(arrNum2[i] == undefined){
      resultArr.push(Number(arrNum1[i]));
    }
    else {
      resultArr.push(Number(arrNum1[i]) + Number(arrNum2[i]));
    }
  }

  let result = resultArr.filter(x => !isNaN(x));
  
  return Number(result.reverse().join(''));
}

console.log(add(num1, num2));