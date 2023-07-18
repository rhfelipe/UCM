

//////////////////////////////////////////////////////////////////////////////////////////////////
//Eventos que ocorrem depois que tudo carrega
$(document).ready(function () {
    //caso clique em algum lugar no mapa qualquer
    map.on("click", function (e) {
        //evita erro de cancelable
        if (e.cancelable) {
            e.preventDefault();
        };
        if (geojson) {
            map.removeLayer(geojson);
            //console.log('removeu geojson');
        };
        //console.log('nao removeu geojson');
        $(".page-wrapper").removeClass("toggled");
        setTimeout(function () {
            map.invalidateSize()
        }, 200);

    });

    //verificar zoom do mapa
    map.on("zoomend", function (e) {
        if (e.cancelable) {
            e.preventDefault();
        };
        var valorZoomMap = map.getZoom();
        if (valorZoomMap > 19) {
            //console.log('Zoom Bem Alto!');
            var icoAndar = document.createElement("div");
            icoAndar.classList.add("leaflet-botton");
            icoAndar.classList.add("leaflet-left");
            icoAndar.style.color = 'red';
            document.body.appendChild(icoAndar);
        } else {
            console.log(valorZoomMap);
        };
        layer_pontosResiduos.removeFrom(map);
        addResiduos();
    });
    /*
        $("#pesquisaPrincipalAmbiente").click(function() {
            if (document.getElementById("pesquisaPrincipalAmbiente").value.length > 0) {
                document.getElementById("pesquisaPrincipalAmbiente").select;
            }
        });
    */
    /*
        var selectCampus = document.getElementById("selecionaRegiao");
        selectCampus.addEventListener('change', function() {
            var x = parseInt(document.getElementById("selecionaRegiao").value);
            switch (x) {
                case 0:
                    document.getElementById("campusCuritiba").style.display = 'none';
                    document.getElementById("campusNorte").style.display = 'none';
                    document.getElementById("campusLitoral").style.display = 'none';
                    document.getElementById("campusSul").style.display = 'none';
                    break;
                case 1:
                    document.getElementById("campusCuritiba").style.display = 'block';
                    document.getElementById("campusNorte").style.display = 'none';
                    document.getElementById("campusLitoral").style.display = 'none';
                    document.getElementById("campusSul").style.display = 'none';
                    break;
                case 2:
                    document.getElementById("campusCuritiba").style.display = 'none';
                    document.getElementById("campusNorte").style.display = 'none';
                    document.getElementById("campusLitoral").style.display = 'block';
                    document.getElementById("campusSul").style.display = 'none';
                    break;
                case 3:
                    document.getElementById("campusCuritiba").style.display = 'none';
                    document.getElementById("campusNorte").style.display = 'block';
                    document.getElementById("campusLitoral").style.display = 'none';
                    document.getElementById("campusSul").style.display = 'none';
                    break;
                case 4:
                    document.getElementById("campusCuritiba").style.display = 'none';
                    document.getElementById("campusNorte").style.display = 'none';
                    document.getElementById("campusLitoral").style.display = 'none';
                    document.getElementById("campusSul").style.display = 'block';
                    break;
            }
        });
        */
    window.scrollTo(0, 1);
});






//////////--------------------- FUNÇÕES PARA OUTDOOR E INDOOR ---------------------


