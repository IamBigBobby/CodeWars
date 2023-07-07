// I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.

let diary1 = {
  'algebra': 6,
                                    'history': 7,
                                    'physics': 8,
                                    'geography': 9,
                                    'chemistry': 10
};

let diary2 = {
  'algebra':6,
                                    'history': 7,
                                    'physics': 8,
                                    'geography': 9,
                                    'chemistry': 10
};

let diary3 = {
  'algebra': 6,
                                    'history': 7,
                                    'physics': 8,
                                    'geography': 9,
                                    'chemistry': 10
}

function whoseBicycle(diary1, diary2, diary3) {
  const ageTable = {
    'first': 14,
    'second': 9,
    'third': 8
  }

  let sun1 = 0;
  let sun2 = 0;
  let sun3 = 0;
  let resultDiary = {};

  for (let key in diary1){
    sun1 += diary1[key];
  }
  resultDiary['first'] = sun1 / Object.keys(diary1).length;

  for (let key in diary2){
    sun2 += diary2[key];
  }
  resultDiary['second'] = sun2 / Object.keys(diary3).length;

  for (let key in diary3){
    sun3 += diary3[key];
  }
  resultDiary['third'] = sun3 / Object.keys(diary3).length;

  let checkAge = function(){
    if (resultDiary.first === resultDiary.second || resultDiary.first === resultDiary.third || resultDiary.second === resultDiary.third){
      return true
    }
    else{
      return false;
    }
  }

  if (checkAge()){
    let bestSon;
    let maxArr = [resultDiary.first, resultDiary.second, resultDiary.third];
    let maxMark = Math.max(...maxArr);
    let sameResultsArr = [];
    let agesBestSons = [];

    for (let key in resultDiary){
      if (resultDiary[key] === maxMark){
        sameResultsArr.push(key);
      }
    }

    for (let i = 0; i < sameResultsArr.length; i++){
      if (sameResultsArr[i] in ageTable){
        agesBestSons.push(ageTable[sameResultsArr[i]]);
      }
    }

    let minAgeSon = Math.min(...agesBestSons);

    for (let key in ageTable){
      if (ageTable[key] === minAgeSon){
        bestSon = key;
      }
    }

    return `I need to buy a bicycle for my ${bestSon} son.`
  }
  else{
  let max = -Infinity;
  let bestSon = "";
  for (var key in resultDiary) {
    if (resultDiary[key] > max) {
      max = resultDiary[key];
      bestSon = key;
    }
  }

  return `I need to buy a bicycle for my ${bestSon} son.`
  }
}

console.log(whoseBicycle(diary1, diary2, diary3))