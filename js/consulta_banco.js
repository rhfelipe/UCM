
 //CRIAR TABELA DA CONSULTA
 function download_csv() {
//ENVIANDO OS FILTROS AO PHP PARA A CONSULTA
        const xhttp = new XMLHttpRequest(); //CRIANDO NOVA REQUISIÇÃO
        xhttp.responseType = 'text';
        xhttp.open("POST", "download_csv.php");
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8'");
        xhttp.send("filtro1="+filtro_setdpt_table+"&filtro2="+filtro_amb_table); //ENVIANDO OS FILTROS AO PHP PARA CONSULTAR NO BANCO
        xhttp.onreadystatechange = function () {
        if(xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
            
            //CRIANDO O CSV
            csvData = JSON.parse(xhttp.responseText);
            var csv = 'SETOR;DEPARTAMENTO;ANDAR;AMBIENTE;SALA;ÁREA(m²)\n'; //CABEÇALHO
            csvData.forEach(function(linha){
            linha.splice(6) //REMOVENDO A INFORMAÇÃO DO CENTROIDE
            csv += linha.join(';');
            csv += "\n";
            });   //FIM DO FOREACH 
            var hiddenElement = document.createElement('a');  
            hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
            hiddenElement.target = '_blank';  

            //provide the name for the CSV file to be downloaded  
            hiddenElement.download = 'Indoor.csv';  
            hiddenElement.click();  
              } //FIM DO PENÚLTIMO IF
            } //FIM DA FUNCTION xhttp
    }; //FIM DA FUNÇÃO download_csv
       




//VISUALIZAÇÃO GEOMÉTRICA DA CONSULTA
function view_leaf(){
     filtro_setdpt=$("#buscaSetDept").val();
     filtro_amb=$("#buscaAmb").val();

     if (typeof cores != 'undefined'){ cores=cores}
     else{ cores=['#FFFF00',"#FFFF00","#FFFF00","#FFFF00","#FFFF00","#FFFF00","#FFFF00","#FFFF00"]}

       if (filtro_setdpt=='' && filtro_amb=='')  { alert('É necessário escolher pelo menos um filtro')}
       else {  
            //ENVIANDO OS FILTROS AO PHP PARA A CONSULTA E ADICIONANDO AS CAMADAS NA BASE CARTOGRÁFICA
            const xhttp = new XMLHttpRequest(); //CRIANDO UMA NOVA REQUISIÇÃO
            xhttp.responseType = 'text';
            xhttp.open("POST", "visualiza_geom.php");
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8'");
            xhttp.send("filtro1="+filtro_setdpt+"&filtro2="+filtro_amb);
            xhttp.onreadystatechange = function () {
            if(xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) { 

                     gjson=JSON.parse(xhttp.responseText); //RECEBE UM ARRAY COM OS JSON OBTIDOS NA CONSULTA
                     if (gjson.length==0) { alert('Não foram encontrados dados para esse filtro')} 
                     else {
                           //CASO JÁ FOI FEITO UMA VIEW ANTERIOR, ELE REMOVERÁ OS LAYERS DA FILTRAGEM ANTERIOR
                          if (typeof layer!='undefined'){ remove_camadas(layer);}
                          if (typeof layer_marker!='undefined'){ remove_camadas(layer_marker)}
           
                          andares_encontrados=[]; //LISTA ONDE SERÁ ARMAZENADO OS ANDARES EXISTENTES PARA A CONSULTA
                          layer=[]; //LISTA ONDE SERÁ ARMAZENADO OS LAYERS EXISTENTES PARA A CONSULTA

                          desativar_camadas(); //DESATIVA OUTRAS CAMADAS QUE PODEM ESTAR ATIVADAS

                          for (i=0;i<gjson.length;i++){ //PERCORRE OS GeoJSON encontrados

                                        p=JSON.parse(gjson[i]); //LÊ EM FORMATO JSON 


                                        if (andares_encontrados.indexOf(p.properties.andar)<0){ andares_encontrados.push(p.properties.andar)} //SALVANDO QUAIS ANDARES EXISTEM PARA A PESQUISA
//VERAS CORWS DO 180 AO 270 DIVIDIDO DE 13 EM 13
                                          layer_n=L.geoJSON(p, {style: function(feature){ //CRIA NOVO LAYER
                                              switch (feature.properties.andar) {
                                                     case 'Subsolo': return  {color: "#000",'fillColor': cores[0],"fillOpacity": 1,"weight": 0.5};
                                                     case 'Inferior': return {color: '#000','fillColor': cores[1], "fillOpacity": 1,"weight": 0.5};
                                                     case '0':   return {color: '#000','fillColor': cores[2], "fillOpacity":1,"weight": 0.5};
                                                     case '1':   return {color: '#000','fillColor': cores[3], "fillOpacity":1,"weight": 0.5};
                                                     case '2':   return {color: '#000','fillColor': cores[4], "fillOpacity":1,"weight": 0.5};
                                                     case '3':   return {color: '#000','fillColor': cores[5], "fillOpacity":1,"weight": 0.5};
                                                     case '4':   return {color: '#000','fillColor': cores[6], "fillOpacity":1,"weight": 0.5};
                                                     case '5':   return {color: '#000','fillColor': cores[7], "fillOpacity":1,"weight": 0.5};
                                              }}, pane: define_z(p)}); //PANE É QUE DEFINE O Z DO LAYER
                                          layer_n.bindTooltip(p.properties.label,{permanent: false, direction: "center", className: "my-labels", pane: define_z_label(p)});
                                          layer_n.bindPopup('Setor: ' + p.properties.setor  + '<br>' + 'Ambiente: ' + p.properties.amb + '<br>' + 'Edifício: ' + p.properties.edf, {pane: 'LbPane8'});
                                          layer.push(layer_n);
                                          layer_n.addTo(map);
                                                      } //FIM DO FOR
                        seta_view();
                        //SE MUDAR A VIEW, MUDAR A TABELA
                        filtro_setdpt_view=filtro_setdpt;
                        filtro_amb_view=filtro_amb;
                        if (typeof newpopupWindow!='undefined'){ 
                          if (newpopupWindow.style.display=='block'){
                            table_cm();
                          }
                          }

              
                        opcoes_andares(); //MOSTRA AS OPÇÕES DE ANDARES
                        document.getElementById('configuracoes').click();
                              } //FIM DO ÚLTIMO ELSE
                            } //FIM DO PENÚLTIMO IF
                          } //FIM DA FUNÇÃO xhttp
                        } //FIM DO PRIMEIRO ELSE
                      }; //FIM DA FUNÇÃO VIEW_LEAF  



