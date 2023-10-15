const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


function addElements(array) {
  const recipe = document.querySelector('#ingredients');
  array.forEach((element) => {
    const item = document.createElement('li');
    item.classList.add("item");
    item.textContent = element;
    recipe.append(item);
  }); 
}

addElements(ingredients);

