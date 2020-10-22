// Question 1
function maxOfTwoNumbers(x, y) {
    if (x < y) {
        return x;
    } else {
        return x
    }
}
    
    console.log(maxOfTwoNumbers(3, 2));

// Question 2
function maxOfThree(x, y, z) {
    if ((x > y) && (x > z)) {
        return x;
    } else if ((y> x) && (y > z)) {
        return y;
    } else {
        return z
    }
}

console.log(maxOfThree(1, 2, 3));

// Question 3
function isCharacterAVowel(x) {
    if ((x === "a") || (x === "e") || (x === "i") || (x === "o") || (x === "u")) {
        console.log("true");
    } else {
        console.log("false");
    }
}
console.log(isCharacterAVowel("g"));

// Question 4
function sumArray(a) {
    var total = 0;
    for (const i in a) {
        total += a[i];
    }
    return total;
}
var array = [1, 2, 3];
console.log(sumArray(array));

//

function multiplyArray(b) {
    var total = 0;
    for (const i in b) {
        total * b[i];
    }
    return total;
}
var array2 = [1, 2, 7];
console.log(multiplyArray(array2));

// Question 5
const numberOfArguments = function(a) {
    
}


// Question 6
function reverseString(string) {
    var newString = "";
    for (var i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}
console.log(reverseString("hello"));


// Question 7
function findLongestWord(x) {
    const arraySplit = findLongestWord.split();
    const longest = 0;
    for (const i = 0; i < arraySplit.length; i++) {
        if (arraySplit[i].length > longest) {
        } 
    }
    return longest;
}
console.log(findLongestWord(['my, dog, is, brown']));


// Question 8
function filterLongWords(x) {
    const sortArray = x.sort();
    const long = 0;
    for (const i = 1; i < sortArray.length; i++) {
        if (sortArray[i].length > i) {
        }
    }
    return long;
}
console.log(filterLongWords(['i, suck, at, coding']));


// Bonus 1
function logBetween(lowNum, highNum) {
 
}

// Bonus 2
function charactersOccurencesCount() {
  
}

