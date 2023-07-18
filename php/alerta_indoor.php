<?php

#informações do banco de dados e das tabelas foram ocultadas por segurança
#database and table information has been hidden for security

$data = $_POST['data'];

$dados = json_decode($data, true);


$conexao = pg_connect("");
//die ("Não foi possível conectar ao servidor PostGreSQL");



$query="INSERT INTO schema.table (cod_local, data, tabela, id, key, andar, tipo_amb, cod_amb, ambiente, sub_tipo_amb, setor, departamen, comentarios, geom) VALUES ('";


$query2=$dados['cod_local']."', '".$dados['data']."', '".$dados["tabela"]."', ".$dados['id'].", '".$dados['key']."', ".$dados['andar'].", '".$dados['tipo_amb']."', '".$dados['cod_amb']."', '".$dados['ambiente']."', '".$dados['sub_tipo_amb']."', '".$dados['setor']."', '".$dados['departamen']."', '".$dados['comentarios']."', ST_GeomFromGeoJSON('".$dados['geom']."'));";


$consulta=$query.$query2;

//realiza a QUERY
$QUERY=pg_query($conexao,$consulta);


	if (!$QUERY) {
          echo "Um erro ocorreu na consulta !";
          exit;
               }

?>