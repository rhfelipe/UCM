<!-- Modal Aviso para Realizar o Login -->
<div class="modal fade" tabindex="-1" role="dialog" id="modal_download">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">UFPR CampusMap - Aviso</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Para a realização de download, por favor registre-se no sistema.</p>
      </div>
      <div class="modal-footer">
        <!-- button type="button" class="btn btn-primary">Save changes</button -->
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal Aviso Como Realizar o Download -->
<div class="modal fade" tabindex="-1" role="dialog" id="modal_download_alert">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">UFPR CampusMap - Aviso</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Para realizar seu download, clique no mapa, no campus desejado, para exibir um pop-up com as opções de dados vetoriais e matriciais do campus.</p>
      </div>
      <div class="modal-footer">
        <!-- button type="button" class="btn btn-primary">Save changes</button -->
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal Aviso Download Plantas PDF A4-->
<div class="modal fade" tabindex="-1" role="dialog" id="modal_plantapdf_alert">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">UFPR CampusMap - Download</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Para realizar o download, clique no campus desejado e escolha o formato da planta.</p>
        <select class="form-control" id="plantapdfoption" onchange="opcoesplantas()">
                    <option value='0'>-- Selecione um Campus --</option>
                    <option value="ccba">Batel</option>
                    <option value="cccb">Cabral</option>
                    <option value="lcem">Centro de Estudos do Mar</option>
                    <option value="ccja">Centro Politécnico</option>
                    <option value="pfcg">Fazenda Canguiri</option>
                    <option value="ofpa">Fazenda Palotina</option>
                    <option value="ccjb">Jardim Botânico</option>
                    <option value="ccju">Juvevê</option>
                    <option value="ocpa">Palotina</option>
                    <option value="ocma">Maripa</option>
                    <option value="lcma">Matinhos</option>
                    <option value="lcmi">Mirassol</option>
        </select>
        <br>
        <select class="form-control" id="plantapdfformat">
            <option value='0'>-- Selecione um Formato --</option>
        </select>
        <br>
        <div class="alert alert-warning" role="alert" id="alertaplanta" style="display: none">
  
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" id="plantapdfbutton">OK</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal Dados Base GNSS-->
<div class="modal fade" tabindex="-1" role="dialog" id="modal_basegnss">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">UFPR CampusMap - <a target="_blank" href="https://campusmap.ufpr.br/brcg/">Base GNSS</a></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Selecione a data e hora (UTC) correspondente aos dados desejados.
        <input class='form-control' id="date" type="date" min='2022-03-29'></input>
        <select class="form-control" name="hora-utc" id="hour" style="margin-top: 4px;" disabled>
                 <option value="">Hora (UTC)</option>
                 <option value="24H" style='display: none'>Dados de 24 horas</option>
                 <option value="00" style='display: none'>00</option>
                 <option value="01" style='display: none'>01</option>
                 <option value="02" style='display: none'>02</option>
                 <option value="03" style='display: none'>03</option>
                 <option value="04" style='display: none'>04</option>
                 <option value="05" style='display: none'>05</option>
                 <option value="06" style='display: none'>06</option>
                 <option value="07" style='display: none'>07</option>
                 <option value="08" style='display: none'>08</option>
                 <option value="09" style='display: none'>09</option>
                 <option value="10" style='display: none'>10</option>
                 <option value="11" style='display: none'>11</option>
                 <option value="12" style='display: none'>12</option>
                 <option value="13" style='display: none'>13</option>
                 <option value="14" style='display: none'>14</option>
                 <option value="15" style='display: none'>15</option>
                 <option value="16" style='display: none'>16</option>
                 <option value="17" style='display: none'>17</option>
                 <option value="18" style='display: none'>18</option>
                 <option value="19" style='display: none'>19</option>
                 <option value="20" style='display: none'>20</option>
                 <option value="21" style='display: none'>21</option>
                 <option value="22" style='display: none'>22</option>
                 <option value="23" style='display: none'>23</option>
        </select>

	  <p id='Tallysman' style='display: none;color: blue'>Você está baixando dados da antena Tallysman</p>
        <p id='Leica' style='display: none;color: blue'>Você está baixando dados da antena Leica</p>
	<button type="button" class="btn btn-secondary btn-sm" id="gnssbutton">Download</button>
        <p id='loading' style='display: none;color: red'>Estamos montando seu arquivo. Isto pode levar alguns minutos, aguarde...</p>
        <div class="progress" id='progress' style='display: none;background-color: #007bff;text-align: center;font-family: Arial;color: #ffffff'><div class="progress-bar" id='barra' style='display: none'></div></div><br>
        <button type="button" class="btn btn-primary" id="cancelar_download" style='display: none;background-color: #FF0000'>Cancelar</button>
        </div>

