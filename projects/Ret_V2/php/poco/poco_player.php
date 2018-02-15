<?php
  /* Includes */
  require_once('../db_Call.php');
  require_once('../class/player.php');

  /* Global variables */
  $db = initDB('../');

  /*
    1. insertPlayer
    2. updatePlayer
    3. deletePlayer
    4. getListPlayer
    5. getPlayerByUsrId
    6. getPlayerByPlayerId
  */

  /* 1. insertPlayer */
  function insertPlayer($usr, $color){
    try{
      /* SELECT  */
      $query = $GLOBALS['db']->prepare("INSERT INTO tblplayers (fldusr, fldcolor) VALUES (?, ?)");
      $query->bindParam(1, $usr);
      $query->bindParam(2, $color);
      $query->execute();
      return "OK";
    }
    catch(PDOException $e){
      return "ERR : " . $e;
    }
  }

  /* 2. updatePlayer */
  function updatePlayer($fldColor, $usrid, $playerid){
    try{
      /* SELECT  */
      $query = $GLOBALS['db']->prepare("UPDATE tblplayers set fldcolor = ? WHERE fldusr = OR fldPlayer = ");
      $query->excute(array($fldColor, $usrid, $playerid));
      return "OK";
    }
    catch(PDOException $e){
      return "ERR : " . $e;
    }
  }

  /* 3. deletePlayer */
  function deletePlayer($id){
    try{
      /* SELECT  */
      $query = $GLOBALS['db']->prepare("DELETE FROM tblplayers set WHERE fldplayer = ?");
      $query->excute(array($id));

      /* update session value */
      cleanSession();
      return "OK";
    }
    catch(PDOException $e){
      return "ERR : " . $e;
    }
  }

  /* 4. getListPlayer */
  function getListPlayer(){
    return "ERR : Not implemented yet";
  }

  /* 5. getPlayerByUsrId */
  function getPlayerByUsrId($usr){
    try{
      /* SELECT  */
      $query = $GLOBALS['db']->prepare("SELECT * from tblplayers where fldusr= ?");
      $query->bindParam(1, $usr);
      $query->execute();
      while($row=$query->fetch(PDO::FETCH_ASSOC)) {
        /*its getting data in line. And its an object*/
        return new Player($row["fldplayerid"], $usr, $row["fldcolor"]);
      }
    }
    catch(PDOException $e){
      return "ERR : " . $e;
    }
  }

  /* 6. getPlayerById */
  function getPlayerByPlayerId($id){
    try{
      /* SELECT  */
      $query = $GLOBALS['db']->prepare("SELECT * FROM tblplayers WHERE fldplayerid= ?");
      $query->excute(array($id));
      while($row=$query->fetch(PDO::FETCH_OBJ)) {
        return new Player($row["fldid"], $row["fldusr"], row["fldcolor"]);
      }
    }
    catch(PDOException $e){
      return "ERR : " . $e;
    }
  }
?>
