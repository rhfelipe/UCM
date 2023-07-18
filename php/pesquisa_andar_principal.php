<?php

// Database connection infos (PDO).
$dsn = '';
$user = '';
$password = '';

$campus = buscarIdCampus();
$andar = array("0", "1", "2", "3", "4", "5");

$tabelaBusca = $campus.".".$campus."_andar_";

try {
  $dbh = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
  echo 'Connexion failed : ' . $e->getMessage();
}

// Getting the keyword and add % to get data that begins with it.
//$keyword = $_GET['keyword'] . '%';

// If you want the keyword to be "contained" in the data, use (uncomment it):
$keyword = ''.$_GET['keyword'].'';

// Query.

//$query = "SELECT ambiente FROM $tabelaBusca$andar[0]";
$query = "SELECT andar FROM $tabelaBusca$andar[0] WHERE ambiente = ?
            UNION
            (SELECT andar FROM $tabelaBusca$andar[1] WHERE ambiente = ?)
            UNION
            (SELECT andar FROM $tabelaBusca$andar[2] WHERE ambiente = ?)
            UNION
            (SELECT andar FROM $tabelaBusca$andar[3] WHERE ambiente = ?)
            UNION
            (SELECT andar FROM $tabelaBusca$andar[4] WHERE ambiente = ?)
            UNION
            (SELECT andar FROM $tabelaBusca$andar[5] WHERE ambiente = ?)
            ";

$stmt = $dbh->prepare($query);
$stmt->bindParam(1, $keyword);
$stmt->bindParam(2, $keyword);
$stmt->bindParam(3, $keyword);
$stmt->bindParam(4, $keyword);
$stmt->bindParam(5, $keyword);
$stmt->bindParam(6, $keyword);

// Executing.
$stmt->execute();

// If SQL error...
if (!$stmt) {
   echo "\nPDO::errorInfo():\n";
   print_r($dbh->errorInfo());
   die();
}

// Fetching.
$data = array();
$data = $stmt->fetchAll(PDO::FETCH_COLUMN);

// This is sending the json to autocomplete.
echo json_encode( $data );


/////// identificar campus pela codificação
function buscarIdCampus() {
  $numIdCampus = $_GET["campus"];
  switch ($numIdCampus) {
    case 1:
        return 'cccb';
    break;
    case 2:
        return 'ccja';
    break;
    case 3:
        return 'ccjb';
    break;
    case 4:
        return 'ccju';
    break;
    default:
}
};


?>