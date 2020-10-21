// Question 1
function maxOfTwoNumbers(num1, num2) {
  if (num1 >= num2) {
    return num1;
  } else {
    return num2;
  }
}

// Question 2
function maxOfThree(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

// Question 3
function isCharacterAVowel(character) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    if (character.toLowerCase() === vowels[i]) {
      return true;
    }
  }
  return false;
}

// Question 4
function sumArray(array) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    answer = answer + array[i];
  }
  return answer;
}


// Question 4
function multiplyArray(array) {
  let answer = 1;
  for (let i = 0; i < array.length; i++) {
    answer = answer * array[i];
  }
  return answer;
}


// Question 5
var numberOfArguments = function(test){
 console.log(test);
}



// Question 6
var reverseString = function (){

};


// Question 7
function findLongestWord () {

}


// Question 8
function filterLongWords () {

}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {

}

console.log(numberOfArguments(1, 2, 3));