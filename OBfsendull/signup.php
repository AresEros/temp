// signup.php
<?php 

include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
    if (mysqli_query($conn, $query)) {
        mail($email, "Welcome!", "Thank you for signing up.");
        header("Location: login.php");
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}

?>
