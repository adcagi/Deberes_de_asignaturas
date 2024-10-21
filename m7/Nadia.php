<?php

//habilitar session
session_start();

//Inicializar session
if(!isset($_SESSION['nombres'],$_SESSION['nombres_acertados'],$_SESSION['nombres_fallados'])){
    $_SESSION['nombres']=['Nil','Pol','Jan','Mel'];
    $_SESSION['nombres_acertados']=[];
    $_SESSION['nombres_fallados']=[];
}

//Comprobar eventos y ejecutamos logica
if(isset($_REQUEST['nom'])){
    if($_SESSION['nombres'][0] == $_REQUEST['nom']){
        $nombre = array_shift($_SESSION['nombres']);
        array_push($_SESSION['nombres_acertados'], $nombre);
    } else {
        $nombre = array_shift($_SESSION['nombres']);
        array_push($_SESSION['nombres_fallados'], $nombre);
    }
}


//Mostrar
foreach ($_SESSION['nombres'] as $key => $value) {
    echo $value.'-';
}
echo '<hr>';
foreach ($_SESSION['nombres_acertados'] as $key => $value) {
    echo '<span style="background-color:green; color:white">'.$value.'</span>';
    // echo $value.'-';
}
echo '<hr>';
foreach ($_SESSION['nombres_fallados'] as $key => $value) {
    echo '<span style="background-color:red; color:white">'.$value.'</span>';
    //echo $value.'-';
}
echo '<hr>';

echo '<form action="index.php" method="get">
    <input type="text" name="nom" id="">
    <input type="submit" value="dale">
</form>';
?>