<?php
//Build connection to MySQL

$mysql_server_name = "localhost";
$mysql_username = "miao";
$mysql_password = "1012";
$mysql_database="jsshoutbox";

// Create connection
$conn = new mysqli($mysql_server_name, $mysql_username, $mysql_password, $mysql_database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>