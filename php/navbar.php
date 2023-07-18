<!-- Navbar  -->
<nav class="navbar navbar-expand-lg navbar-dark sticky-top" style="margin-top: 0px; background:#4157a3; font-family:Gilroy-ExtraBold, sans-serif; font-size: 16px; padding: 4px; height: 51px; flex-grow: 1;">

    <!-- Logo IMG 

    <a class="navbar-brand" href="http://www.campusmap.ufpr.br/">
    <img  id="SimboloNavBar" src="../img/interface/Simbolo_Cor.png" alt="logo UCM"></a> -->

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent" style="background-color:#4157a3; color:#FCFCFC;">
        <ul class="navbar-nav ml-auto">
            <a class="nav-link active" href="#" id='ajuda'>Ajuda</a>
            <!-- Menu usuario -->
            <?php
                if(isset($_SESSION['logged_in']) && $_SESSION['logged_in']==true && $_SESSION['access_level']=='Customer'){
            ?>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                        Usuário
                      </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item disabled" href="#">Login</a>


                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href='<?php echo $home_url ."logout.php"; ?>'>Sair</a>
                    </div>
                </li>

                <?php 
                } else if(isset($_SESSION['logged_in']) && $_SESSION['logged_in']==true && $_SESSION['access_level']=='Admin'){
                    ?>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Usuário
                      </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="https://campusmap.ufpr.br/usuarios/admin/index.php?action=login_success">Painel de Controle</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href='<?php echo $home_url ."logout.php"; ?>'>Sair</a>
                    </div>
                </li>
                <?php 
                } else { 
            ?>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Registro
                          </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href='<?php echo $home_url ."login.php"; ?>'>Login</a>
                        <a class="dropdown-item" href='<?php echo $home_url ."register.php"; ?>'>Cadastro</a>

                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item disabled" href="#">Sair</a>
                    </div>
                </li>

                <?php
                }
            ?>
        </ul>
    </div>
</nav>