<div class="modal-body">
	<p>Download da monografia da base GNSS (PDF).
	<select class="form-control" id="monografiaoption" onchange="opcoesmonografia()">
                    <option value='0'>-- Selecione uma monografia --</option>
                    <option value="Tallysman">Antena Tallysman</option>
                    <option value="Leica">Antena Leica</option>
        </select>
<br>
        <button type="button" class="btn btn-secondary btn-sm" id="downloadMono" >Download</button>
</div>

      <div class="modal-footer" style="justify-content:unset">
        <p>Problemas com os dados? Nos envie uma <a href='mailto:cepag@ufpr.br' target='_blank' title='cepag@ufpr.br'>mensagem</a>.</p>
        <button type="button" class="btn btn-secondary" data-dismiss="modal" style="margin-left:40px">Fechar</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal Configurações-->
<!-- div class="modal fade" tabindex="-1" role="dialog" id="modal_config_alert">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">UFPR CampusMap - Configurações</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
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
        <button type="button" class="btn btn-secondary" style='background-color: red' data-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div -->

<!-- Modal Alerta Indoor-->
<div class="modal fade" tabindex="-1" role="dialog" id="modal_indoor_alert">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">UFPR CampusMap - Sugestões</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Alguma informação sobre a sala mudou? Nos envie um formulário com as mudanças para fazermos as alterações</p>
        <div>
                   
                   <div>
                        <span>Tipo de Ambiente - Qual o tipo de ambiente a sala se encaixa melhor?<span>
                         <select class="custom-select custom-select-sm" id='tipo_amb'>
                           <option value="">Escolha o Tipo de Ambiente</option>
                            <option value="Uso Comum">Área de Uso Comum</option>
                            <option value="Banheiro">Banheiro</option>
                            <option value="Circulação">Circulação</option>
                            <option value="Construção">Construção</option>
                            <option value="Ensino">Ensino</option>
                            <option value="Instituto de Educação">Instituto de Educação</option>
                            <option value="Objetos">Objetos</option>
                            <option value="Sala de Professor">Sala de Professor</option>
                            <option value="Transição de Nível">Transição de Nível</option>
                            <option value="Uso Administrativo">Uso Administrativo</option>
                            <option value="Uso Comercial">Uso Comercial</option>
                        </select>
                    </div>
                    <div>
                        <span>Sub Tipo de Ambiente - A Sala se encaixa em algumas das opções abaixo?<span>
                         <select class="custom-select custom-select-sm" id='sub_tipo_amb'>
                            <option value="">Nenhum</option>
                            <option value="Auditório">Auditório</option>
                            <option value="Biblioteca">Biblioteca</option>
                            <option value="Diretório Acadêmico">Diretório Acadêmico</option>
                            <option value="Museu">Museu</option>
                            <option value="Compartilhado">Banheiro Compartilhado</option>
                            <option value="Feminino">Banheiro Feminino</option>
                            <option value="Masculino">Banheiro Masculino</option>
                            <option value="Sala de Estudo">Sala de Estudo</option>
                            <option value="Sala de Aula">Sala de Aula</option>
                            <option value="Laboratório">Laboratório</option>
                            <option value="Ensino">Ensino</option>
                            <option value="Elevador">Elevador</option>
                            <option value="Escada">Escada</option>
                            <option value="Rampa">Rampa</option>
                            <option value="Cantina/Lanchonete/Café">Cantina/Lanchonete/Café</option>
                            <option value="Correio">Correio</option>
                            <option value="Papelaria/Fotocópia">Papelaria/Fotocópia</option>
                            <option value="Restaurante">Restaurante</option>
                        </select>
                    </div>
                     <div>
                   <span>Setor</span>
                    <select class="custom-select custom-select-sm" data-size="2" id='setor'>
                    <option selected value=''>Escolha o Setor: </option>
                    <option value='{"setor": "Administrativo", "cod_setor": "17", "sigla_setor": "ADM"}'>Administrativo</option>
                    <option value='{"setor": "Campus Avançado Jandaia do Sul", "cod_setor": "12", "sigla_setor": "CJS"}'>Campus Avançado de Jandaia do Sul</option>
                    <option value='{"setor": "Privado", "cod_setor": "16", "sigla_setor": "P"}'>Privado</option>
                    <option value='{"setor": "Setor de Artes, Comunicação e Design", "cod_setor": "1", "sigla_setor": "SACOD"}'>Setor de Artes, Comunicação e Design</option>
                    <option value='{"setor": "Centro de Estudos do Mar", "cod_setor": "18", "sigla_setor": "SECM"}'>Setor Centro de Estudos do Mar</option>
                    <option value='{"setor": "Ciências Agrárias", "cod_setor": "2", "sigla_setor": "SCA"}'>Setor de Ciências Agrárias</option>
                    <option value='{"setor": "Ciências Biológicas", "cod_setor": "3", "sigla_setor": "SCB"}'>Setor de Ciências Biológicas</option>
                    <option value='{"setor": "Ciências Exatas", "cod_setor": "6", "sigla_setor": "SCE"}'>Setor de Ciências Exatas</option>
                    <option value='{"setor": "Ciências Humanas", "cod_setor": "7", "sigla_setor": "SCH"}'>Setor de Ciências Humanas</option>
                    <option value='{"setor": "Ciências Jurídicas", "cod_setor": "8", "sigla_setor": "SCJ"}'>Setor de Ciências Jurídicas</option>
                    <option value='{"setor": "Ciências da Saúdade", "cod_setor": "4", "sigla_setor": "SCS"}'>Setor de Ciências da Saúde</option>
                    <option value='{"setor": "Ciências Sociais Aplicadas", "cod_setor": "9", "sigla_setor": "SCSA"}'>Setor de Ciências Sociais Aplicadas</option>
                    <option value='{"setor": "Ciências da Terra", "cod_setor": "5", "sigla_setor": "SCT"}'>Setor de Ciências da Terra</option>
                    <option value='{"setor": "Educação", "cod_setor": "10", "sigla_setor": "SE"}'>Setor de Educação</option>
                    <option value='{"setor": "Educação Profissionale Tecnológica", "cod_setor": "11", "sigla_setor": "SEPT"}'>Setor de Educação Profissional e Tecnológica</option>
                    <option value='{"setor": "Setor Litoral", "cod_setor": "14", "sigla_setor": "SL"}'>Setor Litoral</option>
                    <option value='{"setor": "Setor Palotina", "cod_setor": "15", "sigla_setor": "SP"}'>Setor Palotina</option>
                    <option value='{"setor": "Tecnologia", "cod_setor": "13", "sigla_setor": "ST"}'>Setor de Tecnologia</option>
                </select>
              </div>

               <div>
                <span>Departamento</span>
                    <select class="custom-select custom-select-sm" data-size="2" id='departamento'>
                      <option selected value=''>Escolha o Departamento: </option>
