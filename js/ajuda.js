var help=document.getElementById('ajuda');


function ajuda(){

document.getElementById('show-sidebar').click();

tutorial=introJs().setOptions({
  steps: [{
    title: 'Seja Bem-Vindo 👋',
    intro: 'Este tutorial mostrará as ferramentas e funções do UFPR CampusMap.<br><strong>CLIQUE EM PRÓXIMO PARA COMEÇAR</strong>!',
    position: 'right'
  },
  {
    title: '📏 Medidas',
    intro: 'Nesta função é possível medir áreas, perímetros e distâncias. Basta clicar sobre este botão e desenhar, no mapa, a linha ou polígono sobre a feição desejada.',
    element: document.getElementById('medidas'),
    position: 'right'

  },
  {
    title: '✏️ Desenho',
    intro: 'Através destas ferramentas é possível desenhar, sobre o mapa, geometrias de linha, polígono e ponto. Estas geometrias poderão ser salvas posteriormente.<br><br><img src="../img/gifs_tutorial/gif_desenhos.gif" width="261px" height="150px"></img>',
    element: document.querySelector('.leaflet-draw-toolbar'),
    position: 'right'
  },
  {
    title: '✂️Editar ou Apagar',
    intro: 'Estas ferramentas são um complemento das ferramentas de desenho. Elas permitem editar ou apagar alguma geometria.<br><br><img src="../img/gifs_tutorial/gif_editar.gif" width="260px" height="135px"></img>',
    element: document.getElementsByClassName('leaflet-draw-toolbar leaflet-bar')[1],
    position: 'right'
  },
  {
    title: '💾 Salvar',
    intro: 'Após a sua geometria estar desenhada e finalizada é possível exportá-las nos formatos KML, GeoJSON e GPX.',
    element: document.getElementById('export'),
    position: 'right'  
},
  {
    title: '🔝 Importar',
    intro: 'Utilize esta função para importar geometrias salvas em formatos KML ou GeoJSON. Você pode arrastar o arquivo sobre o mapa. Edite a geometria usando as ferramentas de edição.<br><br><img src="../img/gifs_tutorial/gif_importacao2.gif" width="260px" height="150px"></img>',
    element: document.getElementById('import'),
    position: 'right'  
  },
  {
    title: '🌎Localização em Tempo Real',
    intro: 'Você pode ver sua localização em tempo real e enquanto caminha.',
    element: document.getElementById('geol'),
    position: 'left'
  },
  {
    title: '🖨 Salvar Mapa',
    intro: 'Imprima e/ou salve em PDF a região do mapa visível em sua tela usando esta ferramenta!',
    element: document.querySelector('.leaflet-control-easyPrint'),
    position: 'left'
  },
  {
    title: '🔍 Buscas',
    intro: 'Na ferramenta de buscas é possível buscar uma sala por sua sigla, nome, ambiente, etc.<br>Você poderá compartilhar a localização e as informações da sala através do link gerado.<br><br><img src="../img/gifs_tutorial/gif_buscas.gif" width="240px" height="98px"></img>',
    element: document.getElementById('clickbuscas'),
    position: 'right'
  },
  {
    title: '🏛 Campus',
    intro: 'Navegue pelos Campus da UFPR que foram mapeados até agora.<br><br><img src="../img/gifs_tutorial/gif_campus.gif" width="240px" height="252px"></img>',
    element: document.getElementById('clickcampus'),
    position: 'right'
  },
  {
    title: '🗺️Camadas',
    intro: 'Alterne as diferentes camadas de visualização.<br> Veja as ortofotos, as salas de cada edifício e os ambientes 3D de alguns prédios.<br><br><img src="../img/gifs_tutorial/gif_camadas.gif" width="240px" height="189px"></img>',
    element: document.getElementById('clickcamadas'),
    position: 'right'
  },
  {
    title: '📡Rede Topográfica',
    intro: 'Visualize os pontos materializados que compõem a Rede Topográfica da UFPR. Faça download das monografias clicando sobre os pontos.<br><br><img src="../img/gifs_tutorial/gif_redetopo2.gif" width="260px" height="159px">',
    element: document.getElementById('clickredetopo'),
    position: 'right'
  },
  {
    title: '📃 Relatórios',
    intro: 'Consulte as informações de ambientes internos através do Setor, Departamento e/ou o tipo de ambiente. Gere uma tabela com todas as informações, classifique os andares e habilite ou desabilite a visualização de andares específicos.<br><br><img src="../img/gifs_tutorial/gif_relatorios.gif" width="240px" height="170px"></img>',
    element: document.getElementById('clickrelatorios'),
    position: 'right'
  },
  {
    title: '⬇️ Downloads',
    intro: 'Faça download dos mapas de localização dos Campus, monografia e dados de rastreio da <a href="https://campusmap.ufpr.br/brcg/" target="_blank">Base GNSS</a> e as especificações técnicas.',
    element: document.getElementById('clickdownloads'),
    position: 'right'
  },
  {
    title: '✖️ Extra',
    intro: 'Visualize os indicadores de Energia Elétrica mapeados para o projeto <a href="https://energi.eletrica.ufpr.br/sobre" target="_blank">Energi</a>',
    element: document.getElementById('clickextra'),
    position: 'right'
  },
  {
    title: 'Pronto  🥳',
    intro: 'Agora você está pronto para começar a usar o UFPR CampusMap :)<br><br>Caso tenha alguma duvida entre em contato com a Equipe do <a href="https://cepag.ufpr.br/#contato" target="_blank">CEPAG</a>',
    position: 'right'
  }
]
});



tutorial.setOption('nextLabel', 'Próximo');
tutorial.setOption('prevLabel', 'Voltar');
tutorial.setOption('doneLabel', 'Fim');

tutorial.start();
}

