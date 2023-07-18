//Função Autocomplete Ambiente
$(function() {
    function log(message) {
        $("<div>").text(message).appendTo("#menuAutocompleteAmb");
        $("#busca-teste").blur();
    }
    $("#busca-teste").autocomplete({
        source: function(request, response) {
            $.ajax({
                url: "../php/autocomplete_buscas.php?",
                data: { keyword: request.term },
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
                error: function(jqXHR, textStatus, errorThrown, response) {
                    console.log(response);
                    console.log(errorThrown);

                }
            });
        },
        minLength: 2,
        maxLength: 6,
        select: function(event, ui) {
            log(ui.item.value);
        }
    });
    $("#busca-teste").on("focus", function() {
        $("#ui-id-500").css("display", "block");
    });
});


$("#apagarBusca").click(function () {
    document.getElementById("busca-teste").value = '';
});

//COMPARTILHAMENTO
function share(){
    if (navigator.share) {
  navigator.share({
    title: 'CampusMap-UFPR',
    text: 'Esta é a localização',
    url: document.location.href,
  })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error));
}
}

//ATIVAR A CAMADA INDOOR CORRESPONDENTE
function ativa_indoor(gj_andar){
  var map_close = document.getElementById('mapasIndoorClose');
  if (map_close.style.display=='none'){
       $("#mapasIndoorClose").show();
       $("#trocaAndar").show();
       checkIndoorLayer = 1;
  }
  controleAndar(gj_andar);
  carregaMapaIndoor();

}

  //VISUALIZAÇÃO GEOMÉTRICA DA CONSULTA
