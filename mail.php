<?php

// Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';

$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$message = wordwrap($message, 70);
$mail = new PHPMailer;

$mail->isSMTP();                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';       // Specify main and backup SMTP servers
$mail->SMTPAuth = true;               // Enable SMTP authentication
$mail->Username = '';   // SMTP username
$mail->Password = '';   // SMTP password
$mail->SMTPSecure = 'tls';            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                    // TCP port to connect to

// Sender info
$mail->setFrom('nahumkletkin@gmail.com', 'Myself');
$mail->addReplyTo('nahumkletkin@gmail.com', 'Myself');

// Add a recipient
$mail->addAddress('nahumkletkin@gmail.com');

//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

// Set email format to HTML
$mail->isHTML(true);

// Mail subject
$mail->Subject = $subject;

// Mail body content
$bodyContent = '<h1>'.$email.'sent me an email from my website!</h1>';
$bodyContent .= '<p>His message is:</p>';
$bodyContent .= '<p>'.$message.'</p>';

$mail->Body = $bodyContent;

// Send email
if (!$mail->send()) {
    echo 'Something went wrong. Please try again or email me directly.';
} else {
    echo 'Sent! I will answer as quickly as I can!';
}