// https://teamtreehouse.com/library/walkthrough-for-project-3-interactive-form

// Variables to store form inputs
const nameInput = document.querySelector('#name');
const other = document.querySelector('#other-job-role');
const title = document.querySelector('#title');

const designSelect = document.querySelector('#design');
const colorSelect = document.querySelector('#color');
//const colorOptions =
//console.log(colorSelect.options);
//console.log(colorSelect.firstElementChild);
//colorOptionsArray = colorSelect.options;
//console.log(colorOptionsArray[2].getAttribute('data-theme')); //something is wrong with this approach. colorOptionsArray is an HTMLCollection, but not an array?



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
// 3.Use the variable for the "Design" or "Theme" menu to listen for the change event on this element.
designSelect.addEventListener('change', e => {
  colorSelect.disabled = false; // enable the “Color” <select> element that was previously disabled.
  const theme = e.target.value;

  //if theme = colorSelect[i].getAttribute('data-theme'), .disabled = false
  for (let i = 0; i < colorSelect.length; i++) {
    if (colorSelect[i].getAttribute('data-theme') == theme) {
      colorSelect[i].hidden = false;
      colorSelect[i].setAttribute('selected', 'true') ;
    } else {
      colorSelect[i].hidden = true;
      colorSelect[i].removeAttribute('selected'); //It's not intuitive that you have to remove the attribute to make it false. Intuitively I'd think to use setAttribute('selected', 'false'). I guess that's a difference between an attribute and a property which has a value.
    }

  }
})


// Activities checkboxes
//FIXME: Wait, is this the old way of doing it? Is this even a requirement of the new version?
const checkboxes = document.querySelectorAll('.activities input');
console.log(checkboxes);
document.querySelector('.activities').addEventListener('change', (e) => {
  totalCost = 0;
  const clicked = e.target;
  const clickedType = e.target.getAttribute('data-day-and-time');
  for (let i=0; i < checkboxes.length; i++) {
    let checkboxType = checkboxes[i].getAttribute('data-day-and-time');
    if (clickedType === checkboxType && clicked !== checkboxes[i]) {
      if (clicked.checked) {
        checkboxes[i].disabled = true;
      } else {
        checkboxes[i].disabled = false;
      }
    }

  }
})





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