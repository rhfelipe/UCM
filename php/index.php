<?php
//  session_start();
    ini_set('include_path', '/dados/site/www/usuarios');
    include_once "../../../usuarios/config/core.php";

?>
<!DOCTYPE html>
<html lang="pt-br">
<!-- Cabeçalho Geral -->
<head>

    <?php include ('head.php'); ?>

    
<!-- Google tag (gtag.js) -->
<!-- script async src="https://www.googletagmanager.com/gtag/js?id=G-ZQVNBVLXRC"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ZQVNBVLXRC');
</script -->
</head>

<body>
    <div id="preloader"></div>
    <!-- page-wrapper -->
    <div class="page-wrapper toggled chiller-theme">
        <!-- Icone quando toogled-->
        <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
            <i class="fas fa-bars"></i>
        </a>
        <!-- Barra Lateral -->
        <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <!-- Titulo Barra Lateral -->
                <div class="sidebar-brand">
                    <a style="font-family:Gilroy-ExtraBold; font-size:18px;" href="#">UFPR CAMPUSMAP</a>
                    <div id="close-sidebar">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
                <!-- Verificação de usuário -->
                <?php include ('status_user.php'); ?>

                <!-- sidebar-header  -->
                <div class="sidebar-menu">
                                       <ul>
                        <!-- Menu Buscas -->
                        <li class="sidebar-dropdown" id='div_buscas'>
                            <a href="#" id='clickbuscas'>
                                <i class="fa fa-search"></i>
                                <span>Buscas</span>
                            </a>
                            <!-- Submenu Buscas -->
                            <div class="sidebar-submenu">
                                <div class="sidebar-search">
                                    <div class="input-group">
                                        <!-- Caixa de texto Edificio -->
                                        <input type="text" class="form-control search-menu col-sm-12"
                                            placeholder="Ex: CT-17" id="busca-teste">
                                        <div class="input-group-append">
                                            <span class="input-group-text" id="apagarBusca">
                                                <i class="fa fa-times" aria-hidden="true"></i>
                                            </span>
                                            <span class="input-group-text" id="buscas">
                                                <i class="fa fa-search" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="sidebar-search">
                                    <!-- Caixa de texto Ambiente -->
                                    <!-- div class="input-group">
                                            <input type="text" class="form-control search-menu col-sm-12" placeholder="Ambiente..." id="pesquisaPrincipalAmbiente">
                                            <div class="input-group-append">
                                                <span class="input-group-text" id="apagarBuscaPrincipalAmbiente">
                <i class="fa fa-times" aria-hidden="true"></i>
            </span>
                                                <span class="input-group-text" id="buscaPrincipalAmbiente">
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
                                            </div>
                                        </div -->
                                </div>
                            </div>
                            <!-- Fim Submenu Buscas -->
                        </li>
                        <!-- Fim Menu Busca -->
                    </ul>
                </div>
                <!-- Fim sidebar-header -->
<!-- -->
                <!-- sidebar-menu -->
                <div class="sidebar-menu">
                    <ul>
                        <!-- Titulo Menu Geral-->
                        <li class="header-menu">
                            <span>Geral</span>
                        </li>

                        <!-- Menu Campus -->
                        <li class="sidebar-dropdown" id='div_campus'>
                            <a href="#" id='clickcampus'>
                                <i class="fas fa-university"></i>
                                <span>Campus</span><!-- span class="badge badge-pill badge-info">4</span -->
                            </a>
                            <div class="sidebar-submenu">
                                <div class="container pt-3 pb-1">
                                    <form>
                                        <!-- div class="form-group">
                                                <select class="custom-select custom-select-sm" data-size="2" id="selecionaRegiao">
                    <option selected value="0">Escolha a região: </option>
                    <option value="1">Curitiba</option>
                    <option value="2">Litoral</option>
                    <option value="3">Norte</option>
                      <option value="4">Sul</option>
                   </select>
                                            </div -->
                                        <div class="form-group">
                                            <select class="custom-select custom-select-sm" data-size="2"
                                                id='campusCuritiba'>
                                                <option selected>Escolha o Campus: </option>
                                                <option value="6">Batel</option>
                                                <option value="1">Cabral</option>
                                                <option value="12">Centro de Estudos do Mar</option>
                                                <option value="2">Centro Politécnico</option>
                                                <option value="5">Fazenda Canguiri</option>
                                                <option value="9">Fazenda Palotina</option>
                                                <option value="3">Jardim Botânico</option>
                                                <option value="4">Juvevê</option>
                                                <option value="7">Palotina</option>
                                                <option value="8">Maripa</option>
                                                <option value="10">Matinhos</option>
                                                <option value="11">Mirassol</option>
                                                <option value="13">Museu de Arqueologia e Etnologia</option>
                                                <option value="14">Reitoria</option>
                                                <option value="15">Santos Andrade</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <select class="custom-select custom-select-sm" data-size="2"
                                                id='campusLitoral' style="display: none">
                                                <option selected>Escolha o Campus: </option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <select class="custom-select custom-select-sm" data-size="2"
                                                id='campusNorte' style="display: none">
                                                <option selected>Escolha o Campus: </option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <select class="custom-select custom-select-sm" data-size="2" id='campusSul'
                                                style="display: none">
                                                <option selected>Escolha o Campus: </option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </li>
                        <!-- Fim Menu Campus-->
                        
