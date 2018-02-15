<?php
  session_start();
  require_once('helpers/sessionHelper.php');
  require_once('poco/poco_usr.php');
  require_once('poco/poco_hist.php');
  require_once('class/usr.php');

  $login  = isset($_POST["login"]) ? $_POST["login"] : "";
  $passwd = isset($_POST["passwd"]) ? $_POST["passwd"] : "";

  //https://stackoverflow.com/questions/1699796/best-way-to-do-multiple-constructors-in-php
  $usr = new Usr("", $login, $passwd);
  $usr = getUsr($login, $passwd);
  if (is_numeric($usr->usrid)){
    // If the user is successfully connected, we write it withtin the history tbl
    updateSession($usr->usrid, $login, $passwd);
    insertHistory($usr->usrid);
    echo "OK";
  }
  else{
    echo "ERR : x" . $usr->usrid . " - " . $usr->login . " - " . $usr->passwd;
  }
?>
