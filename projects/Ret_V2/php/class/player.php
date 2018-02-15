<?php
class Player {
  public $id;
  public $usr;
  public $color;

  public function __construct($id, $u, $c){
    $this->id = $id;
    $this->usr = $u;
    $this->color = $c;
  }
}
?>
