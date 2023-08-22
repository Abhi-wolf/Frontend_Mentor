console.log("hello");





//  BACK NEXT AND CONFIRM BUTTONS
const step1_nextBtn = document.querySelector(".step1_nextBtn");
const step2_nextBtn = document.querySelector(".step2-nextBtn");
const step2_backBtn = document.querySelector(".step2-backBtn");
const step3_nextBtn = document.querySelector(".step3-nextBtn");
const step3_backBtn = document.querySelector(".step3-backBtn");
const step4_confirmBtn = document.querySelector(".step4-confirmBtn");
const step4_backBtn = document.querySelector(".step4-backBtn");
console.log(step4_confirmBtn);

// DIFFERENT STEPS
const step1 = document.querySelector(".step1");
const step2 = document.querySelector(".step2");
const step3 = document.querySelector(".step3");
const step4 = document.querySelector(".step4");
const step5 = document.querySelector(".step5");
console.log(step5);


// SIDEBAR STATUS UPDATE
const s1 = document.querySelector('.s1');
const s2 = document.querySelector('.s2');
const s3 = document.querySelector('.s3');
const s4 = document.querySelector('.s4');
console.log(s1)


// STEP1 FORM VALIDATION
const step1Form = document.getElementById('step1_form');
const name = document.getElementById('name');
const emailId = document.getElementById('emailId');
const phoneNo = document.getElementById('phoneNo');



function validateForm(e) {
    console.log('fun validate');
    e.preventDefault();
    consoe.log('validate fun');
    step1.style.display = "none";
    step2.style.display = "flex";
    s1.classList.remove('circle_active');
    s2.classList.add('circle_active');
    s3.classList.remove('circle_active');
    s4.classList.remove('circle_active');
}

step1Form.addEventListener("submit", (e) => {
    var name = document.getElementById('name').value;
    var email = document.getElementById('emailId').value;
    var phone = document.getElementById('phoneNo').value;

    // Simple validation
    if (name === '' || email === '' || phone === '') {
        alert('Please fill in all fields.');
        e.preventDefault(); // Prevent form submission
        return;
    }

    // Email validation using a regular expression
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        e.preventDefault(); // Prevent form submission
        return;
    }

    // Phone number validation (you can customize this according to your requirements)
    var phonePattern = /^\+?\d{1,}-?\s?\d{3}-?\s?\d{3}-?\s?\d{4}$/;
    if (!phone.match(phonePattern)) {
        alert('Please enter a valid phone number.');
        e.preventDefault(); // Prevent form submission
        return;
    }

    // If all validations pass, navigate to the next page
    step1.style.display = "none";
    step2.style.display = "flex";
    s1.classList.remove('circle_active');
    s2.classList.add('circle_active');
    s3.classList.remove('circle_active');
    s4.classList.remove('circle_active');

    // For demonstration purposes, let's prevent actual navigation
    e.preventDefault();
});



//  NEXT BUTTONS
// step1_nextBtn.addEventListener("click", (e) => {
//     e.preventDefault();

//     step1.style.display = "none";
//     step2.style.display = "flex";
//     s1.classList.remove('circle_active');
//     s2.classList.add('circle_active');
//     s3.classList.remove('circle_active');
//     s4.classList.remove('circle_active');
// });

step2_nextBtn.addEventListener("click", () => {
    step2.style.display = "none";
    step3.style.display = "flex";
    s1.classList.remove('circle_active');
    s2.classList.remove('circle_active');
    s3.classList.add('circle_active');
    s4.classList.remove('circle_active');
    step3_monthly_Online_services.checked = true;
    step3_yearly_Online_services.checked = false;

    // console.log(s3)
});

step3_nextBtn.addEventListener("click", () => {
    step3.style.display = "none";
    step4.style.display = "flex";
    s1.classList.remove('circle_active');
    s2.classList.remove('circle_active');
    s3.classList.remove('circle_active');
    s4.classList.add('circle_active');
});

