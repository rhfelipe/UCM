/**
 * Preloader
 */

$(window).on('load', function () {
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }
    "use strict";
    let preloader = select('#preloader');

    if (preloader) {
        var delay = 1500;
        var time = setTimeout(function () { preloader.remove(); }, delay);

    }
    
});


//desabilita botão direito
document.addEventListener('contextmenu', event => event.preventDefault());
// Variaveis Globais
checkIndoorLayer = 0;
andarAtual = 0;
$("#inputAndar").val("0");
verificadorDownload = 0;


jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
                .parent()
                .hasClass("active")
        ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .parent()
                .removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .next(".sidebar-submenu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("active");
        }
    });

    $("#close-sidebar").click(function () {
        $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function () {
        $(".page-wrapper").addClass("toggled");
    });
});

$("#campusCuritiba").change(function () {
    muda_campus(document.getElementById("campusCuritiba").value);
    buscaIdCampus(parseInt(document.getElementById("campusCuritiba").value));
});

$("#btnBuscarRota").click(function () {
    buscarRota();
});
$("#btnLimparRota").click(function () {
    limparRota();
});

$("#andarMais").click(function () {
    controleAndar("++1");
    carregaMapaIndoor();
});
$("#andarMenos").click(function () {
    controleAndar("--1");
    carregaMapaIndoor();
});


/////////////////////////////////////////////////////////////
//botões download


$("#escala1000").click(function () {
    if (verificadorDownload == 0) {
        //scripts requeridos
        $.getScript("../data/geojson/requiredDownloads.min.js", function () {
            $.getScript("../data/geojson/dados_download_geojson.js", function () {
                map.addLayer(layer_campus_limite);
                abreModal();
                $("#escala1000").hide();
                $("#escala1000close").show();
                verificadorDownload += 1;
            });
        });
    } else {
        map.addLayer(layer_campus_limite);
        abreModal();
        $("#escala1000").hide();
        $("#escala1000close").show();
    }
});
$("#escala1000close").click(function () {
    map.removeLayer(layer_campus_limite);
    $("#escala1000close").hide();
    $("#escala1000").show();
});



$("#buscaPrincipalEdificacao").click(function () {
    buscaPrincipalEdificacao();
});
$("#buscaPrincipalAmbiente").click(function () {
    buscaPrincipalAmbiente();
});

$("#apagarBuscaPrincipalAmbiente").click(function () {
    document.getElementById("buscaPrincipalAmbiente").value = '';
});
$("#apagarBuscaPrincipalEdificacao").click(function () {
    document.getElementById("pesquisaPrincipalEdificacao").value = '';
});
$("#apagarBuscaOrigem").click(function () {
    document.getElementById("buscaOrigemRota").value = '';
});
$("#apagarBuscaDestino").click(function () {
    document.getElementById("buscaDestinoRota").value = '';
});


/////////////////////////////////////////////////////////////
//botões Camadas
//Outdoor
$("#mapasOutdoor").click(function () {
    if (map.hasLayer(ccja, ccjb, ccju, cccb, pfcg, ocpa, ocma, ofpa, lcem, lcma, lcmi,lmae,cccr,cccp)) {
        $("#mapasOutdoorClose").hide();
        map.removeLayer(ccja);
        map.removeLayer(ccjb);
        map.removeLayer(ccju);
        map.removeLayer(cccb);
        map.removeLayer(pfcg);
        map.removeLayer(ccba);
        map.removeLayer(ocpa);
        map.removeLayer(ocma);
        map.removeLayer(ofpa);
        map.removeLayer(lcem);
        map.removeLayer(lcma);
        map.removeLayer(lcmi);
        map.removeLayer(lmae);
        map.removeLayer(cccr);
        map.removeLayer(cccp);
    } else {
        $("#mapasOutdoorClose").show();
        map.addLayer(ccja);
        map.addLayer(ccjb);
        map.addLayer(ccju);
        map.addLayer(cccb);
        map.addLayer(pfcg);
        map.addLayer(ccba);
        map.addLayer(ocpa);
        map.addLayer(ocma);
        map.addLayer(ofpa);
        map.addLayer(lcem);
        map.addLayer(lcma);
        map.addLayer(lcmi);
        map.addLayer(lmae);
        map.addLayer(cccr);
        map.addLayer(cccp);
    }
});

