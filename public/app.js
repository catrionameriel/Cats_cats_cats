//const Cat = require('../cat.js');
const Cat = function(name, favourite_food, url) {
  this.name = name;
  this.favouriteFood = favourite_food;
  this.url = url;
};

const app = function() {
  const scout = new Cat('Scout', 'Sofa', '/images/scout.jpg');

  const boba = new Cat('Boba', 'Sock fluff', "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");

  const barnaby = new Cat('Barnaby', 'Tuna', "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg");

  const max = new Cat('Max', 'Whiskas Temptations', "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");

  const cats = [scout, barnaby, max, boba];

  addCats(cats);
}

//create li for name
var createNewListItem = function(text, prefix) {
  let newListItem = document.createElement("li");
  newListItem.innerText = prefix + text;
  //could add css to DOM
  // newListItem.style.listStyle = "none";
  return newListItem;
}
//create li for favourite food
//create li image
var createNewImageListItem = function(url) {
  let newImageListItem = document.createElement("li");
  let newImage = document.createElement("img");
  newImage.src = url;
  newImage.className = "cat-image";
  newImageListItem.appendChild(newImage);
  return newImageListItem;
}


//create ul add li's (class = "cat")
var createUnorderedList = function(newClassName) {
  let emptyUnorderedList = document.createElement("ul");
  emptyUnorderedList.className = newClassName;
  return emptyUnorderedList;
}

var addToUnorderedList = function(ul, li) {
  ul.appendChild(li);
}

//create ul to section (id = "cats")
var addUnorderedistToSection = function(ul) {
  let section = document.querySelector('#cats');
  section.appendChild(ul)
}

var addCats = function(catCollection) {
  catCollection.forEach(function(cat) {
    let newCatList = createUnorderedList("cat");
    addToUnorderedList(newCatList, createNewListItem(cat.name, 'Name: '));
    addToUnorderedList(newCatList, createNewListItem(cat.favouriteFood, 'Favourite food: '));
    addToUnorderedList(newCatList, createNewImageListItem(cat.url));
    addUnorderedistToSection(newCatList);
  })
}

document.addEventListener('DOMContentLoaded', app);
