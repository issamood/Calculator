/*
add function
subtract function
multiply function
divide function

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

//Selecting the buttons, could've used querySelectorAll and use IDs instead, but just focusing on getting the calculator to function
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
const clearBtn = document.querySelector('.clearBtn');
const display = document.querySelector('.display');
const smallDisplay = document.querySelector('.smallDisplay')

let displayNumber = "0"
let smallDisplayNumber = ""
let total = 0;
let currentOperator = "";
let temp = 0;
let tempB = "";
let fromEquals = false;

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
    if ((smallDisplay.textContent).match("=")){
        smallDisplay.textContent = "";
        tempB = displayNumber;
        displayNumber = ""
        fromEquals = true;
    }

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

function operate(operator){
    currentOperator = operator
    if (displayNumber === ""){
        smallDisplay.textContent = addComma(total.toString()) + ` ${operator} `;
    }
    else if (smallDisplayNumber === ""){
        smallDisplayNumber = displayNumber;
        total = convertToNumber(smallDisplayNumber)
    }
    else {
        switch (operator){
            case "+":
                total += convertToNumber(displayNumber);
                break;
            case "-":
                total -= convertToNumber(displayNumber);
                break;
            case "*":
                total = total * convertToNumber(displayNumber);
                break;
            case "/":
                total = total / convertToNumber(displayNumber);
                break;
        }

    }
    
    display.textContent = addComma(total.toString());
    smallDisplay.textContent = addComma(total.toString()) + ` ${operator} `;
    displayNumber = "";
}


addBtn.addEventListener('click', () => operate("+"));

subtractBtn.addEventListener('click', () => operate("-"));

multiplyBtn.addEventListener('click', () => operate("*"));

divideBtn.addEventListener('click', () => operate("/"));

backspaceBtn.addEventListener('click', () => {
    if (displayNumber.length === 1){
        displayNumber = "0"
        display.textContent = displayNumber;
    }
    else {
        displayNumber = displayNumber.replace(displayNumber.charAt(displayNumber.length - 1), '')
        display.textContent = addComma(displayNumber);
    }
})

clearBtn.addEventListener('click', () => {
    displayNumber = "0"
    smallDisplayNumber = ""
    total = 0;
    currentOperator = "";
    temp = 0;
    tempB = "";
    fromEquals = false;

    display.textContent = displayNumber;
    smallDisplay.textContent = "";
});

equalBtn.addEventListener('click', () => {
    if (fromEquals){
        temp = convertToNumber(displayNumber);
        displayNumber = tempB;
    } else {
        temp = total;
    }

    if (currentOperator === "+"){
        total = temp + convertToNumber(displayNumber);
        smallDisplay.textContent = `${addComma(temp)} ${currentOperator} ${addComma(displayNumber)} =`
        display.textContent = total.toString();
    }
    else if (currentOperator === "-"){
        total = temp - convertToNumber(displayNumber);
        smallDisplay.textContent = `${addComma(temp)} ${currentOperator} ${addComma(displayNumber)} =`
        display.textContent = total.toString();
    }
    else if (currentOperator === "*"){
        total = temp * convertToNumber(displayNumber);
        smallDisplay.textContent = `${addComma(temp)} ${currentOperator} ${addComma(displayNumber)} =`
        display.textContent = total.toString();
    }
    else if (currentOperator === "/"){
        total = temp / convertToNumber(displayNumber);
        smallDisplay.textContent = `${addComma(temp)} ${currentOperator} ${addComma(displayNumber)} =`
        display.textContent = total.toString();
    }

    fromEquals = false;
})