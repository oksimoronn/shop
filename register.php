<?php
require './autoload.php';

$view = new Partials();

$view->head();

$view->regform();

if(isset($_POST['submit'])){

  $email = $_POST['email'];
  $name = $_POST['name'];
  $pass = $_POST['pass'];
  $rpass = $_POST['rpass'];

  $reg = new RegUser($email, $name, $pass, $rpass);

  $reg->reg();

}



  
