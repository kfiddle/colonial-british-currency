const forms = document.getElementById('forms');
const formAmounts = [];
const addFieldButton = document.getElementById('addField');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const answer = document.getElementById('answer');


addFieldButton.addEventListener('click', addAField);
// plus.addEventListener('click', addTheFields);
// minus.addEventListener('click', subtractTheFields);


addAField();

function addAField(){
    let formDiv = document.createElement('div');
    let poundsInput = document.createElement('input');
    let shillingsInput = document.createElement('input');
    let penceInput = document.createElement('input');

    poundsInput.setAttribute('placeholder', 'text');
    shillingsInput.setAttribute('placeholder', 'text');
    penceInput.setAttribute('placeholder', 'text');

    formDiv.appendChild(poundsInput);
    formDiv.appendChild(shillingsInput);
    formDiv.appendChild(penceInput);
    forms.appendChild(formDiv);
    let formTotal = formRender(poundsInput, shillingsInput, penceInput);
    formAmounts.push(formTotal);
    let testing = document.createElement('li');
    testing.innerText = formTotal;
    answer.appendChild(testing);

}

function totalPenceConvert(pounds, shillings, pence) {
    return (pounds * 240) + (shillings * 12) + pence;
}

function formRender(poundsInput, shillingsInput, penceInput) {

    let pounds = 0;
    let shillings = 0;
    let pence = 0;

    if (poundsInput.value !== "") {
        pounds = parseInt(poundsInput.value);
    }

    if (shillingsInput.value !== "") {
        shillings = parseInt(shillingsInput.value);
    }

    if (penceInput.value !== "") {
        pence = parseInt(penceInput.value);
    }

    return totalPenceConvert(pounds, shillings, pence);
}







// function addTheFields(){
//     let total = 0;
//     for (let i = 0; i < formAmounts.length; i++){
//         total += formAmounts[i];
//     }
//     let ourResult = document.createElement('li');
//     let testing = document.createElement('li');
//     testing.innerText = formAmounts.length;
//     ourResult.innerText = total;
//     answer.appendChild(ourResult);
//     answer.appendChild(testing);
// }