///////////////////////////////////////////////////////////////////////////
//Mudar localização do mapa de acordo com o campus
function muda_campus(campus) {
    console.log("Campus vale: " + campus);
    var coordenadas = [];
    //Se nada for selecionado coord[0], o valor padrão será a coordenada do Centro Politécnico';

    coordenadas[1] = [-25.412514664006, -49.249012107671, 17]; //Cabral 
    coordenadas[2] = [-25.451074538848, -49.234051701336, 16]; //Politecnico
    coordenadas[3] = [-25.447480991432, -49.238791324753, 17]; //Jardim Botanico
    coordenadas[4] = [-25.41409716389, -49.252904021155, 19]; //Juveve
    coordenadas[5] = [-25.3944936314662, -49.12932840154, 15]; //Fazenda Canguiri
    coordenadas[6] = [-25.4392850848, -49.2835644481, 19]; //Batel 
    coordenadas[7] = [-24.29517660623015, -53.84155261252449, 16]; //Palotina 
    coordenadas[8] = [-24.426368087351855, -53.82723660129466, 18]; //Maripa
    coordenadas[9] = [-24.34582579714289, -53.75177653481495, 18]; //Fazenda Palotina
    coordenadas[10] = [-25.835201, -48.539180, 18]; //Matinhos
    coordenadas[11] = [-25.691619, -48.465861, 19]; //Mirassol
    coordenadas[12] = [-25.570351, -48.351645, 16]; //Centro estudos Mar
    coordenadas[13] = [-25.521785, -48.507075, 19]; //Museu de Arqueologia e Etnologia
    coordenadas[14] = [-25.426862116774, -49.261907790374, 19]; //Reitoria
    coordenadas[15] = [-25.4290153,-49.2674489, 19]; //santos Andrade
    if (campus != null) {
        var x = campus;
        console.log("Campus foi Preenchido com: " + campus);

    } else {
        //se não houve uma escolha, assuma por padrão o Campus Centro Politécnico
        console.log("Campus" + campus);
        var x = 1;
    }
    console.log("Campus" + campus);
    var lat = coordenadas[x][0];
    var lng = coordenadas[x][1];
    var zoom_level = coordenadas[x][2];
    map.panTo(L.latLng(lat, lng));
    map.setView(L.latLng(lat, lng), zoom_level);
}
//////////////////////////////////////////////////////////////////////////////////////////////
function buscaIdCampus(i) {
    switch (i) {
        case 1:
            campus = 'cccb';
            break
        case 2:
            campus = 'ccja';
            break
        case 3:
            campus = 'ccjb';
            break
        case 4:
            campus = 'ccju';
            break
        case 5:
            campus = 'pfcg';
            break
        case 6:
            campus = 'ccba';
            break
        case 7:
            campus = 'ocpa';
            break
        case 8:
            campus = 'ocma';
            break
        case 9:
            campus = 'ofpa';
            break
        case 10:
            campus = 'lcma';
            break
        case 11:
            campus = 'lcmi';
            break
        case 12:
            campus = 'lcem';
            break
        case 13:
            campus = 'lmae';
            break
        case 14:
            campus = 'cccr';
            break
        case 15:
            campus = 'cccp';
            break

    }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////
// Controle de Andar

function controleAndar(andar) {
    i = -9;
    nomeAndares = ["T", "1", "2", "3", "4", "5"];
    nomeAndares[-1]='S';
    andarMax = 6;
    andarMin =-1;

    if (andar == "0") {
        andar = "T";
    }

    if (andar == "++1") {
        if (andarAtual < andarMax) {
            andarAtual += 1;
            i = andarAtual;
        } else {
            alert("Está no andar mais alto!\nNada feito.");
            return false;
        }
    } else if (andar == "--1") {
        if (andarAtual > andarMin) {
            andarAtual -= 1;
            i = andarAtual;
        } else {
            alert("Está no andar mais baixo!\nNada feito.");
            return false;
        }
    } else {

        i = nomeAndares.indexOf(andar);

    }

    if (i == -2) {
        alert("Andar inexistente!");
        return false;
    } else {
        andarAtual = i;
        //L.thorMap.changeAllGr(i)
    }

    $("#inputAndar").val(nomeAndares[i]);

    return true;
}

////////////////////////////////////////////////////////////////////////////////////////
function carregaMapaIndoor() {
    switch (andarAtual) {
        case -1: 
            limpaMapaIndoor();
            cccp_andar_subsolo.addTo(map);
            break
        case 0:
            limpaMapaIndoor();
            cccb_andar_0.addTo(map);
            ccja_andar_0.addTo(map);
            ccjb_andar_0.addTo(map);
            ccju_andar_0.addTo(map);
            ocpa_andar_0.addTo(map);
            lcma_andar_0.addTo(map);
            lcmi_andar_0.addTo(map);
            lcem_andar_0.addTo(map);
            lmae_andar_0.addTo(map);
            cccp_andar_0.addTo(map);
            break
        case 1:
            limpaMapaIndoor();
            cccb_andar_1.addTo(map);
            ccja_andar_1.addTo(map);
            ccjb_andar_1.addTo(map);
            ccju_andar_1.addTo(map);
            ocpa_andar_1.addTo(map);
            lcma_andar_1.addTo(map);
            lcmi_andar_1.addTo(map);
            lmae_andar_1.addTo(map);
            cccp_andar_1.addTo(map);
            break
        case 2:
            limpaMapaIndoor();
            cccb_andar_2.addTo(map);
            ccja_andar_2.addTo(map);
            ccjb_andar_2.addTo(map);
            ocpa_andar_2.addTo(map);
            lcma_andar_2.addTo(map);
            lmae_andar_2.addTo(map);
            cccp_andar_2.addTo(map);
            break
        case 3:
            limpaMapaIndoor();
            ccja_andar_3.addTo(map);
            ccjb_andar_3.addTo(map);
            lcma_andar_3.addTo(map);
            cccp_andar_3.addTo(map);
            break
        case 4:
            limpaMapaIndoor();
            ccja_andar_4.addTo(map);
            ccjb_andar_4.addTo(map);
            break
        case 5:
            limpaMapaIndoor();
            ccja_andar_5.addTo(map);
            break

    }
};

//////////////////////////////////////////////////
//Função Limpar Layers INDOOR

function limpaMapaIndoor() {
    var campus = ["ccja", "ccjb", "ccju", "cccb","ocpa","lcma","lcmi","lcem","lmae","cccp"];
    for (var i = 0; i < campus.length; i++) {
        for (var j = -1; j <= 5; j++) {
            var andarLabel = "_andar_";
            if (j==-1){
                var layerIndoor = { 'andar': campus[i] + andarLabel + 'subsolo' };
            } else {
            var layerIndoor = { 'andar': campus[i] + andarLabel + j };
        }
            if (eval("typeof " + layerIndoor.andar) !== "undefined") {
                if (map.hasLayer(eval(layerIndoor.andar))) {
                    map.removeLayer(eval(layerIndoor.andar));
                }
            }
        }
    }
};









////////------------- FUNÇÕES PARA INDICADORES DE ENERGIA ELÉTRICA E DOWNLOAD DO PDF --------------------
function onEachFeatureIndicadores(feature, layer) {
    var popupContent = "<p>Indicadores <b>" +
        feature.properties.nome + "</b>:</p>" +
        "<p>Consumo por m²: " + feature.properties.kwh_m2 + "</p>" +
        "<p>Consumo por aluno: " + feature.properties.kwh_aluno + "</p>" +
        "<p>Toneladas equivalentes de petróleo: " + feature.properties.tep + "</p>";


    layer.bindPopup(popupContent);
};

function styleIndicadores() {
    return {
        opacity: 1,
        color: 'rgba(10,10,255)',
        //dashArray: '',
        //lineCap: 'butt',
        //lineJoin: 'miter',
        weight: 3.0,
        fillOpacity: 0.2,
    }
}

function plantapdf(a) {
    switch (a) {
        case '1':
            window.open("https://campusmap.ufpr.br/basecartografica/pdfA4/UCM_CCCB_A4_CO.pdf", '_blank');
            break
        case '2':
            window.open("https://campusmap.ufpr.br/basecartografica/pdfA4/UCM_CCJA_A4_CO.pdf", '_blank');
            break
        case '3':
            window.open("https://campusmap.ufpr.br/basecartografica/pdfA4/UCM_CCJB_A4_CO.pdf", '_blank');
            break
        case '4':
            window.open("https://campusmap.ufpr.br/basecartografica/pdfA4/UCM_CCJU_A4_CO.pdf", '_blank');
            break
    };
}






















/////////////------------------------------ FUNÇÕES PARA DESENHAR  ---------------------------------------

/////////////////////////
// LeafLet Draw
var drawnItems = L.featureGroup().addTo(map);

/*
L.control.layers({

}, { 'Desenho': drawnItems }, { position: 'topleft', collapsed: false }).addTo(map);
*/
map.addControl(new L.Control.Draw({
    edit: {
        featureGroup: drawnItems,
        poly: {
            allowIntersection: false
        }
    },
    draw: {
        polygon: {
            allowIntersection: false,
            showArea: true
        },
        circle: false,
        rectangle: false,
        circlemarker: false,
    }
}));

map.on(L.Draw.Event.CREATED, function (event) {
    var layer = event.layer;
    drawnItems.addLayer(layer);
});















///////////////////////// ------------------------ FUNÇÕES PARA EXPORTAR A GEOMETRIA ------------------------/////////////////////


var but_div = document.createElement('div');
var but = document.createElement('div');
var sp = document.createElement('a');
//var strg = document.createElement('span');
but_div.className='leaflet-draw-section';
but_div.style='margin-top: 5px';
but.className='leaflet-draw-toolbar leaflet-bar leaflet-draw-toolbar-top';
but_div.id='export';
sp.className='leaflet-draw-draw-save';
sp.style='background-position: -600px -1px;'
sp.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-180 -140 800 862"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M433.1 129.1l-83.9-83.9C342.3 38.32 327.1 32 316.1 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V163.9C448 152.9 441.7 137.7 433.1 129.1zM224 416c-35.34 0-64-28.66-64-64s28.66-64 64-64s64 28.66 64 64S259.3 416 224 416zM320 208C320 216.8 312.8 224 304 224h-224C71.16 224 64 216.8 64 208v-96C64 103.2 71.16 96 80 96h224C312.8 96 320 103.2 320 112V208z"/></svg>';
sp.title='Salvar Geometria';


but_div.appendChild(but);
but.appendChild(sp);
//sp.appendChild(strg);

var coluna_but=document.getElementsByClassName('leaflet-draw leaflet-control');
coluna_but[0].appendChild(but_div);

var ulb = document.createElement('ul');
ulb.className = 'leaflet-draw-actions leaflet-draw-actions-top';
ulb.style='top: 1px; display: none;';


but_div.appendChild(ulb);


//Botão de exportação do draw
document.getElementById('export').onclick = function(e) {
    //exportardesenho(drawnItems);
    var ulb = document.getElementById('salvar_geom');
    ulb.style.display=='block' ? ulb.style.display='none':ulb.style.display='block';

    $(function () {
    $('#salvar_geom').draggable({
        start: function (event, ui) {
            $(this).css({
                right: 'auto',
                top: 'auto',
                bottom: 'auto'
            });
        }
    });

});
};




//DRAGAVEL QUE SALVA ARQUIVO
var slv_arq = document.getElementById('salvar_arq'); //botão de salvar
var tipo_arq = document.getElementById('tipo_arq'); //select de tipo de arq

tipo_arq.addEventListener('change', function(){ slv_arq.disabled=false});

slv_arq.addEventListener('click', function(){

    var name = document.getElementById('nome_arq').value;
    if (name==""){ name='desenhoUCM'}

    var tipo = tipo_arq.value;

    var data = drawnItems.toGeoJSON();
    
    if (data.features.length == 0) {
        alert('Para download dos dados, por favor crie um desenho com as ferramentas acima disponíveis.');
    } else { 


    if (tipo=='kml'){
        var kml = GeoConvert.geojson2Kml(data);
        var blb = ['<?xml version="1.0" encoding="UTF-8"?>'+kml.outerHTML];
        var blob = new Blob(blb, {type: 'text/xml'});
        var  url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = String(name)+'.kml';
        a.click();
    }

    if (tipo=='geojson'){
        exportardesenho(drawnItems, name);
    }

    if (tipo=='gpx'){
        var gpx = GeoConvert.geojson2Gpx(data);
        var blb = ['<?xml version="1.0" encoding="UTF-8"?>'+gpx.outerHTML];
        var blob = new Blob(blb, {type: 'text/xml'});
        var  url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = String(name)+'.gpx';
        a.click();
    }

    if (tipo==''){
        alert('É preciso escolher um formato!');
    }
}
})







function exportardesenho(desenho, name) {

    // Extract GeoJson from featureGroup
    var data = desenho.toGeoJSON();
    
    if (data.features.length == 0) {
        alert('Para download dos dados, por favor crie um desenho com as ferramentas acima disponíveis.')
    } else {
    // Stringify the GeoJson
    var convertedData = 'application/geo+json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));
    // Create export
    var a = document.createElement("a");
    a.setAttribute('href', 'data:' + convertedData);
    a.setAttribute('download', String(name)+'.geojson');
    a.click();
    }
};
//





















/////////// ------------ CRIAR O BOTÃO DE GEOLOCALIZAÇÃO -------------------------



//botão de geolocalização
var but_g_div = document.createElement('a');
var but_g = document.createElement('button');
var sp_g = document.createElement('span');
//var strg_g = document.createElement('strong')
but_g_div.className='leaflet-bar easy-button-container leaflet-control';
but_g.className='easy-button-button leaflet-bar-part leaflet-interactive unnamed-state-active';
but_g.type='button';
but_g_div.id='geol';
sp_g.className='button-state state-unnamed-state unnamed-state-active';
sp_g.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 1100 1250"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M320 64C320 99.35 291.3 128 256 128C220.7 128 192 99.35 192 64C192 28.65 220.7 0 256 0C291.3 0 320 28.65 320 64zM288 160C323.3 160 352 188.7 352 224V272C352 289.7 337.7 304 320 304H318.2L307.2 403.5C305.4 419.7 291.7 432 275.4 432H236.6C220.3 432 206.6 419.7 204.8 403.5L193.8 304H192C174.3 304 160 289.7 160 272V224C160 188.7 188.7 160 224 160H288zM63.27 414.7C60.09 416.3 57.47 417.8 55.33 419.2C51.7 421.6 51.72 426.4 55.34 428.8C64.15 434.6 78.48 440.6 98.33 446.1C137.7 456.1 193.5 464 256 464C318.5 464 374.3 456.1 413.7 446.1C433.5 440.6 447.9 434.6 456.7 428.8C460.3 426.4 460.3 421.6 456.7 419.2C454.5 417.8 451.9 416.3 448.7 414.7C433.4 406.1 409.9 399.8 379.7 394.2C366.6 391.8 358 379.3 360.4 366.3C362.8 353.3 375.3 344.6 388.3 347C420.8 352.9 449.2 361.2 470.3 371.8C480.8 377.1 490.6 383.5 498 391.4C505.6 399.5 512 410.5 512 424C512 445.4 496.5 460.1 482.9 469C468.2 478.6 448.6 486.3 426.4 492.4C381.8 504.7 321.6 512 256 512C190.4 512 130.2 504.7 85.57 492.4C63.44 486.3 43.79 478.6 29.12 469C15.46 460.1 0 445.4 0 424C0 410.5 6.376 399.5 13.96 391.4C21.44 383.5 31.24 377.1 41.72 371.8C62.75 361.2 91.24 352.9 123.7 347C136.7 344.6 149.2 353.3 151.6 366.3C153.1 379.3 145.4 391.8 132.3 394.2C102.1 399.8 78.57 406.1 63.27 414.7H63.27z"></path></svg>';
but_g_div.title='Veja sua localização em tempo real';

but_g_div.appendChild(but_g);
but_g.appendChild(sp_g);
//sp_g.appendChild(strg_g);

var coluna_but_g=document.getElementsByClassName('leaflet-top leaflet-right')
coluna_but_g[0].appendChild(but_g_div);
















/////////////// ------------------- SALVAR O MAPA COMO PDF ----------------------------


//função print
var maprint = L.easyPrint({
    title: 'Print - Campus Map',
    sizeModes: ['A4Landscape'],
    position: 'topright'
}).addTo(map);

var A4 = maprint.holder

A4.addEventListener('mouseover', function(){
    if (typeof layer_n !='undefined'){
        if (layer_n.isPopupOpen()){
            alert('Não é possível salvar o mapa com o Popup aberto')
        }
    }
})

















/////////// -------------------- FUNÇÕES DE IMPORTAÇÃO DE KML E GEOJSON COMO GEOMETRIA ------------------------------



//FUNÇÕES PARA VISUALIZAR ARQUIVO IMPORTADO

function view_centroid_file(){

var a=drawnItems.getLayers();

var coords=[]
for (i=0;i<a.length;i++){
    if(typeof a[i]._latlng=='object' || typeof a[i]._latlngs=='object'){
      if (typeof a[i]._latlng=='object'){
        coords.push(a[i]._latlng)
      } else {
        temp = a[i]._latlngs;
        temp.forEach(function(coord){
          if (Array.isArray(coord)){
                  coord.forEach(function(coord2){
                                coords.push(coord2)
            })
          } else {
                    coords.push(coord)
      }
        })   
      }
    }
}

var lati=[]
var longi=[]

coords.forEach(function(obj){
  lati.push(obj['lat'])
  longi.push(obj['lng'])
})

var latmax=lati.reduce(function(a,b){ return Math.min(a,b)});
var longmax=longi.reduce(function(a,b){ return Math.min(a,b)});
var latmin=lati.reduce(function(a,b){ return Math.max(a,b)});
var longmin=longi.reduce(function(a,b){ return Math.max(a,b)});
    //DIFERENÇA LATMAX-LATMIN E LONGMAX-LONGMIN
var DifLat=Math.abs(latmax-latmin)*180/Math.PI;
var DifLong=Math.abs(longmax-longmin)*180/Math.PI;
var Dist=Math.sqrt(DifLat**2+DifLong**2);
    //DEFINE UM ZOOM PARA A DISTÂNCIA (A DISTÂNCIA NÃO CARECE DE SER PRECISA. É APENAS PARA SABERMOS AS AMPLITUDES)
if (Dist<=0.1){ Zoom=20}
if (Dist>0.1 && Dist<=0.5){ Zoom=18}
if (Dist>0.5 && Dist<=1){ Zoom=16}
if (Dist>1 && Dist<=5){ Zoom=14}
if (Dist>5 && Dist<=10){ Zoom=11}
if (Dist>10){ Zoom=7}
    //DEFINE UM PONTO MÉDIO PARA A PESQUISA
var latmed=(latmax+latmin)/2;
var longmed=(longmax+longmin)/2;
    //seta a view
map.setView([latmed,longmed], Zoom);

  }


function addGeometria(geo, drawnItems){

    geo.features.forEach(function(inst){

        var name = inst.properties.name;

       //PONTO
        if (inst.geometry.type=='Point'){
            if (typeof inst['style']!='undefined'){
            if (JSON.stringify(inst.style)!=='{}'){
                var icurl = {iconUrl: inst.style['iconUrl'], iconAnchor: null, iconSize: [36,36]};
                var opt={icon: L.icon(icurl)};
                var pt = new L.Draw.Marker(map, opt);
            } else {
            var pt = new L.Draw.Marker(map);
            }}
            else { var pt = new L.Draw.Marker(map);}
            var latlng = inst.geometry.coordinates;
            var layer = pt._createMarker(latlng.reverse());

            if (name!='undefined'){
                layer.bindTooltip(name,{permanent: true, direction: "top", className: "my-labels"});
            }
            drawnItems.addLayer(layer);
        }



        //LINHA
        if (inst.geometry.type=='LineString'){


            if (typeof inst['style']!='undefined'){
            if (JSON.stringify(inst.style)!=='{}'){
                var opt = {
                                  allowIntersection: true,
                                  repeatMode: false,
                                  drawError: {
                                      color: '#b00b00',
                                      timeout: 2500
                                  },
                                  icon: new L.DivIcon({
                                      iconSize: new L.Point(8, 8),
                                      className: 'leaflet-div-icon leaflet-editing-icon'
                                  }),
                                  touchIcon: new L.DivIcon({
                                      iconSize: new L.Point(20, 20),
                                      className: 'leaflet-div-icon leaflet-editing-icon leaflet-touch-icon'
                                  }),
                                  guidelineDistance: 20,
                                  maxGuideLineLength: 4000,
                                  shapeOptions: {
                                      stroke: true,
                                      color: inst.style['color'],
                                      weight: 4,
                                      opacity: 0.5,
                                      fill: false,
                                      clickable: true
                                  },
                                  name: name,
                                  metric: true, // Whether to use the metric measurement system or imperial
                                  feet: true, // When not metric, to use feet instead of yards for display.
                                  nautic: false, // When not metric, not feet use nautic mile for display
                                  showLength: true, // Whether to display distance in the tooltip
                                  zIndexOffset: 2000, // This should be > than the highest z-index any map layers
                                  factor: 1, // To change distance calculation
                                  maxPoints: 0 // Once this number of points are placed, finish shape
                              }
                 var ls = new L.Draw.Polyline(map, opt);
            } else {
            var ls = new L.Draw.Polyline(map);}
            } else { var ls = new L.Draw.Polyline(map);}
            var latlng = inst.geometry.coordinates;
            ls.addHooks();
            latlng.forEach(function(coords){
                ls.addVertex(coords.reverse());
            })


            ls._finishShape();
            ls.removeHooks();

            


        }




        //POLÍGONO
        if (inst.geometry.type=='Polygon'){
            if (typeof inst['style']!='undefined'){
            if (JSON.stringify(inst.style)!=='{}'){
                var opt = {
                      showArea: false,
                      showLength: false,
                      shapeOptions: {
                          stroke: true,
                          color: inst.style['color'],
                          weight: 4,
                          opacity: 0.5,
                          fill: true,
                          fillColor: inst.style['fillColor'], //same as color by default
                          fillOpacity: 0.2,
                          clickable: true
                      },
                      name: name,
                      // Whether to use the metric measurement system (truthy) or not (falsy).
                      // Also defines the units to use for the metric system as an array of
                      // strings (e.g. `['ha', 'm']`).
                      metric: true,
                      feet: true, // When not metric, to use feet instead of yards for display.
                      nautic: false, // When not metric, not feet use nautic mile for display
                      // Defines the precision for each type of unit (e.g. {km: 2, ft: 0}
                      precision: {}
                  }
                  var pg = new L.Draw.Polygon(map, opt);
            } else {
            var pg = new L.Draw.Polygon(map);
            }
            } else { var pg = new L.Draw.Polygon(map);}

            var latlng = inst.geometry.coordinates[0];
            pg.addHooks();
            latlng.forEach(function(coords){
                pg.addVertex(coords.reverse())
            })
            pg._finishShape();
            pg.removeHooks();
        }
    })


    view_centroid_file()
}

//funções importar kml ou geojson
var but_div_imp = document.createElement('div');
var but_imp = document.createElement('div');
var sp_imp = document.createElement('a');
//var strg = document.createElement('span');
but_div_imp.className='leaflet-draw-section';
but_div_imp.style='margin-top: 5px';
but_imp.className='leaflet-draw-toolbar leaflet-bar leaflet-draw-toolbar-top';
but_div_imp.id='import';
sp_imp.className='leaflet-draw-draw-save';
sp_imp.style='background-position: -600px -1px;'
sp_imp.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-150 -140 800 862"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M384 0v128h128L384 0zM352 128L352 0H176C149.5 0 128 21.49 128 48V288h174.1l-39.03-39.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l80 80c9.375 9.375 9.375 24.56 0 33.94l-80 80c-9.375 9.375-24.56 9.375-33.94 0C258.3 404.3 256 398.2 256 392s2.344-12.28 7.031-16.97L302.1 336H128v128C128 490.5 149.5 512 176 512h288c26.51 0 48-21.49 48-48V160h-127.1C366.3 160 352 145.7 352 128zM24 288C10.75 288 0 298.7 0 312c0 13.25 10.75 24 24 24H128V288H24z"/></svg>';
sp_imp.title='Importar Geometria (ou arraste o arquivo ao mapa)';
but_div_imp.appendChild(but_imp);
but_imp.appendChild(sp_imp);
//sp.appendChild(strg);
coluna_but[0].appendChild(but_div_imp);
var input_file = document.createElement('input');
input_file.type='File';
input_file.accept='.kml, .geojson';
input_file.multiple='true';
input_file.id = 'importado';

but_div_imp.addEventListener('click', function(){
    input_file.click();
    input_file.onchange = function() { 
    var files = input_file.files;
    for (i=0;i<files.length;i++){
    const reader = new FileReader();
      if (files[i].type=='application/vnd.google-earth.kml+xml'){
        reader.onload = function() {
            var load_kml = GeoConvert.kml2Geojson(this.result)
            addGeometria(load_kml, drawnItems)
        }}
      else {
        reader.onload = function() {
            var load_gjson = JSON.parse(this.result);
            addGeometria(load_gjson,drawnItems);

      }
  }
    reader.readAsText(files[i]);
    }
    }
})


//PARA A IMPORTAÇÃO DRAGÁVEL
function drop_file(ev){


    ev.preventDefault();

    if (ev.dataTransfer.items){
        var files = ev.dataTransfer.files;
        for (i=0;i<files.length;i++){
                const reader = new FileReader()
                if (files[i].type=='application/vnd.google-earth.kml+xml'){
                     reader.readAsText(files[i]);
                     reader.onload = function() {
                     var load_kml = GeoConvert.kml2Geojson(this.result)
                     addGeometria(load_kml, drawnItems)
                }}
                if(files[i].name.indexOf('geojson')>-1) {
                    reader.readAsText(files[i]);
                     reader.onload = function() {
                     var load_gjson = JSON.parse(this.result);
                     addGeometria(load_gjson,drawnItems);

                   }
                }      
        }
    }
}

function dragOverHandler(ev) {

  // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
  ev.preventDefault();
}
