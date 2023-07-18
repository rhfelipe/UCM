//variaveis globais
campus = '';
var geojsonOrigem;
var geojsonDestino;
var ajaxGeojsonOrigem;
var ajaxGeojsonDestino;
idOrigem = '';
idDestino = '';
var layerRota;
layerRota = initLayer(layerRota);





/////AS FUNÇÕES DE BUSCA POR EDIFÍCIO E AMBIENTE ESTÃO OBSOLETAS

////AS FUNÇÕES DE ROTA NÃO ESTÃO SENDO UTILIZADAS


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

//Função Autocomplete Busca Principal Ambiente
$(function () {
    function log(message) {
        $("<div>").text(message).appendTo("#menuAutocompletePrincipal");
        $("#pesquisaPrincipalAmbiente").blur();
    }
    $("#pesquisaPrincipalAmbiente").autocomplete({
        source: function (request, response) {
            if (campus == 'ccja') {
                $.ajax({
                    url: "../php/pesquisa_ambiente_principal.php?campus=" + document.getElementById("campusCuritiba").value,
                    data: { keyword: request.term },
                    dataType: 'json', // DON'T use jsonp !
                    cache: false,
                    success: function (data) {
                        //console.log(data);
                        // Even on success, it may have no results...
                        if (typeof (data[0]) != "undefined") {
                            // Remove the no result error in case it's displayed
                            $("#noResult").css("display", "none");
                            // For fun, count it!
                            var count = 0;
                            while (data[count]) {
                                console.log(data[count]);
                                count++;
                            }
                        } else {
                            count = "NO";
                            // Display the no result error
                            $("#noResult").css("display", "inline");
                        }
                        console.log(count + " RESULTS");
                        // Pass the data to the dropdown!
                        response(data);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(errorThrown);
                    }
                });
            } else {
                alert('Escolha um campus antes! (Função disponível temporariamente apenas para o campus Centro Politécnico)');
            };
        },
        minLength: 4,
        select: function (event, ui) {
            log(ui.item.value);
        }
    });
    $("#pesquisaPrincipalAmbiente").on("focus", function () {
        $("#ui-id-100").css("display", "block");
    });
});

//////////////////////////////////////////////////////////////////
//Função que cria o geojson da busca principal Ambiente
var geojson;

function buscaPrincipalAmbiente() {
    if (document.getElementById('pesquisaPrincipalAmbiente').value == '') {
        alert('Preencha o campo para efetuar a busca (Não esqueça de escolher o campus)');
    } else {
        if (campus == 'ccja') {
            var urlGeojson = '../php/postgis_geojson.php?campus=2&geomfield=geom&limit=1&fields=ambiente,+andar&paramCampoBusca=ambiente&campoBusca=';

            var textoBuscaAmbiente = document.getElementById('pesquisaPrincipalAmbiente').value;
            var newUrlGeojson = urlGeojson + textoBuscaAmbiente.replace(/[\s]/g, "+");
            var geojsonBuscaAmbiente = $.ajax({
                url: newUrlGeojson,
                dataType: "json",
                success: function () {
                    console.log("County data successfully loaded.", newUrlGeojson);
                    if (geojson) {
                        map.removeLayer(geojson);
                        console.log('removeu geojson');
                    };
                    geojson = L.geoJSON(geojsonBuscaAmbiente.responseJSON);
                    var andar = controleAndar(geojsonBuscaAmbiente.responseJSON.features[0].properties.andar);
                    carregaMapaIndoor(andar);
                    $("#trocaAndar").show();
                    geojson.addTo(map);
                    var html = '<thead><tr><th><strong>Ambiente: </strong></th></tr></thead><tbody>' + textoBuscaAmbiente;
                    var bounds = geojson.getBounds();
                    var latlng = bounds.getCenter();
                    var marcador = L.marker([latlng.lat, latlng.lng], { icon: greenIcon }).addTo(geojson);
                    console.log(bounds);
                    console.log(latlng);
                    //map.fitBounds(geojson.getBounds());
                    document.getElementById('pesquisaPrincipalAmbiente').value = '';
                    $(".page-wrapper").removeClass("toggled");
                    map.setView(latlng, 19);
                    map.openPopup(html, latlng);
                    marcador.bindPopup(html,);
                    marcador.openPopup();
                    setTimeout(function () {
                        map.invalidateSize()
                    }, 200);
                },
                error: function (xhr) {
                    alert(xhr.statusText)
                }
            });
        } else {
            alert('Escolha um campus antes! (Função disponível temporariamente apenas para o campus Centro Politécnico)');
        }
    }
};



