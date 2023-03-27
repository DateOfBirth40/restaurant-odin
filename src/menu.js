/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import ribRollsImg from './rib-rolls.webp';
import tumbleOnionsImg from './tumbleweed-onions.webp';
import friedShrimpImg from './firecracker-shrimp.webp';
import seafoodGumboImg from './seafood-gumbo.webp';
import clamChowderImg from './clam-chowder.webp';
import garlicRollsImg from './garlic-rolls.webp';
import mozzSticksImg from './mozzarella-sticks.webp';
import potatoSkinsImg from './potato-skins.webp';
import dolphinFingersImg from './dolphin-fingers.webp';
import fiveWingsImg from './five-wings.jpeg';
import tenWingsImg from './ten-wings.webp';
import twentyWingsImg from './twenty-wings.webp';
import fiftyWingsImg from './fifty-wings.jpeg';
import texasBurgImg from './texas-burger.webp';
import caribBurgImg from './caribbean-burger.webp';
import bahamaBurgImg from './bahama-burger.webp';
import bigDaddyBurgImg from './big-daddy-burger.webp';
import flaniganBurgImg from './flanigan-burger.webp';
import cheeseStkImg from './cheese-steak.webp';
import chickenPhilyImg from './chicken-philly.webp';
import chipotChickenImg from './chipotle-chicken-sandwich.webp';
import teriyakiChickenImg from './teriyaki-chicken-sandwich.webp';
import dolphinSandImg from './dolphin-sandwich.webp';
import salmonSandImg from './salmon-sandwich.webp';
import grilledSalmonImg from './grilled-salmon.webp';
import surfTurfImg from './surf-n-turf.webp';
import lemonTilapiaImg from './tilapia.webp';
import fishTacosImg from './fish-tacos.webp';
import tunaFiletImg from './tuna-filet.webp';
import bakedPotatoImg from './baked-potato.webp';
import sweetPotatoImg from './sweet-potato.webp';
import frenchFriesImg from './french-fries.webp';
import dirtyRiceImg from './dirty-rice.webp';
import blackBeansImg from './black-beans.webp';
import banzaiBrownieImg from './banzai-brownie.webp';
import keyLimeImg from './key-lime.webp';
import chocCakeImg from './chocolate-ecstacy.webp';
import dulceLecheImg from './dulce-leche.webp';
import flanShenanImg from './flanigans-shenanigan.webp';

function MenuItem(type, name, desc, price, img) {
  this.type = type;
  this.name = name;
  this.desc = desc;
  this.price = price;
  this.img = img;
};

const menuArr = [];
// The following will automatically add a new MenuItem to the menuArr array
function createMenuItem(type, name, desc, price, img) {
  const menuItem = new MenuItem(type, name, desc, price, img);
  menuArr.push(menuItem);
  return menuItem;
}

// STARTERS
const ribRolls = createMenuItem('starter', 'Joe\'s Rockin\' Rib Rolls', 'Homemade, deep-fried egg rolls stuffed with meat from our famous baby back ribs, pulled pork, cheddar cheese, onions, and Flanigan\'s BBQ sauce.', '11.99', ribRollsImg);
const tumbleOnions = createMenuItem('starter', 'Tumbleweed Onions', 'Thinly sliced jumbo onions, lightly battered and fried, with a side of honey mustard.', '6.99', tumbleOnionsImg);
const friedShrimp = createMenuItem('starter', 'Firecracker Shrimp', 'A dozen plump, deep-fried shrimp, tossed in a slightly spicy cream sauce over a bed of iceberg lettuce, topped with pico di gallo.', '11.99', friedShrimpImg);
const seafoodGumbo = createMenuItem('starter', 'Seafood Gumbo', 'A tomato-based, zesty gumbo, chock full of shrimp, fish, veggies and rice. Like New Orleans best: a bit spicy, but not too hot to handle.', '6.99', seafoodGumboImg);
const clamChowder = createMenuItem('starter', 'New England Clam Chowder', 'A tasty, smooth, white chowder, loaded with clams, celery, carrots and potatoes. A classic recipe that rivals any chowder from the New England coast.', '6.99', clamChowderImg);
const garlicRolls = createMenuItem('starter', 'Garlic Rolls', 'Six cute little golf ball sized rolls, ideal for applying butter and garlic to your chin. While in the general proximity of your mouth, eating is also recommended.', '5.99', garlicRollsImg);
const mozzSticks = createMenuItem('starter', 'Mozzarella Sticks', 'Str-r-r-r-etch your appetizer! Stringy, but delicious, mozzarella cheese, deep fried just right. Served with Marinara.', '7.99', mozzSticksImg);
const potatoSkins = createMenuItem('starter', 'Potato Skins', 'The skin of Idaho potatoes, surgically removed and reconstructed with cheddar cheese and bacon bits, to produce melt in your mouth potato skins.', '6.99', potatoSkinsImg);
const dolphinFingers = createMenuItem('starter', 'Dolphin Fingers', 'A half-pound of dolphin strips, deep fried and served with your choice of cocktail or tartar sauce', '14.77', dolphinFingersImg);

