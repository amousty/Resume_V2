<?php
	header('content-type: application/xhtml+xml;charset=utf-8');
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
    "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr">
	<head>
		<meta http-equiv="Content-Type" content="application/xhtml+xml;charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<title>Retention</title>

		<!-- CSS -->
		<link href="css/bootstrap/bootstrap.min.css" rel='stylesheet' type='text/css' />
		<link href='http://fonts.googleapis.com/css?family=Kreon:300,400,700' rel='stylesheet' type='text/css'/>
		<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
		<link href="css/font-awesome.min.css" rel="stylesheet" type="text/css"/>

		<!-- javascript -->
		<script type="text/javascript" src="js/jquery/jquery.min.js"></script>
		 <!--[if lt IE 9]>
				 <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
				 <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->
	</head>
	<body>
		<?php require_once $_SERVER['DOCUMENT_ROOT']. '../inc/header.inc.php'; ?>

		<?php require_once $_SERVER['DOCUMENT_ROOT']. '../inc/sign-form.inc.php'; ?>

		<?php require_once $_SERVER['DOCUMENT_ROOT']. '../inc/footer.inc.php'; ?>

		<script type="text/javascript" src="js/index.js"></script>
	</body>
</html>
