hoje=new Date;
hm=Number(hoje.getUTCHours());
dia_hoje=Number(hoje.getDate());
mes_hoje=Number(hoje.getMonth())+1;
ano_hoje=Number(hoje.getFullYear());
data_max=document.getElementById('date');
 if(mes_hoje>=10 && dia_hoje>=10){data_max.max=String(ano_hoje)+'-'+String(mes_hoje)+'-'+String(dia_hoje);}
  else if(mes_hoje<10 && dia_hoje>=10) { data_max.max=String(ano_hoje)+'-'+'0'+String(mes_hoje)+'-'+String(dia_hoje); }
  else {data_max.max=String(ano_hoje)+'-'+'0'+String(mes_hoje)+'-'+'0'+String(dia_hoje);}


$('#date').change(function(){
   data=document.getElementById('date').value;
  
   data=data.split('-');

   ano=data[0];
   mes=data[1];
   dia=data[2];

  document.getElementById('hour').disabled=false;
  if (dia!=dia_hoje || mes!=mes_hoje || ano!=ano_hoje){
    document.getElementsByName('hora-utc')[0][1].style.display=''
    for(i=2;i<=25;i++){
      document.getElementsByName('hora-utc')[0][i].style.display=''
    }
  } else {
    document.getElementsByName('hora-utc')[0][1].style.display='none';
      for(i=2;i<=25;i++){
        if(document.getElementsByName('hora-utc')[0][i].value<=(hm-1)){
             document.getElementsByName('hora-utc')[0][i].style.display=''
         } else { document.getElementsByName('hora-utc')[0][i].style.display='none'}

        }
       }
})

function updateProgress (oEvent) {
  if (oEvent.lengthComputable) {
    var percentComplete = oEvent.loaded / oEvent.total;
    var valor = (Math.round(percentComplete*100)).toString();
    
    var barra = document.getElementById('progress');

    barra.style.display='block';

    barra.style.width=valor+'%';
    barra.innerHTML = valor+'%';

    if (valor=='100'){
      var cancel = document.getElementById('cancelar_download');
      cancel.style.display = 'none';

      barra.style.display='none';
    }
    // ...
  } else {
    console.log('Não é possível calcular informações de progresso uma vez que a dimensão total é desconhecida');
  }
}


function get_zip(){
  hora=document.getElementById('hour').value;

  //ENVIANDO A DATA
    const xhttp = new XMLHttpRequest(); //CRIANDO UMA NOVA REQUISIÇÃO
    xhttp.addEventListener("progress", updateProgress, false); //FUNÇÃO DA BARRA DE PROGRESSO
    xhttp.open("POST", "get_file.php");
    xhttp.responseType = 'blob';
    xhttp.overrideMimeType('application/zip');
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8'");
    xhttp.send("ano="+ano+"&mes="+mes+"&dia="+dia+"&hora="+hora);

// INFORMANDO A ANTENA UTILIZADA AO USUÁRIO
var antena1=document.getElementById('Tallysman');
var antena2=document.getElementById('Leica');
  
  if(ano > 2022){
  {
        antena2.style.display='flex';
        antena1.style.display='none';
    }
} else if(ano == 2022 && mes < 12){
        antena1.style.display='flex';
        antena2.style.display='none';
} else if (ano == 2022 && mes == 12){
  if(dia <= 23){
    antena1.style.display='flex';
    antena2.style.display='none';
  }else{
    antena2.style.display='flex';
    antena1.style.display='none';
  }
}


//AVISA QUE O ARQUIVO ESTÁ SENDO MONTADO
    var load=document.getElementById('loading');
    load.style.display='flex';


//BOTÃO QUE PERMITE CANCELAR O DOWNLOAD
    var cancel = document.getElementById('cancelar_download');
    cancel.style.display = 'block';

    cancel.addEventListener('click', function(){
      xhttp.abort();

      var load=document.getElementById('loading');
      load.style.display='none';

      var barra = document.getElementById('progress');
      barra.style.display='none';

      var cancel = document.getElementById('cancelar_download');
      cancel.style.display = 'none';
    })




    xhttp.onreadystatechange = function () {
    if(xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
        arq=xhttp.response;
        if(arq.size<15000){
            alert('Não foram encontrados dados para esse dia e hora');
            cancel.style.display = 'none';
        }
        else{ 
             url = window.URL.createObjectURL(arq);
             var a = document.createElement("a");
             a.href = url;
             a.download = ano+mes+dia+hora+'_CEPAG_RINEX_3_03'+'.zip';
             a.click();
             window.URL.revokeObjectURL(url);
            }
        load.style.display='none';
                }
   }

}

down_dados=document.getElementById('gnssbutton');
down_dados.onclick=get_zip;