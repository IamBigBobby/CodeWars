// After yet another dispute on their game the Bingo Association decides to change course and automate the game.

// Can you help the association by writing a method to create a random Bingo card?

function getCard() {
  let numbersArr = [];
  let randomNumbersArr = [];
  let cardArr = [];
  let result = [];
  let letterArr = ['B', 'B', 'B', 'B', 'B', 'I', 'I', 'I', 'I', 'I', 'N', 'N', 'N', 'N', 'N', 'G', 'G', 'G', 'G', 'G', 'O', 'O', 'O', 'O', 'O'];

  for (let i = 1; i <= 75; i++){
    numbersArr.push(i);
  }

  for (let i = 0; i < numbersArr.length; i += 15){

    let changeArr = numbersArr.slice(i, i + 15);
    changeArr.sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < changeArr.length; i++){
      randomNumbersArr.push(changeArr[i]);
    }

  }

  for (let i = 0; i < randomNumbersArr.length; i += 15){

    let changeArr = randomNumbersArr.slice(i, i + 5);
    
    for (let i = 0; i < changeArr.length; i++){
      cardArr.push(changeArr[i]);
    }

  }

  for (let i = 0; i < letterArr.length; i++){
    result.push(letterArr[i] + cardArr[i]);
  }

  result.splice(14, 1);

  return result;
}
console.log(getCard());






// // Функция для перемешивания массива по алгоритму Фишера-Йетса
// function shuffle(array) {
//   let currentIndex = array.length, temporaryValue, randomIndex;

//   // Пока остаются элементы для перемешивания...
//   while (0 !== currentIndex) {

//     // Выбираем оставшийся элемент...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // И меняем его местами с текущим элементом.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }

// // Создаем массив из чисел от 1 до 75
// let arr = [];
// for (let i = 1; i <= 75; i++) {
//   arr.push(i);
// }

// // Перемешиваем массив
// shuffle(arr);

// // Берем первые 25 элементов массива
// let result = arr.slice(0, 25);

// // Выводим результат в консоль
// console.log(result);
