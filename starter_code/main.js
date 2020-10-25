// Question 1
function maxOfTwoNumbers(a,b) {
if (a > b) {
	console.log(a "is the larger number.")
}
else {console.log(b "is the larger number.")
	}
}
maxOfTwoNumbers();

// Question 2 - javascript library: return Math.max!
function maxOfThree(a,b,c) {
	if (a > b && b > c) {
		console.log(a);
	}
	else if (a < b && b > c) {
		console.log(b);
	}
	else {
		console.log(c)
	}
}
maxOfThree();

// Question 3 - if vowels.includes(char.toUpperCase)
function isCharacterAVowel() {
	if (a == "a" || a == "e" || a == "i" || a == "o" || a == "u") {
		console.log(a " is a vowel")
	}
	else {
		console.log(a " is not a vowel")
	}
}
isCharacterAVowel();

// Question 4
const array = [1,2,3,4];
var sum;
var i;
function sumArray() {
	for (i = 0; i < array.length; i++) {
  sum = array[i] + array[i+1];
  return sum;
}
}
sumArray();


// Question 4
const array = [1,2,3,4];
function multiplyArray() {
	for (i = 0; i < array.length; i++) {
		var product = array[i] * array[i+1];
		return product;
	}
}
multiplyArray();

// Question 5
const list;
const numberOfArguments = function(){
  return list.length;
}

// Question 6
var string; 
function reverseString (){
  var splitString = string.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
};
reverseString();

// Question 7
var words = [];
var longestWord = 0;
function findLongestWord () {
	for (let i = 0; i < words.length; i++) {
		var wordLength = words[i].length;
		if (wordLength > longestWord) {
			longestWord = wordLength;
		}
		return longestWord;
		} 
	}
}
findLongestWord();

// Question 8
var words = [];
var longWords = [];
const maxLength;
function filterLongWords (words) {
	for (let i = 0; i < words.length; i++) {
		if (words[i].length > maxLength) {
			longWords.push(words[i]);
		}
		return longWords;
	}
}
filterLongWords();

// Bonus 1
function logBetween(lowNum, highNum) {
 for (i = lowNum; i <= highNum; i++) {
	  console.log(i);
 }
}
logBetween(2,13);
// Bonus 2
function charactersOccurencesCount() {
  
}

