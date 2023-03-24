/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import './style.css';
import logo from './flanigans-logo.png';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import {createMenuListItem, addMenuText, createMenuSidebar, menuArr, menuDiv} from './menu.js';
import {createLocationListItem, addLocationText, locArr, locationList} from './locations.js';
import {contactDiv} from './contact.js';

const header = document.querySelector('#header');
const content = document.querySelector('#content');

// TABS
const tabsList = document.createElement('ul');
const homeTab = document.createElement('li');
const menuTab = document.createElement('li');
const locationTab = document.createElement('li');
const contactTab = document.createElement('li');
tabsList.classList.add('tabs-list');
homeTab.textContent = 'Home';
menuTab.textContent = 'Menu';
locationTab.textContent = 'Locations';
contactTab.textContent = 'Contact';
header.appendChild(tabsList);
tabsList.appendChild(homeTab);
tabsList.appendChild(menuTab);
tabsList.appendChild(locationTab);
tabsList.appendChild(contactTab);

const headerImage = document.createElement('img');
headerImage.src = logo;
header.appendChild(headerImage);

const about = document.createElement('div');
about.textContent = 'Flanigan\'s is a laidback family-run restaurant anchored by a commitment to exceptional food and drink, warm hospitality, great value, and good fun. A beloved South Florida institution since 1959, the Flanigan\'s name is pretty much synonymous with good times. Flanigan\'s welcomes guests from near and far every day of the year, serving continuously from lunch to late night.';
content.appendChild(about);

const socialMedia = document.createElement('p');
socialMedia.textContent = 'Follow us on social media!';
content.append(socialMedia);

const twitterLink = document.createElement('a');
const twitterImg = document.createElement('img');
twitterLink.setAttribute('href', 'https://twitter.com/FlanigansFL');
twitterImg.src = twitter;
content.append(twitterLink);
twitterLink.append(twitterImg);

const instagramLink = document.createElement('a');
const instagramImg = document.createElement('img');
instagramLink.setAttribute('href', 'https://www.instagram.com/flanigansfl/?hl=en');
instagramImg.src = instagram;
content.append(instagramLink);
instagramLink.append(instagramImg);

addMenuToDOM();
addLocationsToDOM();
// addContactFormtoDOM();

menuDiv.style.display = 'none';
locationList.style.display = 'none';
contactDiv.style.display = 'none';
homeTab.classList.add('clicked-tab');

function addMenuToDOM() {
  for (const item of menuArr) {
    const menuPropArr = createMenuListItem();
    addMenuText.call(item, menuPropArr);
  };
}

const sidebar = createMenuSidebar(menuArr);
menuDiv.append(sidebar);

function addLocationsToDOM() {
  for (const item of locArr) {
    const locPropArr = createLocationListItem();
    addLocationText.call(item, locPropArr);
  };
}

function openHomeTab() {
  about.style.display = 'block';
  menuDiv.style.display = 'none';
  locationList.style.display = 'none';
  contactDiv.style.display = 'none';
  homeTab.classList.add('clicked-tab');
  menuTab.classList.remove('clicked-tab');
  locationTab.classList.remove('clicked-tab');
  contactTab.classList.remove('clicked-tab');
}

function openMenuTab() {
  about.style.display = 'none';
  menuDiv.style.display = 'grid';
  locationList.style.display = 'none';
  contactDiv.style.display = 'none';
  homeTab.classList.remove('clicked-tab');
  menuTab.classList.add('clicked-tab');
  locationTab.classList.remove('clicked-tab');
  contactTab.classList.remove('clicked-tab');
}

function openLocationTab() {
  about.style.display = 'none';
  menuDiv.style.display = 'none';
  locationList.style.display = 'block';
  contactDiv.style.display = 'none';
  homeTab.classList.remove('clicked-tab');
  menuTab.classList.remove('clicked-tab');
  locationTab.classList.add('clicked-tab');
  contactTab.classList.remove('clicked-tab');
}

function openContactTab() {
  about.style.display = 'none';
  menuDiv.style.display = 'none';
  locationList.style.display = 'none';
  contactDiv.style.display = 'flex';
  homeTab.classList.remove('clicked-tab');
  menuTab.classList.remove('clicked-tab');
  locationTab.classList.remove('clicked-tab');
  contactTab.classList.add('clicked-tab');
}

homeTab.addEventListener('click', openHomeTab);
menuTab.addEventListener('click', openMenuTab);
locationTab.addEventListener('click', openLocationTab);
contactTab.addEventListener('click', openContactTab);
