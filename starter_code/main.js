// Question 1
function maxOfTwoNumbers(n) {
    if (n1 > n2) {
        console.log(n1 +' is greater than ' + n2);
    } 
    else {
        console.log(n2 + ' is the greater number of two');
    }
}
let n1=23
let n2=07
maxOfTwoNumbers();
   

// Question 2
function maxOfThree() {
    console.log(Math.max(4,5,8));
}

// Question 3
function isCharacterAVowel(x) {
    x = x.toUpperCase()
    let result = false
        if( x == "A" || x == "E" || x == "I" || x == "O" || x == "U" ) {
            result = true;
        }
        return result 
}
console.log(isCharacterAVowel("a"));

// Question 4
function sum(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
console.log(sum([1,2,3,4]));

// Question 4
function multiplyArray(numbers) {
    var total = 1;
    for (var i = 0; i < numbers.length; i++) {
        total = (total * numbers[i]);
    }
    return total;
}
console.log(multiply([1,2,3,4]));

// Question 5
const numberOfArguments = function(){
    console.log(arguments)
    return arguments.length
}
numberOfArguments(1,2);

// Question 6
function reverseString(hello) {
    hello= hello.split('')
    console.log(hello)
    hello= hello.reverse()
    console.log(hello)
    return hello.join('')
}
console.log(reverseString('hello'));

// Question 7
function findLongestWord (words) {
    let longestWord = '';
    for(i = 0; i < word.length; i++){
        if (words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }
    return longestWord

}
const words = ['go', 'vote', 'November']
console.log(findLongestWord(words));

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
console.log(filterLongWords(5,['go','vote','November', 'because']));

// Bonus 1
function logBetween(lowNum, highNum) {
 
}

// Bonus 2
function charactersOccurencesCount() {
  
}

