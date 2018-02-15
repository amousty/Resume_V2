<?php
  session_start();
  require_once('../poco/poco_village.php');
  require_once('../class/village.php');


  $posx = $_GET["x"];
  $posy = $_GET["y"];
  $usr = $_SESSION["id"]


  $villageid  = 1;
  $village = getMapById($villageid);
  echo buildstring($village);

  function buildstring($village){
    $villageInLine = "";
    $i = 1;
    /* $village contain array of instance of players -> need to iterate on it */
    // https://stackoverflow.com/questions/30680938/how-can-i-access-an-array-object
    foreach ($village->player as $singlePlayer ){
      if(is_null($singlePlayer)){
        $villageInLine .= 'W';
      }
      else{
        $villageInLine .= $singlePlayer->color;
      }

      if($i % 10 == 0){
        $villageInLine .= "|";
      }
      else{
        $villageInLine .= ",";
      }
      $i++;
    } // end foreach
    return $villageInLine;
}
?>
