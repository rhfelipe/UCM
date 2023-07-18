<?php
#informações do banco de dados e das tabelas foram ocultadas por segurança
#database and table information has been hidden for security
function getdb() {
    //$con_string = "";
    $con_string = "";

    return pg_connect($con_string) or die('connection failed');
}
$conn = getdb();
?>
