/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import ribRollsImg from './rib-rolls.webp';
import tumbleOnionsImg from './tumbleweed-onions.webp';
import friedShrimpImg from './firecracker-shrimp.webp';
import texasBurgImg from './texas-burger.webp';
import caribBurgImg from './caribbean-burger.webp';
import cheeseStkImg from './cheese-steak.webp';
import chipotChickenImg from './chipotle-chicken-sandwich.webp';
import dolphinSandImg from './dolphin-sandwich.webp';
import grilledSalmonImg from './grilled-salmon.webp';
import surfTurfImg from './surf-n-turf.webp';
import lemonTilapiaImg from './tilapia.webp';
import bakedPotatoImg from './baked-potato.webp';
import sweetPotatoImg from './sweet-potato.webp';
import frenchFriesImg from './french-fries.webp';

function MenuItem(type, name, desc, price, img) {
  this.type = type;
  this.name = name;
  this.desc = desc;
  this.price = price;
  this.img = img;
};

// STARTERS
const ribRolls = new MenuItem('starter', 'Joe\'s Rockin\' Rib Rolls', 'Homemade, deep-fried egg rolls stuffed with meat from our famous baby back ribs, pulled pork, cheddar cheese, onions, and Flanigan\'s BBQ sauce.', '11.99', ribRollsImg);
const tumbleOnions = new MenuItem('starter', 'Tumbleweed Onions', 'Thinly sliced jumbo onions, lightly battered and fried, with a side of honey mustard.', '6.99', tumbleOnionsImg);
const friedShrimp = new MenuItem('starter', 'Firecracker Shrimp', 'A dozen plump, deep-fried shrimp, tossed in a slightly spicy cream sauce over a bed of iceberg lettuce, topped with pico di gallo.', '11.99', friedShrimpImg);

// TEN OUNCE BURGERS
const texasBurg = new MenuItem('burger', 'Texas Burger', 'Crispy bacon, crumbled bleu cheese, a stack of Tumbleweed Onions, all drizzled with our homemade wing sauce.', '12.49', texasBurgImg);
const caribBurg = new MenuItem('burger', 'Caribbean Burger', 'Flanigan\'s award-winning BBQ sauce, melted cheddar cheese, and two strips of bacon.', '12.49', caribBurgImg);

// WAY TOO BIG SANDWICHES
const cheeseStk = new MenuItem('sandwich', 'Philadelphia Cheese Steak', 'Sliced beef sautéed with onions, and mushrooms with melted Swiss American cheese on a hoagie roll.', '11.99', cheeseStkImg);
const chipotChicken = new MenuItem('sandwich', 'Chipotle Chicken Stack Sandwich', 'Grilled chicken breast with melted Swiss cheese, crisp bacon, chipotle sauce, and a pile of Tumbleweed Onions.', '10.99', chipotChickenImg);
const dolphinSand = new MenuItem('sandwich', 'Dolphin Sandwich', 'Dolphin (aka Mahi-Mahi) with lettuce and tomato on a Kaiser roll. Tartar sauce available upon request. Blackened, Fried, or Grilled.', 'Market Price', dolphinSandImg);

// SEAFOOD
const grilledSalmon = new MenuItem('seafood', 'Grilled Salmon', 'A chargrilled ten-ounce filet of Atlantic Salmon. Your pick - Lemon Garlic, Toasted Sesame Glaze, or Blackened.', '18.99', grilledSalmonImg);
const surfTurf = new MenuItem('seafood', 'Surf & Turf', 'An eight-ounce USDA Choice N.Y. Strip Steak, paired with 1/2 dozen plump fried shrimp.', '19.99', surfTurfImg);
const lemonTilapia = new MenuItem('seafood', 'Lemon Pepper Tilapia', 'Tender, flaky Tilapia sautéed in our creamy, homemade Lemon Pepper sauce.', '16.99', lemonTilapiaImg);

// SIDES
const bakedPotato = new MenuItem('side', 'Baked Potato', 'Idaho\'s best, served piping hot with sour cream and butter piled on at your request.', '3.99', bakedPotatoImg);
const frenchFries = new MenuItem('side', 'French Fries', 'A Flanigan\'s signature, 3/4 of a pound of perfectly seasoned curly fries.', '6.99', frenchFriesImg);
const sweetPotato = new MenuItem('side', 'Sweet Potato Fries', 'A generous amount of the ultimate sweet potato fry, deep-fried, and dusted with cinnamon sugar. Sub side with any sandwich, burger, or entree.........Add $1.99', '7.99', sweetPotatoImg);

// Find a way to automatically add to this array when a new MenuItem is created
// May need to add a class to menu items to then use .querySelectorAll()
const menuArr = [ribRolls, tumbleOnions, friedShrimp, texasBurg, caribBurg, cheeseStk, chipotChicken, dolphinSand, grilledSalmon, surfTurf, lemonTilapia, bakedPotato, frenchFries, sweetPotato];

const menuDiv = document.createElement('div');
menuDiv.classList.add('menu-div');
const menuList = document.createElement('ul');
menuList.classList.add('menu-list');
content.appendChild(menuDiv);
menuDiv.appendChild(menuList);

function createMenuListItem() {
  const menuListItem = document.createElement('li');
  menuListItem.classList.add('menu-list-item');
  const menuListItemDiv = document.createElement('div');
  menuListItemDiv.classList.add('menu-list-item-div');
  const menuListItemName = document.createElement('h3');
  menuListItemName.classList.add('menu-list-item-name');
  const menuListItemDesc = document.createElement('p');
  menuListItemDesc.classList.add('menu-list-item-desc');
  const menuListItemPrice = document.createElement('span');
  menuListItemPrice.classList.add('menu-list-item-price');
  const menuListItemImg = document.createElement('img');
  menuListItemImg.classList.add('menu-list-item-img');

  menuList.appendChild(menuListItem);
  menuListItem.appendChild(menuListItemDiv);
  menuListItemDiv.appendChild(menuListItemName);
  menuListItemDiv.appendChild(menuListItemDesc);
  menuListItemDiv.appendChild(menuListItemPrice);
  menuListItemDiv.appendChild(menuListItemImg);
  return [menuListItemName, menuListItemDesc, menuListItemPrice, menuListItemImg];
}

function addMenuText(arr) {
  const properties = [this.name, this.desc, this.price, this.img];
  for (let i = 0; i < arr.length; i++) {
    if (properties[i] === this.img) {
      arr[i].src = properties[i];
    } else {
      arr[i].textContent = properties[i];
    }
  }
}

function createMenuSidebar(arr) {
  const types = new Set();
  arr.forEach((item) => {
    types.add(item.type);
  });
  const sidebar = document.createElement('ul');
  sidebar.classList.add('sidebar');
  types.forEach((type) => {
    const li = document.createElement('li');
    li.setAttribute('id', type);
    li.classList.add('sidebar-item');
    li.textContent = type;
    sidebar.appendChild(li);
  });
  return sidebar;
}

export {
  createMenuListItem,
  addMenuText,
  createMenuSidebar,
  menuArr,
  menuDiv,
};
