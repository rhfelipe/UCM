var clique = false;


var myIcon = L.icon({
    iconUrl: '../img/logos/icons8-map-64.png',
    iconSize: [48, 48],
    popupAnchor: [-3, -30],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};


//função para adicionar rota feita
function add_line_route(latlngs){
   if(latlngs.length==2){

    var options = { "delay": 800,"dashArray": [10,20],"color": "#0000FF", "pulseColor": "#FFFFFF"};

    route = L.polyline.antPath(latlngs,options);
    route.addTo(map);

   } else if(latlngs.length>2){
      route.setLatLngs(latlngs).redraw();
   }
}

 

but_g_div.addEventListener('click', function() {
     var latlngs=[]
	   clique=!clique;
	   if (clique){
       id = navigator.geolocation.watchPosition(function(position){
       var lat=position.coords.latitude;
       var long=position.coords.longitude;
       var acr = position.coords.accuracy/2;

      //para registrar a rota feita
       latlngs.push([lat,long]);
       add_line_route(latlngs);

       if (typeof pos_atual=='undefined'){
           circulo = L.circle([lat,long], {radius: acr, pane: 'myPane7'}).addTo(map);
           pos_atual=L.marker([lat,long], {icon: myIcon, pane: 'myPane8'}).bindPopup('Você está a uma distância entre 0m e ' + acr.toFixed() + 'm deste ponto', { pane: 'LbPane8'});
           pos_atual.on("add", function (event) {event.target.openPopup();});
           pos_atual.addTo(map);
           map.setView([lat,long],20)}
       else{ 
       	   if (!map.hasLayer(pos_atual)){
              circulo = L.circle([lat,long], {radius: acr, pane: 'myPane7'}).addTo(map);
              pos_atual=L.marker([lat,long], {icon: myIcon, pane: 'myPane8'}).bindPopup('Você está a uma distância entre 0m a ' + acr.toFixed() + 'm deste ponto', { pane: 'LbPane8'});
              pos_atual.on("add", function (event) {event.target.openPopup();});
              pos_atual.addTo(map);
              map.setView([lat,long],20);    
       	     }
            circulo.setLatLng([lat,long]);
       		  pos_atual.setLatLng([lat,long]);
       	    map.setView([lat,long]);
       	   }
    
         }, console.log('Falha ao obter a posição'), options) 
   } else {
   	map.removeLayer(pos_atual);
    map.removeLayer(circulo);
    map.removeLayer(route);
   	navigator.geolocation.clearWatch(id);
   }
})