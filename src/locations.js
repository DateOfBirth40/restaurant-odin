/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import coconutGrovePic from './coconut-grove.png';
import doralPic from './doral.png';
import kendallPic from './kendall.png';
import pinecrestPic from './pinecrest.png';
import westchesterPic from './westchester.png';

function Location(name, address, phone, hours, img) {
  this.name = name;
  this.address = address;
  this.phone = phone;
  this.hours = hours;
  this.img = img;
};

const locArr = [];
function createLocation(name, address, phone, hours, img) {
  const location = new Location(name, address, phone, hours, img);
  locArr.push(location);
  return location;
}

const coconutGrove = createLocation('Coconut Grove', '2721 Bird Avenue, Miami, FL 33133', '(305) 446-1114', {open: '11', close: '4:30'}, coconutGrovePic);
const doral = createLocation('Doral', '8695 NW 12th Street, Miami, FL 33126', '(786) 845-9366', {open: '11', close: '1'}, doralPic);
const kendall = createLocation('Kendall', '12790 SW 88th Street, Miami, FL 33186', '(305) 380-0521', {open: '11', close: '1'}, kendallPic);
const pinecrest = createLocation('Pinecrest', '11415 S Dixie Highway, Miami, FL 33156', '(305) 378-4000', {open: '11', close: '1'}, pinecrestPic);
const westchester = createLocation('Westchester', '9857 SW 40th Street, Miami, FL 33165', '(305) 207-7427', {open: '11', close: '1:30'}, westchesterPic);

const locationDiv = document.createElement('div');
const locationList = document.createElement('ul');
content.appendChild(locationDiv);
locationDiv.appendChild(locationList);

// Add get directions button with a link to the address below each location
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

function addLocationText(arr) {
  const properties = [this.name, this.address, this.phone, this.hours, this.img];
  for (let i = 0; i < arr.length; i++) {
    if (properties[i] === this.hours) {
      arr[i].textContent = `Every Day: ${this.hours['open']} AM - ${this.hours['close']} AM`;
    } else if (properties[i] === this.img) {
      arr[i].src = properties[i];
    } else {
      arr[i].textContent = properties[i];
    }
  }
}

export {
  createLocationListItem,
  addLocationText,
  locArr,
  locationList,
};
