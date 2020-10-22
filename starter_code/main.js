// Question 1
function maxOfTwoNumbers(numberOne, numberTwo) {
        if (numberOne > numberTwo) {
           console.log(numberOne + " is larger than " + numberTwo);
        } else {
            console.log(numberOne + " is less than " + numberTwo);
        }
    }
    maxOfTwoNumbers(5,7);

// Question 2
function maxOfThree (numberOne, numberTwo, numberThree) {     
    return Math.max (numberOne, numberTwo, numberThree); 
}
  
console.log(maxOfThree(3,12,27));

// Question 3
function isCharacterAVowel(letter) {
    if (letter === 'a','e','i','o','u') {
        return "The letter is a vowel";
    } else {
        return "The letter is not a vowel";
    }
}
console.log(isCharacterAVowel('a'));

// Question 4
function sumArray(number) {
    var sum = 0;
    for (var i = 0; i < number.length; i++) {
            sum += number[i];
    }
    return sum;
}
console.log(sumArray([1,2,3,4]))

// Question 4
function multiplyArray(number) {
    var sum = 1;
    for (var i = 0; i < number.length; i++) {
           sum = (sum * number[i]);
    }
    return sum;
}
console.log(multiplyArray([1,2,3,4]))

// Question 5
var numberOfArguments = function(){
    var arguments = "";
    for (var i = 0; i < arguments.length; i++) 
    return arguments;
}



// Question 6
var reverseString = function (string){
    var text = "";
    for (var i = string.length - 1; i >= 0; i--) {
        text += string[i];
    } return text;
    }
console.log(reverseString("jag testar"));

// Question 7
function findLongestWord () {
  
}


// Question 8
function filterLongWords () {
  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

