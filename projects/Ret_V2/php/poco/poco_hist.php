<?php
  /* Includes */
  //require_once('sessionHelper.php');

  /*
    1. insertHistory
    2. updateHistory
    3. deleteHistory
    4. getListHistory
    5. getHistory
    6. getHistoryById
  */

  /* 1. insertHistory */
  function insertHistory($usrID){
    try{
      $today = date("Y-m-d H:i:s");
      /* Prepare DB */
      $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
      $db = new PDO('sqlite:../../db/db.sqlite', '', '',  $pdo_options);

      /* Select  */
      $query = $db->prepare("INSERT INTO tblHistory (fldusrid, fldcreatedon, fldlastupdateon, fldlastupdateby) VALUES (?, ?, ?, ?)");
      $query->bindParam(1, $usrID);
      $query->bindParam(2, $today);
      $query->bindParam(3, $today);
      $query->bindParam(4, $usrID);
      $query->execute();
      return "OK";
    }
    catch(PDOException $e){
      return "ERR : " . $e;
    }
  }

  /* 2. updateHistory */
  function updateHistory($historyID, $newPasswd, $oldLogin, $oldpasswd){

  }

  /* 3. deleteHistory */
  function deleteHistory($id){
    try{
      /* Prepare DB */
      $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
      $db = new PDO('sqlite:../../db/db.sqlite', '', '',  $pdo_options);

      /* Select  */
      $query = $db->prepare("DELETE FROM tblHistory WHERE fldhistoryid = ?");
      $query->excute(array($id));

      /* update session value */
      cleanSession();
      return "OK";
    }
    catch(PDOException $e){
      return "ERR : " . $e;
    }
  }

  /* 4. getListHistory */
  function getListHistory(){
    return "ERR : Not implemented yet";
  }

  /* 5. getHistory */
  function getHistory($fldusrid){
    try{
      /* Prepare DB */
      $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
      $db = new PDO('sqlite:../../db/db.sqlite', '', '',  $pdo_options);

      /* Select  */
      $query = $db->prepare("SELECT *  FROM tblHistory WHERE fldusrid= ?");
      $query->excute(array($fldusrid));
      while($row=$query->fetch(PDO::FETCH_OBJ)) {
        /*its getting data in line. And its an object*/
        return $row;
      }
    }
    catch(PDOException $e){
      return "ERR : " . $e;
    }
  }

  /* 6. getHistoryById */
  function getHistoryById($id){
    return "ERR : Not implemented yet";
  }
?>
