// Question 1
function maxOfTwoNumbers(x,y) {
    if (x > y){
        return x+" is greater"
    }else if(x < y){
        return y+" is greater"
    }else{
        return `${x} and ${y} are equal`
    }

}
console.log(maxOfTwoNumbers(7,4))

// Question 2
function maxOfThree(x,y,z) {
    let myArray = [x,y,z]
    return Math.max.apply(null, myArray)
}
console.log(maxOfThree(5,2,7))

// Question 3
function isCharacterAVowel(x) {
    if (x === ("a" || "e" || "i" || "o" || "u")){
        return true
    } else if (x === "y"){
        return "Sometimes 'y'"
    }else{
        return false
    }
}
console.log(isCharacterAVowel("b"))

// Question 4
function sumArray(xArray) {
    let currentTotal = 0
    for (let i in xArray){
        currentTotal += xArray[i]
    }
    return currentTotal
}
let myArray = [1,2,3,4]
console.log(sumArray(myArray))

// Question 4
function multiplyArray(xArray) {
    let currentTotal = 1
    for (let i in xArray){
        currentTotal *= xArray[i]
    }
    return currentTotal
}
console.log(multiplyArray(myArray))

// Question 5
const numberOfArguments = function(){
    return arguments.length
}
console.log(numberOfArguments(0,1,2,3,4,5,6,7,8))

// Question 6
const reverseString = function (str){
    // let splitString = str.split("")
    // let reverseArray = splitString.reverse()
    // let joinArray = reverseArray.join("")
    // return joinArray

    //chained the methods together
    return str.split("").reverse().join("");
};
console.log(reverseString("kimora"))


// Question 7
function findLongestWord(xArray) {
    let longest = ""
    for (let i = 0; i < xArray.length; i++) {
        if (xArray[i].length > longest.length){
            longest = xArray[i]
        }else{
            null
        }
    }
    return "The longest word is "+longest+", it's character count is "+longest.length
}
let strArray = ["name","age","height","hobby","goal"]
console.log(findLongestWord(strArray))

// Question 8
function filterLongWords(xArray, i) {
    let longerArray = []
    for (let word in xArray){
        if (xArray[word].length > i){
            longerArray.push(xArray[word])
        }else{
            null
        }
    }
    return longerArray
}
console.log(filterLongWords(strArray,4))

// Bonus 1
function logBetween(lowNum, highNum) {
    let x = lowNum
    highNum = highNum + 1
    while (x < highNum){
        console.log(x)
        x++
    }
     
}
logBetween(2,5)

// Bonus 2
function charactersOccurencesCount(str) {
    let strObj = {}
    let strArray = str.split("")
    strObj.str = strArray
    console.log(strArray)
    console.log(strObj)
    // unfinished
}
charactersOccurencesCount("paul williams")
