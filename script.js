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