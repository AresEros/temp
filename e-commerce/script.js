// script.js
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
}

function checkout() {
    const email = prompt("Please enter your email for confirmation:");
    if (email) {
        sendConfirmationEmail(email);
    }
}

function sendConfirmationEmail(email) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Confirmation email sent!");
        }
    };
    xhr.send(JSON.stringify({ email: email, cart: cart }));
}
