'use strict';

const submitBtn = document.querySelector('#submit');
const fName = document.querySelector('#fname');
const lName = document.querySelector('#lname');
const pssword = document.querySelector('#password');
const email = document.querySelector('#email');


function validFirstName() {
   let firstName = fName.value
   const fnameWarning = document.querySelector('.fname-warning');
    if (firstName === "") {
        fName.style.border = '2px solid red';
        fnameWarning.style.display = 'block';
        return true;

        
    } fName.style.border = '1px solid hsl(246, 25%, 77%)';
        fnameWarning.style.display = 'none';
        return false;
}

function validLastName() {
    let lastName = lName.value
    const lnameWarning = document.querySelector('.lname-warning');
     if (lastName === "") {
         lName.style.border = '2px solid red';
         lnameWarning.style.display = 'block';
         return true;
     } lName.style.border = '1px solid hsl(246, 25%, 77%)';
        lnameWarning.style.display = 'none';
        return false;
 }

function validEmail() {
    const validEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const emailWarning = document.querySelector('.email-warning');
    if (!email.value.match(validEmail) || email.value === "") {
        email.style.border = '2px solid red';
        emailWarning.style.display = 'block';
        return true;
    } else if (email.value.match(validEmail)) {
        email.style.border = '1px solid hsl(246, 25%, 77%)';
        emailWarning.style.display = 'none';
        return false;
    }
}

function validPassword() {
    let password = pssword.value;
    const passwordWarning = document.querySelector('.pssword-warning');
    if (password === "") {
        pssword.style.border = '2px solid red';
        passwordWarning.style.display = 'block';
        return true;
    } pssword.style.border = '1px solid hsl(246, 25%, 77%)';
        passwordWarning.style.display = 'none';
        return false;
}


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    validFirstName();
    validLastName();
    validEmail();
    validPassword();
});


