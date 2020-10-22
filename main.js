
// Question 1
function maxOfTwoNumbers(num1, num2) {
    if (num1 === num2) {
        return "The numbers are equivalent";
    } else if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// Question 2
function maxOfThree(num1, num2, num3) {
    if (maxOfTwoNumbers(num1, num2) === num3) {
        return "Two numbers of equal value";
    } else if (maxOfTwoNumbers(num1, num2) > num3) {
        return maxOfTwoNumbers(num1, num2);
    } else {
        return num3;
    }
}

// Question 3
function isCharacterAVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < vowels.length; i++) {
        if (char.toLowerCase() === vowels[i]) {
            return "Character is a vowel";
        } else {
            return "Character is not a vowel";
        }
    }
}

// Question 4
function sumArray(array) {
    let sum = 0;
    if (array.length < 2) {
        return array[0];
    } else {
        for (i = 0; i < array.length; i++) {
            sum += i;
        } 
        return sum;
    } 
}


// Question 4
function multiplyArray(array) {
    let mult = 1;
    if (array.length < 2) {
        return array[0];
    } else {
        for (i = 0; i < array.length; i++) {
            mult *= array[i];
        } 
        return mult;
    } 
}

// Question 5
const numberOfArguments = function(){
    return arguments.length;
}

// Question 6
const reverseString = function (str){
    let strRev = "";
    for (let i = str.length - 1; i > -1; i--) {
        strRev += str[i];
    }
    return strRev;
};

// Question 7
function findLongestWord (array) {
    array.sort(function(a, b) {return b.length - a.length});
    let results = [array[0]];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length === results[0].length && array[i] != results[0]) {
            results.push(array[i]);
        }
    }
    return results.join(", ");
}



// Question 8
function filterLongWords (array, min) {
    let results = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > min) {
            results.push(array[i]);
        }
    }
    return results;
}


// Bonus 1
function logBetween(lowNum, highNum) {
    let difference = highNum - lowNum;
    if (lowNum < highNum) {
        for (i = 0; i < difference; i++) {
            console.log(lowNum + i);
        }
    } else {
        return "Enter proper input";
    }
    console.log(highNum);
}


// Bonus 2
function charactersOccurencesCount(str) {
    let values = str.split('');
    let repeats = {};
    values.forEach(value => { repeats[value] = (repeats[value] || 0) + 1; });
    return repeats;
}

