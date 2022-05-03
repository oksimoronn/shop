<?php
session_start();

require_once 'Db.php';

class Login extends Db{

    public $email;
    public $pass;

    function __construct($email, $pass){
        $this->email = $email;
        $this->pass = $pass;
    }
    
    public function query(){
        $pdo = $this->db();

        $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ? ");
        $stmt->execute([$this->email]);

        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        $stmt = null;

        return $result;   
    }

    public function mail(){
        $res = $this->query();

        $mail = $res['email'];
        
        if($this->email == $mail){
            return true;
        }else{
            return false;
        }
    }

    public function pass(){
        $res = $this->query();

        $pash = $res['pass'];
        $rp = password_verify($this->pass, $pash);
        return $rp;
        /*if($rp == true){
            return true;
        }else{
            return false;
        } */
    }

    public function loginuser(){

        if(/*$this->mail() &&*/ $this->pass()){

            $res = $this->query();
            $name = $res['uname'];

            $_SESSION['user'] = $name;    
            header("Location: ./index.php");

        }else{
           header("Location: ./login.php");
        }
    }


}