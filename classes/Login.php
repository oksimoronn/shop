<?php

require_once 'Db.php';

class Login extends Db{

    protected $email;
    protected $pass;

    function __construct($email, $pass){
        $this->email = $email;
        $this->pass = $pass;

        
    }

    public function login(){

        if($this->mail() && $this->pass()){

            $this-> query();
            $name = $result['uname'];

            $_SESSION['user']=$name;    
            header("Location: ./index.php");
            
        }else{
            header("Location: ./login.php");
        }
    }
    

    protected function mail(){
        $this-> query();

        $name = $result['email'];
        
        if($this->email == $name){
            return true;
        }else{
            return false;
        }
    }

    protected function pass(){
        $this-> query();

        $pash = $result['pass'];
        $rp = password_verify($this->pass, $pash);

        if($rp == true){
            return true;
        }else{
            return false;
        } 
    }

    protected function query(){
        $pdo = $this->db();

        $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ? ");
        $stmt->execute([$this->email]);

        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        $stmt = null;

        return $result;   
    }


}