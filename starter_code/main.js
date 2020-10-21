// Question 1
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript. Do some Googling to figure this out if you forget how conditionals work.
function maxOfTwoNumbers(m, n) {
    if (m > n) {
        return m;
    } else if (n > m) {
        return n;
    } else {
        return "equal, " + m;
    }
}
//tests
console.log('Max of two:');
console.log(maxOfTwoNumbers(3, 5), 5);
console.log(maxOfTwoNumbers(-3, -4), -3);
console.log(maxOfTwoNumbers(-1, 25), 25);
console.log(maxOfTwoNumbers(0, 7), 7);
console.log(maxOfTwoNumbers(8, 8), "equal, 8");

// Question 2
//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
function maxOfThree(x, y, z) {
    const nums = [y, z];
    let maxNum = x;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] > maxNum) {
            maxNum = nums[i];
        }
    }
    return maxNum;
}

//tests
console.log('Max of three:');
console.log(maxOfThree(1, 2, 3), 3);
console.log(maxOfThree(1, 4, 3), 4);
console.log(maxOfThree(1, -2, -3), 1);
console.log(maxOfThree(1, 1, 1), 1);
console.log(maxOfThree(1, 1, 2), 2);

// Question 3
// Write a function isCharacterAVowel that takes a character (i.e., a string of length 1) and returns true if it is a vowel and false otherwise.
function isCharacterAVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    char = char.toLowerCase();
    if (char.length > 1) { return "Please enter a single character." }
    if (char === 'y') { return ("sometimes: " + char); }
    if (vowels.indexOf(char) != -1) {
        return true;
    } else {
        return false;
    }

}

//tests
console.log('Is vowel:');
console.log(isCharacterAVowel('a'), true);
console.log(isCharacterAVowel('i'), true);
console.log(isCharacterAVowel('f'), false);
console.log(isCharacterAVowel('y'), "Sometimes: y");
console.log(isCharacterAVowel('ab'), "Please enter a single character.");

// Question 4
//Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
function sumArray(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum
}

function multiplyArray(array) {
    let mult = array[0];
    for (i = 1; i < array.length; i++) {
        mult = mult * array[i];
    }
    return mult
}

//tests
console.log('Sum and multiply array:');
console.log(sumArray([1, 2, 3, 4]), 10);
console.log(multiplyArray([1, 2, 3, 4]), 24);
console.log(sumArray([-1, 2, 3, 4]), 8);
console.log(multiplyArray([1, 2, -3, 4]), -24);



// Question 5
//Write a function that returns the number of arguments passed to the function when called.
var numberOfArguments = function() {
    return arguments.length;
}

//tests
console.log('Number of args:');
console.log(numberOfArguments(1, 2, 3, 4), 4);
console.log(numberOfArguments(1, 2), 2);
console.log(numberOfArguments(), 0);
console.log(numberOfArguments("1", "2", "3", "4"), 4);



// Question 6
//Define a function reverseString that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj".
var reverseString = function(str) {
    return str.split('').reverse().join('');
    /* as a loop
    let revStr = "";
    for (i = 0; i < str.length; i++) {
        revStr = str[i] + revStr;
    }
    return revStr;
    */

};

//tests
console.log('Reverse string:');
console.log(reverseString('Reverse this!'), '!siht esreveR');

// Question 7
//Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array
function findLongestWord(strArray) {
    let longestWord = "";
    if (strArray.length === 0) { return 'Array empty'; }
    for (let word of strArray) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord.length;
}

//tests
console.log('Find longest word:');
console.log(findLongestWord(['a', 'ab', 'abc']), 3);
console.log(findLongestWord(['a', 'ab', 'ab']), 2);
console.log(findLongestWord(['a', 'abc', 'ab']), 3);
console.log(findLongestWord(['a', 'a', 'a']), 1);
console.log(findLongestWord(['!', '', '1234', 'ab']), 4);
console.log(findLongestWord([]), 'Array empty');
console.log(findLongestWord(['', '']), 0);



// Question 8 
//Write a function filterLongWords that takes an array of words and a number i and returns a new array of words that are longer than i characters long.
function filterLongWords(strArray, i) {
    const longWords = [];
    for (let word of strArray) {
        if (word.length > i) {
            longWords.push(word);
        }
    }
    if (longWords.length === 0) {
        return 'This is acceptable';
    } else {
        return longWords;
    }
}

//tests
console.log('Long word Filter:');
console.log(filterLongWords(['hello', 'this', 'word', 'is', 'unacceptable'], 4), ['hello', 'unacceptable']);
console.log(filterLongWords(['ok', 'ok', 'ok'], 2), 'This is acceptable');
console.log(filterLongWords(['', ''], 1), 'This is acceptable');

// Bonus 1
//?????

/*For this bonus, you'll have to do some research on objects.

Write a function that takes a string as an argument and returns an object where:
The keys are the characters that occur in the string.
The values are the number of occurrences for each letter, regardless of the case. */

//bonus 2
function charactersOccurencesCount(str) {
    str = str.replace(/ /g, '').toLowerCase();
    //reminder to self: this is replacing all (via tag g) char btwn // with char in ''
    const strObj = {};
    let key = "";
    for (i = 0; i < str.length; i++) {
        key = str[i];
        if (key in strObj) {
            strObj[key] += 1;
        } else {
            strObj[key] = 1;
        }
    }
    return strObj;
}

console.log('Character occurance object:')
console.log(charactersOccurencesCount('this is a test'));
console.log(charactersOccurencesCount('This is a tesT'));
console.log(charactersOccurencesCount('this is a TEST!'));