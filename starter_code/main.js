// Question 1
function maxOfTwoNumbers(num1, num2) {
  let returnVal = Math.max(num1, num2)

  return returnVal
}

// Question 2
function maxOfThree() {
  return Math.max(...arguments)
}

// Question 3
function isCharacterAVowel(char) {
  if (char.length > 1) return `Provided argument more than 1 characters`

  return ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) !== -1
}

// Question 4
function sumArray(arrOfInts) {
  return arrOfInts.reduce((a, b) => a + b)
}


// Question 4
function multiplyArray(arrOfInts) {
  return arrOfInts.reduce((a, b) => a * b)
}


// Question 5
const numberOfArguments = function () {
  return arguments.length
}



// Question 6
const reverseString = function (str) {
  return str.split('').reverse().join('');
};


// Question 7
function findLongestWord(arrOfWords) {
  let longestWordLength = 0

  arrOfWords.forEach(word => {
    if (word.length > longestWordLength) longestWordLength = word.length
  })

  return longestWordLength
}


// Question 8
function filterLongWords(arrOfWords, i) {
  let filteredArray = []

  arrOfWords.forEach(word => {
    if (word.length > i) filteredArray.push(word)
  })

  return filteredArray
}


// Bonus 1
function logBetween(lowNum, highNum) {

}

// Bonus 2
function charactersOccurencesCount() {

}
