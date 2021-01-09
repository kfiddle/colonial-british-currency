const formButton = document.getElementById('formButton');
const formFields = document.getElementById('formFields');

const pounds = document.getElementById("pounds");
const shillings = document.getElementById("shillings")
const pence = document.getElementById("pence");

const poundsList = [];
const shillingsList = [];
const penceList = [];


makeNewForm();


function submitForms() {
    for (let i = 0; i < poundsList.length; i++) {
        let formData = {

            pounds: parseInt(poundsList[i].value),
            shillings: parseInt(shillingsList[i].value),
            pence: parseInt(penceList[i].value)
        }

        $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "/add-form",
                data: JSON.stringify(formData),
                dataType: 'json'
            }
        )

    }
}

function makeNewForm() {

    let formDiv = document.createElement('div');
    let poundsInput = document.createElement('input');
    let shillingsInput = document.createElement('input');
    let penceInput = document.createElement('input');

    poundsInput.setAttribute('placeholder', 'pounds');
    poundsInput.setAttribute('type', 'text');
    poundsInput.setAttribute('name', 'pounds');

    shillingsInput.setAttribute('placeholder', 'shillings');
    shillingsInput.setAttribute('type', 'text');
    shillingsInput.setAttribute('name', 'shillings');

    penceInput.setAttribute('placeholder', 'pence');
    penceInput.setAttribute('type', 'text');
    penceInput.setAttribute('name', 'pence');

    poundsList.push(poundsInput);
    shillingsList.push(shillingsInput);
    penceList.push(penceInput);

    formDiv.appendChild(poundsInput);
    formDiv.appendChild(shillingsInput);
    formDiv.appendChild(penceInput);
    formFields.appendChild(formDiv);
}