//FUNÇÃO PARA VISUALIZAR A TABELA NO CAMPUSMAP
function table_cm(){
    //É BOM REALIZAR A PESQUISA SEPARADAMENTE DO DOWNLOAD_CSV PARA CASO TENHA MUDADO A FILTRAGEM
    filtro_setdpt=$("#buscaSetDept").val();
    filtro_amb=$("#buscaAmb").val();
 
    if (filtro_setdpt=='' && filtro_amb=='')  { alert('É necessário escolher pelo menos um filtro')}
    else {   
//ENVIANDO OS FILTROS AO PHP PARA A CONSULTA
       const xhttp = new XMLHttpRequest(); //CRIA NOVA REQUISIÇÃO
       xhttp.responseType = 'text';
       xhttp.open("POST", "download_csv.php");
       xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8'");
       xhttp.send("filtro1="+filtro_setdpt+"&filtro2="+filtro_amb);
       xhttp.onreadystatechange = function () {
       if(xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
            //CRIANDO A TABELA
            csvData = JSON.parse(xhttp.responseText); //LÊ COMO JSON O RESULTADO
            if (csvData.length==0){ alert('Não foram encontrados dados para este filtro')}
            else{
                filtro_setdpt_table=filtro_setdpt;
                filtro_amb_table=filtro_amb;
                //CASO A TABELA JÁ ESTEJA ABERTA ELA MUDA QUANDO SE FAZ UMA NOVA FILTRAGEM
                if (typeof newpopupWindow!='undefined'){
                          tb=document.getElementById('tabela_2');
                          newpopupWindow.removeChild(tb);
                    
                  }
                // AQUI CASO A TABELA SEJA CONSULTADA COM UM FILTRO DIFERENTE DA VISUALIZADA ELE FORÇA A MUDANÇA DA VISUALIZAÇÃO
                if (typeof filtro_setdpt_view!='undefined' && typeof filtro_amb_view!='undefined'){
                   if (filtro_setdpt_view!=filtro_setdpt_table || filtro_amb_view!=filtro_amb_table){
                       view_leaf();
                    }
                  }
    
                //CRIANDO OS ELEMENTOS HTML
                let table = document.createElement('table');
                table.id='tabela_2';
                let thead = document.createElement('thead');
                let tbody = document.createElement('tbody');

                //ADICIONANDO AS DIVS FILHAS
                table.appendChild(thead);
                table.appendChild(tbody);
    
                //CABEÇALHO
                let cabecalho = document.createElement('tr');
                cabecalho.style.border = 'solid';

                //CRIANDO AS DIVS FILHA DO CABEÇALHO
                let cab_1 = document.createElement('th');
                cab_1.style='width: 20%;text-align: center;';
                let cab_2 = document.createElement('th');
                cab_2.style='width: 20%;text-align: center;';
                let cab_3 = document.createElement('th'); 
                cab_3.style='width: 20%;text-align: center;'; 
                let cab_4 = document.createElement('th');
                cab_4.style='width: 20%;text-align: center;'; 
                let cab_5 = document.createElement('th');
                cab_5.style='width: 20%;text-align: center;';
                let cab_8 = document.createElement('th');
                cab_8.style='width: 20%;text-align: center;';   
                let cab_7 = document.createElement('th');
                cab_7.id='baixar_csv';
                cab_7.style.justifyContent = 'center';
                cab_7.style.cursor='pointer';
                cab_7.onclick = download_csv;
                //ADICIONANDO AS DIVS FILHAS NO CABEÇALHO E O CABEÇALHO NO HEAD 
                cab_1.innerHTML = 'SETOR';
                cab_2.innerHTML = 'DEPARTAMENTO';
                cab_3.innerHTML = 'ANDAR';
                cab_4.innerHTML = 'AMBIENTE';
                cab_8.innerHTML = 'SALA';
                cab_5.innerHTML = 'ÁREA (m²)';
                cab_7.innerHTML = 'Baixar CSV';
                cabecalho.appendChild(cab_1);
                cabecalho.appendChild(cab_2);
                cabecalho.appendChild(cab_3);
                cabecalho.appendChild(cab_4);
                cabecalho.appendChild(cab_8);
                cabecalho.appendChild(cab_5);
                thead.appendChild(cab_7);
                thead.appendChild(cabecalho);
                
                //CRIANDO E ADICIONANDO AS LINHAS
                csvData.forEach(function(linha){
                new_linha = document.createElement('tr');
                new_linha.style.border = 'solid';
                let cel_1 = document.createElement('td');
                cel_1.style='text-align: center;';              
                let cel_2 = document.createElement('td'); 
                cel_2.style='text-align: center;';            
                let cel_3 = document.createElement('td'); 
                cel_3.style='text-align: center;';             
                let cel_4 = document.createElement('td');   
                cel_4.style='text-align: center;';           
                let cel_5 = document.createElement('td');   
                cel_5.style='text-align: center;';  
                let cel_8 = document.createElement('td');
                cel_8.style='text-align: center;';        
                let cel_6 = document.createElement('td');
                cel_6.style.justifyContent = 'center';
                cel_6.style.cursor='pointer';
                cel_6.onclick = verIndividual;
                let cel_6_icon = document.createElement('img');
                cel_6_icon.src='https://img.icons8.com/material-outlined/24/000000/visible--v1.png';
                cel_6_icon.title='Visualizar';
                cel_6_icon.onclick= verIndividual;
                cel_6.appendChild(cel_6_icon);
                //COLOCANDO O RESULTADO DA CONSULTA NAS CÉLULAS DA TABELA
                cel_1.innerHTML = linha[0];
                cel_2.innerHTML = linha[1];
                cel_3.innerHTML = linha[2];
                cel_4.innerHTML = linha[3];
                cel_8.innerHTML = linha[4]
                cel_5.innerHTML = String(Number(linha[5]).toFixed(3));
                cel_6_icon.id=linha[6];
                cel_6.id=linha[6];
                //ADICIONANDO NA LINHA
                new_linha.appendChild(cel_1);
                new_linha.appendChild(cel_2);
                new_linha.appendChild(cel_3);
                new_linha.appendChild(cel_4);
                new_linha.appendChild(cel_8);
                new_linha.appendChild(cel_5);
                new_linha.appendChild(cel_6);
                tbody.appendChild(new_linha);
        }); //FIM DO FOREACH
      
      //CRIANDO O POP-UP
      newpopupWindow = document.getElementById('tabela')
      newpopupWindow.appendChild(table);
      newpopupWindow.style.display='block'
      //var FILE = 'css/table.css';
      //var css = newpopupWindow.document.createElement('link');
      //css.setAttribute('rel','stylesheet');
      //css.setAttribute('type', 'text/css');
      //css.setAttribute('href', FILE);
           $(function () {
    $('#tabela').draggable({
        start: function (event, ui) {
            $(this).css({
                right: 'auto',
                top: 'auto',
                bottom: 'auto'
            });
        }
    });

});
       //newpopupWindow.document.getElementsByTagName('head')[0].appendChild(css);
       } //FIM DO PRIMEIRO ELSE
      } //FIM DO ÚLTIMO IF
    } //FIM DA FUNCTION xhttp
  } // FIM DO ÚLTIMO ELSE
} // FIM DA FUNCTION table_cm

