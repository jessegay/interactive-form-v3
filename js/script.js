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
  colorSelect.disabled = false;
  // for (let i = 0; i < designSelect.length; i++) {
  //   const design = designSelect[i].value;
  //   const dataTheme = designSelect[i].getAttribute('data-theme');
  //   console.log(design);
  //   console.log(dataTheme);
  // }
  //console.log(e.target.value);
  const theme = e.target.value;

  //if theme = colorSelect[i].getAttribute('data-theme'), .disabled = false
  for (let i = 0; i < colorSelect.length; i++) {
    if (colorSelect[i].getAttribute('data-theme') == theme) {
      colorSelect[i].disabled = false;
    } else {
      colorSelect[i].disabled = true;
    }

  }


})

//In the event listener, enable the “Color” <select> element that was previously disabled.

//Also in the event listener, loop over the option element children of the "Color" <select> element. The children property will be helpful here.


/*In the loop, create variables to reference the following two items:
The value of the event.target
The "data-theme" attribute of the loop’s current option element. The getAttribute method will be helpful here. Why can't I use dot notation?

//Log out the two variables that were just created to inspect them. You’ll have to make a selection in the "Design" menu to print those log statements to the console.
// I think this works? START HERE.

//Still in the loop, create a conditional that checks if the two variables that were just created are equal to one another. If they are, set the hidden property of the loop’s current option element to false, and set the selected attribute of the loop’s current option element to true. And if the two variables are not equal to one another, set the hidden property of the loop’s current option element to true, and set the selected attribute of the loop’s current option element to false.


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