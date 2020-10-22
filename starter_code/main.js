// Question 1
function maxOfTwoNumbers(x, y) {
    if(x > y) {
        return x; 
    } else {
        return y; 
    }

}

console.log(maxOfTwoNumbers(10, 6));

// Question 2
function maxOfThree(x, y, z) {
    if(x > y && x > z) {
        return x;
    } else if(y > z && y > x) {
        return y;
    } else if(z > x && z > y) {
        return z;
    }
}

console.log(maxOfThree(10, 4, 20));

// Question 3
function isCharacterAVowel() {
    let myVowels = ['a', 'e', 'i', 'o', 'u']
    for( let i = 0; i < myVowels.length; i++)
    if(i === myVowels) {
        return true;
    } else if(i !== myVowels) {
        return false;
    }

}
console.log(isCharacterAVowel());

// Question 4
function sumArray(myValues) {
    return myValues.reduce(function(a, b) { 
        return a + b; 
    });
}

const myValues = [1, 2, 3, 4, 5];
console.log(sumArray(myValues));
    
    


// Question 4
function multiplyArray(myArray) {
    return myArray.reduce(function(a, b) {
        return a * b;
    });

}

const myArray = [1, 2, 3, 4, 5];
console.log(multiplyArray(myArray));

// Question 5
var numberOfArguments = function(a, b, c) {
    
}

numberOfArguments(1, 2, 3);



// Question 6
var reverseString = function()





// Question 7
function findLongestWord(arr) {



}


// Question 8
function filterLongWords() {
       
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

