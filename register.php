<?php
session_start();
require './autoload.php';

$view = new Partials();

$view->head(); ?>

<body class="text-center">
    
      <main class="form-signin">
        <form action="" method="post">
          <img class="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
          <h1 class="h3 mb-3 fw-normal">Register</h1>
      
          <div class="form-floating">
              <label for="floatingInput">Email address</label>
              <input type="email" class="form-control" id="floatingInput" name="email" placeholder="name@example.com">
          </div>

          <div class="form-floating">
              <label for="Input">Name</label>
              <input type="text" class="form-control" id="Input" name="name" placeholder="name">
          </div>

          <div class="form-floating">
              <label for="floatingPassword">Password</label>
              <input type="password" class="form-control" id="floatingPassword" name="pass" placeholder="Password">
            
          </div>
          <div class="form-floating">
              <label for="Password">Repeat Password</label>
              <input type="password" class="form-control" id="Password" name="rpass" placeholder="Repeat Password">
            
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
  $name = $_POST['name'];
  $pass = $_POST['pass'];
  $rpass = $_POST['rpass'];

  $reg = new RegUser($email, $name, $pass, $rpass);

  $reg->reg();

}


?>



  
