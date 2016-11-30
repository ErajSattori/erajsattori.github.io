var price;
var quantity;
var total;

var username;
var message;
username = 'Jack';
message = 'See our upcoming range';

var elUsername = document.getElementById('username');
elUsername.textContent = username;
var elMessage = document.getElementById('message');
elMessage.textContent = message;

price = 5;
quantity = 14;
total = price * quantity;
var el = document.getElementById('cost');
el.textContent = '$' + total;
