// Question 1
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript. Do some Googling to figure this out if you forget how conditionals work.

function maxOfTwoNumbers(num1, num2) {
        if (num1 >= num2) {
            return num1;
        } else {
            return num2;
        }
}
let var1 = "26";
let var2 = "500";
console.log(maxOfTwoNumbers(var1, var2)) //this shows 500 in Chrome's inspect/console.



// Question 2
// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

function maxOfThree(num3, num4, num5) {
    if (num3 >= num4 && num3 >= num5) {
        return num3;
    } else if (num4 > num3 && num4 >= num5) {
        return num4;
    } else {
        return num5;
    }
}
let var3 = "26";
let var4 = "28";
let var5 = "29";
console.log(maxOfThree(var3, var4, var5)) //this shows 29 in Chrome's inspect/console. I potentially could have used Math.max for past two problems but wanted to practice if/else statements.



// Question 3
// 3. Write a function `isCharacterAVowel` that takes a character (i.e., a string of length 1) and returns true if it is a vowel and false otherwise.
function isCharacterAVowel(character) {
    if (character === "A" || character === "a" || character === "E" || character === "e" || character === "I" || character === "i" || character === "O" || character === "o" || character === "U" || character === "u" || character === "Y" || character === "y") {
        return "true"
    } else {
        return "false"
    }
}
let letter1 = "3";
let letter2 = "f";
let letter3 = "y";
console.log(isCharacterAVowel(letter1)); // this shows false in Chrome's inspect/console.
console.log(isCharacterAVowel(letter2)); // this shows false in Chrome's inspect/console.
console.log(isCharacterAVowel(letter3)); // this shows true in Chrome's inspect/console.

// I included uppercase and lowercase as well as y for vowels. I'm sure there are simpler and more efficient ways to code this but the logic made sense to me using a bunch of identity and logical operators.



// Question 4
// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

function sumArray() {
    const sumArray = [1, 2, 3, 4];
    let sum = 0;
    for (let i = 0; i < sumArray.length; i++) {
        sum = sum + sumArray[i];
    }
    return sum;
}
console.log(sumArray());  // This shows 10 in Chrome's inspect/console. At first I got an error stating sum was not defined so let this equal 0 so that overall sum is not changed by intiial positive integer.

// Question 4
function multiplyArray() {
    const multArray= [1, 2, 3, 4];
    let mul = 1;
    for (let i = 0; i < multArray.length; i++) {
        mul = mul * multArray[i];
    }
    return mul;
}
console.log(multiplyArray());  // This shows 24 in Chrome's inspect/console. At first I got an error stating mul was not defined so let this equal 1 so that overall multiplied value starts with 1*array[1]. 


// Question 5
// 5. Write a function that returns the number of arguments passed to the function when called.

const numberOfArguments = function() {
    return arguments.length;
}
console.log(numberOfArguments(1, 2, 3, 4, 5, 6)) 
console.log(numberOfArguments(1, 'p', true, 4, 5, 6, 7, 8))// This shows 6 and 8 respectively in Chrome's inspect/console. This one was fairly straightforward, just had to gooogle arguments.length.



// Question 6
// Define a function `reverseString` that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (string1){
        return string1.split('').reverse().join('')
    }
console.log(reverseString('jag testar')) // Shows "ratset gaj" in Chrome's inspect/console. Another fairly straightforward one where my code block simply uses .split to split the argument that is a string into an array of strings, then .reverse to reverse the order of strings in this array and then .join to "concatenate" reversed array of strings into a single string.



// Question 7
// Write a function `findLongestWord` that takes an array of words and returns the length of the longest word in the array.

function findLongestWord () {
    let longestWord = "";
        for (let words of longestArray) {
            if ( words.length > longestWord.length) {
                longestWord = words;
            }
        }
     return longestWord.length;
}

const longestArray = ["short", "long", "longest", "super-longest"]
console.log(findLongestWord(longestArray)) // Shows 13 in Chrome's inspect/console. created variable longestWord and gave it null value. Then used for of loop through array specified as longestArray. Used if statement for word.length if greater than longestWord length to replace longestWord with word and iterated. Returned longestWord.

// Question 8
// 8. Write a function `filterLongWords` that takes an array of words and a number `i` and returns a new array of words that are longer than `i` characters long.

function filterLongWords (firstArray, i) {
    const longArray = [];
        for (let word of firstArray) {
            if (word.length > i) {
                longArray.unshift(word);
                
            }
        }
    return longArray;
}

let array = ["short", "long", "longest", "super-longest"]
console.log(filterLongWords(array, 6)); // Shows array of [super-longest, and longest] in Chrome's inspect/console. created null array called longArray. Then used for of loop through array specified as firstArray. Used if statement for word.length if greater than i parameter then populated longArray with word using unshift. Returned longArray.

// Bonus 1
function logBetween(lowNum, highNum) {
 
}

// Bonus 2
function charactersOccurencesCount() {
  
}