<option value='{"cod_dep":"1_1","departamento":"Artes","sigla_dep":"DEARTES"}'>Artes</option>
<option value='{"cod_dep":"1_2","departamento":"Comunicação Social","sigla_dep":"DECOM"}'>Comunicação Social</option>
<option value='{"cod_dep":"1_3","departamento":"Design","sigla_dep":"?"}'>Design</option>
<option value='{"cod_dep":"2_4","departamento":"Ciencias Florestais","sigla_dep":"DECIF"}'>Ciencias Florestais</option>
<option value='{"cod_dep":"2_5","departamento":"Economia Rural e Extensão","sigla_dep":"DERE"}'>Economia Rural e Extensão</option>
<option value='{"cod_dep":"2_6","departamento":"Engenharia e Tecnologia Florestal","sigla_dep":"DEFT"}'>Engenharia e Tecnologia Florestal</option>
<option value='{"cod_dep":"2_7","departamento":"Fitotecnia e Fitossanitarismo","sigla_dep":"DFF"}'>Fitotecnia e Fitossanitarismo</option>
<option value='{"cod_dep":"2_8","departamento":"Medicina Veterinária","sigla_dep":"DMV"}'>Medicina Veterinária</option>
<option value='{"cod_dep":"2_9","departamento":"Solos e Engenharia Agrícola","sigla_dep":"DSEA"}'>Solos e Engenharia Agrícola</option>
<option value='{"cod_dep":"2_10","departamento":"Zootecnia","sigla_dep":"DZ"}'>Zootecnia</option>
<option value='{"cod_dep":"3_11","departamento":"Anatomia","sigla_dep":"DANAT"}'>Anatomia</option>
<option value='{"cod_dep":"3_12","departamento":"Biologia Celular","sigla_dep":"DBIOCEL"}'>Biologia Celular</option>
<option value='{"cod_dep":"3_13","departamento":"Bioquimica e Biologia Molecular","sigla_dep":"DBIOQ"}'>Bioquimica e Biologia Molecular</option>
<option value='{"cod_dep":"3_14","departamento":"Botânica","sigla_dep":"DBOT"}'>Botânica</option>
<option value='{"cod_dep":"3_15","departamento":"Educação Física","sigla_dep":"DEF"}'>Educação Física</option>
<option value='{"cod_dep":"3_16","departamento":"Farmacologia","sigla_dep":"DFAR"}'>Farmacologia</option>
<option value='{"cod_dep":"3_17","departamento":"Fisiologia ","sigla_dep":"DFISIO"}'>Fisiologia </option>
<option value='{"cod_dep":"3_18","departamento":"Genética","sigla_dep":"DGEN"}'>Genética</option>
<option value='{"cod_dep":"3_19","departamento":"Patologia Básica","sigla_dep":"DPAT"}'>Patologia Básica</option>
<option value='{"cod_dep":"3_20","departamento":"Prevenção e Reabilitação em Fisioterapia","sigla_dep":"DPRF"}'>Prevenção e Reabilitação em Fisioterapia</option>
<option value='{"cod_dep":"3_21","departamento":"Zoologia","sigla_dep":"DZOO"}'>Zoologia</option>
<option value='{"cod_dep":"4_22","departamento":"Análises Clínicas","sigla_dep":"DAC"}'>Análises Clínicas</option>
<option value='{"cod_dep":"4_23","departamento":"Anatomia","sigla_dep":"DANAT"}'>Anatomia</option>
<option value='{"cod_dep":"4_24","departamento":"Cirurgia","sigla_dep":"DCIR"}'>Cirurgia</option>
<option value='{"cod_dep":"4_25","departamento":"Clinica Médica","sigla_dep":"DCM"}'>Clinica Médica</option>
<option value='{"cod_dep":"4_26","departamento":"Enfermagem","sigla_dep":"DENFER"}'>Enfermagem</option>
<option value='{"cod_dep":"4_27","departamento":"Estomatologia","sigla_dep":"DESTO"}'>Estomatologia</option>
<option value='{"cod_dep":"4_28","departamento":"Farmácia","sigla_dep":"DFARM"}'>Farmácia</option>
<option value='{"cod_dep":"4_29","departamento":"Genética","sigla_dep":"DGEN"}'>Genética</option>
<option value='{"cod_dep":"4_30","departamento":"Medicina Integrada","sigla_dep":"DMI"}'>Medicina Integrada</option>
<option value='{"cod_dep":"4_31","departamento":"Medicina Forense e Psiquiatria ","sigla_dep":"DMFP"}'>Medicina Forense e Psiquiatria </option>
<option value='{"cod_dep":"4_32","departamento":"Nutrição","sigla_dep":"DNUT"}'>Nutrição</option>
<option value='{"cod_dep":"4_33","departamento":"Odontologia Restauradora","sigla_dep":"DOR"}'>Odontologia Restauradora</option>
<option value='{"cod_dep":"4_34","departamento":"Patologia Médica","sigla_dep":"DPAT"}'>Patologia Médica</option>
<option value='{"cod_dep":"4_35","departamento":"Pediatria","sigla_dep":"DPED"}'>Pediatria</option>
<option value='{"cod_dep":"4_36","departamento":"Saúde Coletiva","sigla_dep":"DSC"}'>Saúde Coletiva</option>
<option value='{"cod_dep":"4_37","departamento":"Tocoginecologia","sigla_dep":"DTG"}'>Tocoginecologia</option>
<option value='{"cod_dep":"4_38","departamento":"Oftalmo-otorrinolaringologia","sigla_dep":"DOFOT"}'>Oftalmo-otorrinolaringologia</option>
<option value='{"cod_dep":"4_39","departamento":"Terapia Ocupacional","sigla_dep":"DTO"}'>Terapia Ocupacional</option>
<option value='{"cod_dep":"5_40","departamento":"Geografia","sigla_dep":"DGEOG"}'>Geografia</option>
<option value='{"cod_dep":"5_41","departamento":"Geologia","sigla_dep":"DGEOL"}'>Geologia</option>
<option value='{"cod_dep":"5_42","departamento":"Geomática","sigla_dep":"DGEOM"}'>Geomática</option>
<option value='{"cod_dep":"5_43","departamento":"Centro de Estudos do Mar","sigla_dep":"CEM"}'>Centro de Estudos do Mar</option>
<option value='{"cod_dep":"6_44","departamento":"Estatística","sigla_dep":"DEST"}'>Estatística</option>
<option value='{"cod_dep":"6_45","departamento":"Expressão Gráfica","sigla_dep":"DEGRAF"}'>Expressão Gráfica</option>
<option value='{"cod_dep":"6_46","departamento":"Física","sigla_dep":"DFIS"}'>Física</option>
<option value='{"cod_dep":"6_47","departamento":"Informática","sigla_dep":"DINF"}'>Informática</option>
<option value='{"cod_dep":"6_48","departamento":"Matemática","sigla_dep":"DMAT"}'>Matemática</option>
<option value='{"cod_dep":"6_49","departamento":"Química","sigla_dep":"DQUI"}'>Química</option>
<option value='{"cod_dep":"7_50","departamento":"Antropologia","sigla_dep":"DEAN"}'>Antropologia</option>
<option value='{"cod_dep":"7_51","departamento":"Ciência Política","sigla_dep":"DECP"}'>Ciência Política</option>
<option value='{"cod_dep":"7_52","departamento":"Sociologia","sigla_dep":"DECISO"}'>Sociologia</option>
<option value='{"cod_dep":"7_53","departamento":"Filosofia","sigla_dep":"DEFI"}'>Filosofia</option>
<option value='{"cod_dep":"7_54","departamento":"História","sigla_dep":"DEHIS"}'>História</option>
<option value='{"cod_dep":"7_55","departamento":"Letras Libras","sigla_dep":"?"}'>Letras Libras</option>
<option value='{"cod_dep":"7_56","departamento":"Letras estrangeiras modernas","sigla_dep":"DELEM"}'>Letras estrangeiras modernas</option>
<option value='{"cod_dep":"7_57","departamento":"Literatura e Linguística","sigla_dep":"DELLIN"}'>Literatura e Linguística</option>
<option value='{"cod_dep":"7_58","departamento":"Polonês, Alemão e Letras Clássicas","sigla_dep":"DEPAC"}'>Polonês, Alemão e Letras Clássicas</option>
<option value='{"cod_dep":"7_59","departamento":"Psicologia","sigla_dep":"DEPSI"}'>Psicologia</option>
<option value='{"cod_dep":"7_60","departamento":"Turismo","sigla_dep":"DETUR"}'>Turismo</option>
<option value='{"cod_dep":"8_61","departamento":"Direito Civil e Processual Civil","sigla_dep":"?"}'>Direito Civil e Processual Civil</option>
<option value='{"cod_dep":"8_62","departamento":"Direito Penal e Processual Penal","sigla_dep":"?"}'>Direito Penal e Processual Penal</option>
<option value='{"cod_dep":"8_63","departamento":"Direito Privado","sigla_dep":"?"}'>Direito Privado</option>
<option value='{"cod_dep":"8_64","departamento":"Direito Publico","sigla_dep":"?"}'>Direito Publico</option>
<option value='{"cod_dep":"9_65","departamento":"Administração Geral e Aplicada","sigla_dep":"DAGA"}'>Administração Geral e Aplicada</option>
<option value='{"cod_dep":"9_66","departamento":"Contabilidade","sigla_dep":"DECONT"}'>Contabilidade</option>
<option value='{"cod_dep":"9_67","departamento":"Economia","sigla_dep":"DEPECON"}'>Economia</option>
<option value='{"cod_dep":"9_68","departamento":"Ciência e Gestão da Informação","sigla_dep":"DECIGI"}'>Ciência e Gestão da Informação</option>
<option value='{"cod_dep":"10_69","departamento":"Teoria e Prática de Ensino","sigla_dep":"DTPEN"}'>Teoria e Prática de Ensino</option>
<option value='{"cod_dep":"10_70","departamento":"Teoria e Fundamentos da Educação","sigla_dep":"DTFE"}'>Teoria e Fundamentos da Educação</option>
<option value='{"cod_dep":"10_71","departamento":"Planejamento e Administração Escolar","sigla_dep":"DEPLAE"}'>Planejamento e Administração Escolar</option>
<option value='{"cod_dep":"13_72","departamento":"Arquiteura e Urbanismo","sigla_dep":"CAU"}'>Arquitetura e Urbanismo</option>
<option value='{"cod_dep":"13_73","departamento":"Construção Civil","sigla_dep":"DCC"}'>Construção Civil</option>
<option value='{"cod_dep":"13_74","departamento":"Engenharia Eletrica","sigla_dep":"DELT"}'>Engenharia Eletrica</option>
<option value='{"cod_dep":"13_75","departamento":"Engenharia Mecânica","sigla_dep":"DEMEC"}'>Engenharia Mecânica</option>
<option value='{"cod_dep":"13_76","departamento":"Engenharia Quimica","sigla_dep":"DEQ"}'>Engenharia Quimica</option>
<option value='{"cod_dep":"13_77","departamento":"Hidraulica e Saneamento","sigla_dep":"DHS"}'>Hidraulica e Saneamento</option>
<option value='{"cod_dep":"13_78","departamento":"Engenharia Ambiental","sigla_dep":"DEA"}'>Engenharia Ambiental</option>
<option value='{"cod_dep":"13_79","departamento":"Engenharia de Bioprocessos e Biotecnologia","sigla_dep":"DEBB"}'>Engenharia de Bioprocessos e Biotecnologia</option>
<option value='{"cod_dep":"13_80","departamento":"Engenharia de Produção","sigla_dep":"DEP"}'>Engenharia de Produção</option>
<option value='{"cod_dep":"13_81","departamento":"Transportes","sigla_dep":"DTT"}'>Transportes</option>
<option value='{"cod_dep":"15_82","departamento":"Biociências","sigla_dep":"DBC"}'>Biociências</option>
<option value='{"cod_dep":"15_83","departamento":"Biodiversidade","sigla_dep":"DBD"}'>Biodiversidade</option>
<option value='{"cod_dep":"15_84","departamento":"Ciências Agronomicas","sigla_dep":"DCA"}'>Ciências Agronomicas</option>
<option value='{"cod_dep":"15_85","departamento":"Ciências Veterinárias","sigla_dep":"DCV"}'>Ciências Veterinárias</option>
<option value='{"cod_dep":"15_86","departamento":"Engenharias e Exatas","sigla_dep":"DEE"}'>Engenharias e Exatas</option>
<option value='{"cod_dep":"15_87","departamento":"Sociais e Humanas","sigla_dep":"DSH"}'>Sociais e Humanas</option>
<option value='{"cod_dep":"15_88","departamento":"Zootecnia - Palotina","sigla_dep":"DZO"}'>Zootecnia - Palotina</option>

                   </select>
               </div>
                    <div>
                        <label for="ambiente">Nome da Sala - Exemplo: Laboratório de Topografia</label>
                        <input type="text" id="ambiente" style='width: 100%'>
                    </div>
                    <div>
                        <label for="cod_amb">Sigla da Sala - Exemplo: PA-02</label><br>
                        <input type="text" id="cod_amb" style='width: 100%'>
                    </div>
                    <div>
                        <label for="comentarios">Comentários - Caso tenha algo mais a acrescentar digite aqui</label>
                        <input type="text" id="comentarios" style='width: 100%'>
                    </div>
            </div>
          </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" id="formulario_indoor">OK</button>
        <button type="button" class="btn btn-secondary" id="formulario_close" style='background-color: red' data-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>