<?php

#informações do banco de dados e das tabelas foram ocultadas por segurança
#database and table information has been hidden for security

// Database connection infos (PDO).
$dsn = '';
$user = '';
$password = '';

#$campus = buscarIdCampus();
#$tabelaBusca = $campus.".".$campus."_edificacao";

try {
  $dbh = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
  echo 'Connexion failed : ' . $e->getMessage();
}

// Getting the keyword and add % to get data that begins with it.
//$keyword = $_GET['keyword'] . '%';

// If you want the keyword to be "contained" in the data, use (uncomment it):
$keyword = '%' . $_GET['keyword'] . '%';

// Query.

//$query = "SELECT edificacao FROM $tabelaBusca WHERE edificacao ILIKE '% texto %' GROUP BY edificacao";
$query = "SELECT edificacao FROM schema.table WHERE edificacao ILIKE ? UNION SELECT edificacao FROM schema.table WHERE edificacao ILIKE ? UNION SELECT edificacao FROM schema.table WHERE edificacao ILIKE ? UNION SELECT edificacao FROM schema.table WHERE edificacao ILIKE ? ORDER BY edificacao";

$stmt = $dbh->prepare($query);
$stmt->bindParam(1, $keyword);
$stmt->bindParam(2, $keyword);
$stmt->bindParam(3, $keyword);
$stmt->bindParam(4, $keyword);

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
//echo json_encode( $stmt );

?>