step4_confirmBtn.addEventListener("click", () => {
    step4.style.display = "none";
    step5.style.display = "flex";
    s1.classList.remove('circle_active');
    s2.classList.remove('circle_active');
    s3.classList.remove('circle_active');
    s4.classList.add('circle_active');
});

// BACK BUTTONS
step2_backBtn.addEventListener("click", () => {
    step1.style.display = "flex";
    step2.style.display = "none";
    s1.classList.add('circle_active');
    s2.classList.remove('circle_active');
    s3.classList.remove('circle_active');
    s4.classList.remove('circle_active');
});

step3_backBtn.addEventListener("click", () => {
    step2.style.display = "flex";
    step3.style.display = "none";
    s1.classList.remove('circle_active');
    s2.classList.add('circle_active');
    s3.classList.remove('circle_active');
    s4.classList.remove('circle_active');
});

step4_backBtn.addEventListener("click", () => {
    step3.style.display = "flex";
    step4.style.display = "none";
    s1.classList.remove('circle_active');
    s2.classList.remove('circle_active');
    s3.classList.add('circle_active');
    s4.classList.remove('circle_active');
    step3_monthly_Online_services.checked = true;
    step3_yearly_Online_services.checked = false;

});


// MONTHLY AND YEARLY BUTTON OF STEP2
const step2_yearly = document.querySelector('.step2_yearly');
const step2_monthly = document.querySelector('.step2_monthly');
const step3_yearly = document.querySelector('.step3_yearly');
const step3_monthly = document.querySelector('.step3_monthly');
const step3_yearly_Online_services = document.getElementById('step3_yearly_Online_services');
const step3_monthly_Online_services = document.getElementById('step3_monthly_Online_services');
let period = "";
const modeBtn = document.getElementById('mode');
console.log(modeBtn);

// SELECTION PERIOD ON STEP 2 IT IS MONTHLY OR YEARLY
if (modeBtn.checked != 1) {
    period = "Monthly";
}

else {
    period = "Yearly";
}
modeBtn.onchange = (e) => {
    if (modeBtn.checked != 1) {
        step2_monthly.style.display = "flex";
        step2_yearly.style.display = "none";
        step3_monthly.style.display = "flex";
        step3_yearly.style.display = "none";
        period = "Monthly";
        step3_monthly_Online_services.checked = true;
        step3_yearly_Online_services.checked = false;

    }

    else {
        step2_monthly.style.display = "none";
        step2_yearly.style.display = "flex";
        step3_monthly.style.display = "none";
        step3_yearly.style.display = "flex";
        period = "Yearly";
        step3_yearly_Online_services.checked = true;
        step3_monthly_Online_services.checked = false;

    }
    console.log(period);
}








// SELECTION OF TYPE OF GAME
let typeOfGame = "";
let gamePrice = "";
function selectDiv(selectedDiv) {
    const box = document.querySelectorAll('.box');
    box.forEach(div => {
        div.classList.remove('selected');
        const checkbox = div.querySelector('.checkbox');
        checkbox.checked = false;
        div.style.borderColor = "hsl(231, 11%, 63%)";
    })

    selectedDiv.classList.add('selected');
    const checkbox = selectedDiv.querySelector('.checkbox');
    checkbox.checked = true;
    selectedDiv.style.borderColor = "hsl(243, 100%, 62%)";
    typeOfGame = selectedDiv.querySelector('.step2_box_title').textContent;
    // console.log(gameType);
    gamePrice = selectedDiv.querySelector('.step2_box_price').textContent;
    // console.log(gamePrice);
}


//  STEP 4 QUERYSELECTORS
const typeOf_game = document.querySelector('.typeOf_game');
const typeOf_game_plan = document.querySelectorAll('.typeOf_game_plan');
const plan_price = document.querySelector('.plan_price');
const online_services = document.querySelector('.online_services');
const online_services_price = document.querySelector('.online_services_price');
const large_storage = document.querySelector('.large_storage');
const large_storage_price = document.querySelector('.large_storage_price');
const custom_profile = document.querySelector('.custom_profile');
const custom_profile_price = document.querySelector('.custom_profile_price');
const total_bill = document.querySelector('.step4_total_bill_monthly_price');



