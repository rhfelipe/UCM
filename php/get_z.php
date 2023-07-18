<?php
#informações do banco de dados e das tabelas foram ocultadas por segurança
#database and table information has been hidden for security

// Database connection infos (PDO).
$dsn = '';
$user = '';
$password = '';

try {
  $dbh = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
  echo 'Connexion failed : ' . $e->getMessage();
}

// Getting the keyword and add % to get data that begins with it.
//$keyword = $_GET['keyword'] . '%';

// If you want the keyword to be "contained" in the data, use (uncomment it):
$long = $_GET['long'];
$lat = $_GET['lat'];
$x = $_GET['x'];
$y = $_GET['y'];

//montando a query
if ($lat != '') {
  $query = "SELECT ROUND(ST_Value(rast,1, ST_Transform(ST_GeomFromText('POINT(".$long." ".$lat.")',4326),31982))::numeric, 3) AS z_value FROM table
WHERE ST_Intersects(rast, ST_Transform(ST_GeomFromText('POINT(".$long." ".$lat.")',4326),31982))";
} else {
  $query = "SELECT ROUND(ST_Value(rast,1, ST_Transform(ST_GeomFromText('POINT(".$x." ".$y.")',31982),31982))::numeric, 3) AS z_value FROM table
WHERE ST_Intersects(rast, ST_Transform(ST_GeomFromText('POINT(".$x." ".$y.")',31982),31982))";
}

$stmt = $dbh->prepare($query);
//echo $query;

// Executing.
$stmt->execute();

// If SQL error...
if (!$stmt) {
   echo "\nPDO::errorInfo():\n";
   print_r($dbh->errorInfo());
   die();
};

// Fetching.
//$data_tabelas_indoor = array();
$return_z = $stmt->fetchAll(PDO::FETCH_OBJ);

// This is sending the json to autocomplete.
$geojson = json_encode( $return_z[0] );
$z_array = json_decode($geojson, true);

foreach ($z_array as $z){
  echo $z;
}

?>