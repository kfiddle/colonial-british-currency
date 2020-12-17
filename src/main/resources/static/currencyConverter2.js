const forms = document.getElementById('forms');
const addFieldButton = document.getElementById('addField');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const answer = document.getElementById('answer');

const poundFields = [];
const shillingsFields = [];
const penceFields = [];

addFieldButton.addEventListener('click', addAField);
plus.addEventListener('click', addTheFields);
minus.addEventListener('click', subtractTheFields);

addAField();

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


function convertBackAndDisplay(totalInPence) {
    let poundsOut = ~~(totalInPence / 240);
    let remainingPence = totalInPence % 240;
    let shillingsOut = ~~(remainingPence / 12);
    let penceOut = remainingPence % 12;

    let totalPence = document.createElement('li');
    let displayPounds = document.createElement('li');
    let displayShillings = document.createElement('li');
    let displayPence = document.createElement('li');

    totalPence.innerHTML = "total in pence : " + totalInPence;

    displayPounds.innerText = "pounds : " + poundsOut;
    displayShillings.innerText = "shillings : " + shillingsOut;
    displayPence.innerText = "pence : " + penceOut;

    answer.appendChild(displayPounds);
    answer.appendChild(displayShillings);
    answer.appendChild(displayPence);
}


function addTheFields() {
    let totalPounds = 0;
    let totalShillings = 0;
    let totalPence = 0;

    for (let i = 0; i < poundFields.length; i++) {

        if (typeof poundFields[i].value !== "undefined") {
            totalPounds += parseInt(poundFields[i].value);
        }
        if (typeof shillingsFields[i].value !== "undefined") {
            totalShillings += parseInt(shillingsFields[i].value);
        }
        if (typeof penceFields[i].value !== "undefined") {
            totalPence += parseInt(penceFields[i].value);
        }
    }
    convertBackAndDisplay((totalPounds * 240) + (totalShillings * 12) + totalPence);
}

function subtractTheFields() {
    let minusPounds = parseInt(poundFields[0].value);
    let minusShillings = parseInt(shillingsFields[0].value);
    let minusPence = parseInt(penceFields[0].value);

    if (typeof poundFields[0].value === "undefined") {
        minusPounds = 0;
    }
    if (typeof shillingsFields[0].value === "undefined") {
        minusShillings = 0;
    }
    if (typeof penceFields[0].value === "undefined") {
        minusPence = 0;
    }

    for (let i = 1; i < poundFields.length; i++) {
        if (typeof poundFields[i].value === "undefined") {
            poundFields[i] = 0;
        } else {
            poundFields[i] = poundFields[i].value;
        }
        minusPounds -= poundFields[i];

        if (typeof shillingsFields[0].value === "undefined") {
            shillingsFields[i] = 0;
        } else {
            shillingsFields[i] = shillingsFields[i].value;
        }
        minusShillings -= shillingsFields[i];

        if (typeof penceFields[0].value === "undefined") {
            penceFields[i] = 0;
        } else {
            penceFields[i] = penceFields[i].value;
        }
        minusPence -= penceFields[i];
        console.log(minusPounds);
        console.log(minusShillings);
        console.log(minusPence);
        convertBackAndDisplay((minusPounds * 240) + (minusShillings * 12) + (minusPence));

    }
}



