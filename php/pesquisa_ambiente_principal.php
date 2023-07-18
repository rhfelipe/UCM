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
$keyword = '%' . $_GET['keyword'] . '%';

// Lista de campus ativos
$lista_campus = array('ccja', 'ccjb', 'ccju', 'cccb');

//lista de tabelas indoors
$query_lista_tabelas = "SELECT schemaname, tablename FROM pg_tables WHERE (";

$lista_campus_lenght = count($lista_campus)-1;
for($i = 0; $i <= $lista_campus_lenght; $i++){
  $query_lista_tabelas .= " schemaname = '$lista_campus[$i]' ";
  if ($i < $lista_campus_lenght){
    $query_lista_tabelas .= " OR ";
  }
};

$query_lista_tabelas .= ") AND tablename ILIKE '%andar%' AND tablename NOT ILIKE '%portas%' AND tablename NOT ILIKE '%subsolo%' AND tablename NOT ILIKE '%.old%' 
ORDER BY schemaname;";

$stmt = $dbh->prepare($query_lista_tabelas);

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
$data_tabelas_indoor = $stmt->fetchAll(PDO::FETCH_OBJ);
//$data_tabelas_indoor = fetch_assoc($stmt);

$tabelas_indoor_lentgh = count($data_tabelas_indoor)-1;
//echo json_encode( $tabelas_indoor_lentgh);
//echo json_encode( $data_tabelas_indoor[0]->schemaname );

$sql = "";
for($i = 0; $i<=$tabelas_indoor_lentgh; $i++){
  $sql .= "SELECT ambiente FROM " . $data_tabelas_indoor[$i]->schemaname . "." . $data_tabelas_indoor[$i]->tablename . " WHERE ambiente ILIKE ?";
  if($i<$tabelas_indoor_lentgh){
    $sql .= " UNION ";
  }
};

$stmt = $dbh->prepare($sql);
for($i = 1; $i<=($tabelas_indoor_lentgh+1); $i++){
  $stmt->bindParam($i, $keyword);
};
/*
echo json_encode( $stmt);


// Query.

//$query = "SELECT ambiente FROM $tabelaBusca$andar[0]";
$query = "SELECT ambiente, andar FROM $tabelaBusca$andar[0] WHERE ambiente ILIKE ?
            UNION
            (SELECT ambiente, andar FROM $tabelaBusca$andar[1] WHERE ambiente ILIKE ?)
            UNION
            (SELECT ambiente, andar FROM $tabelaBusca$andar[2] WHERE ambiente ILIKE ?)
            UNION
            (SELECT ambiente, andar FROM $tabelaBusca$andar[3] WHERE ambiente ILIKE ?)
            UNION
            (SELECT ambiente, andar FROM $tabelaBusca$andar[4] WHERE ambiente ILIKE ?)
            UNION
            (SELECT ambiente, andar FROM $tabelaBusca$andar[5] WHERE ambiente ILIKE ?)
            ";

$stmt = $dbh->prepare($query);
$stmt->bindParam(1, $keyword);
$stmt->bindParam(2, $keyword);
$stmt->bindParam(3, $keyword);
$stmt->bindParam(4, $keyword);
$stmt->bindParam(5, $keyword);
$stmt->bindParam(6, $keyword);
*/
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

?>