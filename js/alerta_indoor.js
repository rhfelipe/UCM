function alerta_indoor(feature){


infos = new Object()

infos.tabela = feature.id.split('.')[0];
infos.id = feature.id.split('.')[1];
infos.key = feature.properties.key;
infos.geom = JSON.stringify(feature.geometry);
infos.andar = feature.properties.andar;
infos.cod_local = feature.properties.cod_local;
infos.data = new Date().toLocaleDateString();

}

var info_alerta = document.getElementById('formulario_indoor');

info_alerta.addEventListener('click', function(){

    var setor_div = document.getElementById('setor');
    var departamento_div = document.getElementById('departamento');
    var setor_json = JSON.parse(setor_div.value);
    var departamento_json = JSON.parse(departamento_div.value);

    infos.setor = setor_json.setor;
    infos.departamen = departamento_json.departamento;

	infos.tipo_amb = document.getElementById('tipo_amb').value;
	infos.cod_amb = document.getElementById('cod_amb').value;
    infos.ambiente = document.getElementById('ambiente').value;
    infos.sub_tipo_amb = document.getElementById('sub_tipo_amb').value;
    infos.comentarios = document.getElementById('comentarios').value;

    var dados =JSON.stringify(infos);


    $.ajax({
    url: 'alerta_indoor.php',
    type: 'POST',
    data: {data: dados},
    success: function(result){
        console.log(result);
       document.getElementById('formulario_close').click();

       alert('Suas informações foram registradas! Agradecemos a sua ajuda.')
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log('A conexão falhou');
    }
});
})