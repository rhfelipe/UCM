//wms BASE
var urlWmsBase = 'https://campusmap.ufpr.br/geoserver/gwc/service/wms?';
var urlTMSBase_1 = 'https://campusmap.ufpr.br/geoserver/gwc/service/tms/1.0.0/UCM-OUTDOOR%3A';
var urlTMSIndoor_1 = 'https://campusmap.ufpr.br/geoserver/gwc/service/tms/1.0.0/UCM-INDOOR%3A';
var urlTMSBase_2 = '@EPSG%3A900913@png8/{z}/{x}/{-y}.png8'




var ccja = L.tileLayer.wms(urlWmsBase, {
    layers: 'UCM-OUTDOOR:ccja_base_campus',
    transparent: 'true',
    format: 'image/png',
    maxZoom: 23,
    zIndex: 10
}).addTo(map);

var ccjb = L.tileLayer.wms(urlWmsBase, {
    layers: 'UCM-OUTDOOR:ccjb_base_campus',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 10
}).addTo(map);

var cccb = L.tileLayer.wms(urlWmsBase, {
    layers: 'UCM-OUTDOOR:cccb_base_campus',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 10
}).addTo(map);

var ccju = L.tileLayer.wms(urlWmsBase, {
    layers: 'UCM-OUTDOOR:ccju_base_campus',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 10
}).addTo(map);

var ccba = L.tileLayer.wms(urlWmsBase, {
    layers: 'UCM-OUTDOOR:ccba_base_campus',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 10
}).addTo(map);

var cccr = L.tileLayer.wms(urlWmsBase, {
    layers: 'UCM-OUTDOOR:cccr_base_campus',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 10
}).addTo(map);

var pfcg = L.tileLayer.wms(urlWmsBase, {
    layers: 'UCM-OUTDOOR:pfcg_base_campus',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 10
}).addTo(map);

var ocpa = L.tileLayer.wms(urlWmsBase, {
    layers: 'UCM-OUTDOOR:ocpa_base_campus',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 10
}).addTo(map);

var ocma = L.tileLayer.wms(urlWmsBase, {
    layers: 'UCM-OUTDOOR:ocma_base_campus',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 10
}).addTo(map);

var ofpa = L.tileLayer.wms(urlWmsBase, {
    layers: 'UCM-OUTDOOR:ofpa_base_campus',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 10
}).addTo(map);

var lcem = L.tileLayer.wms(urlWmsBase, {
    layers: 'UCM-OUTDOOR:lcem_base_campus',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 10
}).addTo(map);

var lcma = L.tileLayer.wms(urlWmsBase, {
    layers: 'UCM-OUTDOOR:lcma_base_campus',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 10
}).addTo(map);

var lcmi = L.tileLayer.wms(urlWmsBase, {
    layers: 'UCM-OUTDOOR:lcmi_base_campus',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 10
}).addTo(map);

var lmae = L.tileLayer.wms(urlWmsBase, {
    layers: 'UCM-OUTDOOR:lmae_base_campus',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 10
}).addTo(map);
var cccp = L.tileLayer.wms(urlWmsBase, {
    layers: 'UCM-OUTDOOR:cccp_base_campus',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 10
}).addTo(map);
//////////////////////////////////////////////////////////////////////////////////////
//wms Indoor

//var urlWmsIndoor = 'https://campusmap.ufpr.br/geoserver/gwc/service/wms?';
var urlWmsIndoor = 'https://campusmap.ufpr.br/geoserver/wms?';

//cccb
var cccb_andar_0 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:cccb_andar_0',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var cccb_andar_1 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:cccb_andar_1',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var cccb_andar_2 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:cccb_andar_2',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var cccb_andar_inferior = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:cccb_andar_inferior',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});

//ccja
var ccja_andar_0 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:ccja_andar_0',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var ccja_andar_1 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:ccja_andar_1',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var ccja_andar_2 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:ccja_andar_2',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var ccja_andar_3 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:ccja_andar_3',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var ccja_andar_4 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:ccja_andar_4',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var ccja_andar_5 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:ccja_andar_5',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});

//ccjb
var ccjb_andar_0 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:ccjb_andar_0',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var ccjb_andar_1 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:ccjb_andar_1',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var ccjb_andar_2 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:ccjb_andar_2',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var ccjb_andar_3 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:ccjb_andar_3',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var ccjb_andar_4 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:ccjb_andar_4',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var ccjb_andar_inferior = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:ccjb_andar_inferior',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});

//ccju
var ccju_andar_0 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:ccju_andar_0',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var ccju_andar_1 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:ccju_andar_1',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});

