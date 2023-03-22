/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import {locArr} from './locations.js';

const contactDiv = document.createElement('div');
contactDiv.classList.add('contact-div');
const contactMsg = document.createElement('p');
contactMsg.textContent = 'Our restaurants are open 365 days a year, serving continuously from 11:00 AM to late night. We\'re always fishing for feedback! Please reach out to us with any questions using the form below.  Thanks for stopping by!\r\n';

// For location, access the locArr object to get location names to add to radio
const locNames = locArr.map((item) => item.name);
console.log(locNames);

// Form
const formDiv = document.createElement('div');
formDiv.classList.add('form-div');
const formHeader = document.createElement('h1');
formHeader.textContent = 'Send us a message';
const contactForm = document.createElement('form');
contactForm.setAttribute('method', 'post');
contactForm.setAttribute('action', 'submit.php');

const locationLabel = document.createElement('label');
locationLabel.textContent = 'Location: *';
const locationSelect = document.createElement('select');
locationSelect.setAttribute('name', 'location');
locationSelect.setAttribute('id', 'location');
createOptionList(locNames);

const nameLabel = document.createElement('label');
nameLabel.setAttribute('for', 'name');
nameLabel.textContent = 'Name: *';
const contactName = document.createElement('input');
contactName.setAttribute('type', 'text');
contactName.setAttribute('id', 'name');
contactName.setAttribute('name', 'name');

const phoneLabel = document.createElement('label');
phoneLabel.setAttribute('for', 'phone');
phoneLabel.textContent = 'Phone Number:';
const contactPhone = document.createElement('input');
contactPhone.setAttribute('type', 'tel');
contactPhone.setAttribute('id', 'phone');
contactPhone.setAttribute('name', 'phone');

const emailLabel = document.createElement('label');
emailLabel.setAttribute('for', 'email');
emailLabel.textContent = 'Email Address: *';
const contactEmail = document.createElement('input');
contactEmail.setAttribute('type', 'email');
contactEmail.setAttribute('id', 'email');
contactEmail.setAttribute('name', 'email');

const commentLabel = document.createElement('label');
commentLabel.setAttribute('for', 'comment');
commentLabel.textContent = 'Comments: *';
const contactComment = document.createElement('textarea');
contactComment.setAttribute('id', 'comment');
contactComment.setAttribute('name', 'comment');
contactComment.setAttribute('rows', '6');

const submitBtn = document.createElement('button');
submitBtn.textContent = 'Submit';
submitBtn.setAttribute('type', 'submit');

function createOptionList(arr) {
  const defaultOption = document.createElement('option');
  defaultOption.setAttribute('value', 'none');
  defaultOption.setAttribute('selected', true);
  defaultOption.setAttribute('disabled', true);
  locationSelect.append(defaultOption);
  for (let i = 0; i < arr.length; i++) {
    const selectOption = document.createElement('option');
    selectOption.setAttribute('value', arr[i].toLowerCase());
    selectOption.textContent = arr[i];
    locationSelect.append(selectOption);
  }
}

content.appendChild(contactDiv);
contactDiv.appendChild(contactMsg);
contactDiv.appendChild(formDiv);
formDiv.appendChild(formHeader);
formDiv.appendChild(contactForm);
formDiv.appendChild(locationLabel);
formDiv.appendChild(locationSelect);
formDiv.appendChild(nameLabel);
formDiv.appendChild(contactName);
formDiv.appendChild(phoneLabel);
formDiv.appendChild(contactPhone);
formDiv.appendChild(emailLabel);
formDiv.appendChild(contactEmail);
formDiv.appendChild(commentLabel);
formDiv.appendChild(contactComment);
formDiv.appendChild(submitBtn);

export {
  contactDiv,
};

