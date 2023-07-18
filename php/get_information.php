<?php

// Variaveis GET 
    $campus = $_GET["campus"];
    $id_position = $_GET["id"];
    
    $lista_campus = array ("ccja", "ccjb", "cccb", "ccju");

    $query = "";
    
    echo "<script> map.setZoom($id_position);</script>";
?>