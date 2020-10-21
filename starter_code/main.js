function unesi(){
    var userInput = document.getElementById('userInput').value;
    document.getElementById('ispis').innerHTML = userInput;
    return false;
}

function results(){
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let c = parseInt(document.getElementById('c').value);
    let char = document.getElementById('char').value;
    let n = document.getElementById('n').value;
    let arr = [a, b, c]
    let list = document.getElementById('list').value.split(',');
    let str = document.getElementById('str').value;

    document.getElementById('maxOfTwoNumbers').innerHTML = maxOfTwoNumbers(a, b);
    document.getElementById('maxOfThree').innerHTML = maxOfThree(a, b, c);
    document.getElementById('isCharacterAVowel').innerHTML = isCharacterAVowel(char);
    document.getElementById('sumArray').innerHTML = sumArray(arr);
    document.getElementById('multiplyArray').innerHTML = multiplyArray(arr);
    document.getElementById('numberOfArguments').innerHTML = numberOfArguments(...list);
    document.getElementById('reverseString').innerHTML = reverseString(str);
    document.getElementById('findLongestWord').innerHTML = findLongestWord(list);
    document.getElementById('filterLongWords').innerHTML = filterLongWords(n, list);
    document.getElementById('characterOccurencesCount').innerHTML = characterOccurencesCount(str);

}


// Question 1
maxOfTwoNumbers = (a,b) => {
    return Math.max(a,b);
}

// Question 2
maxOfThree = (a,b,c) => {
    return Math.max(a,b,c);
}

// Question 3
isCharacterAVowel = (char) => {
    const vowels = ['A', 'E', 'I', 'O', 'U']
    if(vowels.includes(char.toUpperCase())){
        return true;
    }
    else {
        return false;
    }
}

// Question 4
sumArray = (arr) => {
    let x=0;
    for (let i=0; i < arr.length; i++) {
        x += arr[i]
    };
    return x;
}


// Question 4
multiplyArray = (arr) => {
    let x=1;
    for (let i=0; i < arr.length; i++) {
        x *= arr[i]
    };
    return x;
}


// Question 5
numberOfArguments = (list) => {

    return numberOfArguments.length;
}


// Question 6
reverseString = (str) => {
    let x ='';
    for (let i = str.length - 1; i >= 0; i--) {
        x += str[i];
    }
    return x;
};


// Question 7
findLongestWord = (arr) => {
    let x = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > x.length){
            x = arr[i];
        }
    }
    return x;

}


// Question 8
filterLongWords = (n, arr) => {
    let x = []
    for (let i=0; i<arr.length; i++) {
        if (arr[i].length > n) {
            x.push(arr[i]);
        }
    }
    return x;

}


// Bonus 1
characterOccurencesCount = (str) => {
    // create a dictionary
    // for each char
    //check if in dict
    // +1 if in dict
    //else add new key to dict

    let x = {};
    for (let i = 0; i< str.length; i++){
        if (x[str[i]]){
            x[str[i]] += 1;
        }
        else {
            x[str[i]] = 1;
        }
    }
    return JSON.stringify(x);

}


