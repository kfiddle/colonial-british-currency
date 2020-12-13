
const heading = document.getElementById("testHeading");
const body = document.getElementById('body');
const form = document.getElementById('form');
const multiplesResult = document.getElementById('multipleTransactTotal');


const pounds1 = document.getElementById('pounds1');
const shillings1 = document.getElementById('shillings1');
const pence1 = document.getElementById('pence1');

const pounds2 = document.getElementById('pounds2');
const shillings2 = document.getElementById('shillings2');
const pence2 = document.getElementById('pence2');

const form1 = [pounds1, shillings1, pence1];
const form2 = [pounds2, shillings2, pence2];


const submitButton = document.getElementById('submitButton');
const totalsHeading = document.getElementById('totalsHeading');
// const firstAmount = document.getElementById('firstAmount');
// const secondAmount = document.getElementById('secondAmount');

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
// const times = document.getElementById('plus');
// const divide = document.getElementById('plus');


heading.style.color = "red";
body.style.backgroundColor = "blue";
form.style.position = "absolute";
form.style.left = "100px";
submitButton.style.position = "absolute";
submitButton.style.top = "450px";
submitButton.style.left = "200px";
totalsHeading.style.position = "absolute";
totalsHeading.style.left = "500px;"
totalsHeading.style.top = "500px";


submitButton.addEventListener('click', convertToPence);
plus.addEventListener('click', add);
minus.addEventListener('click', subtract);
// times.addEventListener('click', multiply);
// divide.addEventListener('click', division);


function convertToPence() {
    let testNumber = 1;
    let pounds = 0;
    let shillings = 0;
    let pence = 0;

    if ((pounds1).value !== "") {
        pounds = parseInt((pounds1).value);
    }

    if ((shillings1).value !== ""){
        shillings = parseInt((shillings1).value);
    }

    if ((pence1).value !== ""){
        pence = parseInt((pence1).value);
    }

    let totalInPence = (pounds * 240) + (shillings * 12) + pence;
    let poundsOut = ~~(totalInPence/240);
    let shillingsOut = ~~((totalInPence % 240) / 20);
    let penceOut = totalInPence - (poundsOut * 240) - (shillingsOut * 12);

    let totalPence = document.createElement('li');
    let displayPounds = document.createElement('li');
    let displayShillings = document.createElement('li');
    let displayPence = document.createElement('li');

    totalPence.innerHTML = "total in pence : " + totalInPence;
    displayPounds.innerText = "pounds : " + poundsOut;
    displayShillings.innerText = "shillings : " + shillingsOut;
    displayPence.innerText = "pence : " + penceOut;

    totalsHeading.appendChild(totalPence);
    totalsHeading.appendChild(displayPounds);
    totalsHeading.appendChild(displayShillings);
    totalsHeading.appendChild(displayPence);

}

function add() {
    // heading.innerText = formRender(form2);
    let total = formRender(form1) + formRender(form2);
    convertBackAndDisplay(total);
}

function subtract() {
    let total = formRender(form1) - formRender(form2);
    convertBackAndDisplay(total);


}



function convertBackAndDisplay(totalInPence) {
    let poundsOut = ~~(totalInPence/240);
    let shillingsOut = ~~((totalInPence % 240) / 20);
    let penceOut = totalInPence - (poundsOut * 240) - (shillingsOut * 12);

    let totalPence = document.createElement('li');
    let displayPounds = document.createElement('li');
    let displayShillings = document.createElement('li');
    let displayPence = document.createElement('li');

    totalPence.innerHTML = "total in pence : " + totalInPence;
    displayPounds.innerText = "pounds : " + poundsOut;
    displayShillings.innerText = "shillings : " + shillingsOut;
    displayPence.innerText = "pence : " + penceOut;

    multiplesResult.appendChild(displayPounds);
    multiplesResult.appendChild(displayShillings);
    multiplesResult.appendChild(displayPence);
}


function totalPenceConvert(pounds, shillings, pence) {
    return (pounds * 240) + (shillings * 12) + pence;
}

function formRender(j) {

    let pounds = 0;
    let shillings = 0;
    let pence = 0;

    if (j[0].value !== "") {
        pounds = parseInt(j[0].value);
    }

    if (j[1].value !== "") {
        shillings = parseInt(j[1].value);
    }

    if (j[2].value !== "") {
        pence = parseInt(j[2].value);
    }

    return totalPenceConvert(pounds, shillings, pence);
}





// int totalPence(){
//     return (pound * 240) + (shilling * 12) + pence;

// pound = totalAmountInPence / 240;
// shilling = (totalAmountInPence % 240) / 12;
// pence = totalAmountInPence - (pound * 240) - (shilling * 12);
