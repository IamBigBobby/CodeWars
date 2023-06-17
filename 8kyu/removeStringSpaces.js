// Write a function that removes the spaces from the string, then return the resultant string

let x = '8 j 8   mBliB8g  imjB8B8  jl  B';

function noSpace(x){
  let resultStr = '';
  
  for (let i = 0; i < x.length; i++){
    if (x[i] !== ' '){
      resultStr += x[i];
    }
  }

  return resultStr;
}

console.log(noSpace(x));