//ocpa
var ocpa_andar_0 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:ocpa_andar_0',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var ocpa_andar_1 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:ocpa_andar_1',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var ocpa_andar_2 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:ocpa_andar_2',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});

//lcma
var lcma_andar_0 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:lcma_andar_0',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var lcma_andar_1 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:lcma_andar_1',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var lcma_andar_2 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:lcma_andar_2',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var lcma_andar_3 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:lcma_andar_3',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});

//lcmi
var lcmi_andar_0 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:lcmi_andar_0',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var lcmi_andar_1 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:lcmi_andar_1',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});

//lcem
var lcem_andar_0 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:lcem_andar_0',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});

//lmae
var lmae_andar_0 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:lmae_andar_0',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var lmae_andar_1 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:lmae_andar_1',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var lmae_andar_2 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:lmae_andar_2',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
//cccp
var cccp_andar_subsolo = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:cccp_andar_subsolo',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var cccp_andar_0 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:cccp_andar_0',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var cccp_andar_1 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:cccp_andar_1',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var cccp_andar_2 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:cccp_andar_2',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});
var cccp_andar_3 = L.tileLayer.betterWms(urlWmsIndoor, {
    layers: 'UCM-INDOOR:cccp_andar_3',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    zIndex: 100,
    wmslayer: urlWmsIndoor
});


//////////////////////////////////
//ortofotos
/*
var ccja_ortofoto = L.tileLayer.wms(urlWmsBase, {
    layers: 'UCM-OUTDOOR:[20171112] ccja_5cm',
    transparent: 'true',
    format: 'image/png',
    maxZoom: 23,
    zIndex: 5
});
var ccjb_ortofoto = L.tileLayer.wms(urlWmsBase, {
    layers: 'UCM-OUTDOOR:[20190810] ccjb_5cm',
    transparent: 'true',
    format: 'image/png',
    maxZoom: 23,
    zIndex: 5
});
*/

urlWmsOrto = 'https://campusmap.ufpr.br/geoserver/wms?';


var ccjb_ccja_ortofoto = L.tileLayer.wms(urlTMSBase_1+'ccjb_ccja-5cm'+urlTMSBase_2, {
    maxZoom: 23,
    zIndex: 5
});
var ccjb_ccja_ortoRGB = L.tileLayer(urlTMSBase_1+'ccjb-ccja_esteioRGB'+urlTMSBase_2,{
    maxZoom: 23,
    zIndex: 6
});
var ccjb_ccja_ortoCIR = L.tileLayer(urlTMSBase_1+'ccjb-ccja_esteioINFRA'+urlTMSBase_2,{
    maxZoom: 23,
    zIndex: 7
});

var ccju_ortofoto = L.tileLayer.wms(urlWmsOrto, {
    layers: 'UCM-OUTDOOR:[20200603] ccju_5cm',
    transparent: 'true',
    format: 'image/png',
    maxZoom: 23,
    zIndex: 5
});
var cccb_ortofoto = L.tileLayer.wms(urlWmsOrto, {
    layers: 'UCM-OUTDOOR:[20200603] cccb_5cm',
    transparent: 'true',
    format: 'image/png',
    maxZoom: 23,
    zIndex: 5
});
var pfcg_ortofoto = L.tileLayer.wms(urlWmsOrto, {
    layers: 'UCM-OUTDOOR:[20200916] pfcg_5cm',
    transparent: 'true',
    format: 'image/png',
    maxZoom: 23,
    zIndex: 5
});
var ccba_ortofoto = L.tileLayer.wms(urlWmsOrto, {
    layers: 'UCM-OUTDOOR:ccba_5cm',
    transparent: 'true',
    format: 'image/png',
    maxZoom: 23,
    zIndex: 5
});
var ocpa_ortofoto = L.tileLayer.wms(urlWmsOrto, {
    layers: 'UCM-OUTDOOR:[20200212] ocpa_5cm',
    transparent: 'true',
    format: 'image/png',
    maxZoom: 23,
    zIndex: 5
});
var ofpa_ortofoto = L.tileLayer.wms(urlWmsOrto, {
    layers: 'UCM-OUTDOOR:[20200212] ofpa_5cm',
    transparent: 'true',
    format: 'image/png',
    maxZoom: 23,
    zIndex: 5
});
var ocma_ortofoto = L.tileLayer.wms(urlWmsOrto, {
    layers: 'UCM-OUTDOOR:[20200212] ocma_5cm',
    transparent: 'true',
    format: 'image/png',
    maxZoom: 23,
    zIndex: 5
});
var lcem_ortofoto = L.tileLayer.wms(urlWmsOrto, {
    layers: 'UCM-OUTDOOR:[20200212] lcem_5cm',
    transparent: 'true',
    format: 'image/png',
    maxZoom: 23,
    zIndex: 5
});
var lcma_ortofoto = L.tileLayer.wms(urlWmsOrto, {
    layers: 'UCM-OUTDOOR:[20200212] lcma_5cm',
    transparent: 'true',
    format: 'image/png',
    maxZoom: 23,
    zIndex: 5
});
var lcmi_ortofoto = L.tileLayer.wms(urlWmsOrto, {
    layers: 'UCM-OUTDOOR:[20200212] lcmi_5cm',
    transparent: 'true',
    format: 'image/png',
    maxZoom: 23,
    zIndex: 5
});

