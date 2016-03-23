<?php
//用户登录时被打开，从web访问mysql数据库，查询用户记录
include("database.php");


if(isset($_POST['name']) && isset($_POST['shout'])){
	$name = mysqli_real_escape_string($conn,$_POST['name']);//prevent sql injection
	$shout = mysqli_real_escape_string($conn,$_POST['shout']);
	$date = mysqli_real_escape_string($conn,$_POST['date']);
	
	//set time zone
	date_default_timezone_set("America/los_Angeles");
	$date = date('Y-m-d h:i:s a',time());
	
	$query = "INSERT INTO `jsshoutbox`.`shouts` (`name`, `shout`, `date`)
		VALUES ('$name', '$shout', '$date');";
		
	if (!mysqli_query($conn, $query)) {
		echo "Error: " . mysqli_error($conn);
	}
	else {
		echo "<li>".$name.": ".$shout." [".$date."] "."</li>";
	}	
}
?>