// WINGS
const fiveWings = createMenuItem('wings', 'Five (5) Wings', 'Available in hot, medium, mild, and barbecue flavors.', '9.99', fiveWingsImg);
const tenWings = createMenuItem('wings', 'Ten (10) Wings', 'Available in hot, medium, mild, and barbecue flavors.', '13.99', tenWingsImg);
const twentyWings = createMenuItem('wings', 'Twenty (20) Wings', 'Available in hot, medium, mild, and barbecue flavors.', '20.99', twentyWingsImg);
const fiftyWings = createMenuItem('wings', 'Fifty (50) Wings', 'Available in hot, medium, mild, and barbecue flavors.', '39.99', fiftyWingsImg);

// TEN OUNCE BURGERS
const texasBurg = createMenuItem('burger', 'Texas Burger', 'Crispy bacon, crumbled bleu cheese, a stack of Tumbleweed Onions, all drizzled with our homemade wing sauce.', '12.49', texasBurgImg);
const caribBurg = createMenuItem('burger', 'Caribbean Burger', 'Flanigan\'s award-winning BBQ sauce, melted cheddar cheese, and two strips of bacon.', '12.49', caribBurgImg);
const bahamaBurg = createMenuItem('burger', 'Bahama Burger', 'The perfect burger for the "hamburger purist", i.e. no "junk" to get in the way of that fresh beef flavor, charbroiled to perfection.', '11.99', bahamaBurgImg);
const bigDaddyBurg = createMenuItem('burger', 'Big Daddy Burger', 'The ultimate cheeseburger - 2 slices of American cheese added to the Bahama Burger! This burger is partially responsible for the "Big" in "Big Daddy!', '12.49', bigDaddyBurgImg);
const flaniganBurg = createMenuItem('burger', 'Flanigan Burger', 'Covered with sautéed onions and mushrooms, plus 2 slices of Swiss American cheese.', '12.49', flaniganBurgImg);

// SANDWICHES
const cheeseStk = createMenuItem('sandwich', 'Philadelphia Cheese Steak', 'Sliced beef sautéed with onions, and mushrooms with melted Swiss American cheese on a hoagie roll.', '11.99', cheeseStkImg);
const chickenPhily = createMenuItem('sandwich', 'Chicken Philly', 'Fresh chicken sautéed with onions, and mushrooms with melted Swiss American cheese on a hoagie roll.', '11.99', chickenPhilyImg);
const chipotChicken = createMenuItem('sandwich', 'Chipotle Chicken Sandwich', 'Grilled chicken breast with melted Swiss cheese, crisp bacon, chipotle sauce, and a pile of Tumbleweed Onions.', '10.99', chipotChickenImg);
const teriyakiChicken = createMenuItem('sandwich', 'Teriyaki Chicken Sandwich', 'Tender chicken breast, marinated in Teriyaki sauce, chargrilled, and covered with melted Swiss American cheese and two strips of bacon.', '10.99', teriyakiChickenImg);
const dolphinSand = createMenuItem('sandwich', 'Dolphin Sandwich', 'Dolphin (aka Mahi-Mahi) with lettuce and tomato on a Kaiser roll. Tartar sauce available upon request. Blackened, Fried, or Grilled.', 'Market Price', dolphinSandImg);
const salmonSand = createMenuItem('sandwich', 'Salmon Sandwich', 'A tasty, tender filet of our Atlantic Salmon, seasoned with a chipotle rub, grilled just right and served on a toasted, buttered Kaiser roll with a side of our way-too-good chipotle sauce.', '10.99', salmonSandImg);

