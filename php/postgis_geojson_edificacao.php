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

function escapeJsonString($value) { # list from www.json.org: (\b backspace, \f formfeed)
  $escapers = array("\\", "/", "\"", "\n", "\r", "\t", "\x08", "\x0c");
  $replacements = array("\\\\", "\\/", "\\\"", "\\n", "\\r", "\\t", "\\f", "\\b");
  $result = str_replace($escapers, $replacements, $value);
  return $result;
}
 
# Retrive URL variables
if (empty($_GET['geotable'])) {
    $geotable = array("ccja.ccja_edificacao", "ccjb.ccjb_edificacao", "cccb.cccb_edificacao","ccju.ccju_edificacao");
} else
    $geotable = $_GET['geotable'];
if (empty($_GET['geomfield'])) {
    echo "missing required parameter: <i>geomfield</i>";
    exit;
} else
    $geomfield = $_GET['geomfield'];
if (empty($_GET['srid'])) {
    $srid = '4326';
} else
    $srid = $_GET['srid'];
if (empty($_GET['fields'])) {
    $fields = '*';
} else
    $fields = $_GET['fields'];

    $parameters = $_GET['parameters'];
    $orderby    = $_GET['orderby'];
if (empty($_GET['sort'])) {
    $sort = 'ASC';
} else
    $sort = $_GET['sort'];
	
$limit      = $_GET['limit'];
$offset     = $_GET['offset'];
$paramCampoBusca = $_GET['paramCampoBusca'];
$campoBusca = $_GET['campoBusca'];
# Connect to PostgreSQL database
$conn = pg_connect("");
if (!$conn) {
    echo "Not connected : " . pg_error();
    exit;
}

# Build SQL SELECT statement and return the geometry as a GeoJSON element in EPSG: 4326
$geotable_lenght = count($geotable)-1;
$sql = "";
for ($i = 0; $i <= $geotable_lenght; $i++){
    $tabela_atual = $geotable[$i];
    $sql .= "SELECT " . pg_escape_string($fields) . ", st_asgeojson(st_transform(" . pg_escape_string($geomfield) . ",$srid)) AS geojson FROM " . pg_escape_string($tabela_atual);
    if (strlen(trim($campoBusca)) > 0) {
        #$sql .= " WHERE " . pg_escape_string($parameters);
        $sql .= " WHERE " . pg_escape_string($paramCampoBusca) . " ILIKE '%" . pg_escape_string($campoBusca) . "%'";
    }
    if (strlen(trim($orderby)) > 0) {
        #$sql .= " ORDER BY " . pg_escape_string($orderby) . " " . $sort;
    }

    if (strlen(trim($offset)) > 0) {
        #$sql .= " OFFSET " . pg_escape_string($offset);
    }
    if ($i < $geotable_lenght){
        $sql .= " UNION ";
    }
}
if (strlen(trim($limit)) > 0) {
    $sql .= " LIMIT " . pg_escape_string($limit);
}
#echo $sql;

# Try query or error
$rs = pg_query($conn, $sql);
if (!$rs) {
    echo "An SQL error occured.\n";
    echo $sql;
    exit;
}
# Build GeoJSON
$output    = '';
$rowOutput = '';
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