// Question 1
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// Question 2
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3){
        return num2;
    } else if (num3 > num1 && num3 > num2){
        return num3;
    }
}

// Question 3
function isCharacterAVowel(char) {
    let vowels = 'aeiou';
    if (vowels.indexOf(char) >= 0) {
        return true;
    } else {
        return false;
    }
}

// Question 4
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}


// Question 4
function multiplyArray(array) {
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product *= array[i]
    }
    return product;
}


// Question 5
var numberOfArguments = function(){
    return arguments.length;
}



// Question 6
var reverseString = function (string){
    return string.split('').reverse().join('')
};


// Question 7
function findLongestWord (array) {
    let longestWordLength = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestWordLength) {
            longestWordLength = array[i].length;
        }
    }
    return longestWordLength;
}


// Question 8
function filterLongWords (array, i) {
    let newArray = [];
    for (let j = 0; j < array.length; j++) {
        if (array[j].length > i) {
            newArray.push(array[j])
        }
    }
    return newArray;
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

