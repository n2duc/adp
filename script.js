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
            err.innerText = `Vui long nhap du lieu so`;
            result.innerText = "";
        } else {
            if (isNaN(a)) {
                err.innerText = `Vui long nhap a o dang so`;
                result.innerText = "";
            } else if (isNaN(b)) {
                err.innerText = `Vui long nhap b o dang so`;
                result.innerText = "";
            }
        }
    }
}
function multifly() {
    let a = parseFloat(numA.value);
    let b = parseFloat(numB.value);
    let c = a * b;
    checkNumber(a, b, c);
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
    let c = a - b;
    checkNumber(a, b, c);
}
function divide() {
    let a = parseFloat(numA.value);
    let b = parseFloat(numB.value);
    let c = (a / b).toFixed(3);
    if (b === 0) {
        err.innerText = `b phai khac 0`;
    } else {
        checkNumber(a, b, c);
    }
}
