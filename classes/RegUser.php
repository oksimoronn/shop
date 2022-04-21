<?php
//require './autoload.php';
//require_once 'Db.php';

class RegUser {
    protected $email;
    protected $pass;
    protected $rpass;
    protected $uname;

    function __construct($email, $uname, $pass, $rpass){
        $this->email = $email;
        $this->pass = $pass;
        $this->rpass = $rpass;
        $this->uname = $uname;
    }

    public function reg(){
        if($this->email() && $this->pass()){
            require_once 'Db.php';
            
            $passh = password_hash($this->pass, PASSWORD_DEFAULT);

            $stmt = $pdo->prepare("INSERT INTO users (email, uname, pass) VALUES (?, ?, ?)");
            $stmt->execute([$this->email, $this->uname, $passh]);
            $stmt = null;

            header("location:./login.php");

        }else {
            header("location:./register.php");
        }
        
    }

    protected function email(){

        if (filter_var($this->email, FILTER_VALIDATE_EMAIL)) {
            
            return true;
        }else{
            return false;
        }
    }

    protected function pass(){
        if($this->pass == $this->rpass && strlen($this->pass) > 4){
            return true;
        }else {
            return false;
        }
    }

}