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

		<?php require_once $_SERVER['DOCUMENT_ROOT']. '../php/rpc/village.php'; ?>

		<?php require_once $_SERVER['DOCUMENT_ROOT']. '../inc/footer.inc.php'; ?>
	<script src="../js/map.js" type="text/javascript" ></script>
</body>
</html>
