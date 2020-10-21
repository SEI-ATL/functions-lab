// Question 1
function maxOfTwoNumbers(num1, num2) {
    if (num1 < num2) {
        return num2; 
    } else if (num1 > num2) {
        return num1;
    } else {
        console.log('The numbers are equal')
    }
}
console.log(maxOfTwoNumbers(14,4));

// Question 2
function maxOfThree(num1, num2, num3) {
    console.log(Math.max(num1, num2, num3));

}
maxOfThree(4,6,8);

// Question 3
function isCharacterAVowel(letter) {
    if (letter == 'A' || letter == 'E' || letter == 'I' || letter == 'I' || letter == 'O' || letter == 'U') {
        return true;
    } else { 
        return false;
    }
}
console.log(isCharacterAVowel('A'));

// Question 4
function sumArray(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
 console.log(sum);
}
list = [1,2,3]
sumArray(list);

// Question 4
function multiplyArray(list) {
    let product = 1;
    for (let i = 0; i < list.length; i++) {
        product *= list[i];
    }
 console.log(product);
}
list = [2,2]
multiplyArray(list);


// Question 5
var numberOfArguments = function(x,y,z){
    console.log(numberOfArguments.length);
}
numberOfArguments();



// Question 6
var reverseString = function(str){
    let split = str.split('');
    let reverse = split.reverse();
    let join = reverse.join('');
    return join;
}
console.log(reverseString('hey'));


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
console.log(findLongestWord(['hello','goodbye','dictionary']));


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
console.log(filterLongWords(6,['hello','goodbye','dictionary']));


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

