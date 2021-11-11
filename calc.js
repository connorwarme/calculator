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