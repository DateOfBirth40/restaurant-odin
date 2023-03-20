/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import './style.css';
import logo from './flanigans-logo.png';
import {createMenuListItem, addMenuText, menuArr, menuList} from './menu.js';
import {createLocationListItem, addLocationText, locArr, locationList} from './locations.js';

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

addMenuToDOM();
addLocationsToDOM();

menuList.style.display = 'none';
locationList.style.display = 'none';

function addMenuToDOM() {
  for (const item of menuArr) {
    const menuPropArr = createMenuListItem();
    addMenuText.call(item, menuPropArr);
  };
}

function addLocationsToDOM() {
  for (const item of locArr) {
    const locPropArr = createLocationListItem();
    addLocationText.call(item, locPropArr);
  };
}

function openHomeTab() {
  about.style.display = 'block';
  menuList.style.display = 'none';
  locationList.style.display = 'none';
}

function openMenuTab() {
  about.style.display = 'none';
  menuList.style.display = 'block';
  locationList.style.display = 'none';
}

function openLocationTab() {
  about.style.display = 'none';
  menuList.style.display = 'none';
  locationList.style.display = 'block';
}

// function openContactTab() {

// }

homeTab.addEventListener('click', openHomeTab);
menuTab.addEventListener('click', openMenuTab);
locationTab.addEventListener('click', openLocationTab);
// contactTab.addEventListener('click', openContactTab);
