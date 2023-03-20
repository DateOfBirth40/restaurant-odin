/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/* eslint-disable max-len */
const content = document.querySelector('#content');
const headerTitle = document.createElement('div');
headerTitle.textContent = 'Flanigan\'s';
content.appendChild(headerTitle);

// Add the tabs here between the title and the about content

about = document.createElement('div');
about.textContent = 'Flanigan\’s is a laidback family-run restaurant anchored by a commitment to exceptional food and drink, warm hospitality, great value, and good fun. A beloved South Florida institution since 1959, the Flanigan\’s name is pretty much synonymous with good times. Flanigan’s welcomes guests from near and far every day of the year, serving continuously from lunch to late night.';
content.appendChild(about);

// Add a list with a h2 header of all the menu items
// make each li item a flex element and add the title, description, and price
// find out how to add all objects to an array

function MenuItem(type, name, desc, price) {
  this.type = type;
  this.name = name;
  this.desc = desc;
  this.price = price;
};

// STARTERS
const ribRolls = new MenuItem('starter', 'Joe\'s Rockin\' Rib Rolls', 'Homemade, deep-fried egg rolls stuffed with meat from our famous baby back ribs, pulled pork, cheddar cheese, onions, and Flanigan\'s BBQ sauce.', '11.99');
const tumbleOnions = new MenuItem('starter', 'Tumbleweed Onions', 'Thinly sliced jumbo onions, lightly battered and fried, with a side of honey mustard.', '6.99');
const friedShrimp = new MenuItem('starter', 'Firecracker Shrimp', 'A dozen plump, deep-fried shrimp, tossed in a slightly spicy cream sauce over a bed of iceberg lettuce, topped with pico di gallo.', '11.99');

// TEN OUNCE BURGERS
const texasBurg = new MenuItem('burger', 'Texas Burger', 'Crispy bacon, crumbled bleu cheese, a stack of Tumbleweed Onions, all drizzled with our homemade wing sauce.', '12.49');
const caribBurg = new MenuItem('burger', 'Caribbean Burger', 'Flanigan\'s award-winning BBQ sauce, melted cheddar cheese, and two strips of bacon.', '12.49');

// WAY TOO BIG SANDWICHES
const cheeseStk = new MenuItem('sandwich', 'Philadelphia Cheese Steak', 'Sliced beef sautéed with onions, and mushrooms with melted Swiss American cheese on a hoagie roll.', '11.99');
const chipotChicken = new MenuItem('sandwich', 'Chipotle Chicken Stack Sandwich', 'Grilled chicken breast with melted Swiss cheese, crisp bacon, chipotle sauce, and a pile of Tumbleweed Onions.', '10.99');
const dolphinSand = new MenuItem('sandwich', 'Dolphin Sandwich', 'Dolphin (aka Mahi-Mahi) with lettuce and tomato on a Kaiser roll. Tartar sauce available upon request. Blackened, Fried, or Grilled.', 'Market Price');

// SEAFOOD
const grilledSalmon = new MenuItem('seafood', 'Grilled Salmon', 'A chargrilled ten-ounce filet of Atlantic Salmon. Your pick - Lemon Garlic, Toasted Sesame Glaze, or Blackened.', '18.99');
const surfTurf = new MenuItem('seafood', 'Surf & Turf', 'An eight-ounce USDA Choice N.Y. Strip Steak, paired with 1/2 dozen plump fried shrimp.', '19.99');
const lemonTilapia = new MenuItem('seafood', 'Lemon Pepper Tilapia', 'Tender, flaky Tilapia sautéed in our creamy, homemade Lemon Pepper sauce.', '16.99');

// SIDES
const bakedPotato = new MenuItem('side', 'Baked Potato', 'Idaho\'s best, served piping hot with sour cream and butter piled on at your request.', '3.99');
const frenchFries = new MenuItem('side', 'French Fries', 'A Flanigan\'s signature, 3/4 of a pound of perfectly seasoned curly fries.', '6.99');
const sweetPotato = new MenuItem('side', 'Sweet Potato Fries', 'A generous amount of the ultimate sweet potato fry, deep-fried, and dusted with cinnamon sugar. Sub side with any sandwich, burger, or entree.........Add $1.99', '7.99');

