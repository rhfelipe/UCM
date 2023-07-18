<?php

header('Content-Type: application/x-www-form-urlencoded;charset=UTF-8');

$conexao = pg_connect("" ) or
die ("Não foi possível conectar ao servidor PostGreSQL");

$filtro1 = filter_input(INPUT_POST, 'filtro1', FILTER_SANITIZE_SPECIAL_CHARS); //AMBIENTE




$query_geral="SELECT key FROM ";
$query_filtrado=" WHERE ambiente=".'\''.$filtro1.'\''.' OR cod_amb='.'\''.$filtro1.'\'';




$campus=array('ccja','ccju','cccb','ccjb','ccju','lcem','lcmi','ocma','ofpa','pfcg','ocpa','lcma','lmae','cccp');



for ($i=0; $i < count($campus);$i++){
  $andar=array();
	$consulta='select table_name from information_schema.tables WHERE table_schema='.'\''.$campus[$i].'\''; //CONSULTAR QUAIS ANDARES CADA CAMPUS TEM



	//realiza a consulta
	$QUERY=pg_query($conexao,$consulta);


if (!$QUERY) {
          print "Um erro ocorreu na consulta !";
          exit;
               }
   else {
        $NUM_LINHAS=pg_num_rows($QUERY);
        for ($L=0;$L<$NUM_LINHAS;$L++){
                $nome_andar=pg_fetch_row($QUERY,$L);
                  array_push($andar,$nome_andar); 
                
                //ASSIM PODEMOS PEGAR O NOME DE TODAS AS TABELAS DO CAMPUS
                                       }
        }



foreach ($andar as $value) {

  $filtro=$query_geral.$campus[$i].'.'.$value[0].$query_filtrado;
  $QUERY=pg_query($conexao,$filtro);

  $NUM_LINHAS=pg_num_rows($QUERY);
        if ($NUM_LINHAS>=0){
            for ($L=0;$L<$NUM_LINHAS;$L++){
                $linha_filtrada=pg_fetch_row($QUERY,$L);
                $key=$linha_filtrada[0];
                   }
               }
           }

}

echo json_encode($key);


?>