//NESTA FUNÇÃO CALCULA-SE UM PONTO MÉDIO CONSIDERANDO OS VALORES DE LAT E LONG DAS BORDAS E SETA ESTE PONTO COMO VIEW.
function seta_view(){
    lat=[]
    long=[]
    for (i=0;i<layer.length;i++){
      if (JSON.parse(gjson[i]).geometry.coordinates.length!=0){
             bordas=layer[i].getBounds()
             lat.push(bordas._northEast.lat)
             lat.push(bordas._southWest.lat)
             long.push(bordas._northEast.lng)
             long.push(bordas._southWest.lng)
           }
    }
    //SELECIONA O LAT MAX, LAT MIN E LONG MAX, LONG MIN SALVOS NAS LISTAS LAT E LONG          
    latmax=lat.reduce(function(a,b){ return Math.min(a,b)});
    longmax=long.reduce(function(a,b){ return Math.min(a,b)});
    latmin=lat.reduce(function(a,b){ return Math.max(a,b)});
    longmin=long.reduce(function(a,b){ return Math.max(a,b)});
    //DIFERENÇA LATMAX-LATMIN E LONGMAX-LONGMIN
    DifLat=Math.abs(latmax-latmin)*180/Math.PI;
    DifLong=Math.abs(longmax-longmin)*180/Math.PI;
    Dist=Math.sqrt(DifLat**2+DifLong**2);
    //DEFINE UM ZOOM PARA A DISTÂNCIA (A DISTÂNCIA NÃO CARECE DE SER PRECISA. É APENAS PARA SABERMOS AS AMPLITUDES)
    if (Dist<=0.1){ Zoom=20}
    if (Dist>0.1 && Dist<=0.5){ Zoom=18}
    if (Dist>0.5 && Dist<=1){ Zoom=16}
    if (Dist>1 && Dist<=5){ Zoom=14}
    if (Dist>5 && Dist<=10){ Zoom=11}
    if (Dist>10){ Zoom=7}
    //DEFINE UM PONTO MÉDIO PARA A PESQUISA
    latmed=(latmax+latmin)/2;
    longmed=(longmax+longmin)/2;
    //seta a view
    map.setView([latmed,longmed], Zoom);
} //FIM DA FUNCTION seta_view


