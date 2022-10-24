"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: Savier Osman
   Date:   10/11/2022
   
   Filename: tc_cart.js
	
*/

// Creates and sets the order total to $0
var orderTotal = 0;

// Creats variable cartHTML and then sets the starting html code for creating a table.
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

// Adds each item in the cart as a html code to cartHTML variable using a for loop.
for (var i = 0; i < 4; i++) {
   cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
   cartHTML += "<td>" + itemDescription[i] + "</td><td>$" + itemPrice[i] + "</td><td>" + itemQty[i] + "</td>";
   var itemCost = itemPrice[i] * itemQty[i];

   //Adds the total cost of the item by adding the new item cost to the current order total.
   cartHTML += "<td>$" + itemCost + "</td></tr>";
   orderTotal += itemCost;
}

// Adds the last html code to show the order total and end the table code.
cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>";

//adds all the coded from cartHTML to the div with the ID "cart".
document.getElementById("cart").innerHTML = cartHTML;
