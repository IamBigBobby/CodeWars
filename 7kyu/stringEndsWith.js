// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

let str = 'abcde';
let ending = 'cfe';

function solution(str, ending){
  if (ending == ''){
    return true;
  }
  return str.slice(-ending.length) == ending ? true : false;
}

console.log(solution(str, ending));