//NESTA FUNÇÃO DEFINE A ORDEM DAS CAMADAS DE ACORDO COM O ANDAR
map.createPane('myPane1').style.zIndex=200;
map.createPane('myPane2').style.zIndex=400;
map.createPane('myPane3').style.zIndex=500;
map.createPane('myPane4').style.zIndex=600;
map.createPane('myPane5').style.zIndex=650;
map.createPane('myPane6').style.zIndex=700;
map.createPane('myPane7').style.zIndex=750;
map.createPane('myPane8').style.zIndex=850;
function define_z(p){
  switch (p.properties.andar) {
            case 'Subsolo': return 'myPane1';
            case 'Inferior': return 'myPane2';
            case '0':   return 'myPane3';
            case '1':   return 'myPane4';
            case '2':   return 'myPane5';
            case '3':   return 'myPane6';
            case '4':   return 'myPane7';
            case '5':   return 'myPane8';
        } //FIM DO SWITCH       
} //FIM DA FUNÇÃO define_z

//NESTA FUNÇÃO DEFINE A PANE DA LABEL
map.createPane('LbPane1').style.zIndex=240;
map.createPane('LbPane2').style.zIndex=440;
map.createPane('LbPane3').style.zIndex=540;
map.createPane('LbPane4').style.zIndex=640;
map.createPane('LbPane5').style.zIndex=690;
map.createPane('LbPane6').style.zIndex=730;
map.createPane('LbPane7').style.zIndex=790;
map.createPane('LbPane8').style.zIndex=890;
function define_z_label(p){
  switch (p.properties.andar) {
            case 'Subsolo': return 'LbPane1';
            case 'Inferior': return 'LbPane2';
            case '0':   return 'LbPane3';
            case '1':   return 'LbPane4';
            case '2':   return 'LbPane5';
            case '3':   return 'LbPane6';
            case '4':   return 'LbPane7';
            case '5':   return 'LbPane8';
        } //FIM DO SWITCH       
} //FIM DA FUNÇÃO define_z_label




