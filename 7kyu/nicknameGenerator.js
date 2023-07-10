// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

let name = "Gregory";

function nicknameGenerator(name){
  let vowel = ["a", "e", "i", "o", "u"];
  let sliceLength = 3;

  console.log(name.length);
  if (name.length < 4){
    return "Error: Name too short";
  }

  for (let i = 0; i < vowel.length; i++){
    if (name[2] === vowel[i]){
      console.log('true');
      sliceLength = 4;
      break;
    }
  }

  return name.slice(0, sliceLength);
}

console.log(nicknameGenerator(name));