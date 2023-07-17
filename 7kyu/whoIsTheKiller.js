// Some people have been killed!
// You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

let suspectsInfo = {
  'James': ['Jacob', 'Bill', 'Lucas'],
  'Johnny': ['David', 'Kyle', 'Lucas'],
  'Peter': ['Lucy', 'Kyle']
};

let dead = ['Lucas', 'Bill'];

function killer(suspectInfo, dead) {
  for (let key in suspectInfo){
    // console.log(key, suspectInfo[key].length);
    let numberOfCoincidences = 0;
    for (let i = 0; i < suspectInfo[key].length; i++){
      for (k = 0; k < dead.length; k++){
        if (suspectInfo[key][i] === dead[k]){
          numberOfCoincidences++
        }
      }
    }
    if (numberOfCoincidences === dead.length){
      return key;
    }
  }
}

console.log(killer(suspectsInfo, dead));