<!--ROTAS EM FASE BETA
                         Menu Rotas 
                        <li class="sidebar-dropdown">
                            <a href="#" id='clickrotas'>
                                <i class="fa fa-road"></i>
                                <span>Rotas</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>
                                     Pesquisa Origem 
                                    <div class="sidebar-search">
                                        <div>
                                            <div class="input-group">
                                                <input type="text" class="form-control search-menu col-sm-12"
                                                    placeholder="Origem ..." id="buscaOrigemRota">
                                                <div class="input-group-append">
                                                    <span class="input-group-text" id="apagarBuscaOrigem">
                                                        <i class="fa fa-times" aria-hidden="true"></i>
                                                    </span>
                                                    <span class="input-group-text">
                                                        <i class="fa fa-search" aria-hidden="true"
                                                            onclick="buscarOrigem();"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                     Pesquisa Destino 
                                    <div class="sidebar-search">
                                        <div>
                                            <div class="input-group">
                                                <input type="text" class="form-control search-menu"
                                                    placeholder="Destino ..." id='buscaDestinoRota'>
                                                <div class="input-group-append">
                                                    <span class="input-group-text" id="apagarBuscaDestino">
                                                        <i class="fa fa-times" aria-hidden="true"></i>
                                                    </span>
                                                    <span class="input-group-text">
                                                        <i class="fa fa-search" aria-hidden="true"
                                                            onclick="buscarDestino();"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    Botão Pesquisar Rotas 
                                    <div class="container">
                                        <button type="button" class="btn btn-dark btn-sm" id="btnLimparRota">Limpar
                                            Rota</button>
                                         Botão Limpar Rotas 
                                        <button type="button" class="btn btn-light btn-sm" id="btnBuscarRota">Buscar
                                            Rota</button>
                                    </div>
                                </ul>
                            </div>
                        </li>
                         Fim Menu Rotas -->

                        <!-- Menu Camadas -->
                        <li class="sidebar-dropdown">
                            <a href="#" id='clickcamadas'>
                                <i class="fa fa-globe"></i>
                                <span>Camadas</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>

                                    <li id="mapasOutdoor">
                                        <a href="#">CAMPUS<span id="mapasOutdoorClose"
                                                class="badge badge-pill badge-danger">X</span></a>
                                    </li>
                                    <li id="mapasIndoor">
                                        <a href="#">SALAS<span id="mapasIndoorClose" style="display: none;"
                                                class="badge badge-pill badge-danger">X</span></a>
                                    </li>
                                    <li id="mapasOrtofoto">
                                        <a href="#">Ortoimagem RGB - CEPAG<span id="mapasOrtofotoClose" style="display: none;"
                                                class="badge badge-pill badge-danger">X</span></a>
                                    </li>
                                    <li id="mapasOrtoRGB">
                                        <a href="#">Ortoimagem RGB - Esteio 2019<span id="mapasOrtoRGBClose" style="display: none;"
                                                class="badge badge-pill badge-danger">X</span></a>
                                    </li>
                                    <li id="mapasOrtoCIR">
                                        <a href="#">Ortoimagem CIR - Esteio 2019<span id="mapasOrtoCIRClose" style="display: none;"
                                                class="badge badge-pill badge-danger">X</span></a>
                                    </li>
                                    <li id="mapas3d">
                                        <a href="#">AMBIENTES 3D<span id="mapas3dClose" style="display: none;"
                                                class="badge badge-pill badge-danger">X</span></a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <!-- Fim Menu Camadas -->
                        
                        <!-- Menu Camadas -->
                        <li class="sidebar-dropdown">
                            <a href="#" id='clickredetopo'>
                                <i class="fa fa-satellite"></i>
                                <span>Rede Topográfica</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>
                                    <li class="container pt-3 pb-1">
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <input type="checkbox"
                                                        aria-label="Checkbox for following text input" id="checkRedeVT">
                                                </div>
                                            </div>
                                            <select class="custom-select" id="inputGroupRedeVT"
                                                onchange="redetopografica()">
                                                <option value="0" selected>Escolha a campanha...</option>
                                                <option value="redeTopografica2016">Campanhas anteriores</option>
                                                <option value="redeTopografica2021">Campanha 2021</option>
                                            </select>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        <!-- Fim Menu Camadas -->


                         <!-- sidebar-menu -->
                            <!-- Menu Consulta Indoor -->
                            <li class="sidebar-dropdown" id='relatorios'>
                                <a href="#" id='clickrelatorios'>
                                    <i class="fa fa-book"></i>
                                    <span>Relatórios</span><!-- span class="badge badge-pill badge-info">4</span -->
                                </a>
                                <div class="sidebar-submenu" style='overflow: hidden' id='submenu-relatorios'>
                                    <div class="container pt-3 pb-1">
                                        <form>
                                            <!-- div class="form-group">
                                                <select class="custom-select custom-select-sm" data-size="2" id="selecionaRegiao">
                    <option selected value="0">Escolha a região: </option>
                    <option value="1">Curitiba</option>
                    <option value="2">Litoral</option>
                    <option value="3">Norte</option>
                      <option value="4">Sul</option>
                   </select>
                                            </div -->
                                   <div class="form-group">
                                                <div class="sidebar-search">
                                            <div>
                                                <div class="input-group">
                                                    <input type="text" class="form-control search-menu col-sm-12" placeholder="Setor ou Departamento" id="buscaSetDept">
                                                    <div class="input-group-append">
                                                <span class="input-group-text" id="apagarBuscaSetDept">
                                                         <i class="fa fa-times" aria-hidden="true"></i>
                                                </span>
                                            </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                               <div class="form-group">
                                                 <div class="sidebar-search">
                                            <div>
                                                <div class="input-group">
                                                    <input type="text" class="form-control search-menu col-sm-12" placeholder="Ambiente" id="buscaAmb">
                                                    <div class="input-group-append">
                                                <span class="input-group-text" id="apagarBuscaAmb">
                                                         <i class="fa fa-times" aria-hidden="true"></i>
                                                </span>
                                            </div>
                                                </div>
                                            </div>
                                        </div>
            </div>
            
        </div>
           </form>
           <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" style="padding-bottom:8px;">
              <button type="button" class="btn btn-secondary" id="view" style="border-radius:12px; margin-left: 10px; background-color:#4157a3; border:0px;">Visualizar</button>

              <button type="button" class="btn btn-secondary" id="open" style="border-radius:12px; margin-left: 5px; background-color:#4157a3; border:0px;">&nbspTabela&nbsp</button>

              <button type="button" class="btn btn-secondary"  id="clean" title='Limpar visualização' style="border-radius:12px; margin-left: 5px; background-color:#4157a3; border:0px;"><i class="material-icons">&#xe53c;</i></button>

              <button type="button" class="btn btn-secondary"  id="configuracoes" title='Configurações' style="border-radius:12px; margin-left: 5px; background-color:#4157a3; border:0px;"><i class='fas fa-cog'></i></button>
           </div>
       </li>

                         <!-- Menu Downloads -->
                            <li class="sidebar-dropdown" id='downloads'>
                                <a href="#" id='clickdownloads'>
                                    <i class="fa fa-folder"></i>
                                    <span>Downloads</span>
                                </a>
                                <div class="sidebar-submenu">
                                    <ul>
                                        <li id="especificacaotecnica">
                                            <a href="https://campusmap.ufpr.br/doc/UFPRCampusMap_ET_ProdutosCartograficos.pdf" target="_blank">Especificações Técnicas (PDF)</a>
                                        </li>
                                        <li id="plantaspdf">
                                            <a data-toggle="modal" href="#modal_plantapdf_alert">Mapas de localização (PDF) </a>
                                        </li>
                                        <li id="basegnss">
                                            <a onClick="abreGNSS();" href="#">Dados da Base GNSS (RINEX)</a> 
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <!-- Fim Menu Donwloads -->

                        <!-- Fim Menu Aplicações -->
                        <!-- Menu Extra -->
                        <li class="sidebar-dropdown">
                            <a href="#" id='clickextra'>
                                <i class="fa fa-plus-circle"></i>
                                <span>Extra</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>
                                    <li id="indicadoresEletrica">
                                        <a href="#">Indicadores Energia Elétrica</a>
                                    </li>
                                    <li id="indicadoresEletricaClose" style="display: none;">
                                        <a href="#">Indicadores Energia Elétrica<span
                                                class="badge badge-pill badge-danger">X</span></a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <!-- Fim Menu Extra -->
                   </ul>
         <center><a class="navbar-brand" href="http://www.campusmap.ufpr.br/" target="blank">
                    <img  id="SimboloSideBar" src="../img/interface/Logo_Secundaria.png" alt="logo UCM"></a></center>
                </div>
                <!-- Fim do sidebar-menu -->
            </div>

            <!-- Rodape -->
            <div class="sidebar-footer">

                <a href="https://cepag.ufpr.br" target="blank">CEPAG</a>
                <a href="https://campusmap.ufpr.br" target="blank">UCM</a>

            </div>
            <!-- Fim do Rodape -->
        </nav>
        <!-- Fim da Barra Lateral-->

        <!-- sidebar-wrapper  -->
        <!-- Corpo da Página -->
        <main class="page-content">
            <!-- Navbar -->
            <?php include ('navbar.php'); ?>
            <!-- Fim do Navbar -->

            <!-- Mapa da Página -->
            <div>
                <div id="map" ondrop="drop_file(event);" ondragover="dragOverHandler(event);">
                    <!-- Caixa Troca Andar -->
                    <div id="trocaAndar" class="ucm-ta" style="display: none">
                        <button id="andarMenos" class="btn primary fa fa-minus"
                            style="float:left; color: white;"></button>
                        <input class="btn " style="width: 36px; height: 28px; float:left; background: white;"
                            type="text" id="inputAndar">
                        <button id="andarMais" class="btn primary fa fa-plus"
                            style="float:left; color: white;"></button>
                    </div>
                    <!-- Botão leaflet draw -->
                </div>
            </div>
            <!-- Fim do Mapa da Página -->
        </main>
        <!-- Fim do Corpo da Página -->
    </div>
    <!-- Fim do page-wrapper -->
    <!-- Legenda -->
    <div id='maplegend' class='maplegend'
        style='position: absolute; z-index:9998; border:2px solid grey; background-color:rgba(255, 255, 255, 0.8);
         border-radius:6px; padding: 10px; font-size:14px; right: 10px; bottom: 100px; display: none;'>
    <div class='legend-title'>Salas
    <button type="button" class="close" aria-label="Close">
  <span aria-hidden="true" onclick="fechalegenda();">&times;</span>
