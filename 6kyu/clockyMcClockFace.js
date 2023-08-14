// And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.

// Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

// What a bunch of cheapskates!

// Can you do it?

let angle = 325.2;


function whatTimeIsIt (angle){

  console.log(angle);

  let fraction = angle - Math.floor(angle);

  console.log(fraction);

  if (fraction < 0.5){
    angle = Math.floor(angle);
  }
  else if (fraction > 0.5){
    angle = Math.ceil(angle);
  }

  console.log(angle);

  let hours =  Math.floor(angle / 30);
  
  let minutes = (Math.round(angle) % 30) * 2;

  console.log(hours, minutes);

  if (angle < 30){
    return `12:${minutes.toString().padStart(2, "0")}`;
  }
  else{
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  }
}

// function whatTimeIsIt (angle) {
//   if (angle === 0 || angle === 360){
//     return "12:00";
//   }

//   console.log(angle)
//   let roundToHalfOrWhole = function (angle){
//     let fraction = angle - Math.floor(angle);

//     if (fraction < 0.25){
//       return Math.floor(angle);
//     }
//     else if (fraction > 0.75){
//       return Math.ceil(angle);
//     }
//   }

//   roundToHalfOrWhole(angle);

//   let hours =  Math.floor(angle / 30);
  
//   let minutes = (Math.round(angle) % 30) * 2;

//   if (angle < 30){
//     hours = '00';
//   }

//   if (angle === 0 || angle === 30|| angle === 60 || angle === 90 || angle === 180 || angle === 270 || angle === 360){
//     minutes = '00';
//   }

//   if (hours < 10){
//     return `0${hours}:${minutes}`;
//   }
//   else{
//     return `${hours}:${minutes}`;
//   }
// }

console.log(whatTimeIsIt(angle));
// 1 hour = 30 deg
// 1 deg = 12 min