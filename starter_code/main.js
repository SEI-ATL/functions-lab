// Question 1
function maxOfTwoNumbers(a,b) {
    if (a < b) {
       return b ;
    } else {
        return a;
    }
}

let firstNum = 4;
let secondNum = 4;

console.log('The max of ' + firstNum + ' and ' + secondNum + ' is ' + maxOfTwoNumbers(firstNum,secondNum))

// Question 2
function maxOfThree(a,b,c) {
    if (a <= b && b <= c) {
        return c ;
     } else if (b <= a && c <= a) {
         return a;
     } else {
         return b;
     }
}

let thirdNum = 5;
let fourthNum = 6;
let fifthNum=6;

console.log('The max of ' + thirdNum + ', ' + fourthNum + ' and ' + fifthNum + ' is ' + maxOfThree(thirdNum,fourthNum,fifthNum))

// Question 3
function isCharacterAVowel(letter) {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
        return 'true';
    } else {
        return 'false'
    }
}

let aCharacter = 'b';

console.log('Is the letter ' + aCharacter + ' a vowel: ' + isCharacterAVowel(aCharacter))

// Question 4
function sumArray(numbersArray) {
    var sum = 0
    for (let i = 0; i < numbersArray.length; i++){
        sum += numbersArray[i];
    }
    return sum;
}

let numbersToBeAdded = [4, 6, 6, 4];

console.log('The sum of ' + numbersToBeAdded + ' is ' + sumArray(numbersToBeAdded))

// Question 4
function multiplyArray(numbersArray) {
    var product = 1
    for (let i = 0; i < numbersArray.length; i++){
        product *= numbersArray[i];
    }
    return product;
}

let numbersToBeMultiplied = [2, 2, 2, 2];

console.log('The product of ' + numbersToBeMultiplied + ' is ' + multiplyArray(numbersToBeMultiplied))

// Question 5
const numberOfArguments = function(venom){
    return venom.length;
}

someFunction = filterLongWords

console.log('The number of arguments in the this function is ' + numberOfArguments(someFunction))

// Question 6
const reverseString = function (taco){
    var pupusa = taco.split('');
    var enchilada = pupusa.reverse();
    var burrito = enchilada.join('');
    return burrito;
};

let aString = 'Hello world!'

console.log('"' + aString + '" backwards is "' + reverseString(aString) + '"')

// Question 7
function findLongestWord (oak) {
    var currentLong = 0
  for (let i = 0; i < oak.length; i++) {
    wordLength = oak[i].length;
    if (currentLong < wordLength) {
        currentLong = wordLength;
    }
  }
  return currentLong;
}

let animals = ['cat', 'coyote', 'whale', 'hippopotamus', 'hawk']

console.log('The length of the longest word found in the array of animals is ' + findLongestWord(animals))

// Question 8
function filterLongWords (cod,salmon) {
  var trout = [];
  for (let i = 0; i < cod.length; i++){
      if (cod[i].length >= salmon){
         trout.push(cod[i]) ;
      }
  }
  return trout;
}

let wordList = ['Honda', 'Toyota', 'Ford', 'Nissan', 'Chevrolet'];
let characterNum = 6;

console.log('The following car companies: ' + filterLongWords(wordList,characterNum) + ' have 6 or more characters in their name')

// Bonus 1
function logBetween(lowNum, highNum) {
    var aNum = lowNum
    while (aNum <= highNum){
        console.log(aNum);
        aNum++;
    }
}

logBetween(4,12)

// Bonus 2
function charactersOccurencesCount() {
  
}

