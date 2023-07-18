// A stream of data is received and needs to be reversed.

let data = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0];

function dataReverse(data) {
  let reversedData = [];
  let reverseResultData = [];

  for (let i = data.length - 1; i >= 0; i--){
    reversedData.push(data[i]);
  }

  for (let i = 0; i < reversedData.length; i += 8){
    reverseResultData.push(reversedData.slice(i, i + 8).reverse());
  }

  let result = [].concat(...reverseResultData);

  return result;
}

console.log(dataReverse(data));