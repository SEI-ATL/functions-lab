// Question 1
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// At first, I thought we had to account for identical numbers and non-numerical entries, but after doing the other questions, I'm pretty sure we're supposed to only limit ourselves to the possibility of unique numerical entries. However, I wanted to keep this for my future reference.

// function maxOfTwoNumbers(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     } else if (num2 > num1) {
//         return num2;
//     } else if (num1 === num2) {
//         return "These numbers are identical.";
//     } else {
//         // In case the input were not numbers:
//         return undefined;
//     }
// }


// Question 2
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else if (num3 > num1 && num3 > num2) {
        return num3;
    }
}

// Ditto my notes for the previous question. I definitely accounted for way too many scenarios initially.

// function maxOfThree(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return num1;
//     } else if (num2 > num1 && num2 > num3) {
//         return num2;
//     } else if (num3 > num1 && num3 > num2) {
//         return num3;
//     } else if (num1 === num2 === num3) {
//         return "These numbers are identical.";
//     } else if (num1 === num2 || num2 === num3 || num1 === num3) {
//         // In case two numbers were the same:
//         if (num1 > num2) {
//             return num1;
//         } else if (num2 > num3) {
//             return num2;
//         } else if (num3 > num1) {
//             return num3;
//     } else {
//            // In case the input were not numbers:
//            return undefined;
//     }
// }


// Question 3
function isCharacterAVowel(char) {
    let lower = char.toLowerCase();
    if (lower === 'a' || lower === 'e' || lower === 'i' || lower === 'o' || lower === 'u') {
        return true;
    } else {
        return false;
    }
}

// Question 4
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}


// Question 4
function multiplyArray(numbers) {
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }
    return product;
}


// Question 5
const numberOfArguments = function() {
    return arguments.length;
}


// Question 6
const reverseString = function (string) {
    let list = string.split('');
    let newList = [];
    for (let i = 0; i < list.length; i++) {
        newList.push(list[list.length -1 - i]);
    }
    let newString = newList.join('');
    return newString;
}


// Question 7
function findLongestWord (list) {
    let word = '';
    for (let i = 0; i < list.length; i++) {
        if (list[i].length > word.length) {
            word = list[i];
        }
    }
    return word.length;
}


// Question 8
function filterLongWords (words, i) {
    let newWords = [];
    for (let j = 0; j < words.length; j++) {
        if (words[j].length > i) {
            newWords.push(words[j]);
        }
    }
    return newWords;
}


// Bonus 1
function logBetween(lowNum, highNum) {
    if (lowNum <= highNum) {
        for (let i = lowNum; i <= highNum; i++) {
            console.log(i);
        }
    }
}

// I'm annoyed that I can't avoid displaying the result of calling console.log on the function as "undefined." Perhaps I could have avoided that if I added a final "return true" statement?

// Bonus 2
function charactersOccurencesCount(string) {
    let characters = {};
    let lower = string.toLowerCase();
    for (let i = 0; i < lower.length; i++) {
        if (!(lower[i] in characters)) {
            characters[lower[i]] = 1;
        } else {
            characters[lower[i]] += 1;
        }
    }
    return characters;
}

// I really thought I'd get this one. Maybe I over-nested?


 // First round of test cases:
console.log(`1. Max of (3, 5): ${maxOfTwoNumbers(3, 5)}`);
console.log(`2. Max of (10, 4, 17); ${maxOfThree(10, 4, 17)}`);
console.log(`3. Is 'a' a vowel? ${isCharacterAVowel('a')}`);
console.log(`4a. Sum of [1, 2, 3, 4]: ${sumArray([1, 2, 3, 4])}`);
console.log(`4b. Product of [1, 2, 3, 4]: ${multiplyArray([1, 2, 3, 4])}`);
console.log(`5. Number of arguments of ('a', 'b', 'c'): ${numberOfArguments('a', 'a', 'c')}`);
console.log(`6. Reverse string of 'Every single one': ${reverseString('Every single one')}`);
console.log(`7. Length of longest word in ['apple', 'eat', 'dinner']: ${findLongestWord(['apple', 'eat', 'dinner'])}`);
console.log(`8. Filter words longer than 4 in ['every', 'ant', 'is', 'evil']: ${filterLongWords(['every', 'ant', 'is', 'evil'], 4)}`);
console.log(`B1. Display log of numbers between 3 and 5: ${logBetween(3, 5)}`);
console.log(`B2. Occurence of characters in 'super': ${charactersOccurencesCount('super')}`);

// Second round of test cases:
console.log(`1. Max of (8, 2): ${maxOfTwoNumbers(8, 2)}`);
console.log(`2. Max of (57, -35, 17); ${maxOfThree(57, -35, 17)}`);
console.log(`3. Is 'E' a vowel? ${isCharacterAVowel('E')}`);
console.log(`4a. Sum of [2, 3, 5, 7]: ${sumArray([2, 3, 5, 7])}`);
console.log(`4b. Product of [2, 3, 5, 7]: ${multiplyArray([2, 3, 5, 7])}`);
console.log(`5. Number of arguments of ('a', 'b', 'c', 1, 7): ${numberOfArguments('a', 'a', 'c', 1, 7)}`);
console.log(`6. Reverse string of 'Lorem ipso': ${reverseString('Lorem ipso')}`);
console.log(`7. Length of longest word in ['potato', 'elephant', 'owl']: ${findLongestWord(['potato', 'elephant', 'owl'])}`);
console.log(`8. Filter words longer than 5 in ['vegetable', 'fruit', 'pie', 'cake', 'ignorant']: ${filterLongWords(['vegetable', 'fruit', 'pie', 'cake', 'ignorant'], 5)}`);
console.log(`B1. Display log of numbers between -7 and 2: ${logBetween(-7, 2)}`);
console.log(`B2. Occurence of characters in 'Nonsense time': ${charactersOccurencesCount('Nonsense time')}`);