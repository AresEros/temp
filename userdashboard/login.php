<?php
// login.php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if ($email == "bruno@gmail.com" && $password == "password") {
        $_SESSION['user'] = $email;
        header("Location: dashboard.php");
        exit();
    } else {
        echo "Login details not valid";
    }
}
?>
