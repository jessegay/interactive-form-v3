

// Variables to store form inputs
const nameInput = document.querySelector('#name');
const other = document.querySelector('#other-job-role');
const title = document.querySelector('#title');

const designSelect = document.querySelector('#design');
const colorSelect = document.querySelector('#color');
//const colorOptions =
//console.log(colorSelect.options);
//console.log(colorSelect.firstElementChild);




// give "name" field command focus on load. 
nameInput.focus();
// hide "job_role_other"
other.style.display = 'none';
// Program the "Job Role" <select> element to listen for user changes. When a change is detected, display/hide the "text field" based on the user’s selection in the drop down menu.
title.addEventListener('change', (e) => {
  if (e.target.value == 'other') {
    other.style.display = 'inline-block';  
  } else {
    other.style.display = 'none';
  }
})

//T Shirt Section

// disable color select until Design selection is made
colorSelect.disabled = true;


// https://fundamentals.generalassemb.ly/11_unit/dom-cheatsheet.html

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