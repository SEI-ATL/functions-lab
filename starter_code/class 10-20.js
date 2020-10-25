// RETURN AN EVEN NUMBER

function isEven(num) {
    if (num % 2 !==0) {
        return true;
    } else {
        return false;
    }
}
// OR:

function isEven (num) {
    return num % 2 === 0;
}

// to define something as an object: {}
// array.length!!!
const cars = [];
for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    console.log(car);
}

0 == false // remember this!

// FUNCTION CALLBACKS
function greeting() {
    console.log("Hello, World!");
}

function formalGreeting(informalGreeting) {
    informalGreeting();
    console.log("How are you?");
}

formalGreeting(greeting);

// CALLBACKS
function returnRandom() {
    return (Math.random()*100).toFixed();
}

function yellRandom(randomNumberGenerator) {
    console.log("GENERATOR DEFINITION: ", randomNumberGenerator);
    console.log("YOUR RANDOM NUMBER IS: ", randomNumberGenerator());
}
yellRandom(reuturnRandom);

// Timing functions *take* callbacks by defintion!

function alarm() {
    console.log("Wake up!");
}
setTimeout(alarm, 10000);

function sayHello(name) {
    let msg = 'Hello ${name}';
    console.log(name);
}
setTimeout(sayHello, 5000, 'Patrick');

// setInterval = repetitions

function annoy() {
    console.log('Are we there yet?');
}

setInterval(annoy, 1000);

let firstResult = add(2,2); // letting a function result be stored as a variable

// ITERATORS: built in Array functions: forEach, map, filter, reduce
// 1. declare the array 2. call an iterator on the array 3. pass a function to the iterator 4. get results
// forEach: a basic/standard replacement for a for loop.

const friends = ["Markus", "Tim", "Ilias", "Elie"];

for (let i = 0; i < friends.length; i++) {
    console.log("Hello, " + friends[i] + "!");
}
// using the forEach iterator:
friends.forEach(function (buddy) {
    console.log('Hello, ${buddy}!"');
});

//sei1019 is an array of student names
sei1019.forEach(function(eachStudent) {
    console.log(eachStudent);
});

// map: use values from one array to build a new array.

const names = ["A", "B", "C"];

const cased [];
for (let i = 0; i < names.length; i++) {
    cased.push(names[i].toUpperCase);
}
console.log(cased);

const cased = names.map(function (person)) {
    return person.toUpperCase();
}

// filter: returns a subset of the original array by iterating through the original array
// mod 2 (remained when you divide by 2)
const isEven = function (name) {
    return name.length % 2 === 0;
};
const isOdd = function (name) {
    return name.length % 2 !== 0;
}
// split into two arrays, log in console
const evenLengthNames = names.filter(isEven);
const oddLengthNames = names.filter(isOdd);

console.log(evenLengthNames);
console.log(oddLengthNames);

// reduce: iterates over an array and turns it into one, accumulated value
// argument 1: accumulated value/total 2: 

const friends = ["Markus", "Tim", "Ilias", "Elie"];
const add = function(total, new) {
    return total + new;
}

const sum = nums.reduce(add, 10);
console.log(sum);

// map: 
sei1019.map((eachStudent) => {
    if (eachStudent.length > 4) {
        return '${eachStudent} 1';
    } else {
return 'no';
    }
});