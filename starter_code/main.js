// Question 1
function max(firstNumber, secondNumber){
  
    if (firstNumber > secondNumber) {
       console.log(firstNumber + " is larger than " + secondNumber);
    } else {
        console.log(firstNumber + " is less than " + secondNumber);
    }
    return;
  
}
max(79,118);



// Question 2
function maxOfThree(num1, num2, num3) {     
    return Math.max (num1, num2, num3); 
}
  
console.log (maxOfThree (11,19,48));



// Question 3
function vowelChecker (char) {
  
    if (char === 'a', 'e', 'i', 'o', 'u') {
        return "The character is a Vowel";
    }
    else {
    return "The character is a Consonant";
    }
}
  
console.log (vowelChecker ("e"));

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
function multiply(numbers) {
	var total = 1;
	for (var i = 0; i < numbers.length; i++) {
		total = (total * numbers[i]);
	}
	return total;
}

console.log(multiply([1,2,3,4]));


// Question 5
var numberOfArguments = function(){
console.log(arguments)  
return arguments.length

}
console.log(numberOfArguments(1,2));


// Question 6
function reverseString(hello) {
    hello= hello.split('')
    console.log(hello)
    hello= hello.reverse()
    console.log(hello)
    return hello.join('')
}
console.log(reverseString('hello'))

// Question 7
function findLongestWord (words) {
  let longestWord = '';
  for (i = 0; i < words.length; i++){
      if (words[i].length > longestWord.length){
          longestWord = words[i];
      }
  } 
  return longestWord
}
const words = ['hello', 'goodbye', 'morning']
console.log(findLongestWord(words))

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

