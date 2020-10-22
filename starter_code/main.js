// Question 1
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

maxOfTwoNumbers(5, 10);

// Question 2
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
};

// Question 3
function isCharacterAVowel(x) { 
    if (x === 'a', 'e', 'i', 'o', 'u') {
        return true;
    } else {
        return false;
    }
}

const numbers = [1, 2, 3, 4];
// Question 4
function sumArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

// Question 4


let product = 1
function multiplyArray(numbers) {
    
    for (let i = 0; i < numbers.length; i++ ) {
        product *= numbers[i];
    }
    return product;
};


 console.log(multiplyArray(15, 2));


// Question 5
const numberOfArguments = function(arguments) {
    arguments = numberOfArguments.length;
    return arguments
}



// Question 6
const reverseString = function (str) {
    return str.split('').reverse().join('');
};


// Question 7

let words = ['hello', 'world', 'I', 'am', 'excited'];
    function findLongestWord (words) {
        let longest = ""
        for (let i = 0; i < words.length; i++) {
            if (longest.length < words[i].length) {
                longest = words[i];
            }
        }
        return longest.length;
}
console.log(findLongestWord(words));

// Question 8
function filterLongWords () {
  
}


// Bonus 1
function logBetween(lowNum, highNum) {
 
}

// Bonus 2
function charactersOccurencesCount() {
  
}