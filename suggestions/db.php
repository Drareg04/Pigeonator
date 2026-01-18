 <?php
  $dbservername = "localhost";
  $dbusername = "pigeonator";
  $dbpassword = "pigeonator";
  $dbname = "pigeonator";

  // Create connection
  $conn = new mysqli($dbservername, $dbusername, $dbpassword, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  ?> 