<?php

//habilitar session
session_start();

//Inicializar session
if(!isset($_SESSION['nombres_todos'],$_SESSION['nombres_nivel'],$_SESSION['nombres_nivel_menos'])){
    $_SESSION['nombres_todos']=['Nil','Pol','Jan','Mel', 'Xavi','Edu','Alex','Ana'];
    $_SESSION['nombres_nivel']=[];
    $_SESSION['nombres_nivel_menos']=[];
    $_SESSION['nivel']=3;

    shuffle($_SESSION['nombres_todos']);
    for ($c=0; $c < $_SESSION['nivel']; $c++) { 
        $nombre=$_SESSION['nombres_todos'][$c];
        array_push($_SESSION['nombres_nivel'],$nombre);
    }

    $_SESSION['nombres_nivel_menos']=$_SESSION['nombres_nivel'];
    shuffle($_SESSION['nombres_nivel_menos']);
}


//Comprobar eventos y ejecutamos logica
if(isset($_REQUEST['nom'])){
    if($_REQUEST['nom'] == $_SESSION['nombres_nivel_menos'][0]){
        $_SESSION['nivel']++;   
    }
    else{
        $_SESSION['nivel']--;
    }
    $_SESSION['nombres_nivel']=[];
    $_SESSION['nombres_nivel_menos']=[];
    shuffle($_SESSION['nombres_todos']);
    for ($c=0; $c < $_SESSION['nivel']; $c++) { 
        $nombre=$_SESSION['nombres_todos'][$c];
        array_push($_SESSION['nombres_nivel'],$nombre);
    }

    $_SESSION['nombres_nivel_menos']=$_SESSION['nombres_nivel'];
    shuffle($_SESSION['nombres_nivel_menos']);

}


//Mostrar
foreach ($_SESSION['nombres_todos'] as $key => $value) {
    echo $value.'-';
}
echo '<hr>';
foreach ($_SESSION['nombres_nivel'] as $key => $value) {
    echo $value.'-';
}
echo '<hr>';
foreach ($_SESSION['nombres_nivel_menos'] as $key => $value) {
    if($key!=0)echo $value.'-';
}
echo '<hr>';

echo '<form action="index.php" method="get">
    <input type="text" name="nom">
    <input type="submit" value="dale">
</form>';
?>