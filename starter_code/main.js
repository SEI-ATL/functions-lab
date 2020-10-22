// Question 1
let d = 10;
let e = 20;

function maxOfTwoNumbers() {
    if (d > e) {
        console.log( d +' is the max number.')
    } else if (e > d)
        console.log( e +' is the max number.')
    }

maxOfTwoNumbers();

// Question 2
var a = 101;
var b = 303.5;
var c = 202;

function maxOfThree() {
    if (a > b && a > c) {
        console.log(a + ' is the highest of all three numbers.')
    } else if (b > a && b > c)
        console.log(b + ' is the highest of all three numbers.')
      else if (c > a && c > b)
        console.log(c + ' is the highest of all three numbers.')
}

maxOfThree();

// Question 3
function isCharacterAVowel(x) {
    x = x.toUpperCase()
    let result = false;
    if (x === "A" || x === "E" || x === "I" || x === "O" || x === "U") {
        result = true;
    }
    return result
}
console.log(isCharacterAVowel("a"));

// Question 4
function sumArray(a) {
        var total=0;
        for(var i in a) { 
            total += a[i];
        }
        return total;
    }
    
    var numbers = [1,2,3,4,5]; 
    var totalNumbers= sumArray(numbers);

console.log(totalNumbers)


// Question 4b
function multiplyArray() { //could not figure this one out
}

// Question 5
const numberOfArguments = function(){
  console.log(arguments)
    return arguments.length
}

numberOfArguments(1,2,3,4)

// Question 6
const reverseString = function (str){
    return str.split('').reverse().join('');
    }
    reverseString("Hello Cruel world");

    

// Didnt return errors and understand the code but dont know what to console out.


// Question 7
function findLongestWord (str) {
    return str.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
 
// Didnt return errors but couldnt figure out how to console.log output.


// Question 8
function filterLongWords () {
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const result = words.filter(word => word.length > 6);
    console.log(result);
}
filterLongWords();

// Bonus 1
function logBetween(lowNum, highNum) {
    var array = [];
    //var newArray = array.split(" ")
    for (var i = lowNum; i <= highNum; i += 1) 
    return array;
  }
  
  console.log(logBetween(3, 20))


// Bonus 2
function charactersOccurencesCount() {}

