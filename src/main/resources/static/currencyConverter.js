
const heading = document.getElementById("testHeading");
const body = document.getElementById('body');
const form = document.getElementById('form');
const poundsIn = document.getElementById('poundsIn');
const shillingsIn = document.getElementById('shillingsIn');
const penceIn = document.getElementById('penceIn');
const submitButton = document.getElementById('submitButton');
const totalsHeading = document.getElementById('totalsHeading');

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


function convertToPence() {

    let pounds = 0;
    let shillings = 0;
    let pence = 0;

    if (poundsIn.value !== undefined) {
        pounds = parseInt(poundsIn.value);
    }

    if (shillingsIn.value !== undefined){
        shillings = parseInt(shillingsIn.value);
    }

    if (penceIn.value !== undefined){
        pence = parseInt(penceIn.value);
    }

    let totalInPence = (pounds * 240) + (shillings * 12) + pence;
    let poundsOut = ~~(totalInPence/240);
    let shillingsOut = ~~((totalInPence % 240) / 12);
    let penceOut = totalInPence - (poundsOut * 240) - (shillingsOut * 12);

    let totalPence = document.createElement('li');
    let displayPounds = document.createElement('li');
    let displayShillings = document.createElement('li');
    let displayPence = document.createElement('li');

    totalPence.innerHTML = "total in pence : " + totalInPence;
    displayPounds.innerText = "pounds : " + pounds;
    displayShillings.innerText = "shillings : " + shillings;
    displayPence.innerText = "pence : " + pence;

    totalsHeading.appendChild(totalPence);
    totalsHeading.appendChild(displayPounds);
    totalsHeading.appendChild(displayShillings);
    totalsHeading.appendChild(displayPence);


}

// function convert() {
//     let pounds = poundsIn.value;
//     let shillings = shillingsIn.value;
//     let pence = parseInt(penceIn.value);
//
//     let poundsInPence = pounds * 240;
//     let shillingsInPence = shillings * 12;
//
//     let totalInPence = shillingsInPence + poundsInPence + pence;
//     let officialPounds = ~~(totalInPence / 240);
//
//     let displayPounds = document.createElement('li');
//     displayPounds.innerHTML = "total pounds: " + pounds;
//     totalsHeading.appendChild(displayPounds);
// }

// int totalPence(){
//     return (pound * 240) + (shilling * 12) + pence;

// pound = totalAmountInPence / 240;
// shilling = (totalAmountInPence % 240) / 12;
// pence = totalAmountInPence - (pound * 240) - (shilling * 12);
