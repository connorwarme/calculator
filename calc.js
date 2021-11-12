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
// give buttons value
const numberButtons = Array.from(document.querySelectorAll('button.numbers'));
console.log(numberButtons);
const giveValue = function(i) {
    return [i].setAttribute("value", `${i}`)
}
numberButtons.forEach(giveValue(i));
const display = document.querySelector('div.displaybox');
// working on display value
// const displayValue = ``;
// const numbers = document.querySelector('div.numbers');
// numbers.addEventListener('click', e => {
// e.button.value = displayValue;
// display.textContent = `${displayValue}`;
// })