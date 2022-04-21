<?php


$host = 'localhost';
$dbname = 'shop';
$username = 'root';
$password = '';


try {
$pdo = new PDO("mysql:host=$host; dbname=$dbname", $username, $password);

//echo ("Connecteted to $dbname at $host succesfuly.");
} catch (Exception $e) {
error_log($e->getMessage());
exit('Something weird happened'); 
}