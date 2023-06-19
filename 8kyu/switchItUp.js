// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

let number = 8;

function switchItUp(number){
  arrNumberString = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  if (number >= 0 && number <= 9){
    return arrNumberString[number];
  }
}

console.log(switchItUp(number));