"use strict";
//Q#1
console.log("Hello Word!");
//Q#2
let Temperture = 20;
if (Temperture >= 20) {
    console.log("it is cold");
}
else {
    console.log("it is not cold");
}
//Q#3
let apple = 10;
let total = apple - 3;
console.log("total", total);
//Q#4
let firstName = "Fareed";
let lastName = "Iqbal";
let FullName = `${firstName} ${lastName}`;
console.log(FullName);
//Q#5
let number = 10;
if (number >= 10) {
    console.log("Yes");
}
else {
    console.log("No");
}
//Q#6
function Area(r) {
    return (3.14) * r ** 2;
}
let area = Area(4);
console.log(area);
//Q#7
for (let x1 = 1; x1 < 50; x1++) {
    if (x1 % 3 == 0) {
        console.log("fizz", x1);
    }
    else if (x1 % 5 == 0) {
        console.log("buzz", x1);
    }
}
//Q#8
const temperatures = [20, 25, 22, 30, 28];
const highestTemperature = Math.max(...temperatures);
console.log("The highest temperature is:", highestTemperature);
//Q#9
let age = 19;
if (age < 18) {
    console.log("You are a minor.");
}
else {
    console.log("You are an adult.");
}
//Q#10
const numberArrays = [1, 2, 3, 4, 5, -3, -4, -5, 6, 0];
const checkNumberPositive = (numberArray) => {
    let count = 0;
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > 0) {
            count = count + 1;
        }
    }
    return count;
};
console.log("count", checkNumberPositive(numberArrays));
//Q#11
function wordsStartingWithA(words) {
    const result = [];
    for (const word of words) {
        if (word.toLowerCase()[0] === 'a') {
            result.push(word);
        }
    }
    return result;
}
const words = ['Fareed', 'Iqbal', 'Ali', 'Ahamd', 'Bilal'];
console.log(wordsStartingWithA(words));
//Q#12
let fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];
console.log("The second last element is:", fruits[fruits.length - 2]);
//Q#20
function findSmallestNumber(array) {
    if (array.length === 0) {
        return null;
    }
    return Math.min(...array);
}
const numbers = [5, 3, 9, 1, 7];
const smallest = findSmallestNumber(numbers);
console.log(smallest);
