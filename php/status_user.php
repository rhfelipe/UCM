<!-- Check Login-->
<?php  if(isset($_SESSION['logged_in']) && $_SESSION['logged_in']==true){ 
        $access_denied=false;
    ?>
<!-- Logado -->
<div class="sidebar-header">
    <div class="user-pic">
        <img class="img-responsive img-rounded" src="../img/interface/user.jpg" alt="User picture">
    </div>
    <div class="user-info">
        <span class="user-name"><?php echo $_SESSION['firstname']; ?></span>
        <span class="user-role">Bem-vindo</span>
        <span class="user-role"><?php echo $_SESSION['access_level']; ?></span>
        <span class="user-status-on">
            <i class="fa fa-circle"></i>
            <span>Online</span>
        </span>

    </div>
</div>

<?php } else { ?>

<!-- Visitante -->
<div class="sidebar-header">
    <div class="user-pic">
        <img class="img-responsive img-rounded" src="../img/interface/user.jpg" alt="User picture">
    </div>
    <div class="user-info">
        <span class="user-name">Usuário<strong> Anônimo</strong></span>
        <span class="user-role">Visitante</span>
        <span class="user-status-off">
            <i class="fa fa-circle"></i>
            <span>Off-line</span>
        </span>
    </div>
</div>

<?php } ?>
