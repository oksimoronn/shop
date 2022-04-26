<?php

$host = 'localhost';
$dbname = 'shop';
$username = 'root';
$password = '';


$pdo = new PDO("mysql:host=$host; dbname=$dbname", $username, $password);

//echo ("Connecteted to $dbname at $host succesfuly.");


$stmt = $pdo->prepare("SELECT * FROM users WHERE email = ? ");
$stmt->execute(['test.antol@yahoo.com']);

$result = $stmt->fetch(PDO::FETCH_ASSOC);

$name = $result['email'];
$pas = $result['pass'];


echo '<pre>';
var_dump($name);
var_dump($pas);
echo '</pre>';

//echo $result;