// SEAFOOD
const grilledSalmon = createMenuItem('seafood', 'Grilled Salmon', 'A chargrilled ten-ounce filet of Atlantic Salmon. Your pick - Lemon Garlic, Toasted Sesame Glaze, or Blackened.', '18.99', grilledSalmonImg);
const surfTurf = createMenuItem('seafood', 'Surf & Turf', 'An eight-ounce USDA Choice N.Y. Strip Steak, paired with 1/2 dozen plump fried shrimp.', '19.99', surfTurfImg);
const lemonTilapia = createMenuItem('seafood', 'Lemon Pepper Tilapia', 'Tender, flaky Tilapia sautéed in our creamy, homemade Lemon Pepper sauce.', '16.99', lemonTilapiaImg);
const fishTacos = createMenuItem('seafood', 'Fish Tacos', 'Three huge tortilla shells filled with grilled, blackened or deep fried Dolphin, dirty rice, lettuce, Chipotle sauce, Pico de Gallo, cheddar cheese and sour cream. These ultimate fish tacos come with black beans and rice or an alternate potato or rice side of your choice.', '15.99', fishTacosImg);
const tunaFilet = createMenuItem('seafood', 'Tuna Entrée', 'A hearty 10 oz. filet of fresh Tuna, blackened or grilled, served with potato or rice.', '19.99', tunaFiletImg);

// SIDES
const bakedPotato = createMenuItem('side', 'Baked Potato', 'Idaho\'s best, served piping hot with sour cream and butter piled on at your request.', '3.99', bakedPotatoImg);
const frenchFries = createMenuItem('side', 'French Fries', 'A Flanigan\'s signature, 3/4 of a pound of perfectly seasoned curly fries.', '6.99', frenchFriesImg);
const sweetPotato = createMenuItem('side', 'Sweet Potato Fries', 'A generous amount of the ultimate sweet potato fry, deep-fried, and dusted with cinnamon sugar. Sub side with any sandwich, burger, or entree.........Add $1.99', '7.99', sweetPotatoImg);
const dirtyRice = createMenuItem('side', 'Dirty Rice', 'Sometimes called "Cajun Rice," sometimes called "Spicy Rice," always called delicious! A spicy blend of rice that would make New Orleans proud.', '3.99', dirtyRiceImg);
const blackBeans = createMenuItem('side', 'Black Beans & Rice', 'A generous serving of white rice, black beans, chopped onions, and mojo.', '3.99', blackBeansImg);

// DESSERT
const banzaiBrownie = createMenuItem('dessert', 'The Banzai Brownie', 'A super-sized, warm, triple chocolate brownie, piled high with Edy\'s vanilla ice cream, covered with huge chunks of Oreo cookies, surrounded by Kit Kat bars, and topped off with whipped cream and Hershey\'s chocolate syrup! The ultimate chocolate lover\'s challenge!', '9.49', banzaiBrownieImg);
const keyLime = createMenuItem('dessert', 'Key Lime Pie', 'A smooth and creamy, light textured pie that is full of the tangy taste of genuine Key Limes, resting on a delicious graham cracker crust, and topped with a dollop of whipped cream.', '6.99', keyLimeImg);
const chocCake = createMenuItem('dessert', 'Chocolate Ecstacy', 'A homemade-style, moist dark chocolate layer cake, filled and frosted with a rich, dark fudge icing, and surrounded with an outer layer of mini chocolate chips.', '6.99', chocCakeImg);
const dulceLeche = createMenuItem('dessert', 'Dulce de Leche Cheesecake', 'A unique blended mixture of creamy milk caramel and vanilla cheesecake on a graham cracker crust, topped with a swirl of caramel.', '6.99', dulceLecheImg);
const flanShenan = createMenuItem('dessert', 'Flanigan\'s Shenanigan', 'A giant slice of candy walnut apple pie, topped with a mountain of Edy\'s vanilla ice cream, a river of caramel and an avalanche of Heath Bar crunch.', '8.49', flanShenanImg);

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
