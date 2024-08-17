let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productId = product.getAttribute('data-id');
        const productName = product.querySelector('h3').innerText;
        const productPrice = product.querySelector('p').innerText;

        cart.push({ id: productId, name: productName, price: productPrice });
        updateCart();
    });
});

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - ${item.price}`;
        cartItems.appendChild(li);
    });
}

document.getElementById('checkout').addEventListener('click', () => {
    const paymentMethod = prompt("Enter payment method (online or delivery):");
    if (paymentMethod) {
        sendConfirmationEmail();
    }
});

function sendConfirmationEmail() {
    const email = prompt("Enter your email for confirmation:");
    if (email) {
        // Simulate sending email
        alert(`Confirmation email sent to ${email}`);
    }
}