//Ortofoto
$("#mapasOrtofoto").click(function () {
    if (map.hasLayer(ccjb_ccja_ortofoto, ccju_ortofoto, cccb_ortofoto, pfcg_ortofoto, ccba_ortofoto, ocpa_ortofoto, ofpa_ortofoto, ocma_ortofoto, lcem_ortofoto, lcma_ortofoto, lcmi_ortofoto,lmae_ortofoto)) {
        $("#mapasOrtofotoClose").hide();
        //map.removeLayer(ccja_ortofoto);
        map.removeLayer(ccjb_ccja_ortofoto);
        map.removeLayer(ccju_ortofoto);
        map.removeLayer(cccb_ortofoto);
        map.removeLayer(pfcg_ortofoto);
        map.removeLayer(ccba_ortofoto);
        map.removeLayer(ocpa_ortofoto);
        map.removeLayer(ofpa_ortofoto);
        map.removeLayer(ocma_ortofoto);
        map.removeLayer(lcem_ortofoto);
        map.removeLayer(lcma_ortofoto);
        map.removeLayer(lcmi_ortofoto);
        map.removeLayer(lmae_ortofoto);
    } else {
        $("#mapasOrtofotoClose").show();
        //map.addLayer(ccja_ortofoto);
        map.addLayer(ccjb_ccja_ortofoto);
        map.addLayer(ccju_ortofoto);
        map.addLayer(cccb_ortofoto);
        map.addLayer(pfcg_ortofoto);
        map.addLayer(ccba_ortofoto);
        map.addLayer(ocpa_ortofoto);
        map.addLayer(ofpa_ortofoto);
        map.addLayer(ocma_ortofoto);
        map.addLayer(lcem_ortofoto);
        map.addLayer(lcma_ortofoto);
        map.addLayer(lcmi_ortofoto);
        map.addLayer(lmae_ortofoto);
    }
});

$('#mapasOrtoRGB').click(function(){
    if (map.hasLayer(ccjb_ccja_ortoRGB, cccr_ortofoto, cccp_ortofoto)){
        $("#mapasOrtoRGBClose").hide()
        map.removeLayer(ccjb_ccja_ortoRGB);
        map.removeLayer(cccr_ortofoto);
        map.removeLayer(cccp_ortofoto);
    } else {
        $("#mapasOrtoRGBClose").show();
        map.addLayer(ccjb_ccja_ortoRGB);
        map.addLayer(cccr_ortofoto);
        map.addLayer(cccp_ortofoto);
    }
});
$('#mapasOrtoCIR').click(function(){
    if (map.hasLayer(ccjb_ccja_ortoCIR)){
        $("#mapasOrtoCIRClose").hide()
        map.removeLayer(ccjb_ccja_ortoCIR);
    } else {
        $("#mapasOrtoCIRClose").show();
        map.addLayer(ccjb_ccja_ortoCIR)
    }
});


//Indoor
$("#mapasIndoor").click(function () {
    if (checkIndoorLayer == 0) {
        $("#mapasIndoorClose").show();
        $("#trocaAndar").show();
        tutorial_indoor.start();
        carregaMapaIndoor();
        checkIndoorLayer = 1;
    } else {
        $("#mapasIndoorClose").hide();
        $("#trocaAndar").hide();
        limpaMapaIndoor();
        checkIndoorLayer = 0;
    }
});

