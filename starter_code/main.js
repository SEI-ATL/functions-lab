// Question 1
// Good Morning!! Hope your day is going well!!!
function maxOfTwoNumbers(num1,num2) {
   if(num1 > num2){
       return num1;
   }else{
       return num2;
   }

 
};

console.log(maxOfTwoNumbers(11,5));

// Question 2
function maxOfThree(num1,num2,num3) {
    return Math.max(num1,num2,num3) ;
}
console.log(maxOfThree(-1,-8,-2));

// Question 3
const vowelArray =['A', 'E', 'I', 'O', 'U'];
let yourCharacter ='K'; //Hard Code//
// We haven't addressed input methods in class just yet  - so I will be hard -oding the function argument for now.
function isCharacterAVowel(yourCharacter) {
  if(vowelArray.includes(yourCharacter)){
      console.log("Your Character is indeed a VOWEL!")
      return true;
  }else{
      console.log('Sorry, Your chosen character seems to be a consonant...')
      return false;
  }
};

console.log(isCharacterAVowel(yourCharacter));

// Question 4
let b;
const wantToAddUpSomeNumbers= [1,2,3,4];
let resultValue = 0;
function sumArray(array) {
 for(b = 0; b < array.length; b++ ) {

     resultValue = resultValue + array[b];
 } 
 return resultValue;

};
console.log(sumArray(wantToAddUpSomeNumbers));

// Question 4

const wantToMultiplySomeNumbers= [1,2,3,4];
let resultsValue = 1;

let a
function multiplyArray(array) {
    for(a = 0; a < array.length; a++ ) {
   
        resultsValue = resultsValue * array[a];
    } 
    return resultsValue;
};
console.log(multiplyArray(wantToMultiplySomeNumbers));

//Question 5
// the function below will return "3"
const numberOfArguments = function(functionToAnalyze){
   return functionToAnalyze.length;
    
}
console.log(numberOfArguments(maxOfThree));


// Question 6
const UserInput ="Happy Thursday!"

const reverseString = function (line){
    let breakDownTheString = line.split("");
    let reverseArray = breakDownTheString.reverse();
    let backwarsString = reverseArray.join(""); 
    return backwarsString;   
};
console.log(reverseString(UserInput));

// Question 7
//expecting '10' as the longest word length

const longWordArray = ['Bike', 'Passport', 'Cat', 'Apprentice'];
let longestWord = 0;
function findLongestWord (array) {
    for(let i = 0; i < array.length; i++){
        if(array[i].length > longestWord){ 
            longestWord = array[i].length;
        }
        
}
return longestWord;
};
 console.log(findLongestWord(longWordArray));


// Question 8
// Should not return 'Me'!
const lastArray = ['Building', 'Me', 'infrastructure', 'Apprentice'];
const setYourLimit = 5;
let i = 6 ;//user imnut
let resultArray = [ ];
function filterLongWords (array,i) {
    for(let y = 0; y < array.length; y++){
      if(array[y].length > i){
        resultArray.push(array[y]); 
      }

    } 
    return resultArray;
    
};
console.log(filterLongWords(lastArray, i));