help.onclick = ajuda;



//TUTORIAL ESPECÍFICO PARA INDOOR
var tutorial_indoor=introJs().setOptions({
  steps: [{
    title: 'Salas 👨‍🏫',
    intro: 'Nesta função você pode ver as salas dos edíficios por andar. Clicando sobre uma sala é possível ver informações mais detalhadas das salas.',
    position: 'right'
  },
  {
    title: 'Andares 🏬',
    intro: 'Use estes botões para trocar o andar que está sendo visualizado. O número no quadrado branco indica o número do andar.',
    element: document.getElementById('trocaAndar'),
    position: 'right'

  }]});

tutorial_indoor.setOption('nextLabel', 'Próximo');
tutorial_indoor.setOption('prevLabel', 'Voltar');
tutorial_indoor.setOption('doneLabel', 'Fim');
tutorial_indoor.setOption("dontShowAgain",true);
tutorial_indoor.setOption("dontShowAgainLabel","Não mostrar de novo");


//TUTORIAL ESPECÍFICO PARA RELATÓRIOS
var tutorial_relatorios=introJs().setOptions({
  steps: [{
    title: 'Relatórios 📋',
    intro: 'Aqui você pode pesquisar pelos ambientes administrados por um Setor ou Departamento específico ou um ambiente específico de toda a UFPR.',
    position: 'right'
  },
  {
    title: 'Relatórios 📋',
    intro: 'Caso você digite somente um Setor ou Departamento verá todos os ambientes administrados por este Setor ou Departamento. Caso digite somente um tipo de ambiente (Ex: Laboratórios, Banheiros, Salas de Aula, etc.) você verá este ambiente específico de toda a UFPR. Você pode também pesquisar por um tipo de ambiente específico de um Setor ou Departamento específico.',
    position: 'right'
  },
  {
    title: 'Visualizar 🗺️',
    intro: 'Permite visualizar a busca feita. Também é possível classificar os andares com cores diferentes e desligar/ligar a visualização de um andar específico.',
    element: document.getElementById('view'),
    position: 'right'
  },
  {
    title: 'Tabela 📈',
    intro: 'Gera uma tabela com informações de Setor, Departamento, Andar, Ambiente e Área da consulta feita. Caso a visualização esteja ligada também é possível ver uma sala específica.',
    element: document.getElementById('open'),
    position: 'right'
  },
  {
    title: 'Limpar ❌',
    intro: 'Limpa do mapa a visualização dos ambientes. ',
    element: document.getElementById('clean'),
    position: 'right'
  },
  {
    title: 'Configurações ⚙️',
    intro: 'Caso você tenha fechado o painel de configuração que abre ao visualizar você pode abrir novamente clicando neste botão.',
    element: document.getElementById('configuracoes'),
    position: 'right'
  }]});