//Rede Topográfica
function redetopografica() {

    var select = document.getElementById('inputGroupRedeVT').value;

    if (select == "redeTopografica2016") {
        if (verificadorDownload == 0) {
            $.getScript("../data/geojson/requiredDownloads.min.js", function () {
                $.getScript("../data/geojson/dados_download_geojson.js", function () {
                    $('#checkRedeVT').prop("checked", true);
                    map.addLayer(cluster_redeVT2016);
                    abreModal();
                });
                verificadorDownload += 1;
            });

        } else {
            if (map.hasLayer(cluster_redeVT2021)) {
                map.removeLayer(cluster_redeVT2021);
                $('#checkRedeVT').prop("checked", true);
                map.addLayer(cluster_redeVT2016);
            } else {
                $('#checkRedeVT').prop("checked", true);
                map.addLayer(cluster_redeVT2016);
            }
        }
    };

    if (select == "redeTopografica2021") {
        if (verificadorDownload == 0) {
            $.getScript("../data/geojson/requiredDownloads.min.js", function () {
                $.getScript("../data/geojson/dados_download_geojson.js", function () {
                    $('#checkRedeVT').prop("checked", true);
                    map.addLayer(cluster_redeVT2021);
                    abreModal();
                });
                verificadorDownload += 1;
            });

        } else {
            if (map.hasLayer(cluster_redeVT2016)) {
                map.removeLayer(cluster_redeVT2016);
                $('#checkRedeVT').prop("checked", true);
                map.addLayer(cluster_redeVT2021);
            } else {
                $('#checkRedeVT').prop("checked", true);
                map.addLayer(cluster_redeVT2021);

            }
        }
    };

    if (select == "0") {
        $('#checkRedeVT').prop("checked", false);
        if (map.hasLayer(cluster_redeVT2021)) {
            map.removeLayer(cluster_redeVT2021);
        };
        if (map.hasLayer(cluster_redeVT2016)) {
            map.removeLayer(cluster_redeVT2016);
        };
    }

};

$('#checkRedeVT').change(function () {
    if (document.getElementById('checkRedeVT').checked) {
        redetopografica();
    } else {
        $('#checkRedeVT').prop("checked", false);
        if (map.hasLayer(cluster_redeVT2021)) {
            map.removeLayer(cluster_redeVT2021);
        };
        if (map.hasLayer(cluster_redeVT2016)) {
            map.removeLayer(cluster_redeVT2016);
        };
    }
});

//Matterport 3D
$("#mapas3d").click(function () {
    if (map.hasLayer(matterport)) {
        $("#mapas3dClose").hide();
        map.removeLayer(matterport);
    } else {
        $("#mapas3dClose").show();
        map.addLayer(matterport);
        map.setView(matterportpoints[0].getLatLng(), 18);

        //var delay = 500;
        //setTimeout(function() { matterport.openPopup(); }, delay);   

    }
});

//Indicadores energia eletrica
var verificadorIndicador = 0;
var indicadores_ee;
$("#indicadoresEletrica").click(function () {
    if (verificadorIndicador == 0) {
        //scripts requeridos
        $.getScript("../data/indicadoresee/indicadores.js", function () {
            indicadores_ee = L.geoJSON(indicadores_ufpr, {
                onEachFeature: onEachFeatureIndicadores,
                style: styleIndicadores,
            });
            map.addLayer(indicadores_ee);
            $("#indicadoresEletrica").hide();
            $("#indicadoresEletricaClose").show();
            verificadorIndicador += 1;
        });
    } else {
        map.addLayer(indicadores_ee);
        $("#indicadoresEletrica").hide();
        $("#indicadoresEletricaClose").show();
    }
});
$("#indicadoresEletricaClose").click(function () {
    map.removeLayer(indicadores_ee);
    $("#indicadoresEletricaClose").hide();
    $("#indicadoresEletrica").show();
});

