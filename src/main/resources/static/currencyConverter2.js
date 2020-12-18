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

class Form {
    constructor(pounds, shillings, pence) {
        this.pounds = pounds;
        this.shillings = shillings;
        this.pence = pence;
    }
     amountInPence() {
     return (pounds * 240) + (shillings * 20) + pence;

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

        if (poundFields[i].value !== "") {
            totalPounds += parseInt(poundFields[i].value);
        }
        if (shillingsFields[i].value !== "") {
            totalShillings += parseInt(shillingsFields[i].value);
        }
        if (penceFields[i].value !== "") {
            totalPence += parseInt(penceFields[i].value);
        }
    }
    console.log(totalPounds);
    console.log(totalShillings);
    console.log(totalPence);
    console.log((totalPounds * 240) + (totalShillings * 12) + totalPence);
    convertBackAndDisplay((totalPounds * 240) + (totalShillings * 12) + totalPence);
}

function subtractTheFields() {
    for (let i = 0; i < poundFields.length; i ++){
        if (poundFields[i].value === ""){
            poundFields[i].value = 0;
        }
        if (shillingsFields[i].value === ""){
            shillingsFields[i].value = 0;
        }
        if (penceFields[i].value === ""){
            penceFields[i].value = 0;
        }
    }

    let firstForm = new Form(parseInt(poundFields[i].value), parseInt(shillingsFields[i].value), parseInt(penceFields[i].value));

    let totalPence = 0;
    for (let i = 0; i < poundFields.length; i++){




    }



}





