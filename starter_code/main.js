// Question 1
function maxOfTwoNumbers(num1, num2) {
    let max = Math.max(num1, num2) 
    return max;

}
console.log( maxOfTwoNumbers(1,2))
// Question 2
function maxOfThree(num3, num4, num5) {
    let max = Math.max(num3, num4, num5)
    return max;
}
console.log(maxOfThree(3, 4, 5))

// Question 3
function isCharacterAVowel(letter1) {
    let vowel = ['A', 'E', 'I', 'O', 'U']
    for (let i = 0; i<5; i++){
        if (vowel[i] == letter1.toUpperCase()) {
            console.log('Character is a vowel')
            return true        
        }
           
    } 
    return false
    }
    isCharacterAVowel('a')

// Question 4
function sumArray(a) {
    var total=0 
    for ( var i in a) {
        total += a[i];
    }    

console.log(totalNumbers)

}



// Question 4
function multiplyArray(a) {
    var numbers = [4,5,6]; 
    var totalNumbers= multiplyArray(numbers);
    var total=0 
    for ( var i in a) {
        total *= a[i];
    }    
console.log(totalNumbers)

}


// Question 5
var numberOfArguments = function(){
    console.log(arguments)
    return arguments.length
}
numberOfArguments(1,2)


// Question 6
var reverseString = function (){
  
};


// Question 7
function findLongestWord (words) {
  let findLongestWord = ""
  for (i = 0; i < words.length; i++){
      if(words[i].length > findLongestWord.length){

      }
  }
  return longestWord
}
const words = ['hello', 'goodbye', 'morning']

// Question 8
function filterLongWords () {
  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

