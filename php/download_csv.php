<?php
#informações do banco de dados e das tabelas foram ocultadas por segurança
#database and table information has been hidden for security

header('Content-Type: application/x-www-form-urlencoded;charset=UTF-8');

$conexao = pg_connect("" ) or
die ("Não foi possível conectar ao servidor PostGreSQL");

//REALIZANDO A FILTRAGEM





$filtro1 = filter_input(INPUT_POST, 'filtro1', FILTER_SANITIZE_SPECIAL_CHARS); //SETOR
$filtro2 = filter_input(INPUT_POST, 'filtro2', FILTER_SANITIZE_SPECIAL_CHARS);; //DEPARTAMENTO









$query_geral="SELECT setor, departamen, andar, ambiente, cod_amb, ST_Area(geom), ST_AsText(ST_Centroid(ST_Transform(geom,4326))) FROM ";



if (empty($filtro1) and empty($filtro2)){ //SEM FILTRAGEM
         echo "<script type='javascript>alert('É necessário realizar uma filtragem')</script>";
} elseif (!empty($filtro1) and empty($filtro2)){ //APENAS SETOR ou DEPARTAMENTO
         $query_filtrado=" WHERE setor=".'\''.$filtro1.'\''." OR departamen=".'\''.$filtro1.'\'';
} elseif (empty($filtro1) and !empty($filtro2)){ //SOMENTE AMBIENTE
          $query_filtrado=" WHERE \""."sub_tp_amb"."\""."=".'\''.$filtro2.'\''." OR ambiente=".'\''.$filtro2.'\'';
} elseif (!empty($filtro1) and !empty($filtro2)){ //SETOR OU DEPARTAMENTO + AMBIENTE
          $query_filtrado=" WHERE setor=".'\''.$filtro1.'\''.' and '."\"".'sub_tp_amb'."\"".'='.'\''.$filtro2.'\''." OR departamen=".'\''.$filtro1.'\''.' and '."\"".'sub_tp_amb'."\"".'='.'\''.$filtro2.'\''." OR setor=".'\''.$filtro1.'\''.' and '."\"".'ambiente'."\"".'='.'\''.$filtro2.'\''." OR departamen=".'\''.$filtro1.'\''.' and '."\"".'ambiente'."\"".'='.'\''.$filtro2.'\'';
}




$pictorico=array('ccja_pictorico_andar_0','ccja_pictorico_andar_1','ccja_pictorico_andar_2','ccja_pictorico_andar_3','ccja_pictorico_andar_4','ccja_pictorico_andar_5','ccja_pictorico_andar_inferior');
//CONSULTANDO QUAIS TABELAS DE ANDARES EXISTEM
$campus=array('ccja','ccju','cccb','ccjb','ccju','lcem','lcma','lcmi','lmae','ocma','ocpa','ofpa','pfcg','cccp');
$tabela=array();




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
                if(in_array($nome_andar[0],$pictorico)==false){ 
                  array_push($andar,$nome_andar);} //ASSIM PODEMOS PEGAR O NOME DE TODAS AS TABELAS DO CAMPUS MENOS AS TABELAS PICTORICO
                                       }
        }





//FAZENDO A CONSULTA DO FILTRO
if (empty($filtro1) and empty($filtro2) and empty($filtro3)){
  exit;
} 
else{
  foreach ($andar as $value ){
         $filtro=$query_geral.$campus[$i].'.'.$value[0].$query_filtrado;
         $QUERY=pg_query($conexao,$filtro);
         if (!$QUERY) {
              print "Um erro ocorreu na consulta !";
               }
         else {
              $NUM_LINHAS=pg_num_rows($QUERY);
              if ($NUM_LINHAS>0){
                     for ($L=0;$L<$NUM_LINHAS;$L++){
                          $linha_filtrada=pg_fetch_row($QUERY,$L);
                          array_push($tabela,$linha_filtrada); //ASSIM PODEMOS PEGAR O NOME DE TODAS AS TABELAS DO CAMPUS
                     } //FIM DO FOR DAS LINHAS
                    } //FIM DO IF NUM_LINHAS
                   } //FIM DO ÚLTIMO ELSE
                  } //FIM DO FOREACH
                 } //FIM DO PENÚLTIMO ELSE
                } // FIM DO FOR





//PARA PASSAR A TABELA PARA O JS 
echo json_encode($tabela);
   // echo json_encode($var);
   // exit;


?>