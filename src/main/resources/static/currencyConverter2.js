const forms = document.getElementById('forms');
const addFieldButton = document.getElementById('addField');
const drapesPull = document.getElementById('drapes');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const times = document.getElementById('times');
const divide = document.getElementById('divide');
const calculate = document.getElementById('calculate');
const numberWindow = document.getElementById('numberWindow');
const numberInput = document.createElement('input');
const answer = document.getElementById('answer');

let operation;
let mousePressed;
let mouseX;
let mouseY;
let deltaY;

const poundFields = [];
const shillingsFields = [];
const penceFields = [];

addAField();
addFieldButton.addEventListener('click', addAField);

drapesPull.addEventListener('mousedown', function (x) {
    mousePressed = true;
    mouseX = x.clientX;
    mouseY = x.clientY;
});

drapesPull.addEventListener('mousemove', function (x) {
    if (mousePressed === true) {
        deltaY = x.clientY - mouseY;
        console.log(deltaY);
    }
    if (deltaY > 5) {
        addAField();
    }
    if (deltaY < -5) {
        subtractAField();
    }

});

plus.addEventListener('click', function () {
    addOrSubtractTheFields("add");
});

minus.addEventListener('click', function () {
    addOrSubtractTheFields("subtract");
});

times.addEventListener('click', function () {
    operation = "multiplier";
    openNumberWindow(operation);
});

divide.addEventListener('click', function () {
    operation = 'divisor';
    openNumberWindow(operation);
});

calculate.addEventListener('click', function () {
    multiplyOrDivide(operation);
});
;


function addAField() {
    let formDiv = document.createElement('div');
    let poundsInput = document.createElement('input');
    poundFields.push(poundsInput);
    let shillingsInput = document.createElement('input');
    shillingsFields.push(shillingsInput);
    let penceInput = document.createElement('input');
    penceFields.push(penceInput);

    poundsInput.setAttribute('placeholder', 'pounds');
    poundsInput.setAttribute('type', 'text');
    shillingsInput.setAttribute('placeholder', 'shillings');
    shillingsInput.setAttribute('type', 'text');
    penceInput.setAttribute('placeholder', 'pence');
    shillingsInput.setAttribute('type', 'text');

    formDiv.appendChild(poundsInput);
    formDiv.appendChild(shillingsInput);
    formDiv.appendChild(penceInput);
    forms.appendChild(formDiv);
}

function subtractAField() {
    forms.removeChild(forms.lastChild);
}

class Form {
    constructor(pounds, shillings, pence) {
        this.pounds = pounds;
        this.shillings = shillings;
        this.pence = pence;
    }

    amountInPence() {
        return (this.pounds * 240) + (this.shillings * 12) + this.pence;
    }

    convertAmount() {
        let totalInPence = this.amountInPence();
        let poundsOfficial = ~~(totalInPence / 240);
        let remainingPence = totalInPence % 240;
        let shillingsOfficial = ~~(remainingPence / 12);
        let penceOfficial = remainingPence % 12;

        this.pounds = poundsOfficial;
        this.shillings = shillingsOfficial;
        this.pence = penceOfficial;
    }

    displayForm() {
        this.convertAmount();

        let resultPounds = document.createElement('li');
        let resultShillings = document.createElement('li');
        let resultPence = document.createElement('li');
        let totalPence = document.createElement('li');

        resultPounds.innerText = this.pounds;
        resultShillings.innerText = this.shillings;
        resultPence.innerText = this.pence;
        totalPence.innerText = this.amountInPence();

        answer.appendChild(resultPounds);
        answer.appendChild(resultShillings);
        answer.appendChild(resultPence);
        answer.appendChild(totalPence);
    }
}

function createFormFromPence(totalInPence) {
    let poundsOfficial = ~~(totalInPence / 240);
    let remainingPence = totalInPence % 240;
    let shillingsOfficial = ~~(remainingPence / 12);
    let penceOfficial = remainingPence % 12;

    return new Form(poundsOfficial, shillingsOfficial, penceOfficial);
}


function changeToNumbers(list) {
    let convertedList = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].value === "") {
            convertedList[i] = 0;
        } else {
            convertedList[i] = parseInt(list[i].value);
        }
    }
    return convertedList;
}

function addOrSubtractTheFields(j) {
    let convertedPounds = changeToNumbers(poundFields);
    let convertedShillings = changeToNumbers(shillingsFields);
    let convertedPence = changeToNumbers(penceFields);

    let totalPounds = 0;
    let totalShillings = 0;
    let totalPence = 0;

    if (j === "add") {
        for (let i = 0; i < convertedPounds.length; i++) {
            totalPounds += convertedPounds[i];
            totalShillings += convertedShillings[i];
            totalPence += convertedPence[i];
        }
    }

    if (j === "subtract") {

        totalPounds = convertedPounds[0];
        totalShillings = convertedShillings[0];
        totalPence = convertedPence[0];

        for (let i = 1; i < convertedPounds.length; i++) {
            totalPounds -= convertedPounds[i];
            totalShillings -= convertedShillings[i];
            totalPence -= convertedPence[i];
        }
    }

    let totalsForm = new Form(totalPounds, totalShillings, totalPence);
    totalsForm.displayForm();
}

function openNumberWindow(operandType) {

    numberInput.setAttribute('type', 'text');
    numberInput.setAttribute('placeholder', operandType);
    numberWindow.appendChild(numberInput);
}


function multiplyOrDivide(operationType) {
    let answer;
    let multiplierOrDivisor = parseFloat(numberInput.value);

    if (poundFields[0].value === "") {
        pounds[0].value = 0;
    }
    if (shillingsFields[0].value === "") {
        shillingsFields[0].value = 0;
    }
    if (penceFields[0].value === "") {
        penceFields[0].value = 0;
    }

    let convertedPounds = parseInt(poundFields[0].value);
    let convertedShillings = parseInt(shillingsFields[0].value);
    let convertedPence = parseInt(penceFields[0].value);

    let amount = new Form(convertedPounds, convertedShillings, convertedPence);
    let totalPence = amount.amountInPence();

    if (operationType === "multiplier") {
        answer = createFormFromPence(totalPence * multiplierOrDivisor);
    } else {
        answer = createFormFromPence(totalPence / multiplierOrDivisor);
    }
    answer.displayForm();
}


// box.addEventListener('mousedown', function (x) {
//     mousePressTrue = true;
//     mouseX = x.clientX;
//     mouseY = x.clientY;
// });
//
// box.addEventListener('mousemove', function(x) {
//     if (mousePressTrue === true) {
//         deltaY = x.clientY - mouseY;
//         box.style.height = 300 + deltaY + "px";
//     }
// });
//
// box.addEventListener('mouseup', function() {
//     mousePressTrue = false;
// })




