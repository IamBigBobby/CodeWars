// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

let string = 'This is a test';

function toWeirdCase(string){
  let modifiedArr = [];
  string.split(' ').forEach( word => {
    let newWord = '';
    for (let i = 0; i < word.length; i++){
      i === 0 || i % 2 === 0 ? newWord += word[i].toUpperCase() : newWord += word[i].toLowerCase();
    }
    modifiedArr.push(newWord);
  });

  
  return modifiedArr.join(' ');
}

console.log(toWeirdCase(string));