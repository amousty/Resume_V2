<?php
  /* Includes */
  require_once('../db_Call.php');
  require_once('poco_player.php');

  /* Global variables */
  $db = initDB('../');
  $today = date("Y-m-d H:i:s");

  /*
    1. insertMap
    2. updateMap
    3. deleteMap
    4. getListMap
    5. getMapById
    6. getMapByPlayer
  */

  /* 1. insertMap */
  function insertMap($mapname){
    try{
      // 1. Insert map
      $query = $GLOBALS['db']->prepare("INSERT INTO tblMap (fldmapname, fldmapcreatedon) VALUES (?, ?)");
      $query->bindParam(1, $mapname);
      $query->bindParam(2, $GLOBALS['today']);
      $query->execute();

      // 2. Get id of the map
      // #TODO : Replace this shit
      $queryGetMapId = $GLOBALS['db']->prepare("SELECT fldmapid FROM tblmap ORDER BY fldmapid DESC LIMIT 1");
      $queryGetMapId->execute();
      if($row=$queryGetMapId->fetch(PDO::FETCH_ASSOC)){
        $mapID = $row["fldmapid"];
        VAR_DUMP($mapID);

        // A NEW MAP WILL CREATE VILLAGES
        for($i = 1; $i <= 8; $i++){
          for($j = 1; $j <= 10; $j++){
            // 3. Generate new village
            insertVillage($i, $j, 0);

            // 4. Get id of the villageID
            // #TODO : Replace this shit
            $queryGetVillageId = $GLOBALS['db']->prepare("SELECT fldVillageid FROM tblVillage ORDER BY fldVillageid DESC LIMIT 1");
            $queryGetVillageId->execute();
            if($row=$queryGetVillageId->fetch(PDO::FETCH_ASSOC)){

              // Create a link between them
              $queryInsertLinkVillage = $GLOBALS['db']->prepare("INSERT INTO tblMapPlayerLink (fldmapid, fldvillageid, fldmaplinkcreatedon) VALUES (?, ?, ?)");
              $queryInsertLinkVillage->bindParam(1, $mapID);
              $queryInsertLinkVillage->bindParam(2, $row["fldVillageid"]);
              $queryInsertLinkVillage->bindParam(3, $GLOBALS['today']);
              $queryInsertLinkVillage->execute();
            }
          }
        }
      }
      return "OK";
    }
    catch(PDOException $e){
      return "ERR : " . $e;
    }
  }

  /* 2. updateMap */
  function updateMap($mapName, $mapId){
    try{
      /* SELECT  */
      $query = $GLOBALS['db']->prepare("UPDATE tblMap set fldmapname = ? WHERE fldmapid = ?");
      $query->excute(array($mapName, $mapId));
      return "OK";
    }
    catch(PDOException $e){
      return "ERR : " . $e;
    }
  }

  /* 3. deleteMap */
  function deleteMap($id){
    try{
      /* SELECT  */
      $query = $GLOBALS['db']->prepare("DELETE FROM tblMap set WHERE fldmapid = ?");
      $query->excute(array($id));
      return "OK";
    }
    catch(PDOException $e){
      return "ERR : " . $e;
    }
  }

  /* 4. getListMap */
  function getListMap(){
    return "ERR : Not implemented yet";
  }

  /* 5. getMapById */
  function getMapById($mapID){
    try{
      /* SELECT  */
      $query = $GLOBALS['db']->prepare("SELECT * from tblMap M where fldmapid = ?");
      $query->bindParam(1, $mapID);
      $query->execute();

      /* Prepare arrays */
      if($row=$query->fetch(PDO::FETCH_ASSOC)) {
        /*its getting data in line. And its an object*/
        return new Map($row["fldmapid"], $row["fldmapname"], $row["fldmapcreatedon"]);
      }
      else{
        return "ERR : Empty map";
      }
    }
    catch(PDOException $e){
      return "ERR : " . $e;
    }
  }

  /* 6. getMapByPlayer */
  function getMapByPlayer($playerid){
    try{
      /* SELECT  */
      $query = $GLOBALS['db']->prepare(
        "SELECT M.* from tblMap M
        INNER JOIN tblMapPlayerLink PMPL on PMPL.fldmapid = M.fldmapid
        where PMPL.fldplayerid = ?");
      $query->bindParam(1, $playerid);
      $query->execute();

      /* Prepare arrays */
      if($row=$query->fetch(PDO::FETCH_ASSOC)) {
        /*its getting data in line. And its an object*/
        return new Map($row["fldmapid"], $row["fldmapname"], $row["fldmapcreatedon"]);
      }
      else{
        return "ERR : Empty map";
      }
    }
    catch(PDOException $e){
      return "ERR : " . $e;
    }
  }
?>
