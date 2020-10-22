// Question 1
let a;
let b;
function maxOfTwoNumbers(a,b); 
if(a>b) {
    console.log("the max number is a" + a);
}else if (b>a) {
    console.log("the max number is b" + b );
}
else {
    console.log("a is equal to b");
}

// Question 2
let a;
let b;
let c;
function maxOfThree(a,b,c) 
if(a>b && a>c) {
    console.log("the max number is a" + a);
}else if(b>c && b>a) {
        console.log("the max number is b" + b);
}
else if(c>b && c>a) {
            console.log("the max number is c" + c);
}

}

// Question 3 COME BACK AND WORK ON THIS 

const vowels = ['a','e','i','o','u'];

function isCharacterAVowel(vowels) {
    for (let letter of Text.toLowercase())

}

// Question 4 
function sumArray(numbers) {
    return numbers.reduce (function(firstNumber,secondNumber){
        return firstNumber + secondNumber;
    })
 
}


// Question 4
function multiplyArray() {

    let sum = 0;
for(let i=0; i< arrayOne.length; i++) {
    sum += arrayOne[i]*arrayTwo[i];
}

}


// Question 5
const numberOfArguments = function(amount){
    amount = numberOfArguments(amount);
    for(let i=1; i <arguments.length; i++){
        amount += numberOfArguments(arguments[i])
    }
    return amount;
  
}



// Question 6 // need more practice with this 
const reverseString = function (str){
    return str.split("").reverse().join("");
  
};


// Question 7
function findLongestWord (differentWords) {
    let differentWordsSplit = differentWords.Split();
    let findLongestWord = 0
    for(let i = 0; i < differentWordsSplit.length; i++){
        if(differentWordsSplit[i].length > findLongestWord){
            findLongestWord = differentWordsSplit [i].length;
        }
        return findLongestWord;
    }
  
}


// Question 8
function filterLongWords (differentWords)) {
    let differentWordsSplit = differentWords.Split('');
    let findLongestWord = 0;
    for(let i = 0; i < findLongestWord.length; i++){
        if(differentWordsSplit[i].length > longestWord){ 
        longestWord = findLongestWord[i].length; 
  
}


// Bonus 1
function logBetween(lowNum, highNum) {
 
}

// Bonus 2
function charactersOccurencesCount() {
  
}