//NESTA FUNÇÃO DESATIVA CAMADAS COMO ORTOFOTO, INDOOR, ETC., QUE POSSAM ESTAR ATIVADAS
function desativar_camadas() {
      //redetopo=document.getElementById('redeTopograficaClose').style.display;
      mapasoutdoor=document.getElementById('mapasOutdoorClose').style.display;
      mapasindoor=document.getElementById('mapasIndoorClose').style.display;
      mapasorto=document.getElementById('mapasOrtofotoClose').style.display;
      mapas3d=document.getElementById('mapas3dClose').style.display;

      if ((mapasoutdoor == 'none') && (mapasindoor == 'none') && (mapasorto == 'none') && (mapas3d == 'none')) {
            outdoor=document.getElementById('mapasOutdoor');
            outdoor.click();       
      }
      
} //FIM DA FUNÇÃO desativar_camadas




//NESTA FUNÇÃO CAMADAS SÃO REMOVIDAS. USADA QUANDO SE FAZ UMA NOVA CONSULTA E/OU AO DESABILITAR ANDARES
function remove_camadas(layer){
  for (i=0;i<layer.length;i++){
            map.removeLayer(layer[i])
          }
} //FIM DA FUNÇÃO remove_camadas

//NESTA FUNÇÃO CAMADAS SÃO ADICIONADAS. USADA QUANDO SE FAZ UMA NOVA CONSULTA E/OU AO HABILITAR ANDARES
function add_camadas(layer){
  for (i=0;i<layer.length;i++){
            layer[i].addTo(map)
             }
} //FIM DA FUNÇÃO add_camadas


//NESTA FUNÇÃO MOSTRA AS OPÇÕES DE ANDARES E DEIXA HABILITADOS OS ENCONTRADOS
function opcoes_andares(){
  opcoes=document.getElementById('opcoes');
  opcoes.style.display='flex';

  subsolo=document.getElementById('andar_subsolo');
  inferior=document.getElementById('andar_inferior');
  andar0=document.getElementById('andar_0');
  andar1=document.getElementById('andar_1');
  andar2=document.getElementById('andar_2');
  andar3=document.getElementById('andar_3');
  andar4=document.getElementById('andar_4');
  andar5=document.getElementById('andar_5');
  //NA LISTA ANDARES_ENCONTRADOS QUANDO LÊ O GeoJSON BUSCA-SE IDENTIFICAR OS ANDARES ENCONTRADOS PARA A CONSULTA
  andares_encontrados.indexOf(subsolo.value)<0 ? subsolo.checked=false:subsolo.checked=true; 
  andares_encontrados.indexOf(inferior.value)<0 ? inferior.checked=false:inferior.checked=true; 
  andares_encontrados.indexOf(andar0.value)<0 ? andar0.checked=false:andar0.checked=true; 
  andares_encontrados.indexOf(andar1.value)<0 ? andar1.checked=false:andar1.checked=true; 
  andares_encontrados.indexOf(andar2.value)<0 ? andar2.checked=false:andar2.checked=true; 
  andares_encontrados.indexOf(andar3.value)<0 ? andar3.checked=false:andar3.checked=true; 
  andares_encontrados.indexOf(andar4.value)<0 ? andar4.checked=false:andar4.checked=true; 
  andares_encontrados.indexOf(andar5.value)<0 ? andar5.checked=false:andar5.checked=true; 

} //FIM DA FUNÇÃO opcoes_andares




