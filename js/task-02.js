const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// create new list
const addNewElement = ingredients.map(el => {
  // create new tag "li"
  const newTagLi = document.createElement("li");
  // adding new class 
  newTagLi.classList.add("item");
  // adding new content 
  newTagLi.textContent = el;
  // return created elements
  return newTagLi;
})
// searching for an item
const ulTag = document.querySelector("#ingredients");
// added new elements
ulTag.append(...addNewElement);

