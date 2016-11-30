var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var text = document.getElementById('cost');
text.textContent = '$' + total;
