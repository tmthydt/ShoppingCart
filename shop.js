"use sctrict";

shoppingCart = [];
itemList = [

    {name:"Phone", price:500},
    {name:"Earbuds", price:25},
    {name:"Mug", price:10},
    {name:"Backpack", price:100},
    {name:"Laptop", price:300},

];

function addItem(itemName, itemPrice) {
    shoppingCart=[...itemList,(itemName, itemPrice),]
 
}

function removeItem(itemName) {

}

function editItem() {

}

function printTotal() {

}