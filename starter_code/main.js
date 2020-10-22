// Question 1
function maxOfTwoNumbers(x, y) {
    return console.log(Math.max(x, y));

}
maxOfTwoNumbers(1, 3)
// Question 2
function maxOfThree(x, y, z) {
    return console.log(Math.max(x, y, z));
}
// Question 3
maxOfThree(6,2,79)
function isCharacterAVowel(letter) {
    const vowels = 'aeiou';
    let consonants = [];

    for (var i = 0; i < letter.length; i++){
        if (vowels.includes(letter[i])) {
            return console.log(`${letter} is a vowel!`)

        } else {
            return console.log(`${letter} is NOT vowel!`)
        }
        }
    }
isCharacterAVowel('s')

// Question 4 Come back to to be able to sum any list **
let numList = [1, 2, 3, 4]
function sumArray(list) {
    for (let i = 0; i < numList.length; i++){
        let total = numList[0] + numList [1] + numList[2] + numList[3];
        return console.log(`The total of the array is ${total}.`)
    }
}
sumArray(numList)


// // Question 4
// function multiplyArray() {
    let numList2 = [1, 2, 3, 4]
    function multiplyArray(list) {
        for (let i = 0; i < numList2.length; i++){
            let total = numList2[0] * numList2 [1] * numList2[2] * numList2[3];
            return console.log(`The total of the array is ${total}.`)
        }
    }
multiplyArray(numList2)


// // Question 5
// var numberOfArguments = function(one, two, three, four){
  
// }



// Question 6
var reverseString = function (str){
    var splitString = str.split("")
    var reverseStringV = splitString.reverse()
    var reversedString = reverseStringV.join('')
    return console.log(reversedString)
  
};
reverseString('Hello')

// Question 7
function findLongestWord (str, str2) {
    var strList = str.split("")
    var strList2 = str2.split("")
    if (strList.length > strList2.length){
        return console.log(`${str} is longer than ${str2}`)
    }else{
        return console.log(`${str2} is longer than ${str}`)
    }
  
}
findLongestWord("Rabbit","Dolphin")

// Question 8
const xList = ['dog', 'rabbit', 'shark', 3]
function filterLongWords (xList) {
    let yList = []
    for (let i = 0; i < xList.length; i++ ){
        yList.push(xList[i].pop)
        let tempList = xList
    }
    return console.log(yList)
}
filterLongWords(xList)


// // Bonus 1
// //??????


// // Bonus 2
// function charactersOccurencesCount() {
  
// }