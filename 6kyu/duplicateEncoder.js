// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.


let word = "recede";

function duplicateEncode(word){
  str = word.toLowerCase().split('');

  let count = {};
  let result ='';

  for (let i = 0; i < str.length; i++){
    if (count[str[i]]){
      count[str[i]]++
    } else{
      count[str[i]] = 1;
    }
  }

for (let j = 0; j < str.length; j++){
  if (count[str[j]] > 1){
    result += ')';
  } else {
    result += '(';
  }
}

  return result;
}

console.log(duplicateEncode(word));