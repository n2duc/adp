let result = document.querySelector(".result");
let err = document.querySelector(".error");
let btn = document.querySelectorAll(".operator");
let reset = document.getElementById("reset");
let numA = document.querySelector(".num1");
let numB = document.querySelector(".num2");

const clearInput = () => {
    numA.value = "";
    numB.value = "";
    result.value = "";
    err.innerText = "";
};
const exitApp = () => {
    if (confirm("Are you sure you want to exit?") === true) {
        setTimeout(() => {
            window.close();
        }, 300);
    }
};
function checkNumber(a, b, c) {
    if (!isNaN(c)) {
        result.value = c;
        err.innerText = "";
    } else {
        if (isNaN(a) && isNaN(b)) {
            err.innerText = `Please enter the correct value to perform the calculation.`;
            result.innerText = "";
        } else {
            if (isNaN(a)) {
                err.innerText = `Please enter a numeric value in Number A`;
                result.innerText = "";
            } else if (isNaN(b)) {
                err.innerText = `Please enter a numeric value in Number B`;
                result.innerText = "";
            }
        }
    }
}
function deleteNumber(number) {
    number.value = number.value.substr(0, number.value.length - 1);
}
function add() {
    let a = parseFloat(numA.value);
    let b = parseFloat(numB.value);
    let c = a + b;
    checkNumber(a, b, c);
}
function minus() {
    let a = parseFloat(numA.value);
    let b = parseFloat(numB.value);
    let c = (a - b).toFixed(4);
    checkNumber(a, b, c);
}
function multiply() {
    let a = parseFloat(numA.value);
    let b = parseFloat(numB.value);
    let c = a * b;
    checkNumber(a, b, c);
}
function divide() {
    let a = parseFloat(numA.value);
    let b = parseFloat(numB.value);
    let c = (a / b).toFixed(4);
    (b === 0) ? err.innerText = `Cannot division by 0` : checkNumber(a, b, c);
}