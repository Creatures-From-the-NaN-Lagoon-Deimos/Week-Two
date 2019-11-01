"use strict";
// Rodrigo is a chef, and needs to buy food for his restaurant. He's worked out a deal with the shop and can get his food for a
// twenty percent discount, but the shop changes their prices from week to week.
//
// Rodrigo needs to buy tofu, lamb, and potatoes.
//
// Return a string to Rodrigo with his total based on how much of each item he's buying, by weight in pounds, the price of the
// items per pound, and also inform him of the savings he's receiving from the store.

var tofuPrice = 4.99;
var lambPrice = 14.99;
var potatoPrice = 3.49;
var discountRate = 20;
var container = document.querySelector("#container");


function purchaseOrder(x, y, z) {
    var total = 0;
    var x = parseInt(prompt("How many pounds of tofu would you like?"));
    var y = parseInt(prompt("How many pounds of lamb would you like?"));
    var z = parseInt(prompt("How many pounds of potatoes would you like?"));
    total += ((tofuPrice * x) + (lambPrice * y) + (potatoPrice * z));
    return (container.innerHTML = ("You are buying " + x + " lb(s) of tofu at $" + tofuPrice + " per lb. <br> You are buying " + y + " lb(s) of lamb at $" + lambPrice + " per lb.<br> You are buying " + z + " lb(s) of potatoes at $" + potatoPrice + " per lb.<br> Your pre discount total is $" + total.toFixed(2) + ".<br> Your " + discountRate + "% discount gets you an additional $" + (total * (discountRate / 100)).toFixed(2) + ".<br> Your new final total is $" + (total - (total * (discountRate / 100))).toFixed(2)));

}