//  SELECTION OF ADDONS


step3_nextBtn.addEventListener("click", () => {
    let onlineServices = "";
    let largeStorage = "";
    let customizableProfile = "";
    let onlineServices_price = 0;
    let largeStorage_price = 0;
    let customizableProfile_price = 0;
    let total_price = 0;
    const step3_box = document.querySelectorAll('.step3_box');
    const monthlyYearly = document.querySelectorAll('.monthlyYearly');

    // clear all 




    // console.log(step3_box);
    step3_box.forEach(box => {
        const step3_box_input = box.querySelector('.step3_box_input');
        // console.log(step3_box_input);
        if (step3_box_input.checked == true) {
            const step3_box_info = box.querySelector('.step3_box_info label');
            console.log(step3_box_info.textContent);
            if (step3_box_info.textContent == "Online Services") {
                onlineServices = "Online Services";
                const step3_box_price = box.querySelector('.step3_box_price span');
                // console.log(step3_box_price.textContent);
                onlineServices_price = step3_box_price.textContent;
            }



            if (step3_box_info.textContent == "Larger storage") {
                largeStorage = "Larger storage";
                const step3_box_price = box.querySelector('.step3_box_price span');
                // console.log(step3_box_price.textContent);
                largeStorage_price = step3_box_price.textContent;
            }



            if (step3_box_info.textContent == "Customizable Profile") {
                customizableProfile = "Customizable Profile";
                const step3_box_price = box.querySelector('.step3_box_price span');
                // console.log(step3_box_price.textContent);
                customizableProfile_price = step3_box_price.textContent;
            }

        }
    })

    console.log(typeOfGame);
    console.log(gamePrice);
    console.log(period);
    console.log(onlineServices);
    console.log(onlineServices_price);
    console.log(largeStorage);
    console.log(largeStorage_price);
    console.log(customizableProfile);
    console.log(customizableProfile_price);

    typeOf_game.textContent = typeOfGame;
    typeOf_game_plan.forEach(plan => {
        plan.innerHTML = " (" + period + ")";
    })
    plan_price.textContent = gamePrice;
    // online_services.textContent=onlineServices;
    online_services_price.textContent = onlineServices_price;
    // large_storage.textContent=largeStorage;
    large_storage_price.textContent = largeStorage_price;
    // custom_profile.textContent=customizableProfile;
    custom_profile_price.textContent = customizableProfile_price;

    console.log(gamePrice);
    console.log(typeof (gamePrice));
    console.log(Number(gamePrice));
    let total = parseInt(gamePrice) + parseInt(largeStorage_price) + parseInt(onlineServices_price) + parseInt(customizableProfile_price);
    console.log(total);
    if (total == NaN) {
        total_bill.textContent = 0;
    }
    else {
        total_bill.textContent = total;
    }

    monthlyYearly.forEach(cont => {
        if (period == "Yearly") {
            cont.textContent = "/yr";
        }
        else {
            cont.textContent = "/mo";
        }
    })
})


// STEP3 BACK BUTTON --- cleared previous entered data
step3_backBtn.addEventListener('click', () => {
    const step3_box = document.querySelectorAll('.step3_box');
    step3_box.forEach(box => {
        box.querySelector('.step3_box_input').checked = false;
    })
})


// STEP 4 CHANGE OPTION
const change = document.querySelector('.change_option');
change.addEventListener('click', () => {
    step2.style.display = "flex";
    step3.style.display = "none";
    step4.style.display = "none";
    s1.classList.remove('circle_active');
    s2.classList.add('circle_active');
    s3.classList.remove('circle_active');
    s4.classList.remove('circle_active');
})



