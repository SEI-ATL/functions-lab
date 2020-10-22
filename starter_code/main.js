// Question 1
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(maxOfTwoNumbers(3, 10));
console.log(maxOfTwoNumbers(100, 10));
console.log(maxOfTwoNumbers(14.6, 14.7));


// Question 2
function maxOfThree(num1, num2, num3) {
    if (typeof num1 != "number" || typeof num2 != "number" || typeof num3 != "number") {
        return "All values must be numbers";
    } else {
        return Math.max(num1, num2, num3);
    }
}

console.log(maxOfThree(1,5,2));
console.log(maxOfThree(1,'a',2));


// Question 3
function isCharacterAVowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] === str.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(isCharacterAVowel('R'));
console.log(isCharacterAVowel('a'));


// Question 4
function sumArray(arr) { 
    let value = arr.reduce((acc, curVal) => acc + curVal);
    if (typeof value != "number") {
        return ("Sorry, not a number")
    } else if  (arr.length <= 1) {
        return arr[0];
    } else {
        return value;
    }
}

console.log(sumArray([1,2,3,4,5,6,7,8,9,10]));
console.log(sumArray(["cats", "dogs", "chickens"]));
console.log(sumArray([33]));

// Question 4
function multiplyArray(arr) {
    let value = arr.reduce((acc, curVal) => acc * curVal);
    if (typeof value !== 'number') {
        return ("Sorry, not a number")
    } else if  (arr.length <= 1) {
        return arr[0];
    } else {
        return value;
    }
}

console.log(multiplyArray(["cats", "dogs", "chickens"]));
console.log(multiplyArray([33]));
console.log(multiplyArray([1,2,3,4,5,6,7,8,9,10]));


// Question 5
let numberOfArguments = function(num1, num2, num3){
    return numberOfArguments.length;
}

console.log(numberOfArguments());



// Question 6
const reverseString = function (str){
    return str.split('').reverse().join('');
};

console.log(reverseString("jag testar"));


// Question 7
function findLongestWord (arr) {
  longestItem = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longestItem) {
        longestItem = arr[i].length;
      } 
  }
  return longestItem;
}

console.log(findLongestWord(["cats", "dogs", "chickens"]));
console.log(findLongestWord([1, "javascript", true, "speaker"]));


// Question 8
function filterLongWords (arr, itemLength) {
    let newArr = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > itemLength) {
        newArr.push(arr[i]);
      } 
  }
  return newArr;
}

console.log(filterLongWords(["cats", "dogs", "chickens", "javascript", "Atlanta"], 5));

// Bonus 1
function logBetween(lowNum, highNum) {
 if (highNum < lowNum) {
     console.log("FAIL")
 } else 
 for (let i = lowNum; i <= highNum; i++) {
     console.log(i)
 }
}

// Bonus 2
function charactersOccurencesCount(str) {
  let lowerCaseString = str.toLowerCase();
  let charObject = {};
  let char,
      idx,
      length,
      count;

      for (idx = 0, length = lowerCaseString.length; idx < length; ++idx) {
          char = lowerCaseString.charAt(idx);
          count = charObject[char];
          charObject[char] = count ? count + 1 : 1;
      }
      return charObject;
}

console.log(charactersOccurencesCount("General Assembly"));