</button>
    </div>

    <div class='legend-scale'>
      <ul class='legend-labels'>
        <li><span style='background:#63C9F1;opacity:1.0;'></span>Banheiro</li>
        <li><span style='background:#F1E9E0;opacity:1.0;'></span>Circulaçao</li>
        <li><span style='background:#E1D3E9;opacity:1.0;'></span>Construção</li>
        <li><span style='background:#F7EF9C;opacity:1.0;'></span>Ensino</li>
        <li><span style='background:#F8BE8E;opacity:1.0;'></span>Instituto de Educação</li>
        <li><span style='background:#A2A4A3;opacity:1.0;'></span>Objetos</li>
        <li><span style='background:#6296D5;opacity:1.0;'></span>Sala de Professores</li>
        <li><span style='background:#A2A4A3;opacity:1.0;'></span>Transição de Nível</li>
        <li><span style='background:#66B48B;opacity:1.0;'></span>Uso Administrativo</li>
        <li><span style='background:#EA8993;opacity:1.0;'></span>Uso Comercial</li>
        <li><span style='background:#AE89C2;opacity:1.0;'></span>Uso Comum</li>
        <li><span style='background:#F3A4C6;opacity:1.0;'></span>Hospitalar</li>
        <li><span style='background:#D6D6D6;opacity:1.0;'></span>Vazio</li>
      </ul>
    </div>
    </div>
    <!-- Fim Legenda -->

    <!-- Legenda Outdoor -->
    <div id='maplegend2' class='maplegend2'
        style='position: absolute; z-index:9998; border:2px solid grey; background-color:rgba(255, 255, 255, 0.8);
         border-radius:6px; padding: 10px; font-size:14px; right: 10px; bottom: 100px; display: none;'>
    <div class='legend-title'>Base Cartográfica
    <button type="button" class="close" aria-label="Close">
  <span aria-hidden="true" onclick="fechalegenda2();">&times;</span>
