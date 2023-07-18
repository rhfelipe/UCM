<?php
require '../src/zipstream/vendor/autoload.php'; //CHAMA A BIBLIOTECA ZIPSTREAM
require '../src/phpseclib/vendor/autoload.php'; //CHAMA A BIBLIOTECA PHPSECLIB
use phpseclib3\Net\SFTP\Stream;
use phpseclib3\Net\SFTP;

//Se parametro de pdf, apenas baixa pdf da monografia
$pdf = $_GET['pdf'];//confirma se esta chamando o pdf
if ($pdf == "ok") {
    $pdf_monografia = "/dados/download/Monografia_2022_BRCG_Tallysman.pdf";
    $filename = 'Monografia_2022_BRCG_Tallysman.pdf'; /* Note: Always use .pdf at the end. */

    header('Content-type: application/pdf');
    header('Content-Disposition: inline; filename="' . $filename . '"');
    header('Content-Transfer-Encoding: binary');
    header('Content-Length: ' . filesize($pdf_monografia));
    header('Accept-Ranges: bytes');
    @readfile($pdf_monografia);
} else {


Stream::register('ssh2.sftp');

header('Content-Type: application/x-www-form-urlencoded;charset=UTF-8');

function cria_24h($ano,$mes,$dia){
	$zip = new ZipArchive;
     $zip->open('/dados/download_2/Reach_raw_'.$ano.$mes.$dia.'24H00_RINEX_3_03.zip',ZipArchive::CREATE);

     $utc=array('00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23');

     for ($i=0; $i < count($utc);$i++){
     	$zip->addFile("/dados/download/Reach_raw_".$ano.$mes.$dia.$utc[$i]."00_RINEX_3_03.zip",'Reach_raw_'.$ano.$mes.$dia.$utc[$i].'00_RINEX_3_03.zip');
     }

     $zip->close();
}
//ob_clean();
//echo is_file($this->dirPath."/".$archive_file_name);
//readfile($this->dirPath."/".$archive_file_name);
//unlink($this->dirPath."/".$archive_file_name);


$ano = filter_input(INPUT_POST, 'ano', FILTER_SANITIZE_SPECIAL_CHARS); //recebe valor de ano
$mes = filter_input(INPUT_POST, 'mes', FILTER_SANITIZE_SPECIAL_CHARS); //recebe valor de mês
$dia = filter_input(INPUT_POST, 'dia', FILTER_SANITIZE_SPECIAL_CHARS); //recebe valor de dia
$hora = filter_input(INPUT_POST, 'hora', FILTER_SANITIZE_SPECIAL_CHARS); //recebe valor de hora


//CASO HAJA MUDANÇAS NA NOMENCLATURA DOS ARQUIVOS OU DOS DIRETÓRIOS É NECESSÁRIO ALTERAR PARA OS NOMES CORRETOS
$data=$ano.$mes.$dia.$hora;

/*
    
$rinex='/reach_raw_'.$data.$hora.'_RINEX_3_03.zip'; //CASO MUDAR A VERSÃO DO RINEX É NECESSÁRIO ALTERAR A NOMENCLATURA
//$diretorio='/dados/cepag/BASE_GNSS/'.$ano.'/'.$mes;
$diretorio='/dados/cepag/BASE_GNSS/DADOS_RINEX';
//$connection->chdir($diretorio);

$arch='base_cepag_'.$data.'.zip';


// enable output of HTTP headers
$options = new ZipStream\Option\Archive();
$options->setSendHttpHeaders(true);

// create a new zipstream object
$zip = new ZipStream\ZipStream($arch, $options);

$zip->addFileFromStream('dados_RINEX_3_03.zip',$file_rinex);
$zip->finish();

fclose($file_rinex);
echo $file_rinex;
//var_dump($zip);
*/
if ($hora=='24H'){
	//constrói o arquivo zipado
    $meu_download = "/dados/download_2/Reach_raw_".$data."00_RINEX_3_03.zip";
          cria_24h($ano,$mes,$dia);

} else {
	$meu_download = "/dados/download/Reach_raw_".$data."00_RINEX_3_03.zip";
}


	//header('Content-Disposition: attachment; filename="'.$arch.'"');
header('Content-Disposition: attachment; filename="'.$meu_download.'"');
header("Content-Length: " . filesize($meu_download) );
header("Pragma: public");
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
header("Cache-control: public");
header("Content-Description: File Transfer");
header('Content-type: application/zip'); 
header("Content-Transfer-Encoding: Binary");

//echo file_get_contents($zip);
readfile($meu_download); //and finally get the file and run all options above



//exclui o arquivo criado
if ($hora=='24H'){
unlink($meu_download);
}



};
?>
