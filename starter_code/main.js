// Question 1
const x = 5;
const y = 9;

function maxOfTwoNumbers(x,y) { 
        if (x > y) return x; 
        else return y;
}
console.log(maxOfTwoNumbers(x,y) + " is the larger of the two numbers!");



// Question 2
const a = 3;
const b = 9;
const c = 7;

function maxOfThree(a,b,c) {
    if (a > b && a > c) return a;
    else if (b > a && b > c) return b;
    else return c;

}

console.log(maxOfThree(a,b,c) + " is the largest number!")



// Question 3
let onestring = "a"

function isCharacterAVowel(onestring) {
    if (onestring == "a" || onestring == "e" || onestring == "i" || onestring == "o" || onestring == "u") 
    return true;
    else return false;

}
console.log(isCharacterAVowel(onestring))

// Question 4

let numbers = [1, 2, 3, 4];
let sum = 0
function sumArray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }   
    return sum;
}

console.log("The sum of the array is " + sumArray(numbers))   


// Question 4


let product = 1
function multiplyArray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }
    return product;
}

console.log("The product of the array is " + multiplyArray(numbers))



// Question 5


const numberOfArguments = function(){
   
    amount =  maxOfThree.length;
    console.log("The amount of arguments that passed to the maxOfThree function is " + amount)
  
}

numberOfArguments();



// Question 6
const original = "jag testar"

const reverseString = function (original){
    let split = original.split("");
    let reverse = split.reverse();
    let final = reverse.join("");
    console.log(final + " is the reverse of the original string input.");
  
}
reverseString(original);

// Question 7
let words = ["general", "assembly", "cohort", "tuanh", "is", "tired"]

function findLongestWord (words) {
    let longest = ""
    for (let i = 0; i < words.length; i++) {
        if (longest.length < words[i].length) {
            longest = words[i];
        }
    }
    return longest.length;
}

console.log("The longest word in the array is " + findLongestWord(words) + " letters");

// Question 8


function filterLongWords (pikachu,raichu) {
    
    var longwords = [];
    for (let i = 0; i < pikachu.length; i++) {
        if (pikachu[i].length >= raichu) {
            longwords.pop(pikachu[i]);
        }
        
    }
    return longwords;
    
}
let wordss = ["general", "is", "assembly", "cohort", "tuanh", "tired"]
let atleast = 6
console.log(filterLongWords(wordss,atleast))


 

// Bonus 1
function logBetween(lowNum, highNum) {
 
}

// Bonus 2
function charactersOccurencesCount() {
  
}

