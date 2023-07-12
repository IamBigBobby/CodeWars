// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

let S = "CodeWars";

function sortMyString(S) {
  let evenIndexed = [];
  let oddIndexed = [];
  for (let i = 0; i < S.length; i++){
    if ((i + 1) % 2 === 0){
      evenIndexed.push(S[i])
    }
    else{
      oddIndexed.push(S[i]);
    }
  }
  console.log(evenIndexed.join(''), oddIndexed.join(''))

  return `${oddIndexed.join('')} ${evenIndexed.join('')}`
}

console.log(sortMyString(S));