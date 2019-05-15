"use strict";
// = an empty array
let shoppingCart = [];
// the items are in the array
let itemList = [
  { name: "Dog", price: 100 },
  { name: "Cat", price: 5 },
  { name: "Fish", price: 20 },
  { name: "Bird", price: 30 },
  { name: "Pig", price: 100 }
];

// const = no change to its assign
// add a copy of the given item to the end of the shoppingCart array
// doesnt need brackets if 1 line same witth an if statement
const addItem = (newItem) => shoppingCart = [...shoppingCart, { ...newItem }];

// be able to remove the item cart through the array
const removeItem = itemName => {
  const index = shoppingCart.findIndex(item => item.name === itemName);
  // the range begins after the start and doesnt go to the index's end
  shoppingCart = [...shoppingCart.slice(0, index), ...shoppingCart.slice(index + 1)];
}

// edit the selected item through the array
const editItem = (itemToEdit, updatedItemName, updatedItemPrice) => {
  const index = shoppingCart.findIndex(item => item.name === itemToEdit);
  shoppingCart = [...shoppingCart.slice(0, index), { name: updatedItemName, price: updatedItemPrice }, ...shoppingCart.slice(index + 1)];
}

// calc the total cost then adding the total in the p elemment to the display
const updateTotal = () => {
  let total = 0;
  for (let item of shoppingCart) { total += item.price; }
  document.querySelector("p.cart__total").innerText = `The total is: $${total += total * 0.06}.`;
}

// select the specified selection
const main = document.querySelector("main");
// add the onClick event to the buttons
main.addEventListener("click", function (event) {
  // run the event when we click on the button
  if (event.target.classList.contains("add__btn")) {
    // itemList[event.target.attributes[--index number--].value]
    addItem(itemList[event.target.attributes[0].value]);
    display(itemList[event.target.attributes[0].value]);
    updateTotal();
  } else if (event.target.classList.contains("remove__btn")) { // 
      removeItem(event.target.attributes[0].value); // remove from the index number
      event.target.parentNode.remove(); // the parent of the button gets removed
      updateTotal();
    }
  
  
});

// add a li element that displays the given to the shoppong cart list
function display(item) {
  const el = document.createElement("li");
  // apply the li in the html to have the following p and button 
  el.innerHTML = `
  <p>Item Name: ${item.name} | Item Price: $${item.price}</p>
  <button name="${item.name}" class="remove__btn">Remove item</button>`;
  // append adds onto the end
  document.querySelector("ul.cart__list").append(el);
}

//initially display all the itemList items in the proper ul element
for (let index in itemList) { //looping through items
  const itemUL = document.querySelector("ul.item__list");
  const el = document.createElement("li"); //creating list item for each element in array
  // apply the li in the html to have the following p and button 
  el.innerHTML = `
  <p>Item Name: ${itemList[index].name} | Item Price: $${itemList[index].price}</p>
  <button i="${index}" class="add__btn">Add to cart</button>
  `; //initializing list item
  itemUL.append(el); //adding list item to container as child to UL item with class of item__list (append)
}
