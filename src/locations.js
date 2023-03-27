/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import coconutGrovePic from './coconut-grove.png';
import doralPic from './doral.png';
import kendallPic from './kendall.png';
import pinecrestPic from './pinecrest.png';
import westchesterPic from './westchester.png';

function Location(name, address, city, phone, hours, img) {
  this.name = name;
  this.address = address;
  this.city = city;
  this.phone = phone;
  this.hours = hours;
  this.img = img;
};

const locArr = [];
function createLocation(name, address, city, phone, hours, img) {
  const location = new Location(name, address, city, phone, hours, img);
  locArr.push(location);
  return location;
}
const coconutGrove = createLocation('Coconut Grove', '2721 Bird Avenue', 'Miami, FL 33133', '(305) 446-1114', {open: '11 AM', close: '4:30 AM'}, coconutGrovePic);
const doral = createLocation('Doral', '8695 NW 12th Street', 'Miami, FL 33126', '(786) 845-9366', {open: '11 AM', close: '1 AM'}, doralPic);
const kendall = createLocation('Kendall', '12790 SW 88th Street', 'Miami, FL 33186', '(305) 380-0521', {open: '11 AM', close: '1 AM'}, kendallPic);
const pinecrest = createLocation('Pinecrest', '11415 S Dixie Highway', 'Miami, FL 33156', '(305) 378-4000', {open: '11 AM', close: '1 AM'}, pinecrestPic);
const westchester = createLocation('Westchester', '9857 SW 40th Street', 'Miami, FL 33165', '(305) 207-7427', {open: '11 AM', close: '1:30 AM'}, westchesterPic);

locArr.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
console.log(locArr);

const locationDiv = document.createElement('div');
locationDiv.classList.add('location-div');
content.appendChild(locationDiv);

// Add get directions button with a link to the address below each location
function createLocationListItem() {
  const locationListItem = document.createElement('div');
  const locationListItemName = document.createElement('h3');
  locationListItemName.classList.add('item-name');
  const locationListItemAddress = document.createElement('p');
  const locationListItemCity = document.createElement('p');
  const locationListItemPhone = document.createElement('p');
  const locationListItemHours = document.createElement('p');
  const locationListItemImg = document.createElement('img');

  locationDiv.appendChild(locationListItem);
  locationListItem.appendChild(locationListItemName);
  locationListItem.appendChild(locationListItemAddress);
  locationListItem.appendChild(locationListItemCity);
  locationListItem.appendChild(locationListItemPhone);
  locationListItem.appendChild(locationListItemHours);
  locationListItem.appendChild(locationListItemImg);
  return [locationListItemName, locationListItemAddress, locationListItemCity, locationListItemPhone, locationListItemHours, locationListItemImg];
}

function addLocationText(arr) {
  const properties = [this.name, this.address, this.city, this.phone, this.hours, this.img];
  for (let i = 0; i < arr.length; i++) {
    if (properties[i] === this.hours) {
      arr[i].textContent = `Every Day: ${this.hours['open']} - ${this.hours['close']}`;
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
  locationDiv,
};
