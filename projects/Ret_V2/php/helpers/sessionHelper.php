<?php
  function cleanSession(){
    $_SESSION["id"]=null;
    $_SESSION["login"]=null;
    $_SESSION["passwd"]=null;
  }

  function updateSession($id = "", $login = "", $passwd = ""){
    if ($id != "")
      $_SESSION["id"] = $id;
    if ($login != "")
      $_SESSION["login"]=$login;
    if ($passwd != "")
      $_SESSION["passwd"]=$passwd;
  }
?>
