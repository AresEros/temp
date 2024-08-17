<?php
// send_email.php
$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];
$cart = $data['cart'];

$subject = "Your Cart Confirmation";
$message = "Thank you for your purchase! Here are the items in your cart:\n";

foreach ($cart as $item) {
    $message .= $item['name'] . " - $" . $item['price'] . "\n";
}

$headers = "From: no-reply@ecommerce.com";

mail($email, $subject, $message, $headers);
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $cartItems = $_POST['cartItems'];

    // Simulate sending email
    mail($email, "Order Confirmation", "Your order: " . implode(", ", $cartItems));
}
?>