//FUNÇÃO PARA DESABILITAR ANDARES
contador_de_chamada2=0;
function desabilita_andares(){

  if (contador_de_chamada2>0){
    habilita_andares();
  }

  //LISTA PARA SALVAR OS LAYERS REMOVIDOS (PARA CASO ATIVA-SE ELES NOVAMENTE) E OS ANDARES DESABILITADOS
  layer_removido=[];
  andares=[];
  

  subsolo=document.getElementById('andar_subsolo');
  inferior=document.getElementById('andar_inferior');
  andar0=document.getElementById('andar_0');
  andar1=document.getElementById('andar_1');
  andar2=document.getElementById('andar_2');
  andar3=document.getElementById('andar_3');
  andar4=document.getElementById('andar_4');
  andar5=document.getElementById('andar_5');

  if ((subsolo.checked)===true){ andares.push(subsolo.value); };
  if ((inferior.checked)===true){ andares.push(inferior.value); };
  if ((andar0.checked)===true){ andares.push(andar0.value);}
  if ((andar1.checked)===true){ andares.push(andar1.value);}
  if ((andar2.checked)===true){ andares.push(andar2.value);}
  if ((andar3.checked)===true){ andares.push(andar3.value);}
  if ((andar4.checked)===true){ andares.push(andar4.value);}
  if ((andar5.checked)===true){ andares.push(andar5.value);}
   
  if (typeof layer != 'undefined'){ 
     for (i=0;i<layer.length;i++){   
        p=JSON.parse(gjson[i]);
        if (andares.indexOf(p.properties.andar)<0){
            layer_removido.push(layer[i])
        } //FIM DO ÚLTIMO IF
  } //FIM DO FOR
  remove_camadas(layer_removido);
} //FIM DO PRIMEIRO IF
  
  contador_de_chamada2++;
} //FIM DA FUNÇÃO desabilita_andares





//FUNÇÃO PARA HABILITAR ANDARES

function habilita_andares(){
  //LISTA PARA SALVAR OS LAYERS ADICIONADOS E ANDARES ADICIONADOS
  andares=[];
  layer_adicionado=[];
  
  subsolo=document.getElementById('andar_subsolo');
  inferior=document.getElementById('andar_inferior');
  andar0=document.getElementById('andar_0');
  andar1=document.getElementById('andar_1');
  andar2=document.getElementById('andar_2');
  andar3=document.getElementById('andar_3');
  andar4=document.getElementById('andar_4');
  andar5=document.getElementById('andar_5');

  if ((subsolo.checked)===true){ andares.push(subsolo.value); };
  if ((inferior.checked)===true){ andares.push(inferior.value); };
  if ((andar0.checked)===true){ andares.push(andar0.value);}
  if ((andar1.checked)===true){ andares.push(andar1.value);}
  if ((andar2.checked)===true){ andares.push(andar2.value);}
  if ((andar3.checked)===true){ andares.push(andar3.value);}
  if ((andar4.checked)===true){ andares.push(andar4.value);}
  if ((andar5.checked)===true){ andares.push(andar5.value);}

  if (typeof layer != 'undefined'){
    for (i=0;i<layer.length;i++){
        p=JSON.parse(gjson[i]);
        if (andares.indexOf(p.properties.andar)>=0){
           if (layer_removido.indexOf(layer[i])>=0){
              layer_adicionado.push(layer[i])
      } //FIM DO ÚLTIMO IF   
    } //FIM DO PENÚLTIMO IF  
  } //FIM DO FOR
  add_camadas(layer_adicionado)
} //FIM DO PRIMEIRO IF
   
} //FIM DA FUNÇÃO habilita_andares


//VISUALIZAR A CAMADA A PARTIR DA TABELA