// faz o emcaminhamento para as plantas de forma correta
$("#plantapdfbutton").click(function () {
    var campus = document.getElementById("plantapdfoption").value;
    var formato = document.getElementById("plantapdfformat").value;

    function plantapdf(campus, formato) {
        if (campus != "0" && formato != 0) {
            document.getElementById("alertaplanta").style.display = 'none';
            window.open("https://campusmap.ufpr.br/basecartografica/plantas2021/" + campus.toUpperCase() + "-" + formato + ".pdf", '_blank');
        } else {
            if (campus == '0') {
                var alert = document.getElementById("alertaplanta");
                document.getElementById("alertaplanta").style.display = 'block';
                alert.innerHTML = "<span>Escolha um campus</span>";
            }
            if (formato == '0') {
                var alert = document.getElementById("alertaplanta");
                document.getElementById("alertaplanta").style.display = 'block';
                alert.innerHTML = "<span>Escolha um formato</span>";
            }
            if (campus == '0' && formato == '0') {
                var alert = document.getElementById("alertaplanta");
                document.getElementById("alertaplanta").style.display = 'block';
                alert.innerHTML = "<span>Escolha um Campus e um formato</span>";
            }

        }

    };
    plantapdf(campus, formato);
});

//muda as opcoes de plantas conforme o campus, deve ser verificada quais plantas disponiveis existem
function opcoesplantas() {
    function removeOptions(selectElement) {
        var i, L = selectElement.options.length - 1;
        for (i = L; i >= 0; i--) {
            selectElement.remove(i);
        }

        var opt = document.createElement('option');
        opt.value = "0";
        opt.innerHTML = "-- Selecione um Formato --";
        selectElement.appendChild(opt);
    };
    removeOptions(document.getElementById('plantapdfformat'));

    var campus = document.getElementById("plantapdfoption").value;

    switch (campus) {
        case '0':

            break
        case 'ccba':
            var select = document.getElementById('plantapdfformat');

            var lista = ['A4-paisagem', 'A1-orto-paisagem', 'A1-paisagem',];
            var tamanholista = lista.length;
            for (var i = 0; i < tamanholista; i++) {
                var opt = document.createElement('option');
                opt.value = lista[i];
                opt.innerHTML = lista[i];
                select.appendChild(opt);
            }
            break
        case 'cccb':
            var select = document.getElementById('plantapdfformat');
            var lista = ['A4-paisagem', 'A1-paisagem', 'A1-orto-paisagem',];
            var tamanholista = lista.length;
            for (var i = 0; i < tamanholista; i++) {
                var opt = document.createElement('option');
                opt.value = lista[i];
                opt.innerHTML = lista[i];
                select.appendChild(opt);
            }
            break
        case 'lcem':
            var select = document.getElementById('plantapdfformat');
            var lista = ['A4-retrato', 'A1-retrato', 'A1-orto-paisagem',];
            var tamanholista = lista.length;
            for (var i = 0; i < tamanholista; i++) {
                var opt = document.createElement('option');
                opt.value = lista[i];
                opt.innerHTML = lista[i];
                select.appendChild(opt);
            }
            break
        case 'ccja':
            var select = document.getElementById('plantapdfformat');
            var lista = ['A4-retrato', 'A0-retrato', 'A0-orto-retrato',];
            var tamanholista = lista.length;
            for (var i = 0; i < tamanholista; i++) {
                var opt = document.createElement('option');
                opt.value = lista[i];
                opt.innerHTML = lista[i];
                select.appendChild(opt);
            }
            break
        case 'pfcg':
            var select = document.getElementById('plantapdfformat');
            var lista = ['A4-paisagem',];
            var tamanholista = lista.length;
            for (var i = 0; i < tamanholista; i++) {
                var opt = document.createElement('option');
                opt.value = lista[i];
                opt.innerHTML = lista[i];
                select.appendChild(opt);
            }
            break
        case 'ofpa':
            var select = document.getElementById('plantapdfformat');
            var lista = ['A4-paisagem', 'A1-paisagem',];
            var tamanholista = lista.length;
            for (var i = 0; i < tamanholista; i++) {
                var opt = document.createElement('option');
                opt.value = lista[i];
                opt.innerHTML = lista[i];
                select.appendChild(opt);
            }
            break
        case 'ccjb':
            var select = document.getElementById('plantapdfformat');
            var lista = ['A4-paisagem', 'A0-orto-paisagem', 'A0-paisagem',];
            var tamanholista = lista.length;
            for (var i = 0; i < tamanholista; i++) {
                var opt = document.createElement('option');
                opt.value = lista[i];
                opt.innerHTML = lista[i];
                select.appendChild(opt);
            }
            break
        case 'ccju':
            var select = document.getElementById('plantapdfformat');
            var lista = ['A4-paisagem', 'A1-orto-paisagem',];
            var tamanholista = lista.length;
            for (var i = 0; i < tamanholista; i++) {
                var opt = document.createElement('option');
                opt.value = lista[i];
                opt.innerHTML = lista[i];
                select.appendChild(opt);
            }
            break
        case 'ocpa':
            var select = document.getElementById('plantapdfformat');
            var lista = ['A4-retrato', 'A0-retrato', 'A0-orto-retrato',];
            var tamanholista = lista.length;
            for (var i = 0; i < tamanholista; i++) {
                var opt = document.createElement('option');
                opt.value = lista[i];
                opt.innerHTML = lista[i];
                select.appendChild(opt);
            }
            break
        case 'ocma':
            var select = document.getElementById('plantapdfformat');
            var lista = ['A4-paisagem', 'A1-paisagem', 'A1-orto-paisagem',];
            var tamanholista = lista.length;
            for (var i = 0; i < tamanholista; i++) {
                var opt = document.createElement('option');
                opt.value = lista[i];
                opt.innerHTML = lista[i];
                select.appendChild(opt);
            }
            break
        case 'lcma':
            var select = document.getElementById('plantapdfformat');
            var lista = ['A4-retrato', 'A1-paisagem', 'A1-orto-paisagem',];
            var tamanholista = lista.length;
            for (var i = 0; i < tamanholista; i++) {
                var opt = document.createElement('option');
                opt.value = lista[i];
                opt.innerHTML = lista[i];
                select.appendChild(opt);
            }
            break
        case 'lcmi':
            var select = document.getElementById('plantapdfformat');
            var lista = ['A4-paisagem', 'A1-paisagem', 'A1-orto-paisagem',];
            var tamanholista = lista.length;
            for (var i = 0; i < tamanholista; i++) {
                var opt = document.createElement('option');
                opt.value = lista[i];
                opt.innerHTML = lista[i];
                select.appendChild(opt);
            }
            break
    }
};