menuArr = [ribRolls, tumbleOnions, friedShrimp, texasBurg, caribBurg, cheeseStk, chipotChicken, dolphinSand, grilledSalmon, surfTurf, lemonTilapia, bakedPotato, frenchFries, sweetPotato];
console.log(menuArr);

// Create a loop that goes through each element in the array and adds each property of the object to its
// respective p element in the list div
// for ex., listItemTitle.textContent = this.name would add 'Grilled Salmon' to the list div

menu = document.createElement('div');
menuList = document.createElement('ul');
content.appendChild(menu);
menu.appendChild(menuList);

function createMenuListItem() {
  // Add classes to these elements eventually for CSS styling
  const menuListItem = document.createElement('li');
  const menuListItemDiv = document.createElement('div');
  const menuListItemName = document.createElement('h3');
  const menuListItemDesc = document.createElement('p');
  const menuListItemPrice = document.createElement('span');

  menuList.appendChild(menuListItem);
  menuListItem.appendChild(menuListItemDiv);
  menuListItemDiv.appendChild(menuListItemName);
  menuListItemDiv.appendChild(menuListItemDesc);
  menuListItemDiv.appendChild(menuListItemPrice);
  return [menuListItemName, menuListItemDesc, menuListItemPrice];
}

function addMenuText(arr) {
  arr[0].textContent = this.name;
  arr[1].textContent = this.desc;
  arr[2].textContent = this.price;
}

for (const item of menuArr) {
  const menuPropArr = createMenuListItem();
  addMenuText.call(item, menuPropArr);
  console.log(menuPropArr);
};

// Can use this to filter by type
// Maybe create a function that accepts item type as a parameter and creates an array of just that type
const sideItems = menuArr.filter((item) => item.type === 'side');
console.log(sideItems);
console.log(menuArr);

// function createMenuListItem() {
//   const listItem = document.createElement("li");
//   const name = document.createElement("h3");
//   const desc = document.createElement("p");
//   const price = document.createElement("span");

//   listItem.appendChild(name);
//   listItem.appendChild(desc);
//   listItem.appendChild(price);

//   const menuPropArr = [name, desc, price];

//   function addMenuText() {
//     menuPropArr[0].textContent = this.name;
//     menuPropArr[1].textContent = this.desc;
//     menuPropArr[2].textContent = this.price;
//   }

