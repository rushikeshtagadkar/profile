<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Customize this part to send the data to your email or store it in a database
    $to = "rushikeshtagadkar01@gmail.com";
    $subject = "New Form Submission";
    $headers = "From: $email";

    $mailBody = "Name: $name\nEmail: $email\nMessage:\n$message";

    mail($to, $subject, $mailBody, $headers);
}
?>