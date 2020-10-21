// Question 1
function maxOfTwoNumbers(num1, num2) {
    if (num1 >= num2) {
        return num1;
    } else {
        return num2;
    }
}

// Question 2
function maxOfThree(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3){
        return num2;
    } else {
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
            newArray.push(array[j]);
        }
    }
    return newArray;
}


// Bonus 1
function logBetween(lowNum, highNum) {
    for (let i = lowNum; i <= highNum; i++) {
        console.log(i);
    }
}


// Bonus 2
function charactersOccurencesCount(string) {
    let array = string.toLowerCase().split('');
    let characters = {};
    for (let i = 0; i < array.length; i++) {
        if (array[i] in characters) {
            characters[array[i]] += 1;
        } else {
            characters[array[i]] = 1;
        }
    }
    return characters;
}


console.log(maxOfTwoNumbers(1,2))
console.log(maxOfThree(3, 3, 4))
console.log(isCharacterAVowel("a"))
console.log(sumArray([1, 2]))
console.log(multiplyArray(1 , 2))
console.log(numberOfArguments(1, 1))
console.log(reverseString("hello"))
console.log(findLongestWord (["i", "hi"]))
console.log(filterLongWords (["i", "hi"], 1))
logBetween(1, 10)
console.log(charactersOccurencesCount('Strings'))