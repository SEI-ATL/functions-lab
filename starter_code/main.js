// Question 1
function maxOfTwoNumbers() {
    if (numOne > numTwo) {
        console.log(numOne +' is greater than ' + numTwo);
    } else {
        console.log(numTwo + ' is the higher number');
    }
}
let numOne=20
let numTwo=30
maxOfTwoNumbers();

// Question 2
function maxOfThree(array) {
   return Math.max(array);
}
let array=[2,5,1];
console.log(maxofThree(array));

// Question 3
function isCharacterAVowel(val) {
    val = val.toUpperCase()
    let result = false
        if( val === "A" || val === "E" || val === "I" || val === "O" || val === "U" ) {
            result = true;
        }
        return result 
}
console.log(isCharacterAVowel("z"));

// Question 4
function sumArray(numbers) {
 let sum=0;
 for(const value of numbers) {
     sum += value;
 }
 return sum;
}
sum([1,2,3,4,5]);


// Question 4
function multiplyArray(numbers) {
    let num=1;
      for(const value of numbers) {
      num *= value;
  }
      return num;
  }
  console.log(multiplyArray([2,3,4]));


// Question 5
var numberOfArguments = function(){
    console.log(arguments)
    return arguments.length
}
numberOfArguments(10, 20);



// Question 6
const reverseString = function reverseString(rev) {
    return rev.split("").reverse().join("");
}
console.log(reverseString("hello"));


// Question 7
function findLongestWord(x) {
    let split = x.split(' ');
    let longestWord = 0;
    for(let i = 0; i < split.length; i++){
      if(split[i].length > longestWord){
      longestWord = split[i].length;
       }
    }
    return longestWord;
  }
  console.log(findLongestWord("the mitochondria is the powerhouse of the cell"));


// Question 8
function filterLongWords () {
  
}


// Bonus 1
function logBetween(lowNum, highNum) {
 
}

// Bonus 2
function charactersOccurencesCount() {
  
}

