<?php
  /* Includes */
  require_once('db_Call.php');

  /* Global variables */
  $db = initDB('');

  /*
    1. insertUsr
    2. updateUsr
    3. deleteUsr
    4. getListUsr
    5. getUsr
    6. getUsrById
  */

  /* 1. insertUsr */
  function insertUsr($login, $passwd){
    try{
      /* SELECT  */
      $query = $GLOBALS['db']->prepare("INSERT INTO tblusr (fldlogin, fldpasswd) VALUES (?, ?)");
      $query->bindParam(1, $login);
      $query->bindParam(2, $passwd);
      $query->execute();
      return "OK";
    }
    catch(PDOException $e){
      return "ERR : " . $e;
    }
  }

  /* 2. updateUsr */
  function updateUsr($newLogin, $newPasswd, $oldLogin, $oldpasswd){
    try{
      /* SELECT  */
      $query = $GLOBALS['db']->prepare("UPDATE tblusr set fldlogin = ?, fldpasswd = ? WHERE fldlogin = ? and fldpasswd ? ");
      $query->excute(array($newLogin, $newPasswd, $oldLogin, $oldpasswd));

      /* update session value */
      updateSession("", $newLogin, $newPasswd);

      return "OK";
    }
    catch(PDOException $e){
      return "ERR : " . $e;
    }
  }

  /* 3. deleteUsr */
  function deleteUsr($id){
    try{
      /* SELECT  */
      $query = $GLOBALS['db']->prepare("DELETE FROM tblusr set WHERE fldid = ?");
      $query->excute(array($id));

      /* update session value */
      cleanSession();
      return "OK";
    }
    catch(PDOException $e){
      return "ERR : " . $e;
    }
  }

  /* 4. getListUsr */
  function getListUsr(){
    return "ERR : Not implemented yet";
  }

  /* 5. getUSr */
  function getUsr($login, $passwd){
    try{
      /* SELECT  */
      $query = $GLOBALS['db']->prepare("SELECT * from tblusr where fldlogin= ? and fldpasswd = ?");
      $query->bindParam(1, $login);
      $query->bindParam(2, $passwd);
      $query->execute();
      while($row=$query->fetch(PDO::FETCH_ASSOC)) {
        /*its getting data in line. And its an object*/
        return new Usr($row["fldid"], $login, $passwd);
      }
    }
    catch(PDOException $e){
      return "ERR : " . $e;
    }
  }

  /* 6. getUsrById */
  function getUsrById($id){
    try{
      /* SELECT  */
      $query = $GLOBALS['db']->prepare("SELECT *  FROM tblusr WHERE fldid= ?");
      $query->excute(array($id));
      while($row=$query->fetch(PDO::FETCH_OBJ)) {
        return new Usr($row["fldid"], $row["fldlogin"], row["fldpasswd"]);
      }
    }
    catch(PDOException $e){
      return "ERR : " . $e;
    }
  }
?>