////////

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

//Função Autocomplete Busca Principal Edificacao
$(function () {
    function log(message) {
        $("<div>").text(message).appendTo("#menuAutocompletePrincipal");
        $("#pesquisaPrincipalEdificacao").blur();
    }
    $("#pesquisaPrincipalEdificacao").autocomplete({
        source: function (request, response) {
            $.ajax({
                url: "../php/pesquisa_edificacao_principal.php?",
                data: { keyword: request.term },
                dataType: 'json', // DON'T use jsonp !
                cache: false,
                success: function (data) {
                    console.log(data);
                    // Even on success, it may have no results...
                    if (typeof (data[0]) != "undefined") {
                        // Remove the no result error in case it's displayed
                        $("#noResult").css("display", "none");
                        // For fun, count it!
                        var count = 0;
                        while (data[count]) {
                            console.log(data[count]);
                            count++;
                        }
                    } else {
                        count = "NO";
                        // Display the no result error
                        $("#noResult").css("display", "inline");
                    }
                    console.log(count + " RESULTS");
                    // Pass the data to the dropdown!
                    response(data);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
        },
        minLength: 2,
        select: function (event, ui) {
            log(ui.item.value);
        }
    });
    $("#pesquisaPrincipalEdificacao").on("focus", function () {
        $("#ui-id-100").css("display", "block");
    });
});

//Função que cria o geojson da busca principal Edificacao
var geojson;

function buscaPrincipalEdificacao() {
    if (document.getElementById('pesquisaPrincipalEdificacao').value != '') {
        var urlGeojson = '../php/postgis_geojson_edificacao.php?geomfield=geom&limit=1&fields=edificacao&paramCampoBusca=edificacao&campoBusca=';

        var textoBuscaEdificacao = document.getElementById('pesquisaPrincipalEdificacao').value;
        var newUrlGeojson = urlGeojson + textoBuscaEdificacao.replace(/[\s]/g, "+");
        var geojsonBuscaEdificacao = $.ajax({
            url: newUrlGeojson,
            dataType: "json",
            success: function () {
                console.log("County data successfully loaded.", newUrlGeojson);
                if (geojson) {
                    map.removeLayer(geojson);
                    console.log('removeu geojson');
                };
                geojson = new L.geoJSON(geojsonBuscaEdificacao.responseJSON).addTo(map);
                var html = '<thead><tr><th><strong>Edifício: </strong></th></tr></thead><tbody>' + textoBuscaEdificacao;
                var bounds = geojson.getBounds();
                var latlng = bounds.getCenter();
                var marcador = L.marker([latlng.lat, latlng.lng], { icon: greenIcon }).addTo(geojson);
                console.log(bounds);
                console.log(latlng);
                //map.fitBounds(geojson.getBounds());
                document.getElementById('pesquisaPrincipalEdificacao').value = '';
                $(".page-wrapper").removeClass("toggled");
                map.setView(latlng, 19);
                marcador.bindPopup(html,);
                marcador.openPopup();
                setTimeout(function () {
                    map.invalidateSize()
                }, 200);
            },
            error: function (xhr) {
                alert(xhr.statusText)
            }
        });
    }
};
/*
function buscaPrincipalEdificacao() {
    if (document.getElementById('pesquisaPrincipalEdificacao').value == '') {
        alert('Preencha o campo para efetuar a busca (Não esqueça de escolher o campus)');
    } else {
        if (campus == 'ccja') {
            var urlGeojson = '../php/postgis_geojson_edificacao.php?geotable=' + campus + '.' + campus + '_edificacao&geomfield=geom&limit=1&fields=edificacao&paramCampoBusca=edificacao&campoBusca=';

            var textoBuscaEdificacao = document.getElementById('pesquisaPrincipalEdificacao').value;
            var newUrlGeojson = urlGeojson + textoBuscaEdificacao.replace(/[\s]/g, "+");
            var geojsonBuscaEdificacao = $.ajax({
                url: newUrlGeojson,
                dataType: "json",
                success: function() {
                    console.log("County data successfully loaded.", newUrlGeojson);
                    if (geojson) {
                        map.removeLayer(geojson);
                        console.log('removeu geojson');
                    };
                    geojson = new L.geoJSON(geojsonBuscaEdificacao.responseJSON).addTo(map);
                    var html = '<thead><tr><th><strong>Edifício: </strong></th></tr></thead><tbody>' + textoBuscaEdificacao;
                    var bounds = geojson.getBounds();
                    var latlng = bounds.getCenter();
                    var marcador = L.marker([latlng.lat, latlng.lng], { icon: greenIcon }).addTo(geojson);
                    console.log(bounds);
                    console.log(latlng);
                    //map.fitBounds(geojson.getBounds());
                    document.getElementById('pesquisaPrincipalEdificacao').value = '';
                    $(".page-wrapper").removeClass("toggled");
                    map.setView(latlng, 19);
                    marcador.bindPopup(html, );
                    marcador.openPopup();
                    setTimeout(function() {
                        map.invalidateSize()
                    }, 200);
                },
                error: function(xhr) {
                    alert(xhr.statusText)
                }
            });
        } else {
            alert('Escolha um campus antes! (Função disponível temporariamente apenas para o campus Centro Politécnico)');
        }
    }
};
*/
//////////////////////////////////////////////////////////////////
//Função Autocomplete busca Origem Rota

$(function () {
    function log(message) {
        $("<div>").text(message).appendTo("#menuAutocompleteOrigem");
        $("#buscaOrigemRota").blur();
    }
    $("#buscaOrigemRota").autocomplete({
        source: function (request, response) {
            $.ajax({
                url: "../php/pesquisa_ambiente_principal.php?",
                data: { keyword: request.term },
                dataType: 'json', // DON'T use jsonp !
                cache: false,
                success: function (data) {
                    console.log(data);
                    // Even on success, it may have no results...
                    if (typeof (data[0]) != "undefined") {
                        // Remove the no result error in case it's displayed
                        $("#noResult").css("display", "none");
                        // For fun, count it!
                        var count = 0;
                        while (data[count]) {
                            console.log(data[count]);
                            count++;
                        }
                    } else {
                        count = "NO";
                        // Display the no result error
                        $("#noResult").css("display", "inline");
                    }
                    console.log(count + " RESULTS");
                    // Pass the data to the dropdown!
                    response(data);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
        },
        minLength: 4,
        select: function (event, ui) {
            log(ui.item.value);
        }
    });
    $("#buscaOrigemRota").on("focus", function () {
        $("#ui-id-200").css("display", "block");
    });
});

//Função que cria a origem das rotas
function buscarOrigem() {
    if (document.getElementById('buscaOrigemRota').value == '') {

    } else {
        var urlGeojson = '../php/postgis_geojson_ambiente.php?keyword=';
        var textoBuscaAmbiente = document.getElementById('buscaOrigemRota').value;
        var newUrlGeojson = urlGeojson + textoBuscaAmbiente.replace(/[\s]/g, "+");
        ajaxGeojsonOrigem = $.ajax({
            url: newUrlGeojson,
            dataType: "json",
            success: function () {
                console.log("County data successfully loaded.", newUrlGeojson);
                if (geojsonOrigem) {
                    map.removeLayer(geojsonOrigem);
                    console.log('removeu geojson');
                };
                geojsonOrigem = L.geoJSON(ajaxGeojsonOrigem.responseJSON);

                var html = '<thead><tr><th>Ambiente: </th></tr></thead><tbody>' + textoBuscaAmbiente;
                var bounds = geojsonOrigem.getBounds();
                latlngOrigem = bounds.getCenter();
                andarOrigem = controleAndar(ajaxGeojsonOrigem.responseJSON.features[0].properties.andar);
                carregaMapaIndoor(andarOrigem);
                andarOrigem = ajaxGeojsonOrigem.responseJSON.features[0].properties.andar[0];
                $("#trocaAndar").show();
                $("#mapasIndoorClose").show();
                console.log(bounds);
                console.log(latlngOrigem);
                //map.fitBounds(geojsonOrigem.getBounds());
                geojsonOrigem.addTo(map);
                $(".page-wrapper").removeClass("toggled");

                geojsonOrigem.addTo(map);
                var marcador = L.marker([latlngOrigem.lat, latlngOrigem.lng], { icon: blackIcon }).addTo(geojsonOrigem);
                marcador.bindPopup(html).openPopup();
                map.setView(latlngOrigem, 19);
                setTimeout(function () {
                    map.invalidateSize()
                }, 200);
                buscaIdRotaOrigem();
            },
            error: function (xhr) {
                alert(xhr.statusText)
            }
        });
    }
};
//////////////////////////////////////////////////////////////////////////////////////////////////
//Função Autocomplete busca Destino Rota
$(function () {
    function log(message) {
        $("<div>").text(message).appendTo("#menuAutocompleteDestino");
        $("#buscaDestinoRota").blur();
    }
    $("#buscaDestinoRota").autocomplete({

        source: function (request, response) {
            $.ajax({
                url: "../php/pesquisa_ambiente_principal.php?",
                data: { keyword: request.term },
                dataType: 'json', // DON'T use jsonp !
                cache: false,
                success: function (data) {
                    // Even on success, it may have no results...
                    if (typeof (data[0]) != "undefined") {
                        // Remove the no result error in case it's displayed
                        $("#noResult").css("display", "none");
                        // For fun, count it!
                        var count = 0;
                        while (data[count]) {
                            console.log(data[count]);
                            count++;
                        }
                    } else {
                        count = "NO";
                        // Display the no result error
                        $("#noResult").css("display", "inline");
                    }
                    console.log(count + " RESULTS");

                    // Pass the data to the dropdown!
                    response(data);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
        },
        minLength: 4,
        select: function (event, ui) {
            log(ui.item.value);
        }
    });
    $("#buscaDestinoRota").on("focus", function () {
        $("#ui-id-300").css("display", "block");
    });
});

//Função que cria o destino das rotas
function buscarDestino() {
    if (document.getElementById('buscaDestinoRota').value == '') {

    } else {
        var urlGeojson = '../php/postgis_geojson_ambiente.php?keyword=';

        var textoBuscaAmbiente = document.getElementById('buscaDestinoRota').value;
        var newUrlGeojson = urlGeojson + textoBuscaAmbiente.replace(/[\s]/g, "+");
        ajaxGeojsonDestino = $.ajax({
            url: newUrlGeojson,
            dataType: "json",
            success: function () {
                console.log("County data successfully loaded.", newUrlGeojson);
                if (geojsonDestino) {
                    map.removeLayer(geojsonDestino);
                    console.log('removeu geojson');
                };
                geojsonDestino = L.geoJSON(ajaxGeojsonDestino.responseJSON);
                var html = '<thead><tr><th>Ambiente: </th></tr></thead><tbody>' + textoBuscaAmbiente;
                var bounds = geojsonDestino.getBounds();
                latlngDestino = bounds.getCenter();
                andarDestino = controleAndar(ajaxGeojsonDestino.responseJSON.features[0].properties.andar);
                carregaMapaIndoor(andarDestino);
                andarDestino = ajaxGeojsonDestino.responseJSON.features[0].properties.andar[0];
                console.log(andarDestino);
                $("#trocaAndar").show();
                $("#mapasIndoorClose").show();
                console.log(bounds);
                console.log(latlngDestino);
                //map.fitBounds(geojsonDestino.getBounds());
                geojsonDestino.addTo(map);
                $(".page-wrapper").removeClass("toggled");
                map.setView(latlngDestino, 19);
                geojsonDestino.addTo(map);
                var marcador = L.marker([latlngDestino.lat, latlngDestino.lng], { icon: greenIcon }).addTo(geojsonDestino);
                marcador.bindPopup(html).openPopup();
                map.setView(latlngDestino, 19);
                setTimeout(function () {
                    map.invalidateSize()
                }, 200);
                buscaIdRotaDestino();
            },
            error: function (xhr) {
                alert(xhr.statusText)
            }
        });
    }
};






//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

//calcular rotas
function buscarRota() {

    /*
     * Rotina para exibir rotas no mapa
     * rota, id_origem e id_destino são variáveis globais
     * 
     *                                                                             Pedro - Abr 2017
     */
    ////////////////////////////////////////////////////////////////////////////



    //buscaIdRota();
    //idOrigem = 1000605;
    //idDestino = 2000017;

    // condicao para apenas rotas no Politecnico

    if (ajaxGeojsonOrigem.responseJSON.features[0].properties.local != 'Politécnico' ||
        ajaxGeojsonDestino.responseJSON.features[0].properties.local != 'Politécnico') {
        alert("Função para criação de rotas disponível temporariamente apenas para o campus Centro Politécnico");
    } else {

        $.ajax({
            type: 'GET',
            url: '../src/campusmapV1/rotas.php?id_origem=' + idOrigem + '&id_destino=' + idDestino,
            dataType: "json",
            success: function (data) {
                rota = data;
                addRota();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Realize as buscas por ambiente de Origem e Destino primeiro!");
            }
        });
    }
}
/*-------------------------------------*/

// Busca id_topo e geometria do ponto para calcular rota
/////// Id Topo Origem
function buscaIdRotaOrigem() {
    var andar = andarOrigem;
    var lat = latlngOrigem.lat;
    var lon = latlngOrigem.lng;
    $.ajax({
        url: '../src/campusmapV1/getIdTopoByCoord.php?andar=' + andar + '&tipo=latlon&lat=' + lat + '&lon=' + lon,
        dataType: 'json',
        // Se deu certo
        success: function (data) {

            idOrigem = data.id_topo;
            console.log('Este é o numero do id_topo Origem: ' +
                idOrigem);

        },
        // Erro, sem conexão ou resultado inesperado
        error: function (data) {
            alert("ERRO J404: Não foi possível estabelecer conexão com o nosso servidor :'(");
        }
    });
};
/////// Id Topo Destino
function buscaIdRotaDestino() {
    var andar = andarDestino;
    var lat = latlngDestino.lat;
    var lon = latlngDestino.lng;
    $.ajax({
        url: '../src/campusmapV1/getIdTopoByCoord.php?andar=' + andar + '&tipo=latlon&lat=' + lat + '&lon=' + lon,
        dataType: 'json',
        // Se deu certo
        success: function (data) {

            idDestino = data.id_topo;
            console.log('Este é o numero do id_topo Destino: ' +
                idDestino);

        },
        // Erro, sem conexão ou resultado inesperado
        error: function (data) {
            alert("ERRO J404: Não foi possível estabelecer conexão com o nosso servidor :'(");
        }
    });
}
/*-----------------------------------------------------------------------------------------------*/



function addRota() {
    /*
                                    Adiciona camada de rotas para o layer "layerRota"
    
                                    (json) rota    -> var global definida pela função CalcularRotas()
    
                                    pedropsfarias - jul 2017
    
                                */
    var layerLinhas;
    if (rota.length > 0) {
        layerLinhas = initLayer(layerLinhas);
        layerAndar = null;
        layerAndar = initLayer(layerAndar);
        dist = 0;
        andares = Array();

        // Pinta todos os poligonos de cinza
        var nomeLayer = Object.keys(map._layers);
        for (var i = 0; i < nomeLayer.length; i++) {
            if (map._layers[nomeLayer[i]].setStyle) {
                map._layers[nomeLayer[i]].setStyle({ fillColor: '#DED9C8' });
            }
        }

        for (var i = 0; i < rota.length; i++) {

            umDado = rota[i];
            umaGeometria = umDado.geom;
            dist += parseInt(umDado.dist);

            andares.push(umDado.andar);

            var andarAtual = 0;


            if (umDado.andar == andarAtual) {
                L.geoJson(umaGeometria, {
                    color: "black",
                    clickable: false,
                    opacity: 1,
                    weight: 3
                }).addTo(layerAndar);
            }

            // É elevador ou escada
            else if (umDado.andar == -99) {

                var dc = L.geoJson(umaGeometria, { color: "#804500", clickable: false, opacity: 1, weight: 3 }).addTo(layerAndar);

                latt = (dc.getBounds()._southWest.lat + dc.getBounds()._northEast.lat) / 2;
                lonn = (dc.getBounds()._southWest.lng + dc.getBounds()._northEast.lng) / 2;

                var ta = L.marker([latt, lonn], { icon: redIcon }).addTo(layerLinhas);
                var customOptions = { 'maxWidth': '300', 'className': 'custom' };
                var texto = "Trocar de andar"
                ta.bindPopup(texto, customOptions);
                ta.openPopup();

            } else {
                L.geoJson(umaGeometria, { color: "red", clickable: false, opacity: 1, weight: 3 }).addTo(layerLinhas);
            }
        }

        tata = "<div class='icoDescTA'></div> <div class='txtDescTA'>   Vá para o andar T </div>";

        $("#distanciaBox").html("Distância aprox.: " + dist + "m");
        console.log("add to map layer rota")
        layerAndar.addTo(layerLinhas);
        layerLinhas.addTo(layerRota);
        layerRota.addTo(map);


    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Funções dependentes do addRota

function initLayer(layerf) {
    if (layerf == null) {
        layerf = L.featureGroup();
    } else {
        map.removeLayer(layerf);
        layerf = null;
        layerf = L.featureGroup();
    }
    return layerf;
}


//////////////////////////////////////////////////////////////////////////////////////////////////
//Função Limpar rota
function limparRota() {
    if (geojson) {
        map.removeLayer(geojson);
    };
    if (geojsonOrigem) {
        map.removeLayer(geojsonOrigem);
    };
    if (geojsonDestino) {
        map.removeLayer(geojsonDestino);
    };
    if (layerRota) {
        map.removeLayer(layerRota);
        layerRota.clearLayers();
        idOrigem = '';
        idDestino = '';
    };
    document.getElementById('buscaOrigemRota').value = '';
    document.getElementById('buscaDestinoRota').value = '';
};