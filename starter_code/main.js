// Question 1

function maxOfTwoNumbers(a, b) {
    if (a < b) { 
        return b;
    } else {
        return a;
    }
}
console.log("The max of the two numbers in the function is ", maxOfTwoNumbers(23,42));


// Question 2
function maxOfThree(a,b,c) {
    if (a <= b && b <= c) {
        return c ;
     } else if (b <= a && c <= a) {
         return a;
     } else {
         return b;
     }
     } 
     console.log("The max of the three numbers in function is ", maxOfThree(4,67,48));
// Question 3

function isCharacterAVowel(letter) {
    if (letter == 'A' || letter == 'E' || letter == 'I' || letter == 'I' || letter == 'O' || letter == 'U') {
        return true;
    } else { 
        return false;
    }
}
console.log(isCharacterAVowel('p'));

// Question 4
function sumArray() {

    const sumArray = [3, 9, 1, 4];
    let sum = 0;
    for (let i = 0; i < sumArray.length; i++) {
        sum = sum + sumArray[i];
    }
    return sum;
}

console.log(sumArray()); 


// Question 4
function multiplyArray() {

    const multArray= [10, 2, 1, 5];
    let mul = 1;
    for (let i = 0; i < multArray.length; i++) {
        mul = mul * multArray[i];
    }
    return mul;
}
console.log(multiplyArray());


// Question 5
const numberOfArguments = function(){
     return arguments.length;
 }
console.log(numberOfArguments("argument1", "argument2", "argument3", "argument4")) 
console.log(numberOfArguments(38, true, false, "hello i am an argument", true, false))

// Question 6
const reverseString = function (string1){
    return string1.split('').reverse().join('')
}
console.log(reverseString('hello hi'))
// shows: olleh ih
console.log(reverseString('olleh ih'))
// Shows:  hello hi
console.log(reverseString('car'))
// shows: rac
console.log(reverseString('rac'))
// Shows:  car

// Question 7
function findLongestWord(array) {
    let word = '';
    for (let i = 0; i <array.length; i++) {
        if (word.length < array[i].length) {
            word = array[i];
        }
    }
    return word;
}
console.log(findLongestWord(['check','queen','checkmate', 'chessboard']));
console.log(findLongestWord(['mercedes','hondo','toyota', 'audi']));
console.log(findLongestWord(['salmon','red', 'pink']));


// Question 8
function filterLongWords(wordLength, array) {
    let newArray = [];
    for (let i = 0; i <array.length; i++) {
        if (array[i].length > wordLength) {
                newArray.push(array[i]);
                }
        }
    return newArray;
}
console.log(filterLongWords(5,['check','queen','checkmate', 'chessboard']));
console.log(filterLongWords(7,['mercedes','hondo','toyota', 'audi']));
console.log(filterLongWords(5,['salmon','red', 'pink', 'black', 'purple']));
