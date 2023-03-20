/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
// Create an object for the different locations
// Properties: name, address, hours

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

locArr = [doral, kendall, pinecrest, westchester, coconutGrove];
