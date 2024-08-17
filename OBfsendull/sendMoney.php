// sendMoney.php
<?php 
session_start();
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $recipientEmail = $_POST['recipientEmail'];
    $amount = $_POST['amount'];
    $senderEmail = $_SESSION['user'];

    $query = "INSERT INTO transactions (sender, recipient, amount) VALUES ('$senderEmail', '$recipientEmail', '$amount')";
    if (mysqli_query($conn, $query)) {
        mail($recipientEmail, "Money Received", "You have received $amount from $senderEmail.");
        echo "Money sent successfully.";
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}
?>