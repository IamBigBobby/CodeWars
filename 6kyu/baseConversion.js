// In this kata you have to implement a base converter, which converts positive integers between arbitrary bases / alphabets.

let Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};
let input = 'hello';
let source = Alphabet.DECIMAL;
let target = Alphabet.ALPHA;

function convert(input, source, target) {
  let summ = 0;  
  let result = '';

  for (let i=0; i<input.length; i++) {
    summ = summ * source.length + source.indexOf(input[i]);
  }


  while (summ > 0) {
    result = target[summ % target.length] + result;
    summ = Math.floor(summ / target.length);
  }  
  return result ? result : target[0];
}


// function convert(input, source, target) {

//   let sourceLength = source.length;
//   let targetLength = target.length;

//   console.log(sourceLength, targetLength)

//   // if(target !== Alphabet.ALPHA_LOWER, target !== Alphabet.ALPHA_UPPER, target !== Alphabet.ALPHA, target !== Alphabet.ALPHA_NUMERIC){

//   //   let formatString = parseInt(input, sourceLength);

//   //   console.log(formatString)

//   //   let result = formatString.toString(targetLength);

//   //   return result;
//   // }
//   let result = "";
//    while (num > 0){
//     let simbol = 
//   }
// }

console.log(convert(input, source, target));













// var str = "hello"; // исходная строка
// var codes = []; // массив для хранения числовых кодов
// var bin = ""; // строка для хранения двоичного представления
// for (var i = 0; i < str.length; i++) {
//   codes.push(str.charCodeAt(i)); // добавляем код каждого символа в массив
//   bin += codes[i].toString(2) + " "; // добавляем двоичное представление каждого кода в строку с пробелом
// }
// console.log(bin); // "1101000 1100101 1101100 1101100 1101111 "


// // функция для преобразования числа в строку с заданным алфавитом
// function numberToAlphabet(num, alphabet) {
//   // получаем длину алфавита
//   var len = alphabet.length;
//   // инициализируем пустую строку для результата
//   var result = "";
//   // пока число не равно нулю
//   while (num > 0) {
//     // находим остаток от деления числа на длину алфавита
//     var remainder = num % len;
//     // находим соответствующий символ в алфавите по индексу остатка
//     var symbol = alphabet[remainder];
//     // добавляем символ к результату
//     result = symbol + result;
//     // делим число на длину алфавита без остатка
//     num = Math.floor(num / len);
//   }
//   // возвращаем результат
//   return result;
// }
