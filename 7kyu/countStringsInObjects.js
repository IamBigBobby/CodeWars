// Create a function strCount (takes an object as argument) that will count all string values inside an object. 

let obj = {
  first: "1",
  second: "2",
  third: '3',
  fourth: ["anytime",'123',2,3,4],
  fifth:  null
};

// let obj = ["anytime",'123',2,3,4]



function strCount(obj) {
  let countOfString = 0;

  for (key in obj){
    if (typeof obj[key] === 'string'){
      countOfString++
    }
    else if(typeof obj[key] === 'object'){
      countOfString += strCount(obj[key]);
    }
  }

  return countOfString;
}

console.log(strCount(obj));