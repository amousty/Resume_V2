<?php
class Map {
  public $id;
  public $name;
  public $createdon;

  public function __construct($id, $n, $co){
    $this->id = $id;
    $this->name = $n;
    $this->createdon = $co;
  }
}
?>
