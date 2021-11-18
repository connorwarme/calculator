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
const equals = document.querySelector('button.equals');
equals.addEventListener('click', e => {
    if (operatorValue == `` || firstValue == `` || numberString == `` ) {
        alert(`Calculator needs a number, operator, and a number to function!`);
    } else if (operatorValue == `divide` && Number(numberString) == 0) {
        alert(`Calculator can't compute! (No division by 0.)`)
    } else {
    let solution = operate(operatorValue, Number(firstValue), Number(numberString));
    let solutionRounded = Math.round(solution * 100) / 100;
    console.log(solutionRounded);
    display.textContent = `${solutionRounded}`;
    tally = solutionRounded;
    }
});
// give clear button listener + function
const clear = document.querySelector('button.clear');
clear.addEventListener('click', e => {
    firstValue = ``;
    numberString = ``;
    operatorValue = ``;
    tally = ``;
    checkDecimal(numberString);
    display.textContent = ``;
})
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
const backspace = document.querySelector('button.backspace');
backspace.addEventListener('click', e => {
    numberString = numberString.slice(0, -1);
    display.textContent = `${numberString}`;
})
// add keyboard support - still learning/working on it
const allowedKeyCodes = [61, 173, 88, 190, 191, 8, 13]
// const checkChar = function(event) {
//     console.log(event.returnValue);
//     for (i=0; i<allowedKeyCodes.length; i++) {
//         if (allowedKeyCodes[i] = event.keyCode) {
//             event.returnValue = true;
//         }
//     }
//     if (event.keyCode >= 48 || event.keyCode <= 58) {
//         event.returnValue = true;
//     } else {
//         event.returnValue = false;
//     }
// }
const numberKeys = function(e) {
        numberString += `${e.key}`;
        numbersFn();
}
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

const checkValue = function() {
    if (operatorValue !== `` && firstValue !== `` && numberString !== ``) {
        tally = operate(operatorValue, Number(firstValue), Number(numberString));
    } else {
    };
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
    console.log(e.key);
    if (e.key >= 0 && e.key <= 9) {
        numberKeys(e);
    } 
    else if (e.key == '/' || e.key == 'x' || e.key == '-' || e.key == '+') {
        operatorKeys(e);
    }
});