var addBtnElem = document.getElementById('add');
var subBtnElem = document.getElementById('subtract');
var pElem = document.getElementById('p');
var inputElem = document.getElementById('input');
var grandTotal = 0;

addBtnElem.addEventListener('click', sumUp);
subBtnElem.addEventListener('click', subTrak);

function sumUp() {
    var x = inputElem.value;
    if ((isNaN(x))) {
        inputElem.value = '';
    }
    inputElem.value = '';
    grandTotal += parseInt(x);
    pElem.innerText = grandTotal;
}

function subTrak() {
    var y = inputElem.value;
    if ((isNaN(y))) {
        inputElem.value = '';
    }
    inputElem.value = '';
    grandTotal -= parseInt(y);
    pElem.innerText = grandTotal;
    if (grandTotal < 0) {
        pElem.style.color = 'red';
    } else {
        pElem.style.color = 'black';
    }
}

