// getTransactions.php
<?php 
session_start();
include 'db.php';

$email = $_SESSION['user'];
$query = "SELECT * FROM transactions WHERE sender='$email' OR recipient='$email'";
$result = mysqli_query($conn, $query);

$transactions = [];
while ($row = mysqli_fetch_assoc($result)) {
    $transactions[] = $row;
}

echo json_encode($transactions);
?>
