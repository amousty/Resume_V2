<?php
  class Usr {
    public $usrid;
    public $login;
    public $passwd;

    public function __construct($id, $l, $p){
      $this->usrid = $id;
      $this->login = $l;
      $this->passwd = $p;
    }
  }
?>
