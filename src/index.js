/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import './style.css';
import logo from './flanigans-logo.png';
import {createMenuListItem, addMenuText, menuArr} from './menu.js';

const header = document.querySelector('#header');
const content = document.querySelector('#content');

// TABS
const tabsList = document.createElement('ul');
const homeTab = document.createElement('li');
const menuTab = document.createElement('li');
const contactTab = document.createElement('li');
tabsList.classList.add('tabs-list');
homeTab.textContent = 'Home';
menuTab.textContent = 'Menu';
contactTab.textContent = 'Contact';
header.appendChild(tabsList);
tabsList.appendChild(homeTab);
tabsList.appendChild(menuTab);
tabsList.appendChild(contactTab);

const headerImage = document.createElement('img');
headerImage.src = logo;
header.appendChild(headerImage);

const about = document.createElement('div');
about.textContent = 'Flanigan\'s is a laidback family-run restaurant anchored by a commitment to exceptional food and drink, warm hospitality, great value, and good fun. A beloved South Florida institution since 1959, the Flanigan\'s name is pretty much synonymous with good times. Flanigan\'s welcomes guests from near and far every day of the year, serving continuously from lunch to late night.';
content.appendChild(about);

function addMenuToDOM() {
  for (const item of menuArr) {
    const menuPropArr = createMenuListItem();
    addMenuText.call(item, menuPropArr);
  };
}

function openMenuTab() {
  about.remove();
  addMenuToDOM();
}

menuTab.addEventListener('click', openMenuTab);
