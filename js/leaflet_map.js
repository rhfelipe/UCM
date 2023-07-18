map = L.map('map', { fullscreenControl: { pseudoFullscreen: false } }).setView([-25.4505, -49.2341], 16);

var basemaps = [
	L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
                        attribution: 'Projeto e Execução: <a href="https://www.cepag.ufpr.br/">CEPAG</a>, Basemap © <a href="https://www.google.com/">Google</a> ',
                        maxZoom: 23,
                    }),
	L.tileLayer('https://mt1.google.com/vt/lyrs=s&hl=pl&&x={x}&y={y}&z={z}', {
                        attribution: 'Projeto e Execução: <a href="https://www.cepag.ufpr.br/">CEPAG</a>, Basemap © <a href="https://www.google.com/">Google</a> ',
                        maxZoom: 23,
                    }),
   
];
map.addControl(
    L.control.basemaps({
        basemaps: basemaps,
        tileX: 0,
        tileY: 0,
        tileZ: 1
    })
);
//Plugin de mensuração
var measureControl = L.control.measure({
    primaryLengthUnit: 'meters',
    secondaryLengthUnit: 'kilometers',
    primaryAreaUnit: 'sqmeters',
    position: 'topleft',
    activeColor: '#7e81e6',
    completedColor: '#b52424',
    popupOptions: { className: 'leaflet-measure-resultpopup', autoPanPadding: [10, 10] }
});
measureControl.addTo(map);

//Insere Escala
L.control.scale({
    metric: true,
    imperial: false,
    position: 'topright'
}).addTo(map);

//Corrige o mapa quando fecha a sidebar
$("#close-sidebar").click(function(e) {
    setTimeout(function() {
        map.invalidateSize()
    }, 200);
});


////////////////////////////////////////////////////////
// marcadores coloridos
var greenIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var blackIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var greyIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var redIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

//Botão legenda
L.easyButton('<strong>Legenda</strong>', function(){
    if(checkIndoorLayer==1)
    var x = document.getElementById('maplegend'); 
    else
    var x = document.getElementById('maplegend2')

x.style.display = 'block'; 
  }).addTo(map);


