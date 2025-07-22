let total = 0;
function addToCart(amount) {
  total += amount;
  document.getElementById('total').textContent = total;
}
