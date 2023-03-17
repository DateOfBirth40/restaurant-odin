/* eslint-disable max-len */
content = document.querySelector('#content');
headerTitle = document.createElement('div');
headerTitle.textContent = 'Flanigan\'s';
content.appendChild(headerTitle);

// Add the tabs here between the title and the about content

about = document.createElement('div');
about.textContent = 'Flanigan\’s is a laidback family-run restaurant anchored by a commitment to exceptional food and drink, warm hospitality, great value, and good fun. A beloved South Florida institution since 1959, the Flanigan\’s name is pretty much synonymous with good times. Flanigan’s welcomes guests from near and far every day of the year, serving continuously from lunch to late night.';
content.appendChild(about);

// Add a list with a h2 header of all the menu items
// make each li item a flex element and add the title, description, and price
// find out how to add all objects to an array

function MenuItem(name, description, price) {
  this.name = name;
  this.description = description;
  this.price = price;
};

// STARTERS
const ribRolls = new MenuItem('Joe\'s Rockin\' Rib Rolls', 'Homemade, deep-fried egg rolls stuffed with meat from our famous baby back ribs, pulled pork, cheddar cheese, onions, and Flanigan\'s BBQ sauce.', '11.99');
const tumbleweedOnions = new MenuItem('Tumbleweed Onions', 'Thinly sliced jumbo onions, lightly battered and fried, with a side of honey mustard.', '6.99');
const friedShrimp = new MenuItem('Firecracker Shrimp', 'A dozen plump, deep-fried shrimp, tossed in a slightly spicy cream sauce over a bed of iceberg lettuce, topped with pico di gallo.', '11.99');

// TEN OUNCE BURGERS
const texasBurg = new MenuItem('Texas Burger', 'Crispy bacon, crumbled bleu cheese, a stack of Tumbleweed Onions, all drizzled with our homemade wing sauce.', '12.49');
const caribbeanBurg = new MenuItem('Caribbean Burger', 'Flanigan\'s award-winning BBQ sauce, melted cheddar cheese, and two strips of bacon.', '12.49');

// WAY TOO BIG SANDWICHES
const cheeseSteak = new MenuItem('Philadelphia Cheese Steak', 'Sliced beef sautéed with onions, and mushrooms with melted Swiss American cheese on a hoagie roll.', '11.99');
const chipotleChicken = new MenuItem('Chipotle Chicken Stack Sandwich', 'Grilled chicken breast with melted Swiss cheese, crisp bacon, chipotle sauce, and a pile of Tumbleweed Onions.', '10.99');
const dolphinSand = new MenuItem('Dolphin Sandwich', 'Dolphin (aka Mahi-Mahi) with lettuce and tomato on a Kaiser roll. Tartar sauce available upon request. Blackened, Fried, or Grilled.', 'Market Price');

// SEAFOOD
const grilledSalmon = new MenuItem('Grilled Salmon', 'A chargrilled ten-ounce filet of Atlantic Salmon. Your pick - Lemon Garlic, Toasted Sesame Glaze, or Blackened.', '18.99');
const surfTurf = new MenuItem('Surf & Turf', 'An eight-ounce USDA Choice N.Y. Strip Steak, paired with 1/2 dozen plump fried shrimp.', '19.99');
const lemonTilapia = new MenuItem('Lemon Pepper Tilapia', 'Tender, flaky Tilapia sautéed in our creamy, homemade Lemon Pepper sauce.', '16.99');

// SIDES
const bakedPotato = new MenuItem('Baked Potato', 'Idaho\'s best, served piping hot with sour cream and butter piled on at your request.', '3.99');
const frenchFries = new MenuItem('French Fries', 'A Flanigan\'s signature, 3/4 of a pound of perfectly seasoned curly fries.', '6.99');
const sweetPotato = new MenuItem('Sweet Potato Fries', 'A generous amount of the ultimate sweet potato fry, deep-fried, and dusted with cinnamon sugar. Sub side with any sandwich, burger, or entree.........Add $1.99', '7.99');

menu = document.createElement('div');
menuList = document.createElement('ul');

// function createMenu()