$("#downloadMono").click(function () {
    var antena = document.getElementById("monografiaoption").value;
    function monografiapdf(antena) {
        if (antena == "Tallysman") {
            window.open("https://campusmap.ufpr.br/monografiasbrcg/Monografia_2022_BRCG-CEPAG_"+antena+".pdf",'_blank');
        }
        if (antena == "Leica") {
            window.open("https://campusmap.ufpr.br/monografiasbrcg/Monografia_2023_BRCG-CEPAG_"+antena+".pdf",'_blank');
        }
    };
    monografiapdf(antena);
});


//Legenda
$(function () {
    $('#maplegend').draggable({
        start: function (event, ui) {
            $(this).css({
                right: 'auto',
                top: 'auto',
                bottom: 'auto'
            });
        }
    });

});

//LEGENDA OUTDOOR 

$(function () {
    $('#maplegend2').draggable({
        start: function (event, ui) {
            $(this).css({
                right: 'auto',
                top: 'auto',
                bottom: 'auto'
            });
        }
    });

});

function fechalegenda() { 
    var x = document.getElementById('maplegend'); 
    x.style.display = 'none'; 
};

function fechalegenda2() { 
    var x = document.getElementById('maplegend2'); 
    x.style.display = 'none'; 
};

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

$(function () {
    $('#config').draggable({
        start: function (event, ui) {
            $(this).css({
                right: 'auto',
                top: 'auto',
                bottom: 'auto'
            });
        }
    });

});

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


function fechaconfig() {
    var cf = document.getElementById('config');
    cf.style.display='none';
}

function fechatabela() { 
    var tb = document.getElementById('tabela'); 
    tb.style.display = 'none'; 
};

function fechageom() {
    var gm = document.getElementById('salvar_geom');
    gm.style.display='none';
}