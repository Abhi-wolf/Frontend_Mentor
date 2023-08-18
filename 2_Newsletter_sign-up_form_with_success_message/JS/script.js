const subscribeBtn = document.querySelector('.subscribe-btn')
console.log(subscribeBtn);
const succesMess = document.querySelector('.success');
console.log(succesMess);
const inputform = document.querySelector('.container');
console.log(inputform);
const emailId = document.getElementById('email-confor');
console.log(emailId);
const dismissBtn = document.querySelector('.dismiss-btn');
console.log(dismissBtn);


function validateEmail(email) {
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

subscribeBtn.addEventListener('click', () => {
    const emailVal = document.getElementById('emailId')
    console.log(emailVal.value);

    if (validateEmail(emailVal.value)) {
        console.log(true);
        emailId.textContent = emailVal.value;
        inputform.style.display = "none";
        succesMess.style.display = "block";
        emailVal.value = "";
    }
    else {
        console.log(false);
        emailVal.style.border = "2px solid red";
        emailVal.style.color = "hsl(4, 100%, 67%)";
        const invalidLabel = document.querySelector('.invalid');
        invalidLabel.style.display = "block";
        invalidLabel.style.color = "hsl(4, 100%, 67%)";
        emailVal.style.background = "rgba(255,127,136, 0.3)";
    }
})


dismissBtn.addEventListener('click', () => {
    location.reload();
    succesMess.style.display = "none";
    inputform.style.display = "flex";
})