<?php
  session_start();
  require_once('helpers/sessionHelper.php');
  require_once('POCO/poco_usr.php');
  //require_once('db_Call.php');
  require_once('POCO/poco_hist.php');

  $login  = isset($_POST["login"]) ? $_POST["login"] : "";
  $passwd = isset($_POST["passwd"]) ? $_POST["passwd"] : "";

  if(insertUsr($login, $passwd) == "OK"){
    $usrID = getUsr($login, $passwd);
    if (is_numeric($usrID)){
      // If the user is successfully connected, we write it withtin the history tbl
      updateSession($usrID, $login, $passwd);
      insertHistory($usrID);
      echo "OK";
    }
    else{
      echo "ERR : " . $usrID;
    }
  }
  else{
    echo "ERR : ERROR DURING INSERTING ACCOUNT";
  }
?>
