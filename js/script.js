

// Variables to store form inputs
const nameInput = document.querySelector('#name');

const other = document.querySelector('#other-job-role');
console.log(other);




// give "name" field command focus on load. 
nameInput.focus();
// hide "job_role_other"
other.style.display = 'none';
/*
Notes from Brian for refactoring validations.
Create one reusable function then at the end use:
(pseudocode)
const isThingValid = handleValidation (element, reg); for every Thing.
const isSecondThingValid...etc.


----
const ccReg = /\d{13,16}?$/;

const ccValid = ccReg.test(cardNumber.value)

-----

element.parentNode.classList.remove("not-valid");
element.parentNode.classList.add("valid");

const handleValidation = (element, reg) => {
 if (reg.test(element.value)) {
    element.parentNode.classList.remove("not-valid");
    element.parentNode.classList.add("valid");
  }
}

----
handleValidation(cardNumber, ccReg)
*/