<?php

class Partials {
    public function head(){
        $str =  <<<EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>

EOF;

        echo $str;
    }



public function foot(){
        $str =  <<<EOF
<footer class="py-5">
<div class="row">
    <div class="col-2">
    <h5>Section</h5>
    <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
    </ul>
    </div>

    <div class="col-2">
    <h5>Section</h5>
    <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
    </ul>
    </div>

    <div class="col-2">
    <h5>Section</h5>
    <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
    </ul>
    </div>

    <div class="col-4 offset-1">
    <form>
        <h5>Subscribe to our newsletter</h5>
        <p>Monthly digest of whats new and exciting from us.</p>
        <div class="d-flex w-100 gap-2">
        <label for="newsletter1" class="visually-hidden">Email address</label>
        <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
        <button class="btn btn-primary" type="button">Subscribe</button>
        </div>
    </form>
    </div>
</div>

<div class="d-flex justify-content-between py-4 my-4 border-top">
    <p>© 2021 Company, Inc. All rights reserved.</p>
    <ul class="list-unstyled d-flex">
    <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
    <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
    <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
    </ul>
</div>
</footer>

</body>
</html>
EOF;

        echo $str;
    }

    public function nav(){
        $str =  <<<EOF
        <header class="p-3 bg-dark text-white">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
            </a>
    
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
              <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
              <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
              <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
              <li><a href="#" class="nav-link px-2 text-white">About</a></li>
            </ul>
    
            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
            </form>
    
            <div class="text-end">
              <button type="button" class="btn btn-outline-light me-2">Login</button>
              <a href="register.php"><button type="button" class="btn btn-warning">Sign-up</button></a>
            </div>
          </div>
        </div>
      </header>

EOF;

        echo $str;
    }

    public function regform(){
      $str =  <<<EOF
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
          <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
      </main>
      
      
          
        </body>
      </html>

EOF;

      echo $str;
  }
    
}