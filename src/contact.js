/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import {locArr} from './locations.js';

const contactMsg = document.createElement('p');

contactMsg.textContent = 'Our restaurants are open 365 days a year, serving continuously from 11:00 AM to late night. We\'re always fishing for feedback! Please reach out to us with any questions using the form below.  Thanks for stopping by!<br>Follow Us @flanigansfl. Everybody\'s doing it!';


// Form
const formDiv = document.createElement('div'); // make this a flex item
const formHeader = document.createElement('h1');
formHeader.textContent = 'Send us a message';
const contactForm = document.createElement('form');
contactForm.setAttribute('method', 'post');
contactForm.setAttribute('action', 'submit.php');
const locationLabel = document.createElement('p'); // Change to label maybe?
locationLabel.textContent = 'Location';
locationSelect = document.createElement('select');
locationSelect.setAttribute('name', 'location');
locationSelect.setAttribute('id', 'location');
createOptionList(locNames);


// For location, access the locArr object to get location names to add to radio
const locNames = locArr.map((item) => item.name);
console.log(locNames);

// Create a label "Location" for="location" before calling the function
function createOptionList(arr) {
  for (let i = 0; i < arr.length; i++) {
    const selectOption = document.createElement('option');
    selectOption.setAttribute('value', arr[i].toLowerCase()); // If this causes issue just remove .toLowerCase()
    selectOption.textContent = arr[i];
    locationSelect.append(selectOption);
  }
}

content.appendChild(contactMsg);
content.appendChild(formDiv);
formDiv.appendChild(formHeader);
formDiv.appendChild(contactForm);
