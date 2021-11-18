const add = function (a, b) {
    return a + b;
}
const subtract = function (a, b) {
    return a - b;
}
const multiply = function (a, b) {
    return a * b;
}
const divide = function (a, b) {
    return a / b;
}
const operate = function(z, a, b) {
    if (z == `+`) {
        return add(a, b);
    }
    if (z == `-`) {
        return subtract(a, b);
    }
    if (z == `x`) {
        return multiply(a, b);
    }
    if (z == `/`) {
        return divide(a, b);
    } else {
        alert(`You must choose an operator!`);
    }
}
// give number buttons value + listener + display value
let displayValue = ``;
let firstValue = ``;
let numberString = ``;
let tally = ``;
const numbersFn = function() {
    displayValue = `${numberString}`;
    checkDecimal(displayValue);
    display.textContent = `${displayValue}`;
}
const display = document.querySelector('div.displaybox');
const numberButtons = Array.from(document.querySelectorAll('button.numbers'));
console.log(numberButtons);
numberButtons.forEach(function(part, index) {
    numberButtons[index].setAttribute("value", `${index}`);
    numberButtons[index].addEventListener('click', e => {
        numberString += `${e.target.value}`;
        numbersFn();
    })
});
// give operator buttons listener + display value
const operatorFn = function() {
    if (tally == ``) {
    firstValue = `${numberString}`;
    } else {
        firstValue = tally;
        let roundedTally = Math.round(tally * 100) / 100;
        display.textContent = `${roundedTally}`;
    };
    numberString = ``;
}
const operators = Array.from(document.querySelectorAll('button.operators'));
console.log(operators);
let operatorValue = ``;
operators.forEach(function(part, index) {
    operators[index].addEventListener('click', e => {
        checkValue();
        operatorValue = `${e.target.id}`;
        display.textContent = `${e.target.textContent}`;
        console.log(operatorValue);
        operatorFn();
    })
});
// give equals button listener + function + display
const equalsFn = function() {
    if (operatorValue == `` || firstValue == `` || numberString == `` ) {
        alert(`Calculator needs a number, operator, and a number to function!`);
    } else if (operatorValue == `/` && Number(numberString) == 0) {
        alert(`Calculator can't compute! (No division by 0.)`)
    } else {
    let solution = operate(operatorValue, Number(firstValue), Number(numberString));
    let solutionRounded = Math.round(solution * 100) / 100;
    console.log(solutionRounded);
    display.textContent = `${solutionRounded}`;
    tally = solutionRounded;
    }
}
const equals = document.querySelector('button.equals');
equals.addEventListener('click', equalsFn);
// give clear button listener + function
const clearFn = function() {
    firstValue = ``;
    numberString = ``;
    operatorValue = ``;
    tally = ``;
    checkDecimal(numberString);
    display.textContent = ``;
}
const clear = document.querySelector('button.clear');
clear.addEventListener('click', clearFn);
// add possibility for decimals
const period = document.querySelector('button.period');
period.addEventListener('click', e => {
    numberString += `.`;
    console.log(numberString);
    displayValue = numberString;
    display.textContent = `${displayValue}`;
    checkDecimal(displayValue);
});
const checkDecimal = function(input) {
    if (input.indexOf(`.`) > -1) {
        document.querySelector('button.period').disabled = true;
    } else {
        document.querySelector('button.period').disabled = false;
    }
}
// add backspace
const backspaceFn = function() {
    numberString = numberString.slice(0, -1);
    display.textContent = `${numberString}`;
}
const backspace = document.querySelector('button.backspace');
backspace.addEventListener('click', backspaceFn);

// working on keyboard support
const numberKeys = function(e) {
        numberString += `${e.key}`;
        numbersFn();
}
const operatorKeys = function(e) {
    console.log(e.key);
        checkValue();
        operatorValue = `${e.key}`;
        display.textContent = `${e.key}`;
        operatorFn();
}
document.addEventListener('keydown', e => {
    if (e.key == '/') {
        e.preventDefault();
    }
    if (e.key >= 0 && e.key <= 9) {
        numberKeys(e);
    } 
    else if (e.key == '/' || e.key == 'x' || e.key == '-' || e.key == '+') {
        operatorKeys(e);
    }
    else if (e.key == 'Backspace') {
        backspaceFn();
    }
    else if (e.key == 'a' || e.key == 'A' || e.key == 'c' || e.key == 'C') {
        clearFn();
    }
    else if (e.key == 'Enter') {
        equalsFn();
    }
    else {
        e.preventDefault();
    }
});