</button>
    </div>

    <div class='legend-scale'>
      <ul class='legend-labels'>
        <li><span style='background:#AE9E9E;opacity:1.0;'></span>Deposito geral</li>
        <li><span style='background:#D36D6B;opacity:1.0;'></span>Elemento industrial</li>
        <li><span style='background:#fffcda;opacity:1.0;'></span>Estacionamento</li>
        <li><span style='background:#ffbebe;opacity:1.0;'></span>Edificação</li>
        <li><span style='background:#F0D60D;opacity:1.0;'></span>Subestação de Energia</li>
        <li><span style='background:#81F6FF;opacity:1.0;'></span>Hidrografia</li>
        <li><span style='background:#71C086;opacity:1.0;'></span>Vegetação</li>
         <!--
        <li><img src="/mapCopia/img/interface/Simbolo_Cor.png" style="width:40px; height:40px">Edificação</li>
        <li><img src="/mapCopia/img/interface/Simbolo_Cor.png" style="width:40px; height:40px">Construção</li>
        <li><img src="/mapCopia/img/interface/Simbolo_Cor.png" style="width:40px; height:40px">Arruamento</li>
        <li><img src="/mapCopia/img/interface/Simbolo_Cor.png" style="width:40px; height:40px">Passeio</li>
        <li><img src="/mapCopia/img/interface/Simbolo_Cor.png" style="width:40px; height:40px">Estacionamento</li>
        <li><img src="/mapCopia/img/interface/Simbolo_Cor.png" style="width:40px; height:40px">Hidrografia</li> --> 
      </ul>
    </div>
    </div>

    <!-- Fim Outdoor -->


    <!--Tabela-->
    <div id="tabela" class="maplegend ui-draggable ui-draggable-handle" style="position: absolute; z-index: 9998; border: 2px solid grey; background-color: rgba(255, 255, 255, 0.8); border-radius: 6px; padding: 10px; font-size: 14px; inset: 370px auto auto 650px; display: none;height: 690px;width: 660px;overflow: auto">
        <button type="button" class="close" aria-label="Close">
        <span aria-hidden="true" onclick="fechatabela();">&times;</span>
    </div>
    <!-- Fim Tabela -->

    <!--Salvar Geometria-->
    <div id="salvar_geom" class="maplegend ui-draggable ui-draggable-handle" style="position: absolute; z-index: 9998; border: 2px solid grey; background-color: rgba(255, 255, 255, 0.8); border-radius: 6px; padding: 10px; font-size: 14px; inset: 370px auto auto 650px; display: none;height: 210px;width: 250px;overflow: auto">
        <button type="button" class="close" aria-label="Close">
            <span aria-hidden="true" onclick="fechageom();">&times;</span>
        </button>
        <div>
         <label for="nome_arq">Nome do arquivo</label>
         <input type="text" id="nome_arq" style='width: 100%'>
        </div>
        <br>
         <select class="custom-select custom-select-sm" data-size="2" id='tipo_arq'>
            <option selected value=''>Escolha o tipo de arquivo: </option>
            <option value='kml'>KML</option>
            <option value='geojson'>GeoJSON</option>
            <option value='gpx'>GPX</option>
        </select>
        <br>
        <br>
        <button type="button" class="btn btn-primary" id="salvar_arq" disabled>Salvar</button>
    </div>
    <!-- Fim Salvar Geometria -->


