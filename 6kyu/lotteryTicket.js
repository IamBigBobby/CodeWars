// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.
let ticket = [['ZVQVC',66], ['RRI',82]];
let win = 2;


function bingo(ticket, win){
  let winNumber = 0;

  for (let ticketNumber of ticket){
    let letters = ticketNumber[0];
    let number = ticketNumber[1];

    for (let i = 0; i < letters.length; i++){
      console.log(letters[i], letters.charCodeAt(i));
      if(letters.charCodeAt(i % letters.length) === number){
        winNumber++
        break;
      }
    }
  }
  console.log(winNumber)

  return result = winNumber >= win ? 'Winner!' : 'Loser!';
}

console.log(bingo(ticket, win))