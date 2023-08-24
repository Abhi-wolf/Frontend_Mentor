const billAmountField = document.querySelector('#bill_amount');
const customTip = document.getElementById('custom_tip');
const noPeople = document.getElementById('people');
const tipAmountPerPerson = document.getElementById('tip_amount_per_person');
const totalAmountPerPerson = document.getElementById('total_amount_per_person');
const reset = document.querySelector('.reset');
const tipBoxes = document.querySelectorAll('.tip_box');


console.log(tipAmountPerPerson)



// console.log(billAmountField);
var tipPer = 0;
var people = 1;
var billAmount = 0;

//  GEETING INITIAL BILL AMOUNT
billAmountField.addEventListener('input', () => {
    if (billAmountField.value > 0) {
        billAmount = billAmountField.value;
        billAmount = Number(billAmount);
    }
    else {
        console.log('bill amount is 0');
        billAmountField.style.borderColor = "red";
    }
    calculateTotal();

})

//  GETTING TIPS
function tipsFun(curr) {
    console.log(curr);

    console.log(tipBoxes);
    tipBoxes.forEach(box => {
        box.style.backgroundColor = "hsl(183, 100%, 15%)";
        box.style.color = "white"
    })

    curr.style.backgroundColor = "hsl(172, 67%, 45%)";
    curr.style.color = "hsl(183, 100%, 15%)";
    tipPer = curr.querySelector('.tip').textContent;
    console.log(tipPer);
    tipPer = Number(tipPer);
    calculateTotal();
}


//  CUSTOM TIPS
customTip.addEventListener('input', () => {

    console.log(tipBoxes);
    tipBoxes.forEach(box => {
        box.style.backgroundColor = "hsl(183, 100%, 15%)";
        box.style.color = "white"
    })

    if (customTip.value > 0) {
        tipPer = customTip.value;
        console.log(tipPer);
    }

    else {
        console.log('tip amount is 0');
    }
    calculateTotal();
})


//  NO OF PEOPLES PRESENT
noPeople.addEventListener('input', () => {
    if (noPeople.value > 0) {
        people = noPeople.value;
    }
    else {
        console.log('people is 0');
    }
    calculateTotal();
})


// TOTAL CALCULATION
function calculateTotal() {
    console.log(tipPer);
    console.log(people);
    console.log(billAmount);

    if(billAmount < 1) {
        billAmountField.style.borderColor = "red";
        billAmountField.style.borderRadius = "7px";
    }

    else {
        billAmountField.style.borderColor = "white";
    }

    let totalTip = 0;
    totalTip = (tipPer / 100) * billAmount;
    let totalAmount = 0;
    totalAmount = billAmount + totalTip;
    console.log(totalTip);
    console.log(totalAmount);
    let tipPP = 0;
    let totalPP = 0;

    if (totalTip == 0) {
        tipAmountPerPerson.textContent = 0;
        // totalAmountPerPerson.textContent = totalAmount / people;
    }

    else {
        tipPP = totalTip / people;
        tipPP = tipPP.toFixed(2);
        tipAmountPerPerson.textContent = tipPP;
        // totalAmountPerPerson.textContent = totalAmount / people;
    }

    if (totalAmount == 0) {
        // tipAmountPerPerson.textContent = totalTip / people;
        totalAmountPerPerson.textContent = 0;
    }

    else {
        totalPP = totalAmount / people;
        totalPP = totalPP.toFixed(2);
        // tipAmountPerPerson.textContent = totalTip / people;
        totalAmountPerPerson.textContent = totalPP;
    }
}

reset.addEventListener('click', () => {
    location.reload();
})

