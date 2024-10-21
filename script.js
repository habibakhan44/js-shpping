var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 0;
var quantityItem2 = 0;
var shippingCharges = 100;

function addToCart(itemNumber) {
  if (itemNumber === 1) {
    quantityItem1++;
    document.getElementById('quantityItem1').textContent = quantityItem1;
  } else if (itemNumber === 2) {
    quantityItem2++;
    document.getElementById('quantityItem2').textContent = quantityItem2;
  }
  calculateTotal();
}

function calculateTotal() {
  var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
  document.getElementById('totalCost').textContent = totalCost + ' PKR';
}
