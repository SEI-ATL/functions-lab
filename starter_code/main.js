// Question 1
function maxOfTwoNumbers(firstNumber, secondNumber) {

    if (firstNumber > secondNumber) {
        console.log(firstNumber);
     } else {
         console.log(secondNumber);
     }

     console.log(maxOfTwoNumbers);
    }    

maxOfTwoNumbers(6,4)



// Question 2
function maxOfThreeNumbers(firstNumber, secondNumber, thirdNumber) {

    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        console.log(firstNumber);
    } else if(secondNumber > firstNumber && secondNumber > thirdNumber) {
        console.log(secondNumber)
    } else {
        console.log(thirdNumber)
    }
    console.log(maxOfThreeNumbers)
}

maxOfThreeNumbers(10,5,3)


// Question 3
function isCharacterAVowel(letter) {
    if(letter === "a" || "e" || "i" || "o" || "u") {
        console.log(true)
    } else {
        console.log(false)
    }
    console.log(isCharacterAVowel)
}



// Question 4
function sumArray(digs) {
	var total = 0;
	for (var i = 0; i < digs.length; i++) {
		total += digs[i];
	}
	return total;
}

console.log(sumArray([1,2,3,4]));



// Question 4
function multiplyArray(digs) {
    var com=1;
    for (var i =0; i<digs.length; i++) {
        com = (com * digs[i]);
    }
    return com;
}

console.log(multiplyArray([1,2,3,4]));


// Question 5
const numberOfArguments = function(){
  for (var i =0; i<function.length; i++) {
      
  }
}



// Question 6
const reverseString = function(word) {
    var letters = '';
    
    for (var i = word.length - 1; i >= 0; i--) {
    	letters += word[i];
    	continue
    }
    return letters;
}
console.log(reverseString("yppah"));
  

// Question 7
function findLongestWord(str) {
    var words = str.split(' ');
    var longest = 0;
  
    for (var i=0;i<words.length;i++) {
      if (words[i].length > longest) {
        longest = words[i].length;
      }
    }
      return longest;
  }
  
}

console.log((findLongestWord["one","two","three"]))


// Question 8
function filterLongWords () {
  
//I'm completely lost on this one, and the last few have been mind bending also.
}


// Bonus 1
function logBetween(lowNum, highNum) {
 
}

// Bonus 2
function charactersOccurencesCount() {
  
}