function view_link(url){
     if (typeof cores != 'undefined'){ cores=cores}
     else{ cores=['#3388ff',"#3388ff","#3388ff","#3388ff","#3388ff","#3388ff","#3388ff","#3388ff"]}

            //ENVIANDO OS FILTROS AO PHP PARA A CONSULTA E ADICIONANDO AS CAMADAS NA BASE CARTOGRÁFICA
            const xhttp = new XMLHttpRequest(); //CRIANDO UMA NOVA REQUISIÇÃO
            xhttp.responseType = 'text';
            xhttp.open("GET", url);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8'");
            xhttp.send();
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
                                                     case 'Subsolo': return  {color: "#3388ff",'fillColor': cores[0],"fillOpacity":0.3,"weight": 3,"opacity":1};
                                                     case 'Inferior': return {color: '#3388ff','fillColor': cores[1], "fillOpacity": 0.3,"weight": 3,"opacity":1};
                                                     case '0':   return {color: '#3388ff','fillColor': cores[2], "fillOpacity":0.3,"weight": 3,"opacity":1};
                                                     case '1':   return {color: '#3388ff','fillColor': cores[3], "fillOpacity":0.3,"weight": 3,"opacity":1};
                                                     case '2':   return {color: '#3388ff','fillColor': cores[4], "fillOpacity":0.3,"weight": 3,"opacity":1};
                                                     case '3':   return {color: '#3388ff','fillColor': cores[5], "fillOpacity":0.3,"weight": 3,"opacity":1};
                                                     case '4':   return {color: '#3388ff','fillColor': cores[6], "fillOpacity":0.3,"weight": 3,"opacity":1};
                                                     case '5':   return {color: '#3388ff','fillColor': cores[7], "fillOpacity":0.3,"weight": 3,"opacity":1};
                                              }}, pane: define_z(p)}); //PANE É QUE DEFINE O Z DO LAYER
                                          layer_n.bindTooltip(p.properties.label,{permanent: false, direction: "center", className: "my-labels", pane: define_z_label(p)});
                                          layer_n.bindPopup(
                                                           '<table><tr style="border: solid;border-width:0.5px;font-family:Open Sans">'+'<td style="text-align: center;border:solid;border-width:0.5px;margin: 10px;background-color:#3a3f48;padding:5px;color:#fff;">Setor</td>' + '<td style="text-align: center;border:solid;border-width:0.5px;margin: 10px;background-color:#3a3f48;padding:5px;color:#fff;">Ambiente</td>' + '<td style="text-align: center;border:solid;border-width:0.5px;margin: 10px;background-color:#3a3f48;padding:5px;color:#fff;">Edifício</td>' + '<td style="text-align: center;border:solid;border-width:0.5px;margin: 10px;background-color:#3a3f48;padding:5px;color:#fff;">Andar</td></tr>' +
                                                           '<tr style="border: solid;border-width:0.5px;font-family:Open Sans">'+'<td style="text-align: center;border:solid;border-width:0.5px;margin: 10px;background-color:#fff;padding:5px;color: #000;">'+p.properties.setor+'</td>' + '<td style="text-align: center;border:solid;border-width:0.5px;margin: 10px;background-color:#fff;padding:5px;color: #000;">'+p.properties.amb+'</td>' + '<td style="text-align: center;border:solid;border-width:0.5px;margin: 10px;background-color:#fff;padding:5px;color: #000;">'+p.properties.edf+'</td>' + '<td style="text-align: center;border:solid;border-width:0.5px;margin: 10px;background-color:#fff;padding:5px;color: #000;">'+p.properties.andar+'</td></tr></table>' +
                                                            '<br>' + 
                                                            '<div style="display: inline-block;width: 300px;height: 150px;"><div style="width: 50%;float: left"><a style="margin-top: 8px;" target="_blank" href=https://chart.googleapis.com/chart?chs=250x250&amp;cht=qr&amp;chl='+encodeURIComponent(document.location.href)+'><img width="150" height="150" src="https://chart.googleapis.com/chart?chs=250x250&amp;cht=qr&amp;chl='+encodeURIComponent(document.location.href)+'" alt="" title="Clique para gerar o QRCode"></a></div>' +
                                                            '<div style="width: 50%;margin-top: 50px;float: left"><a style="margin-left: 2px;margin-top: 8px;" href="javascript:void(0)" onclick="share()">Compartilhar</a>'+'<br>'+'<a style="margin-left: 2px;cursor: pointer;" id="cleanBusca" href="javascript:void(0)" onclick="clean_busca()">Limpar visualização</a></div></div>'
                                                            , {pane: 'LbPane8',maxWidth: '450px'});
                                          layer_n.on("add", function (event) {event.target.openPopup();});
                                          layer.push(layer_n);
                                          layer_n.addTo(map);
                                                      } //FIM DO FOR
                        seta_view();
                        ativa_indoor(p.properties.andar);
                        //SE MUDAR A VIEW, MUDAR A TABELA
              
                        opcoes_andares(); //MOSTRA AS OPÇÕES DE ANDARES
                        document.getElementById('close-sidebar').click();
                              } //FIM DO ÚLTIMO ELSE
                            } //FIM DO PENÚLTIMO IF
                          } //FIM DA FUNÇÃO xhttp
                      }; //FIM DA FUNÇÃO VIEW_LEAF  
  


function cria_url(){
    filtro=$("#busca-teste").val();
    const xhttp = new XMLHttpRequest(); //CRIANDO UMA NOVA REQUISIÇÃO
    xhttp.responseType = 'text';
    xhttp.open("POST", 'busca_key.php');
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8'");
    xhttp.send("filtro1="+filtro);
    xhttp.onreadystatechange = function () {
    if(xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
        key=JSON.parse(xhttp.responseText);
        if (xhttp.responseText.length>16 || key==null){ 
         alert('Busca inválida')} 
        else{
        var temp=key.split("");
        var campus=temp[0]+temp[1]+temp[2]+temp[3];
        var edif=temp[4]+temp[5]+temp[6];
        var andar=temp[7]+temp[8]+temp[9];
        var sala=temp[10]+temp[11]+temp[12];

        url='index.php?'+'camp='+'\''+campus+'\''+'&edif='+'\''+edif+'\''+'&and='+'\''+andar+'\''+'&sala='+'\''+sala+'\'';
        var url2='get_geom_url.php?'+'campus='+campus+'&edif='+edif+'&andar='+andar+'&sala='+sala;
        window.history.pushState("object or string", "Title","/map/php/"+url);
        view_link(url2);
        }
    }
}
    
}

function clean_busca(){
  limpa_view()
}
search=document.getElementById('buscas');
search.onclick=cria_url;