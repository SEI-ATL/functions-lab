// Question 1
function maxOfTwoNumbers(num1, num2) {
  if (num1 >= num2) {
    return num1;
  } else {
    return num2;
  }
}

// Question 2
function maxOfThree(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

// Question 3
function isCharacterAVowel(character) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    if (character.toLowerCase() === vowels[i]) {
      return true;
    }
  }
  return false;
}

// Question 4
function sumArray(array) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    answer = answer + array[i];
  }
  return answer;
}


// Question 4
function multiplyArray(array) {
  let answer = 1;
  for (let i = 0; i < array.length; i++) {
    answer = answer * array[i];
  }
  return answer;
}


// Question 5
function numberOfArguments(argument){
 return arguments.length;
}



// Question 6
function reverseString(string) {
 let newString = '';
 for (let i = 1; i <= string.length; i++) {
   let lastLetter = string.charAt(string.length - i);
   newString = newString.concat('', lastLetter);
 }
 return newString;
};


// Question 7
function findLongestWord(array) {
  let longestWord = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= longestWord.length) {
      longestWord = array[i];
    }
  }
  return longestWord.length;
}


// Question 8
function filterLongWords(array, num) {
  let newArray = array.filter(function(word) {
    return word.length > num;
  });
  return newArray;
}


// Bonus 1
function logBetween(lowNum, highNum) {
  for (let i = lowNum; i <= highNum; i++) {
    console.log(i);
  }
}

// Bonus 2
function charactersOccurencesCount(string) {
  let array = string.split('');
  let newObject = {};
  for (let i = 0; i < array.length; i++) {
    let letter = array[i].toLowerCase();
    if (letter >= 'a' && letter <= 'z') {
      if (newObject[letter] >= 1) {
        newObject[letter] = newObject[letter] + 1;
      } else {
        newObject[letter] = 1;
      }
    }
  }
  return newObject;
}