function verIndividual(id){ 
        if (typeof layer==='undefined'){ alert('É necessário visualizar primeiro')}
        else {
             if (typeof layer_marker!='undefined'){ remove_camadas(layer_marker)}

           

            //
             layer_marker=[]

             //PEGA LAT E LONG DO CENTROIDE OBTIDO NA CONSULTA
             centroid=id;
             centroid=centroid.target;
             centroid=centroid.id;
             centroid=centroid.replace("POINT","");
             centroid=centroid.split(" ");
             long=(centroid[0].split("("))[1];
             lat=(centroid[1].split(")"))[0];
             long=Number(long);
             lat=Number(lat);

             //CRIA O MARCADOR
             NewLayer=L.marker([lat,long], {pane: 'myPane8'});
             NewLayer.addTo(map);
             layer_marker.push(NewLayer);

             //SETA NO MAPA
             map.setView([lat,long],20)
           } //FIM DO ELSE
} //FIM DA FUNÇÃO verIndividual






//FUNÇÃO PARA ALTERAR A ESTILIZAÇÃO DAS CAMADAS
function select_cores(){
  if (document.getElementById('cinza').checked){
              cores=['#ffffff','#f0f0f0','#d9d9d9','#bdbdbd','#969696','#737373','#525252','#252525']
       } else if (document.getElementById('vermelho').checked){
              cores=['#fff5f0','#fee0d2','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#99000d']
       } else if (document.getElementById('qualitativo-1').checked){
              cores=['#b2df8a','#33a02c','#a6cee3','#1f78b4','#fb9a99','#e31a1c','#fdbf6f','#ff7f00']
       } else if (document.getElementById('qualitativo-2').checked){
              cores=['#8dd3c7','#ffffb3','#bebada','#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5']
       } else {
              return;
       }
  if (typeof layer !='undefined') {
        for(i=4;i<layer.length;i++){
           id=layer[i]._leaflet_id;
           if (map.hasLayer(layer[i])){
                switch(map._layers[id]._layers[id-1].feature.properties.andar){
                        case 'Subsolo':  map._layers[id]._layers[id-1].setStyle({'fillColor':cores[0]});  break;
                        case 'Inferior':  map._layers[id]._layers[id-1].setStyle({'fillColor':cores[1]}); break;
                        case '0':    map._layers[id]._layers[id-1].setStyle({'fillColor':cores[2]}); break;
                        case '1':    map._layers[id]._layers[id-1].setStyle({'fillColor':cores[3]}); break;
                        case '2':    map._layers[id]._layers[id-1].setStyle({'fillColor':cores[4]}); break;
                        case '3':    map._layers[id]._layers[id-1].setStyle({'fillColor':cores[5]}); break;
                        case '4':    map._layers[id]._layers[id-1].setStyle({'fillColor':cores[6]}); break;
                        case '5':    map._layers[id]._layers[id-1].setStyle({'fillColor':cores[7]}); break;


      }

    } else {
               switch(layer[i]._layers[id-1].feature.properties.andar){
                        case 'Subsolo':  layer[i]._layers[id-1].setStyle({'fillColor':cores[0]}); break;
                        case 'Inferior':  layer[i]._layers[id-1].setStyle({'fillColor':cores[1]}); break;
                        case '0':    layer[i]._layers[id-1].setStyle({'fillColor':cores[2]}); break;
                        case '1':    layer[i]._layers[id-1].setStyle({'fillColor':cores[3]}); break;
                        case '2':    layer[i]._layers[id-1].setStyle({'fillColor':cores[4]}); break;
                        case '3':    layer[i]._layers[id-1].setStyle({'fillColor':cores[5]}); break;
                        case '4':    layer[i]._layers[id-1].setStyle({'fillColor':cores[6]}); break;
                        case '5':   layer[i]._layers[id-1].setStyle({'fillColor':cores[7]}); break;


      }
    }
  }
      }
  document.getElementById('sub_label').style.color=cores[0];
  document.getElementById('inf_label').style.color=cores[1];
  document.getElementById('0_label').style.color=cores[2];
  document.getElementById('1_label').style.color=cores[3];
  document.getElementById('2_label').style.color=cores[4];
  document.getElementById('3_label').style.color=cores[5];
  document.getElementById('4_label').style.color=cores[6];
  document.getElementById('5_label').style.color=cores[7];

}

//FUNÇÃO DE LIMPAR VIEW

