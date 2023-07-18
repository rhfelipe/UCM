<?php

#informações do banco de dados e das tabelas foram ocultadas por segurança
#database and table information has been hidden for security

$conexao = pg_connect("" ) or
die ("Não foi possível conectar ao servidor PostGreSQL");
//RECEBENDO A PALAVRA
$key = '\''.'%'.$_GET['keyword'].'%'.'\'';
$key2='\''.''.$_GET['setdpt'].''.'\'';
//QUERY USANDO ILIKE PARA IDENTIFICAR PALAVRAS QUE POSSUEM AS LETRAS DIGITADAS NO KEY
$query1 = 'SELECT sub_tp_amb, ambiente FROM ';
if ($key2=="''"){
$query2 = ' WHERE sub_tp_amb ILIKE ';
$query3 = ' OR ambiente ILIKE ';
$queryf=$query2.$key.$query3.$key;}
else {
  $query2 = ' WHERE (sub_tp_amb ILIKE ';
  $query3 = ' OR ambiente ILIKE ';
  $query4 = ' AND (setor=';
  $query5=  ' OR departamen=';
  $queryf=$query2.$key.$query3.$key.')'.$query4.$key2.$query5.$key2.')';
}

//FILTRO POR CAMPUS
$pictorico=array('ccja_pictorico_andar_0','ccja_pictorico_andar_1','ccja_pictorico_andar_2','ccja_pictorico_andar_3','ccja_pictorico_andar_4','ccja_pictorico_andar_5','ccja_pictorico_andar_inferior');
//CONSULTANDO QUAIS TABELAS DE ANDARES EXISTEM
$campus=array('ccja','ccju','cccb','ccjb','ccju','lcem','lcma','lcmi','ocma','ocpa','ofpa','pfcg','lmae','cccp');


$data = array(); //VETOR ONDE SERÃO SALVAS AS PALAVRAS ENCONTRADAS
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
//AQUI SÃO ADICIONADAS AO VETOR AS PALAVRAS ENCONTRADAS QUE AINDA NÃO FORAM SALVAS
         foreach ($andar as $value) {
             $filtro = $query1.$campus[$i].'.'.$value[0].$queryf; //filtro da consulta principal
             $QUERY=pg_query($conexao,$filtro);
              $NUM_LINHAS=pg_num_rows($QUERY);
              if ($NUM_LINHAS>0){
                     for ($L=0;$L<$NUM_LINHAS;$L++){
                          $linha_filtrada=pg_fetch_row($QUERY,$L);
                          if (in_array($linha_filtrada[0],$data)==false and $linha_filtrada[0]!=null){
                             array_push($data,$linha_filtrada[0]);
                          }
                          if (in_array($linha_filtrada[1],$data)==false and $linha_filtrada[1]!=null){
                             array_push($data,$linha_filtrada[1]);
                          }
                     } 
                    } 
                   } 

        }

echo json_encode($data)
    

  

?>