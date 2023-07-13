// The input will be an array of dictionaries.

// Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

// The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.

let List = [
  {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
  {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
 ];

function sentence(List) {
  let numberArr = [];
  let currentSentence = [];

  for (let i = 0; i < List.length; i++){
    for (let key in List[i]){
      numberArr.push(Number(key));
    }
  }

  numberArr.sort((a, b) => a - b);

  for (let i = 0; i < numberArr.length; i++){
    for (let k = 0; k < List.length; k++){
      for (let key in List[k]){
        if (numberArr[i] == key){
          currentSentence.push(List[k][key]);
        }
      }
    }
  }

  return currentSentence.join(' ');
}

console.log(sentence(List));