/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import './style.css';
import logo from './images/flanigans-logo.png';
import twitter from './images/twitter.svg';
import instagram from './images/instagram.svg';
import github from './images/github.svg';
import {createMenuListItem, addMenuText, createMenuSidebar, menuArr, menuDiv} from './menu.js';
import {createLocationListItem, addLocationText, locArr, locationDiv} from './locations.js';
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
headerImage.addEventListener('click', openHomeTab);
headerImage.style.cursor = 'pointer';
header.appendChild(headerImage);

const about = document.createElement('div');
about.textContent = 'Flanigan\'s is a laidback family-run restaurant anchored by a commitment to exceptional food and drink, warm hospitality, great value, and good fun. A beloved South Florida institution since 1959, the Flanigan\'s name is pretty much synonymous with good times. Flanigan\'s welcomes guests from near and far every day of the year, serving continuously from lunch to late night.';
content.appendChild(about);

const footer = document.createElement('footer');
footer.classList.add('footer');
footer.textContent = 'Follow us on social media!';
content.append(footer);

const twitterLink = document.createElement('a');
const twitterImg = document.createElement('img');
twitterLink.setAttribute('href', 'https://twitter.com/FlanigansFL');
twitterImg.src = twitter;
footer.append(twitterLink);
twitterLink.append(twitterImg);

const instagramLink = document.createElement('a');
const instagramImg = document.createElement('img');
instagramLink.setAttribute('href', 'https://www.instagram.com/flanigansfl/?hl=en');
instagramImg.src = instagram;
footer.append(instagramLink);
instagramLink.append(instagramImg);

const githubLink = document.createElement('a');
const githubImg = document.createElement('img');
githubLink.setAttribute('href', 'https://github.com/DateOfBirth40');
githubImg.src = github;
footer.append(githubLink);
githubLink.append(githubImg);

const sidebar = createMenuSidebar(menuArr);
menuDiv.append(sidebar);

addMenuToDOM();
addLocationsToDOM();

menuDiv.style.display = 'none';
locationDiv.style.display = 'none';
contactDiv.style.display = 'none';
homeTab.classList.add('clicked-tab');

// The code below initializes the menu and shows the 'starters' submenu by default
document.querySelector('#starter').classList.add('active');
const filteredMenuArr = menuArr.filter((item) => item.type === 'starter');
for (const item of filteredMenuArr) {
  const menuPropArr = createMenuListItem();
  addMenuText.call(item, menuPropArr);
};

// This function uses an event listener to detect which item type is selected in the menu
// and then displays only the objects that match the corresponding item type
function addMenuToDOM() {
  let filteredMenuArr = [];
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  const menuList = document.querySelector('.menu-list');
  sidebar.addEventListener('click', function(e) {
    if (e.target.matches('.sidebar-item')) {
      filteredMenuArr = menuArr.filter((item) => item.type === e.target.id);
      menuList.innerHTML = '';
      for (const item of filteredMenuArr) {
        const menuPropArr = createMenuListItem();
        addMenuText.call(item, menuPropArr);
      };
      // The following code removes the 'active' class from all tabs
      // and assigns it to the clicked tab
      sidebarItems.forEach(function(item) {
        item.classList.remove('active');
      });
      e.target.classList.add('active');
    }
  });
}

function addLocationsToDOM() {
  for (const item of locArr) {
    const locPropArr = createLocationListItem();
    addLocationText.call(item, locPropArr);
  };
}

function openHomeTab() {
  about.style.display = 'block';
  menuDiv.style.display = 'none';
  locationDiv.style.display = 'none';
  contactDiv.style.display = 'none';
  homeTab.classList.add('clicked-tab');
  menuTab.classList.remove('clicked-tab');
  locationTab.classList.remove('clicked-tab');
  contactTab.classList.remove('clicked-tab');
}

function openMenuTab() {
  about.style.display = 'none';
  menuDiv.style.display = 'grid';
  locationDiv.style.display = 'none';
  contactDiv.style.display = 'none';
  homeTab.classList.remove('clicked-tab');
  menuTab.classList.add('clicked-tab');
  locationTab.classList.remove('clicked-tab');
  contactTab.classList.remove('clicked-tab');
}

function openLocationTab() {
  about.style.display = 'none';
  menuDiv.style.display = 'none';
  locationDiv.style.display = 'grid';
  contactDiv.style.display = 'none';
  homeTab.classList.remove('clicked-tab');
  menuTab.classList.remove('clicked-tab');
  locationTab.classList.add('clicked-tab');
  contactTab.classList.remove('clicked-tab');
}

function openContactTab() {
  about.style.display = 'none';
  menuDiv.style.display = 'none';
  locationDiv.style.display = 'none';
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
