/*
add function
subtract function
multiply function
divide function

create function named operate that takes an operator
and 2 numbers and calls one of the above functions on the numbers.

create a basic html calculator with buttons for each digit
each of the above functions and an 'equals' key

create display for calculator

create 'clear' button

create functions that populate the display when you click the
numbers buttons. You should be storing the display value
in a variable somewhere for use in the next step

Make the calculator work, You need to store the first number that is
input into the calculator when a user presses an operator and also
save which operation has been chosen and then operate() on them
when the user presses the equals key

At this point i should have code that can populate the display
so when operate has been called, the display is updated with 
the solution to the operation

hardest part of the project, figure out how to store all the values
and call the operate function with them.

should not be evaluating more than a single pair of numbers at a time
round answers with long decimals so it doesnt overflow the screen
pressing '=' before entering all of the numbers or an operator
can cause problems!

pressing clear should wipe out any existing data.. make sure the
user is really starting fresh after pressing clear

nest if the user tries to divide by 0 and give them a snarky message

extra*
add backspace button
add a decimal point button
add keyboard support
make it look nice!

*/

function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return (a / b);
}

function operate(operator, a, b){
    switch (operator){
        case "add":
            return add(a,b);
            break;
        case "subtract":
            return subtract(a,b);
            break;
        case "multiply":
            return multiply(a,b);
            break;
        case "divide":
            return divide(a,b);
            break;
    }
}

const addBtn = document.querySelector('.addBtn');
const subtractBtn = document.querySelector('.subtractBtn');
const multiplyBtn = document.querySelector('.multiplyBtn');
const divideBtn = document.querySelector('.divideBtn');
const zeroBtn = document.querySelector('.zeroBtn');
const oneBtn = document.querySelector('.oneBtn');
const twoBtn = document.querySelector('.twoBtn');
const threeBtn = document.querySelector('.threeBtn');
const fourBtn = document.querySelector('.fourBtn');
const fiveBtn = document.querySelector('.fiveBtn');
const sixBtn = document.querySelector('.sixBtn');
const sevenBtn = document.querySelector('.sevenBtn');
const eightBtn = document.querySelector('.eightBtn');
const nineBtn = document.querySelector('.nineBtn');
const equalBtn = document.querySelector('.equalBtn');
const backspaceBtn = document.querySelector('.backspaceBtn');
const clearBtn = document.querySelector('clearBtn');
const display = document.querySelector('.display');
const smallDisplay = document.querySelector('.smallDisplay')

let displayNumber = "0"
let smallDisplayNumber = ""
let total = 0;

function addComma(number){
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

zeroBtn.addEventListener('click', ()=>{
    if (displayNumber !== "0"){
        displayNumber = displayNumber.concat("0")
        display.textContent = addComma(displayNumber);
    }
})

function updateNumber(number){
    if (displayNumber === "0"){
        displayNumber = number;
    }
    else {
        displayNumber = displayNumber.concat(number);
    }
    display.textContent = addComma(displayNumber);
}

function convertToNumber(number){
    let integer = number.replaceAll(',', '')
    return parseInt(integer);
}

oneBtn.addEventListener('click', () => updateNumber("1"));
twoBtn.addEventListener('click', () => updateNumber("2"));
threeBtn.addEventListener('click', () => updateNumber("3"));
fourBtn.addEventListener('click', () => updateNumber("4"));
fiveBtn.addEventListener('click', () => updateNumber("5"));
sixBtn.addEventListener('click', () => updateNumber("6"));
sevenBtn.addEventListener('click', () => updateNumber("7"));
eightBtn.addEventListener('click', () => updateNumber("8"));
nineBtn.addEventListener('click', () => updateNumber("9"));


addBtn.addEventListener('click', () => {
    if (displayNumber === ""){
        smallDisplay.textContent = addComma(total.toString()) + ' + ';
    }
    else if (smallDisplayNumber === ""){
        smallDisplayNumber = displayNumber;
        total = convertToNumber(smallDisplayNumber)
    }
    else {
        total += convertToNumber(displayNumber);
    }
    smallDisplay.textContent = addComma(total.toString()) + ' + ';
    displayNumber = "";

})