//   return [listItem, addMenuText];
// }

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5oZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdGbGFuaWdhblxcJ3MnO1xuY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG5cbi8vIEFkZCB0aGUgdGFicyBoZXJlIGJldHdlZW4gdGhlIHRpdGxlIGFuZCB0aGUgYWJvdXQgY29udGVudFxuXG5hYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYWJvdXQudGV4dENvbnRlbnQgPSAnRmxhbmlnYW5cXOKAmXMgaXMgYSBsYWlkYmFjayBmYW1pbHktcnVuIHJlc3RhdXJhbnQgYW5jaG9yZWQgYnkgYSBjb21taXRtZW50IHRvIGV4Y2VwdGlvbmFsIGZvb2QgYW5kIGRyaW5rLCB3YXJtIGhvc3BpdGFsaXR5LCBncmVhdCB2YWx1ZSwgYW5kIGdvb2QgZnVuLiBBIGJlbG92ZWQgU291dGggRmxvcmlkYSBpbnN0aXR1dGlvbiBzaW5jZSAxOTU5LCB0aGUgRmxhbmlnYW5cXOKAmXMgbmFtZSBpcyBwcmV0dHkgbXVjaCBzeW5vbnltb3VzIHdpdGggZ29vZCB0aW1lcy4gRmxhbmlnYW7igJlzIHdlbGNvbWVzIGd1ZXN0cyBmcm9tIG5lYXIgYW5kIGZhciBldmVyeSBkYXkgb2YgdGhlIHllYXIsIHNlcnZpbmcgY29udGludW91c2x5IGZyb20gbHVuY2ggdG8gbGF0ZSBuaWdodC4nO1xuY29udGVudC5hcHBlbmRDaGlsZChhYm91dCk7XG5cbi8vIEFkZCBhIGxpc3Qgd2l0aCBhIGgyIGhlYWRlciBvZiBhbGwgdGhlIG1lbnUgaXRlbXNcbi8vIG1ha2UgZWFjaCBsaSBpdGVtIGEgZmxleCBlbGVtZW50IGFuZCBhZGQgdGhlIHRpdGxlLCBkZXNjcmlwdGlvbiwgYW5kIHByaWNlXG4vLyBmaW5kIG91dCBob3cgdG8gYWRkIGFsbCBvYmplY3RzIHRvIGFuIGFycmF5XG5cbmZ1bmN0aW9uIE1lbnVJdGVtKHR5cGUsIG5hbWUsIGRlc2MsIHByaWNlKSB7XG4gIHRoaXMudHlwZSA9IHR5cGU7XG4gIHRoaXMubmFtZSA9IG5hbWU7XG4gIHRoaXMuZGVzYyA9IGRlc2M7XG4gIHRoaXMucHJpY2UgPSBwcmljZTtcbn07XG5cbi8vIFNUQVJURVJTXG5jb25zdCByaWJSb2xscyA9IG5ldyBNZW51SXRlbSgnc3RhcnRlcicsICdKb2VcXCdzIFJvY2tpblxcJyBSaWIgUm9sbHMnLCAnSG9tZW1hZGUsIGRlZXAtZnJpZWQgZWdnIHJvbGxzIHN0dWZmZWQgd2l0aCBtZWF0IGZyb20gb3VyIGZhbW91cyBiYWJ5IGJhY2sgcmlicywgcHVsbGVkIHBvcmssIGNoZWRkYXIgY2hlZXNlLCBvbmlvbnMsIGFuZCBGbGFuaWdhblxcJ3MgQkJRIHNhdWNlLicsICcxMS45OScpO1xuY29uc3QgdHVtYmxlT25pb25zID0gbmV3IE1lbnVJdGVtKCdzdGFydGVyJywgJ1R1bWJsZXdlZWQgT25pb25zJywgJ1RoaW5seSBzbGljZWQganVtYm8gb25pb25zLCBsaWdodGx5IGJhdHRlcmVkIGFuZCBmcmllZCwgd2l0aCBhIHNpZGUgb2YgaG9uZXkgbXVzdGFyZC4nLCAnNi45OScpO1xuY29uc3QgZnJpZWRTaHJpbXAgPSBuZXcgTWVudUl0ZW0oJ3N0YXJ0ZXInLCAnRmlyZWNyYWNrZXIgU2hyaW1wJywgJ0EgZG96ZW4gcGx1bXAsIGRlZXAtZnJpZWQgc2hyaW1wLCB0b3NzZWQgaW4gYSBzbGlnaHRseSBzcGljeSBjcmVhbSBzYXVjZSBvdmVyIGEgYmVkIG9mIGljZWJlcmcgbGV0dHVjZSwgdG9wcGVkIHdpdGggcGljbyBkaSBnYWxsby4nLCAnMTEuOTknKTtcblxuLy8gVEVOIE9VTkNFIEJVUkdFUlNcbmNvbnN0IHRleGFzQnVyZyA9IG5ldyBNZW51SXRlbSgnYnVyZ2VyJywgJ1RleGFzIEJ1cmdlcicsICdDcmlzcHkgYmFjb24sIGNydW1ibGVkIGJsZXUgY2hlZXNlLCBhIHN0YWNrIG9mIFR1bWJsZXdlZWQgT25pb25zLCBhbGwgZHJpenpsZWQgd2l0aCBvdXIgaG9tZW1hZGUgd2luZyBzYXVjZS4nLCAnMTIuNDknKTtcbmNvbnN0IGNhcmliQnVyZyA9IG5ldyBNZW51SXRlbSgnYnVyZ2VyJywgJ0NhcmliYmVhbiBCdXJnZXInLCAnRmxhbmlnYW5cXCdzIGF3YXJkLXdpbm5pbmcgQkJRIHNhdWNlLCBtZWx0ZWQgY2hlZGRhciBjaGVlc2UsIGFuZCB0d28gc3RyaXBzIG9mIGJhY29uLicsICcxMi40OScpO1xuXG4vLyBXQVkgVE9PIEJJRyBTQU5EV0lDSEVTXG5jb25zdCBjaGVlc2VTdGsgPSBuZXcgTWVudUl0ZW0oJ3NhbmR3aWNoJywgJ1BoaWxhZGVscGhpYSBDaGVlc2UgU3RlYWsnLCAnU2xpY2VkIGJlZWYgc2F1dMOpZWQgd2l0aCBvbmlvbnMsIGFuZCBtdXNocm9vbXMgd2l0aCBtZWx0ZWQgU3dpc3MgQW1lcmljYW4gY2hlZXNlIG9uIGEgaG9hZ2llIHJvbGwuJywgJzExLjk5Jyk7XG5jb25zdCBjaGlwb3RDaGlja2VuID0gbmV3IE1lbnVJdGVtKCdzYW5kd2ljaCcsICdDaGlwb3RsZSBDaGlja2VuIFN0YWNrIFNhbmR3aWNoJywgJ0dyaWxsZWQgY2hpY2tlbiBicmVhc3Qgd2l0aCBtZWx0ZWQgU3dpc3MgY2hlZXNlLCBjcmlzcCBiYWNvbiwgY2hpcG90bGUgc2F1Y2UsIGFuZCBhIHBpbGUgb2YgVHVtYmxld2VlZCBPbmlvbnMuJywgJzEwLjk5Jyk7XG5jb25zdCBkb2xwaGluU2FuZCA9IG5ldyBNZW51SXRlbSgnc2FuZHdpY2gnLCAnRG9scGhpbiBTYW5kd2ljaCcsICdEb2xwaGluIChha2EgTWFoaS1NYWhpKSB3aXRoIGxldHR1Y2UgYW5kIHRvbWF0byBvbiBhIEthaXNlciByb2xsLiBUYXJ0YXIgc2F1Y2UgYXZhaWxhYmxlIHVwb24gcmVxdWVzdC4gQmxhY2tlbmVkLCBGcmllZCwgb3IgR3JpbGxlZC4nLCAnTWFya2V0IFByaWNlJyk7XG5cbi8vIFNFQUZPT0RcbmNvbnN0IGdyaWxsZWRTYWxtb24gPSBuZXcgTWVudUl0ZW0oJ3NlYWZvb2QnLCAnR3JpbGxlZCBTYWxtb24nLCAnQSBjaGFyZ3JpbGxlZCB0ZW4tb3VuY2UgZmlsZXQgb2YgQXRsYW50aWMgU2FsbW9uLiBZb3VyIHBpY2sgLSBMZW1vbiBHYXJsaWMsIFRvYXN0ZWQgU2VzYW1lIEdsYXplLCBvciBCbGFja2VuZWQuJywgJzE4Ljk5Jyk7XG5jb25zdCBzdXJmVHVyZiA9IG5ldyBNZW51SXRlbSgnc2VhZm9vZCcsICdTdXJmICYgVHVyZicsICdBbiBlaWdodC1vdW5jZSBVU0RBIENob2ljZSBOLlkuIFN0cmlwIFN0ZWFrLCBwYWlyZWQgd2l0aCAxLzIgZG96ZW4gcGx1bXAgZnJpZWQgc2hyaW1wLicsICcxOS45OScpO1xuY29uc3QgbGVtb25UaWxhcGlhID0gbmV3IE1lbnVJdGVtKCdzZWFmb29kJywgJ0xlbW9uIFBlcHBlciBUaWxhcGlhJywgJ1RlbmRlciwgZmxha3kgVGlsYXBpYSBzYXV0w6llZCBpbiBvdXIgY3JlYW15LCBob21lbWFkZSBMZW1vbiBQZXBwZXIgc2F1Y2UuJywgJzE2Ljk5Jyk7XG5cbi8vIFNJREVTXG5jb25zdCBiYWtlZFBvdGF0byA9IG5ldyBNZW51SXRlbSgnc2lkZScsICdCYWtlZCBQb3RhdG8nLCAnSWRhaG9cXCdzIGJlc3QsIHNlcnZlZCBwaXBpbmcgaG90IHdpdGggc291ciBjcmVhbSBhbmQgYnV0dGVyIHBpbGVkIG9uIGF0IHlvdXIgcmVxdWVzdC4nLCAnMy45OScpO1xuY29uc3QgZnJlbmNoRnJpZXMgPSBuZXcgTWVudUl0ZW0oJ3NpZGUnLCAnRnJlbmNoIEZyaWVzJywgJ0EgRmxhbmlnYW5cXCdzIHNpZ25hdHVyZSwgMy80IG9mIGEgcG91bmQgb2YgcGVyZmVjdGx5IHNlYXNvbmVkIGN1cmx5IGZyaWVzLicsICc2Ljk5Jyk7XG5jb25zdCBzd2VldFBvdGF0byA9IG5ldyBNZW51SXRlbSgnc2lkZScsICdTd2VldCBQb3RhdG8gRnJpZXMnLCAnQSBnZW5lcm91cyBhbW91bnQgb2YgdGhlIHVsdGltYXRlIHN3ZWV0IHBvdGF0byBmcnksIGRlZXAtZnJpZWQsIGFuZCBkdXN0ZWQgd2l0aCBjaW5uYW1vbiBzdWdhci4gU3ViIHNpZGUgd2l0aCBhbnkgc2FuZHdpY2gsIGJ1cmdlciwgb3IgZW50cmVlLi4uLi4uLi4uQWRkICQxLjk5JywgJzcuOTknKTtcblxubWVudUFyciA9IFtyaWJSb2xscywgdHVtYmxlT25pb25zLCBmcmllZFNocmltcCwgdGV4YXNCdXJnLCBjYXJpYkJ1cmcsIGNoZWVzZVN0aywgY2hpcG90Q2hpY2tlbiwgZG9scGhpblNhbmQsIGdyaWxsZWRTYWxtb24sIHN1cmZUdXJmLCBsZW1vblRpbGFwaWEsIGJha2VkUG90YXRvLCBmcmVuY2hGcmllcywgc3dlZXRQb3RhdG9dO1xuY29uc29sZS5sb2cobWVudUFycik7XG5cbi8vIENyZWF0ZSBhIGxvb3AgdGhhdCBnb2VzIHRocm91Z2ggZWFjaCBlbGVtZW50IGluIHRoZSBhcnJheSBhbmQgYWRkcyBlYWNoIHByb3BlcnR5IG9mIHRoZSBvYmplY3QgdG8gaXRzXG4vLyByZXNwZWN0aXZlIHAgZWxlbWVudCBpbiB0aGUgbGlzdCBkaXZcbi8vIGZvciBleC4sIGxpc3RJdGVtVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLm5hbWUgd291bGQgYWRkICdHcmlsbGVkIFNhbG1vbicgdG8gdGhlIGxpc3QgZGl2XG5cbm1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XG5tZW51LmFwcGVuZENoaWxkKG1lbnVMaXN0KTtcblxuZnVuY3Rpb24gY3JlYXRlTWVudUxpc3RJdGVtKCkge1xuICAvLyBBZGQgY2xhc3NlcyB0byB0aGVzZSBlbGVtZW50cyBldmVudHVhbGx5IGZvciBDU1Mgc3R5bGluZ1xuICBjb25zdCBtZW51TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBtZW51TGlzdEl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWVudUxpc3RJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNvbnN0IG1lbnVMaXN0SXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IG1lbnVMaXN0SXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVMaXN0SXRlbSk7XG4gIG1lbnVMaXN0SXRlbS5hcHBlbmRDaGlsZChtZW51TGlzdEl0ZW1EaXYpO1xuICBtZW51TGlzdEl0ZW1EaXYuYXBwZW5kQ2hpbGQobWVudUxpc3RJdGVtTmFtZSk7XG4gIG1lbnVMaXN0SXRlbURpdi5hcHBlbmRDaGlsZChtZW51TGlzdEl0ZW1EZXNjKTtcbiAgbWVudUxpc3RJdGVtRGl2LmFwcGVuZENoaWxkKG1lbnVMaXN0SXRlbVByaWNlKTtcbiAgcmV0dXJuIFttZW51TGlzdEl0ZW1OYW1lLCBtZW51TGlzdEl0ZW1EZXNjLCBtZW51TGlzdEl0ZW1QcmljZV07XG59XG5cbmZ1bmN0aW9uIGFkZE1lbnVUZXh0KGFycikge1xuICBhcnJbMF0udGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XG4gIGFyclsxXS50ZXh0Q29udGVudCA9IHRoaXMuZGVzYztcbiAgYXJyWzJdLnRleHRDb250ZW50ID0gdGhpcy5wcmljZTtcbn1cblxuZm9yIChjb25zdCBpdGVtIG9mIG1lbnVBcnIpIHtcbiAgY29uc3QgbWVudVByb3BBcnIgPSBjcmVhdGVNZW51TGlzdEl0ZW0oKTtcbiAgYWRkTWVudVRleHQuY2FsbChpdGVtLCBtZW51UHJvcEFycik7XG4gIGNvbnNvbGUubG9nKG1lbnVQcm9wQXJyKTtcbn07XG5cbi8vIENhbiB1c2UgdGhpcyB0byBmaWx0ZXIgYnkgdHlwZVxuLy8gTWF5YmUgY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGl0ZW0gdHlwZSBhcyBhIHBhcmFtZXRlciBhbmQgY3JlYXRlcyBhbiBhcnJheSBvZiBqdXN0IHRoYXQgdHlwZVxuY29uc3Qgc2lkZUl0ZW1zID0gbWVudUFyci5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udHlwZSA9PT0gJ3NpZGUnKTtcbmNvbnNvbGUubG9nKHNpZGVJdGVtcyk7XG5jb25zb2xlLmxvZyhtZW51QXJyKTtcblxuLy8gZnVuY3Rpb24gY3JlYXRlTWVudUxpc3RJdGVtKCkge1xuLy8gICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbi8vICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbi8vICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuLy8gICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4vLyAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKG5hbWUpO1xuLy8gICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkZXNjKTtcbi8vICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQocHJpY2UpO1xuXG4vLyAgIGNvbnN0IG1lbnVQcm9wQXJyID0gW25hbWUsIGRlc2MsIHByaWNlXTtcblxuLy8gICBmdW5jdGlvbiBhZGRNZW51VGV4dCgpIHtcbi8vICAgICBtZW51UHJvcEFyclswXS50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcbi8vICAgICBtZW51UHJvcEFyclsxXS50ZXh0Q29udGVudCA9IHRoaXMuZGVzYztcbi8vICAgICBtZW51UHJvcEFyclsyXS50ZXh0Q29udGVudCA9IHRoaXMucHJpY2U7XG4vLyAgIH1cblxuLy8gICByZXR1cm4gW2xpc3RJdGVtLCBhZGRNZW51VGV4dF07XG4vLyB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=