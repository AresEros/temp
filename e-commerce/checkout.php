<?php
// checkout.php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $paymentMethod = $_POST['paymentMethod'];
    // Process payment based on the selected method
    if ($paymentMethod == 'online') {
        // Code for online payment processing
    } else {
        // Code for cash on delivery processing
    }
    echo "Thank you for your order! You chose to pay " . $paymentMethod . ".";
}
?>
