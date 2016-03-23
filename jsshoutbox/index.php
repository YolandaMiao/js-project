<?php include "database.php";

//create select query;cannot replace * by name, shouts, date, otherwise $result cannot be generated
$query = "SELECT * FROM `jsshoutbox`.`shouts` ORDER BY id DESC";
$result = mysqli_query($conn,$query);
?>

<!DOCTYPE html>
<html>
	<head>
		<title>JS Shoutbox</title>
		<link rel="stylesheet" href="css/style.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
		<script src="js/script.js"></script>
	</head>

	<body>
		<div id="container">
		<header>
			<h1>JS Shoutbox</h1>
		</header>
		<section>
			<div id="sql_interface">
				<ul>
					<?php //associative array
					while($row = mysqli_fetch_assoc($result)):?>
					<li><?php echo $row["name"];?>: <?php echo $row["shout"];?> [<?php echo $row["date"];?>]</li>
					<?php endwhile;?>
				</ul>
			</div>
		</section>
		<footer>
			<form ><!--action="shoutbox.php" method="post"-->
			<label>Name: </label>
			<input type="text" id="name" name="name">
			<label>Shout Text: </label>
			<input type="text" id="shout_text" name="shout_text">
			<input type="submit" id="submit" name="shout" value="SHOUT!">
			</form>
		</footer>
		</div>
	</body>
</html>
