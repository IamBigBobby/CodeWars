// And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.

// Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

// What a bunch of cheapskates!

// Can you do it?

let angle = 325.2;


function whatTimeIsIt (angle){
  let hours =  Math.floor(angle / 30);
  
  let minutes = Math.floor((angle % 30) * 2);

  if (angle < 30){
    return `12:${minutes.toString().padStart(2, "0")}`;
  }
  else{
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  }
}

console.log(whatTimeIsIt(angle));
// 1 hour = 30 deg
// 1 deg = 12 min