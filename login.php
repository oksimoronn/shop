<?php
require './autoload.php';

$view = new Partials();

$view->head();

?>

<body class="text-center">
    
      <main class="form-signin">
        <form action="" method="post">
          <img class="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
          <h1 class="h3 mb-3 fw-normal">Login</h1>
      
          <div class="form-floating">
              <label for="floatingInput">Email address</label>
              <input type="email" class="form-control" id="floatingInput" name="email" placeholder="name@example.com">
          </div>

          <div class="form-floating">
              <label for="floatingPassword">Password</label>
              <input type="password" class="form-control" id="floatingPassword" name="pass" placeholder="Password">
            
          </div>
      
          <button class="w-100 btn btn-lg btn-primary" type="submit" name="submit">Register</button>

          <?php 
            if(isset($_SESSION['invalid'])){echo'Invalid input';} 
          ?>

          <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        
        </form>
      </main>
      
      
          
        </body>
      </html>

      <?php
if(isset($_POST['submit'])){

  $email = $_POST['email'];
  $pass = $_POST['pass'];


  $login = new Login($email, $pass);

  $login->login();

}


?>