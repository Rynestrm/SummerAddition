
let display = document.querySelector('h1');
let addUp = document.querySelector('button');

function addToTotal() {
    // getting the first input value and converting it to a number
    let firstNumber = parseInt(document.querySelector('#first').value);
    // getting the h1 element and the innet text and converting it into a number
    let secondNumber = parseInt(document.querySelector('h1').innerText);
    let total = firstNumber + secondNumber;
    display.textContent = total;
}

addUp.addEventListener('click', addToTotal);