<!--Configuração-->
    <div id="config" class="maplegend ui-draggable ui-draggable-handle" style="position: absolute; z-index: 9998; border: 2px solid grey; background-color: rgba(255, 255, 255, 0.8); border-radius: 6px; padding: 10px; inset: 370px auto auto 650px; display: none;height: 425px;width: 480px;">
        <div class="modal-body">
        <p>Selecione o estilo de classificação dos andares</p>
        <div>
                   
                   <div>
                        <input type="radio" id="cinza" value="cinza" name='cores' >
                        <svg width="120" height="15">
                            <rect fill="rgb(252,251,253)" width="15" height="15" x='0'></rect>
                            <rect fill="rgb(240,240,240)" width="15" height="15" x='15'></rect>
                            <rect fill="rgb(217,217,217)" width="15" height="15" x='30'></rect>
                            <rect fill="rgb(189,189,189)" width="15" height="15" x='45'></rect>
                            <rect fill="rgb(150,150,150)" width="15" height="15" x='60'></rect>
                            <rect fill="rgb(115,115,115)" width="15" height="15" x='75'></rect>
                            <rect fill="rgb(82,82,82)" width="15" height="15" x='90' y="0"></rect>
                            <rect fill="rgb(37,37,37)" width="15" height="15" x='105' y="0"></rect>
                        </svg>
                    </div>
                    <div>
                        <input type="radio" id="vermelho" value="vermelho" name='cores'>
                        <svg width="120" height="15">
                            <rect fill="rgb(255,245,240)" width="15" height="15" x='0'></rect>
                            <rect fill="rgb(254,224,210)" width="15" height="15" x='15'></rect>
                            <rect fill="rgb(252,187,161)" width="15" height="15" x='30'></rect>
                            <rect fill="rgb(252,146,114)" width="15" height="15" x='45'></rect>
                            <rect fill="rgb(251,106,74)" width="15" height="15" x='60'></rect>
                            <rect fill="rgb(239,59,44)" width="15" height="15" x='75'></rect>
                            <rect fill="rgb(203,24,29)" width="15" height="15" x='90' y="0"></rect>
                            <rect fill="rgb(153,0,13)" width="15" height="15" x='105' y="0"></rect>
                        </svg>
                    </div>
                     <div>
                        <input type="radio" id="qualitativo-1" value="qualitativo-1" name='cores'>
                        <svg width="120" height="15">
                            <rect fill="rgb(178,223,138)" width="15" height="15" x='0'></rect>
                            <rect fill="rgb(51,160,44)" width="15" height="15" x='15'></rect>
                            <rect fill="rgb(166,206,227)" width="15" height="15" x='30'></rect>
                            <rect fill="rgb(31,120,180)" width="15" height="15" x='45'></rect>
                            <rect fill="rgb(251,154,153)" width="15" height="15" x='60'></rect>
                            <rect fill="rgb(227,26,28)" width="15" height="15" x='75'></rect>
                            <rect fill="rgb(253,191,111)" width="15" height="15" x='90' y="0"></rect>
                            <rect fill="rgb(255,127,0)" width="15" height="15" x='105' y="0"></rect>
                        </svg>
                    </div>
                    <div>
                        <input type="radio" id="qualitativo-2" value="qualitativo-2" name='cores'>
                        <svg width="120" height="15">
                            <rect fill="rgb(141,211,199)" width="15" height="15" x='0'></rect>
                            <rect fill="rgb(255,255,179)" width="15" height="15" x='15'></rect>
                            <rect fill="rgb(190,186,218)" width="15" height="15" x='30'></rect>
                            <rect fill="rgb(251,128,114)" width="15" height="15" x='45'></rect>
                            <rect fill="rgb(128,177,211)" width="15" height="15" x='60'></rect>
                            <rect fill="rgb(253,180,98)" width="15" height="15" x='75'></rect>
                            <rect fill="rgb(179,222,105)" width="15" height="15" x='90' y="0"></rect>
                            <rect fill="rgb(252,205,229)" width="15" height="15" x='105' y="0"></rect>
                        </svg>
                    </div>
            </div>
          </div>
          <div class="modal-body">
            <p>Desabilite e habilite a visualização dos andares encontrados</p>
            <div style=" justify-content: center;flex-direction: column;" id='opcoes'>
                   
                   <div>
                        <input type="checkbox" id="andar_subsolo" value="Subsolo" >
                        <label for="andar_subsolo" id='sub_label' style="color: #A5AA99;-webkit-text-stroke-width: 0.1px;-webkit-text-stroke-color: #000000">Subsolo</label>
                        <input type="checkbox" id="andar_inferior" value="Inferior" >
                        <label for="andar_inferior" id='inf_label' style="color: #f1eef6;-webkit-text-stroke-width: 0.1px;-webkit-text-stroke-color: #000000">Inferior</label>
                    </div>
                    <div>
                        <input type="checkbox" id="andar_0" value="0">
                        <label for="andar_0" id='0_label' style="color: #d4b9da;-webkit-text-stroke-width: 0.1px;-webkit-text-stroke-color: #000000">Andar 0</label>
                        <input type="checkbox" id="andar_1" value="1">
                        <label for="andar_1" id='1_label' style="color: #c994c7;-webkit-text-stroke-width: 0.1px;-webkit-text-stroke-color: #000000">Andar 1</label>
                    </div>
                     <div>
                        <input type="checkbox" id="andar_2" value="2">
                        <label for="andar_2" id='2_label' style="color: #df65b0;-webkit-text-stroke-width: 0.1px;-webkit-text-stroke-color: #000000">Andar 2</label>
                        <input type="checkbox" id="andar_3" value="3">
                        <label for="andar_3" id='3_label' style="color: #e7298a;-webkit-text-stroke-width: 0.1px;-webkit-text-stroke-color: #000000">Andar 3</label>
                    </div>
                     <div>
                        <input type="checkbox" id="andar_4" value="4">
                        <label for="andar_4" id='4_label' style="color: #ce1256;-webkit-text-stroke-width: 0.1px;-webkit-text-stroke-color: #000000">Andar 4</label>
                        <input type="checkbox" id="andar_5" value="5">
                        <label for="andar_5" id='5_label' style="color: #91003f;-webkit-text-stroke-width: 0.1px;-webkit-text-stroke-color: #000000">Andar 5</label>
                    </div>
                    <!--<div class="custom-select custom-select-sm">
                        
                        <input type="checkbox" name="andar_0" value="0">
                        <label for="andar_0" style="color: #00BFFF">Andar 0</label>
                        <input type="checkbox" name="andar_1" value="1">
                        <label for="andar_1" style="color: #4682B4">Andar 1</label>
                    
                    </div>-->
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" id="cores_alteradas">OK</button>
        <button type="button" class="btn btn-secondary" style='background-color: red' onclick='fechaconfig()'>Fechar</button>
      </div>
    </div>
    <!-- Fim configuração -->

    <!-- Modal Login -->
    <?php include ('modal_download.php'); ?>

    <!-- requirements javascritp files -->
    <?php include ('requirements_js.php'); ?>


    

    <script>
        function abreModal() {
            $("#modal_download").modal({
            <?php  if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] == true) {
                $access_denied = false;
                ?>
                    show: false
            });
            $("#modal_download_alert").modal({ show: true });
            <?php } else { ?>
            show: true
        });
            <?php } ?>
            }
            
    </script>
    <script>
      function abreGNSS(){
       $("#modal_download").modal({
            <?php  if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] == true) {
                $access_denied = false;
                ?>
                    show: false
            });
            $("#modal_basegnss").modal({ show: true });
            <?php } else { ?>
            show: true
        });
            <?php } ?>
        }
        //var basegnss = document.getElementById('basegnss');
        //basegnss.onclick = abreGNSS;
            
        //$("#modal_alerta_instabilidade").modal({ show: true });
    </script>

     <!-- VISUALIZAR GEOMETRIA DE AMBIENTE VIA LINK -->
        <script>

<?php 
$actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$ps=parse_url($actual_link, PHP_URL_QUERY);
if ($ps[0]==null OR $ps[0]==""){
            $campus=0;
            $edif=0;
            $andar=0;
            $sala=0;
        } else {
         $campus = $_GET['camp']; 
         $edif = $_GET['edif'];
         $andar=$_GET['and'];
         $sala=$_GET['sala'];
        } 
    ?> 
                var filtro1 = <?=$campus?>;
                var filtro2 = <?=$edif?>;
                var filtro3 = <?=$andar?>;
                var filtro4 = <?=$sala?>;
                var url='get_geom_url.php?'+'campus='+filtro1+'&edif='+filtro2+'&andar='+filtro3+'&sala='+filtro4;
                if (filtro1!=0 && filtro2!=0 && filtro3!=0 && filtro4!=0){
                view_link(url); 
            }
</script>

</body>

</html>