function limpa_view(){
  if (typeof layer != 'undefined'){
    remove_camadas(layer);
  }
  if (typeof layer_marker != 'undefined'){
    remove_camadas(layer_marker);
  }
  fechaconfig();
  fechatabela();
}

//Função Autocomplete Setor ou Departamento
$(function() {
    function log(message) {
        $("<div>").text(message).appendTo("#menuAutocompleteSetDept");
        $("#buscaSetDept").blur();
    }
    $("#buscaSetDept").autocomplete({
        source: function(request, response) {
            $.ajax({
                url: "../php/pesquisa_setdpt_principal.php?",
                data: { keyword: request.term },
                dataType: 'json', // DON'T use jsonp !
                cache: false,
                success: function(data) {
             
                    // Even on success, it may have no results...
                    if (typeof(data[0]) != "undefined") {
                        // Remove the no result error in case it's displayed
                        $("#noResult").css("display", "none");
                    } else {
                        // Display the no result error
                        $("#noResult").css("display", "inline");
                    }
                    // Pass the data to the dropdown!
                    response(data);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                  console.log(jaqXHR.responseText)
                    console.log(errorThrown);
                }
            });
        },
        minLength: 4,
        select: function(event, ui) {
            log(ui.item.value);
        }
    });
    $("#buscaSetDept").on("focus", function() {
        $("#ui-id-400").css("display", "block");
    });
});

//Função Autocomplete Ambiente
$(function() {
    function log(message) {
        $("<div>").text(message).appendTo("#menuAutocompleteAmb");
        $("#buscaAmb").blur();
    }
    $("#buscaAmb").autocomplete({
        source: function(request, response) {
            $.ajax({
                url: "../php/pesquisa_tpambiente_principal.php?",
                data: { keyword: request.term,setdpt: document.getElementById('buscaSetDept').value},
                dataType: 'json', // DON'T use jsonp !
                cache: false,
                success: function(data) {

                    // Even on success, it may have no results...
                    if (typeof(data[0]) != "undefined") {
                        // Remove the no result error in case it's displayed
                        $("#noResult").css("display", "none");
                    } else {
                        
                        $("#noResult").css("display", "inline");
                    }
                    // Pass the data to the dropdown!
                    if (data != null){ response(data); }
                    
                },
                error: function(jqXHR, textStatus, errorThrown) {
                  
                    console.log(errorThrown);
                }
            });
        },
        minLength: 4,
        maxLength: 6,
        select: function(event, ui) {
            log(ui.item.value);
        }
    });
    $("#buscaAmb").on("focus", function() {
        $("#ui-id-500").css("display", "block");
    });
});

apagarbuscaset=document.getElementById('apagarBuscaSetDept');
apagarbuscaset.addEventListener('click',function(){ document.getElementById('buscaSetDept').value=''});
apagarbuscaamb=document.getElementById('apagarBuscaAmb');
apagarbuscaamb.addEventListener('click',function(){ document.getElementById('buscaAmb').value=''});

//DEFININDO AS FUNÇÕES

//ANDARES
subsolo=document.getElementById('andar_subsolo');
inferior=document.getElementById('andar_inferior');
andar0=document.getElementById('andar_0');
andar1=document.getElementById('andar_1');
andar2=document.getElementById('andar_2');
andar3=document.getElementById('andar_3');
andar4=document.getElementById('andar_4');
andar5=document.getElementById('andar_5');
subsolo.onclick = desabilita_andares;
inferior.onclick = desabilita_andares;
andar0.onclick = desabilita_andares;
andar1.onclick = desabilita_andares;
andar2.onclick = desabilita_andares;
andar3.onclick = desabilita_andares;
andar4.onclick = desabilita_andares;
andar5.onclick = desabilita_andares;

//BOTÕES
botao_visualizar=document.getElementById('view');
botao_visualizar.onclick = view_leaf;
botao_tabela=document.getElementById('open');
botao_tabela.onclick = table_cm;
botao_ok=document.getElementById('cores_alteradas');
botao_ok.onclick=select_cores;
botao_limpar=document.getElementById('clean');
botao_limpar.onclick=limpa_view;

document.getElementById('configuracoes').addEventListener('click', function(){
     var config = document.getElementById('config');
     config.style.display='block'

})