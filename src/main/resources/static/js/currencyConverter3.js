const forms = Array.from(document.querySelectorAll(".forms"));
const addCurrencyButtons = Array.from(document.querySelectorAll(".addCurrency"));
const calculateButtons = Array.from(document.querySelectorAll(".calculate"));
const poundsDivs = Array.from(document.querySelectorAll(".pounds"));
const shillingsDivs = Array.from(document.querySelectorAll(".shillings"));
const penceDivs = Array.from(document.querySelectorAll(".pence"));


const poundFields = [];
const shillingsFields = [];
const penceFields = [];

for (let i = 0; i < forms.length; i++) {
    addOneField(i);
    if (i < 2) {
        addOneField(i);
    }
}

function addOneField(whichAccordion) {
    let formDiv = document.createElement('div');
    formDiv.setAttribute("class", "currencyTypes")
    let poundsInput = document.createElement('input');
    poundsInput.setAttribute("class", "input");
    poundFields.push(poundsInput);
    let shillingsInput = document.createElement('input');
    shillingsInput.setAttribute("class", "input");
    shillingsFields.push(shillingsInput);
    let penceInput = document.createElement('input');
    penceInput.setAttribute("class", "input");
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
    forms[whichAccordion].appendChild(formDiv);
}

for (let i = 0; i < addCurrencyButtons.length; i++) {
    addCurrencyButtons[i].addEventListener('click', function () {
        addOneField(i)
    });
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

    // displayForm() {
    //     this.convertAmount();
    //
    //     let resultPounds = document.createElement('li');
    //     let resultShillings = document.createElement('li');
    //     let resultPence = document.createElement('li');
    //     let totalPence = document.createElement('li');
    //
    //     resultPounds.innerText = this.pounds;
    //     resultShillings.innerText = this.shillings;
    //     resultPence.innerText = this.pence;
    //     totalPence.innerText = this.amountInPence();
    //
    //     answer.appendChild(resultPounds);
    //     answer.appendChild(resultShillings);
    //     answer.appendChild(resultPence);
    //     answer.appendChild(totalPence);
    // }
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
        let totalsForm = new Form(totalPounds, totalShillings, totalPence);
        totalsForm.convertAmount();
        poundsDivs[0].innerHTML = "Pounds:" + "<br>" + totalsForm.pounds;
        shillingsDivs[0].innerHTML = "Shillings:" + "<br>" + totalsForm.shillings;
        penceDivs[0].innerHTML = "Pence:" + "<br>" + totalsForm.pence;

    }

    if (j === "subtract") {

        totalPounds = convertedPounds[2];
        totalShillings = convertedShillings[2];
        totalPence = convertedPence[2];

        for (let i = 3; i < convertedPounds.length; i++) {
            totalPounds -= convertedPounds[i];
            totalShillings -= convertedShillings[i];
            totalPence -= convertedPence[i];
        }

        console.log(convertedPounds[0]);

        let totalsForm = new Form(totalPounds, totalShillings, totalPence);
        totalsForm.convertAmount();


        poundsDivs[1].innerHTML = "Pounds:" + "<br>" + totalsForm.pounds;
        shillingsDivs[1].innerHTML = "Shillings:" + "<br>" + totalsForm.shillings;
        penceDivs[1].innerHTML = "Pence:" + "<br>" + totalsForm.pence;
    }
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


for (let i = 0; i < calculateButtons.length; i++) {
    calculateButtons[i].addEventListener('click', function () {
        decideOperation(i);
    })
}

function decideOperation(i) {
    if (i === 0) {
        addOrSubtractTheFields("add");
    } else if (i === 1) {
        addOrSubtractTheFields("subtract")
    } else if (i === 2) {
        multiplyOrDivide("multiplier");
    } else {
        multiplyOrDivide("divide");
    }
}




