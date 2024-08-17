// script.js
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(productName + " has been added to your cart.");
}

document.getElementById('checkoutForm').onsubmit = function(event) {
    event.preventDefault();
    const paymentMethod = document.getElementById('paymentMethod').value;
    alert("You have chosen to pay " + paymentMethod + ".");
};
