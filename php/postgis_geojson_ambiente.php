<?php

#informações do banco de dados e das tabelas foram ocultadas por segurança
#database and table information has been hidden for security

/**
 * PostGIS to GeoJSON
 * Query a PostGIS table or view and return the results in GeoJSON format, suitable for use in OpenLayers, Leaflet, etc.
 * 
 * @param 		string		$geotable		The PostGIS layer name *REQUIRED*
 * @param 		string		$geomfield		The PostGIS geometry field *REQUIRED*
 * @param 		string		$srid			The SRID of the returned GeoJSON *OPTIONAL (If omitted, EPSG: 4326 will be used)*
 * @param 		string 		$fields 		Fields to be returned *OPTIONAL (If omitted, all fields will be returned)* NOTE- Uppercase field names should be wrapped in double quotes
 * @param 		string		$parameters		SQL WHERE clause parameters *OPTIONAL*
 * @param 		string		$orderby		SQL ORDER BY constraint *OPTIONAL*
 * @param 		string		$sort			SQL ORDER BY sort order (ASC or DESC) *OPTIONAL*
 * @param 		string		$limit			Limit number of results returned *OPTIONAL*
 * @param 		string		$offset			Offset used in conjunction with limit *OPTIONAL*
 * @return 		string					resulting geojson string
 * @return      string      $campoBusca     Texto a ser buscado do campo fields por SQL usando ilike *OPTIONAL*     
 * * @return      string      $paramCampoBusca     Texto a ser buscado do campo fields por SQL usando ilike *OPTIONAL*     
 */

if (empty($_GET['geomfield'])) {
    $geomfield = 'geom';
} else
    $geomfield = $_GET['geomfield'];
if (empty($_GET['srid'])) {
    $srid = '4326';
} else
    $srid = $_GET['srid'];
// If you want the keyword to be "contained" in the data, use (uncomment it):
$keyword = '%' . $_GET['keyword'] . '%';

// Lista de campus ativos
$lista_campus = array('ccja', 'ccjb', 'ccju', 'cccb');

function escapeJsonString($value) { # list from www.json.org: (\b backspace, \f formfeed)
  $escapers = array("\\", "/", "\"", "\n", "\r", "\t", "\x08", "\x0c");
  $replacements = array("\\\\", "\\/", "\\\"", "\\n", "\\r", "\\t", "\\f", "\\b");
  $result = str_replace($escapers, $replacements, $value);
  return $result;
}

// Database connection infos (PDO).
$dsn = '';
$user = '';
$password = '';

try {
  $dbh = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
  echo 'Connexion failed : ' . $e->getMessage();
}

//lista de tabelas indoors
$query_lista_tabelas = "SELECT schemaname, tablename FROM pg_tables WHERE (";

$lista_campus_lenght = count($lista_campus)-1;
for($i = 0; $i <= $lista_campus_lenght; $i++){
  $query_lista_tabelas .= " schemaname = '$lista_campus[$i]' ";
  if ($i < $lista_campus_lenght){
    $query_lista_tabelas .= " OR ";
  }
};

$query_lista_tabelas .= ") AND tablename ILIKE '%andar%' AND tablename NOT ILIKE '%portas%' AND tablename NOT ILIKE '%subsolo%' AND tablename NOT ILIKE '%.old%' AND tablename NOT ILIKE '%esquematico%' ORDER BY schemaname;";

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
$data_tabelas_indoor = $stmt->fetchAll(PDO::FETCH_OBJ);

$tabelas_indoor_lentgh = count($data_tabelas_indoor)-1;

$sql = "";
for($i = 0; $i<=$tabelas_indoor_lentgh; $i++){
  $sql .= "SELECT ambiente, andar, local,  st_asgeojson(st_transform(" . pg_escape_string($geomfield) . ",$srid)) AS geojson FROM " . $data_tabelas_indoor[$i]->schemaname . "." . $data_tabelas_indoor[$i]->tablename . " WHERE ambiente ILIKE '" . $keyword . "'";
  if($i<$tabelas_indoor_lentgh){
    $sql .= " UNION ";
  }
};
//echo json_encode($sql);
$sql .= " LIMIT 1";
# Build GeoJSON
$output    = '';
$rowOutput = '';
$conn = pg_connect("");
$rs = pg_query($conn, $sql);
if (!$rs) {
    echo "An SQL error occured.\n";
    echo $sql;
    exit;
}
while ($row = pg_fetch_assoc($rs)) {
    $rowOutput = (strlen($rowOutput) > 0 ? ',' : '') . '{"type": "Feature", "geometry": ' . $row['geojson'] . ', "properties": {';
    $props = '';
    $id    = '';
    foreach ($row as $key => $val) {
        if ($key != "geojson") {
            $props .= (strlen($props) > 0 ? ',' : '') . '"' . $key . '":"' . escapeJsonString($val) . '"';
        }
        if ($key == "id") {
            $id .= ',"id":"' . escapeJsonString($val) . '"';
        }
    }
    
    $rowOutput .= $props . '}';
    $rowOutput .= $id;
    $rowOutput .= '}';
    $output .= $rowOutput;
}
$output = '{ "type": "FeatureCollection", "features": [ ' . $output . ' ]}';
echo $output;

?>