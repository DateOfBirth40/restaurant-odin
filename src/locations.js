/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

function Location(name, address, phone, hours, img) {
  this.name = name;
  this.address = address;
  this.phone = phone;
  this.hours = hours;
  this.img = img;
};

const doral = new Location('Doral', '8695 NW 12th Street, Miami, FL 33126', '(786) 845-9366', {open: '11', close: '1'}, './doral.png');
const kendall = new Location('Kendall', '12790 SW 88th Street, Miami, FL 33186', '(305) 380-0521', {open: '11', close: '1'}, './kendall.png');
const pinecrest = new Location('Pinecrest', '11415 S Dixie Highway, Miami, FL 33156', '(305) 378-4000', {open: '11', close: '1'}, './pinecrest.png');
const westchester = new Location('Westchester', '9857 SW 40th Street, Miami, FL 33165', '(305) 207-7427', {open: '11', close: '1:30'}, './westchester.png');
const coconutGrove = new Location('Coconut Grove', '2721 Bird Avenue, Miami, FL 33133', '(305) 446-1114', {open: '11', close: '4:30'}, './coconut-grove.png');

const locArr = [doral, kendall, pinecrest, westchester, coconutGrove];

const locationDiv = document.createElement('div');
const locationList = document.createElement('ul');
content.appendChild(locationDiv);
locationDiv.appendChild(locationList);

function createLocationListItem() {
  const locationListItem = document.createElement('li');
  locationListItem.classList.add('loc-list-item');
  const locationListItemDiv = document.createElement('div');
  locationListItemDiv.classList.add('loc-list-item-div');
  const locationListItemName = document.createElement('h3');
  locationListItemName.classList.add('loc-list-item-name');
  const locationListItemAddress = document.createElement('p');
  locationListItemAddress.classList.add('loc-list-item-address');
  const locationListItemPhone = document.createElement('p');
  locationListItemPhone.classList.add('loc-list-item-phone');
  //   Find a way to access the object within the 'hours' property
  const locationListItemHours = document.createElement('p');
  locationListItemHours.classList.add('loc-list-item-hours');
  const locationListItemImg = document.createElement('img');
  locationListItemImg.classList.add('loc-list-item-img');

  locationList.appendChild(locationListItem);
  locationListItem.appendChild(locationListItemDiv);
  locationListItemDiv.appendChild(locationListItemName);
  locationListItemDiv.appendChild(locationListItemAddress);
  locationListItemDiv.appendChild(locationListItemPhone);
  locationListItemDiv.appendChild(locationListItemHours);
  locationListItemDiv.appendChild(locationListItemImg);
  return [locationListItemName, locationListItemAddress, locationListItemPhone, locationListItemHours, locationListItemImg];
}

// Change this to a for loop
function addLocationText(arr) {
  arr[0].textContent = this.name;
  arr[1].textContent = this.address;
  arr[2].textContent = this.phone;
  arr[3].textContent = this.hours;
//   arr[4].____ = this.img;
}

export {
  createLocationListItem,
  addLocationText,
  locArr,
  locationList,
};
