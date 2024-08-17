// login.php
<?php 

session_start();
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $result = mysqli_query($conn, $query);
    
    if (mysqli_num_rows($result) > 0) {
        $_SESSION['user'] = $email;
        mail($email, "Login Alert", "You have successfully logged in.");
        header("Location: dashboard.php");
    } else {
        echo "Invalid credentials.";
    }
}
?>