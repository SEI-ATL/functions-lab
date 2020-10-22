// Question 1
function maxOfTwoNumbers(firstNum, secondNum) {
    if (firstNum > secondNum) {
        console.log(firstNum + " is larger than " + secondNum);
    } else {
        console.log(firstNum + " is less than " + secondNum);
    }

}
maxOfTwoNumbers(100, 200);

// Question 2
function maxOfThree(firstNum, secondNum, thirdNum) {
    console.log(Math.max(firstNum, secondNum, thirdNum));

}
maxOfThree(7, 2, 3);

// Question 3
function isCharacterAVowel(isLetter) {
    if (isLetter === 'a' || 'e' || 'i' || 'o' || 'u') {
        console.log("The Character is a vowel");
    } else {
        console.log("This character is a consonant");
    }

}
isCharacterAVowel("b")


// Question 4
function sumArray(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total +=numbers[i];
    }
    return total;
 
}
console.log(sumArray([1,2,3,4]));   


// Question 4
function multiplyArray(numbers) {
    var total = 1;
    for (var i = 0; i < numbers.length; i++) {
        total = (total * numbers[i]);
    }
    return total;

}
console.log(multiplyArray([1,2,3,4]));

// Question 5
// ... allows unlimited arguements
var numberOfArguments = function(...args){
    console.log(args.length);


  
}
numberOfArguments(3, 4, 6)

// Question 6

// .split('') - splits a string into an array based on a seperator
// .reverse() - reverses an array
// .join - rejoins the letters
var reverseString = function (string){
    console.log(string.split('').reverse(string).join(''));

  
}
reverseString('abcde')
// Question 7
function findLongestWord (array) {
    var longestWord = 0
    for (var i = 0; i < array.length; i++){
        if (array[i].length > longestWord){
            longestWord = array[i].length;
        }
    } return longestWord;
  
}
console.log(findLongestWord(['one', 'five', 'twenty']))

// Question 8
function filterLongWords (array, num) {
    var length = array.length;
    var longestWords = [];
    for ( i = 0; i < length; i++) {
        if (array[i].length > num) {
            longestWords[longestWords.length] = array[i];
        }
    }
    return longestWords;
  
}
console.log(filterLongWords(["Michael", "John"], 3))

// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