tutorial_relatorios.setOption('nextLabel', 'Próximo');
tutorial_relatorios.setOption('prevLabel', 'Voltar');
tutorial_relatorios.setOption('doneLabel', 'Fim');
tutorial_relatorios.setOption("dontShowAgain",true);
tutorial_relatorios.setOption("dontShowAgainLabel","Não mostrar de novo");

document.getElementById('clickrelatorios').addEventListener('click',function(){
  var submenurelat = document.getElementById('submenu-relatorios');
  if(submenurelat.style.display=='none' || submenurelat.style.display==""){
           tutorial_relatorios.start()
}
});


//tutorial.onchange(function(targetElement) {
  //  if(this._currentStep == 1){
        
     //   overlay = document.getElementsByClassName("introjs-fixedTooltip");
     //   for(i=0; i<overlay.length; i++) {
     //       overlay[i].style.width = String(document.getElementById('buscas').clientWidth)+'px';
      //      overlay[i].style.height = String(document.getElementById('buscas').clientHeight)+'px';
     //       overlay[i].style.position = 'fixed';
            //Set css properties like this.
     //   }
   // }
    //if(this._currentStep == 2){
        
        //overlay = document.getElementsByClassName("introjs-fixedTooltip");
       // for(i=0; i<overlay.length; i++) {
      //      overlay[i].style.width = String(document.getElementById('campus').clientWidth)+'px';
     //       overlay[i].style.height = String(document.getElementById('campus').clientHeight)+'px';
    //        overlay[i].style.position = 'fixed';
            //Set css properties like this.
  //      }
 //   }
//    if(this._currentStep == 3){
        
      //  overlay = document.getElementsByClassName("introjs-fixedTooltip");
       // for(i=0; i<overlay.length; i++) {
          //  overlay[i].style.width = String(document.getElementById('rotas').clientWidth)+'px';
        //    overlay[i].style.height = String(document.getElementById('rotas').clientHeight)+'px';
        //    overlay[i].style.position = 'fixed';
            //Set css properties like this.
     //   }
    //}
   // if(this._currentStep == 4){
        
     //   overlay = document.getElementsByClassName("introjs-fixedTooltip");
     //   for(i=0; i<overlay.length; i++) {
   //         overlay[i].style.width = String(document.getElementById('camadas').clientWidth)+'px';
     //       overlay[i].style.height = String(document.getElementById('camadas').clientHeight)+'px';
     //       overlay[i].style.position = 'fixed';
            //Set css properties like this.
     //   }
    //}
    //if(this._currentStep == 5){
        
       // overlay = document.getElementsByClassName("introjs-fixedTooltip");
       // for(i=0; i<overlay.length; i++) {
          //  overlay[i].style.width = String(document.getElementById('relatorios').clientWidth)+'px';
         //   overlay[i].style.height = String(document.getElementById('relatorios').clientHeight)+'px';
        //    overlay[i].style.position = 'fixed';
            //Set css properties like this.
      //  }
    //}
    //if(this._currentStep == 6){
        
        //overlay = document.getElementsByClassName("introjs-fixedTooltip");
       // for(i=0; i<overlay.length; i++) {
          //  overlay[i].style.width = String(document.getElementById('downloads').clientWidth)+'px';
         //   overlay[i].style.height = String(document.getElementById('downloads').clientHeight)+'px';
        //    overlay[i].style.position = 'fixed';
            //Set css properties like this.
      //  }
    //}
    //if(this._currentStep == 7){
        
        //overlay = document.getElementsByClassName("introjs-fixedTooltip");
        //for(i=0; i<overlay.length; i++) {
          //  overlay[i].style.width = String(document.getElementById('extra').clientWidth)+'px';
        //    overlay[i].style.height = String(document.getElementById('extra').clientHeight)+'px';
      //      overlay[i].style.position = 'fixed';
            //Set css properties like this.
    //    }
  //  }
//});

