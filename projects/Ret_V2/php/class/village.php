<?php
class Village {
  public $id;
  public $x;
  public $y;
  public $player;
  public $firstbuildon;
  public $firstbuildby;
  public $lastbuildon;
  public $lastbuildby;

  public function __construct($id, $x, $y, $p, $fbo, $fbb, $lbo, $lbb){
    $this->id = $id;
    $this->x = $x;
    $this->y = $y;
    $this->player = $p;
    $this->$firstbuildon = $fbo;
    $this->$firstbuildby = $fbb;
    $this->$lastbuildon = $lbo;
    $this->$lastbuildby = $lbb;
  }
}
?>
