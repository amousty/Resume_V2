<?php
  session_start();
  // MAP
  require_once('../poco/poco_map.php');
  require_once('../class/map.php');

  // VILLAGE
  require_once('../poco/poco_village.php');
  require_once('../class/village.php');

  // PLAYER
  require_once('../poco/poco_player.php');
  require_once('../class/player.php');

  $mapid  = 1;
  // getAllVillagesByMapId -> Village poco
  $mapWithVillages = getAllVillagesByMapId($mapid);
  echo buildMapString($mapWithVillages);

  function buildMapString($mapWithVillages){
    $mapInLine = "";
    $i = 1;
    // $map contain array of instance of players -> need to iterate on it
    // https://stackoverflow.com/questions/30680938/how-can-i-access-an-array-object
    /*foreach ($mapWithVillages->player as $singlePlayer ){
      // Get whole player object
      $player = getPlayerByPlayerId($singlePlayer);


      if(is_null($player->color)){
        $mapInLine .= 'W';
      }
      else{
        $mapInLine .= $player->color;
      }

      if($i % 10 == 0){
        $mapInLine .= "|";
      }
      else{
        $mapInLine .= ",";
      }
      $i++;
    } // end foreach*/
    insertMap('Default');
    return count($mapWithVillages);
    /*for ($k = 0; $k < count($mapWithVillages); $k++){
      // Get whole player object
      $player = getPlayerByPlayerId($mapWithVillages[$k]->player);
      return $mapWithVillages[$k]->player;

      if(is_null($player->color)){
        $mapInLine .= 'W';
      }
      else{
        $mapInLine .= $player->color;
      }

      if($i % 10 == 0){
        $mapInLine .= "|";
      }
      else{
        $mapInLine .= ",";
      }
      $i++;
    } // end foreach
    return $mapInLine;*/
}
?>
