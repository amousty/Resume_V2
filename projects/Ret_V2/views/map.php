<?php
	header('content-type: application/xhtml+xml;charset=utf-8');
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
    "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr">
	<head>
		<?php require_once $_SERVER['DOCUMENT_ROOT']. '../inc/include_css_js.inc.php'; ?>
		<link href="../css/map.css" rel="stylesheet" type="text/css"/>
	</head>
	<body>
		<?php require_once $_SERVER['DOCUMENT_ROOT']. '../inc/header.inc.php'; ?>
		<div id="page" class="container">
  			<!-- Partie map-->
        <div id = "gamescreen">
					<!-- Divison pour la map-->
					<div id = "map" class="col-8">
						<!-- La carte est générée ici. -->
					</div>
          <div id="ressources" class="col-2">
            <img src="../img/resources/food.png"/>
            <label id="nourriture"></label><br />
            <img src="../img/resources/wood.png"/>
            <label id="bois"></label><br />
            <img src="../img/resources/rock.jpg"/>
            <label id="pierre"></label><br />
          </div>

          <!-- Divison pour la vue villages-->
          <div id = "village">
            <div id="infoVillage"></div>
            <div id="btnCreerBat"></div>
            <div id="infoPersonnage"></div>
            <div id="vueVillage"></div>
          </div>

          <!-- Partie bouton-->
  				<div id = "bouton">
  					<input type="button" class ="btn" id = "logout" value="Log out"/>
  					<input type="button" class ="btn" id = "reset"  value="Reset"/>
            <input type="button" class ="btn" id = "return" value="Return"/>
  				</div>
        </div> <!-- Fin de gamescreen-->
			</div> <!-- end page content -->
			<?php require_once $_SERVER['DOCUMENT_ROOT']. '../inc/footer.inc.php'; ?>
		<script src="../js/map.js" type="text/javascript" ></script>
	</body>
</html>