var lmae_ortofoto = L.tileLayer.wms(urlWmsOrto, {
    layers: 'UCM-OUTDOOR:lmae_5cm',
    transparent: 'true',
    format: 'image/png',
    maxZoom: 23,
    zIndex: 5
});

var cccr_ortofoto = L.tileLayer.wms(urlWmsOrto, {
    layers: 'UCM-OUTDOOR:cccr_5cm',
    transparent: 'true',
    format: 'image/png',
    maxZoom: 23,
    zIndex: 5
});

var cccp_ortofoto = L.tileLayer.wms(urlWmsOrto, {
    layers: 'UCM-OUTDOOR:cccp_5cm',
    transparent: 'true',
    format: 'image/png',
    maxZoom: 23,
    zIndex: 5
});



//Matterport
var matterportIcon = L.icon({
    iconUrl: '../img/logos/logomatterport.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize: [45, 30], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor: [10, 29], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [3, -28] // point from which the popup should open relative to the iconAnchor
});

var locations = [
    ["CT-CEPAG", "https://my.matterport.com/show/?m=WMWtWeQtnBk", -25.45147876, -49.23170550],
    ["LabTOPO", "https://my.matterport.com/show/?m=7zCtx1sLPRK", -25.45048, -49.23271],
    ["LATIM", "https://my.matterport.com/show/?m=GPD2q2eQTUT", -25.45296, -49.23310],
    ["LabCARTO", "https://my.matterport.com/show/?m=Ywr13haLbnh", -25.45307669, -49.233182]
];

var matterportpoints = [];
matterport = L.featureGroup();
for (var i = 0; i < locations.length; i++) {
    matterportpoints[i] = new L.marker([locations[i][2], locations[i][3]], { icon: matterportIcon })
        .bindPopup("<object data=\"" + locations[i][1] + "\" title=\"Matterport\" id=\"view3d\"></object><h6><class=\"lead\" class=\"text-sm-left\">Para visualizar em tela cheia, clique <a href=\"" + locations[i][1] + "\" target=\"_blank\">aqui.</a></h6>", {
            maxWidth: 560,
        });
    matterportpoints[i].addTo(matterport);
};

////////////////////////////////
// Pontos Residuos
function popup_pontosResiduos(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2"><strong>Campus: </strong>' + (feature.properties['codLocal'] !== null ? Autolinker.link(String(feature.properties['codLocal'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>Tipo Resíduo: </strong>' + (feature.properties['tipo'] !== null ? Autolinker.link(String(feature.properties['tipo'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['link'] !== null ? Autolinker.link(String(feature.properties['link'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, { maxHeight: 400, maxWidth: 300 });
}

function style_pontosResiduos(feature, latlng) {
    var infectante = L.icon({
        iconUrl: 'https://campusmap.ufpr.br/geoserver/www/simbologia_pictorica/infectante.svg',
        iconSize: [32, 32],
        iconAnchor: [16, 37],
        popupAnchor: [0, -28]
    });
    var comum = L.icon({
        iconUrl: 'https://campusmap.ufpr.br/geoserver/www/simbologia_pictorica/comum.svg',
        iconSize: [32, 32],
        iconAnchor: [16, 37],
        popupAnchor: [0, -28]
    });
    var perigoso = L.icon({
        iconUrl: 'https://campusmap.ufpr.br/geoserver/www/simbologia_pictorica/perigoso.svg',
        iconSize: [32, 32],
        iconAnchor: [16, 37],
        popupAnchor: [0, -28]
    });
    if (map.getZoom() >= 19) {
        switch (feature.properties.tipo) {
            case 'Biológico': return L.marker(latlng, { icon: infectante });
            case 'Comum': return L.marker(latlng, { icon: comum });
            case 'Perigoso': return L.marker(latlng, { icon: perigoso });
        }
    }
}
var layer_pontosResiduos;
function addResiduos() {
    layer_pontosResiduos = L.geoJson(geojson_pontosResiduos, {
        onEachFeature: popup_pontosResiduos,
        pointToLayer: style_pontosResiduos,
    }).addTo(map);
}
addResiduos()
///////////////////