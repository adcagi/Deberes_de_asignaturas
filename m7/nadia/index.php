<?php

//Incluir la libreria de Smarty
require_once 'libs/Smarty.class.php';
require_once 'classes/container.class.php';
session_start();
use Smarty\Smarty;

//Crear la instancia de Smarty
$smarty = new Smarty();

//configuración de directorios
$smarty->setTemplateDir(__DIR__ .'/templates/');
$smarty->setCompileDir(__DIR__ .'/templates_c/');
$smarty->setConfigDir(__DIR__ .'/configs/');
$smarty->setCacheDir(__DIR__ .'/cache/');

//probar la instalación
// $smarty->testInstall();

if(!isset($_SESSION['containers'], $_SESSION['trash'], $_SESSION['trashList'],$_SESSION['counter'])){
    $_SESSION['counter'] = 0;
    $_SESSION['containers'] = [];
    $_SESSION['containers'][] = new container('vidre', 'green.jpg');
    $_SESSION['containers'][] = new container('plastic', 'yellow.jpg');
    $_SESSION['containers'][] = new container('cartro', 'blue.jpg');
    $_SESSION['containers'][] = new container('organic', 'brown.jpg');
    $_SESSION['trashList'] = ['vidre', 'plastic', 'organic', 'cartro'];
    $_SESSION['trash'] = [];
    for ($i=0; $i <= 4; $i++) { 
        createTrash();
    }
}

if(isset($_REQUEST['trash'])){
    $var = count($_SESSION['trash'])-1;
    $check = $_SESSION['containers'][$_REQUEST['trash']]->checkTrash($_SESSION['trash'][$var]);
    if ($check) {
        array_pop($_SESSION['trash']);
        createTrash();
        $_SESSION['counter']++;
    }
}

if(isset($_REQUEST['truck'])){
    foreach ($_SESSION['containers'] as $key => $container) {
        $container->setCarga(0);
    }
}

function createTrash(){
    $tempTrash = $_SESSION['trashList'][rand(0, count($_SESSION['trashList'])-1)];
    array_unshift($_SESSION['trash'], $tempTrash);
}

$smarty->assign('counter', $_SESSION['counter']);
$smarty->assign('trash', $_SESSION['trash']);
$smarty->assign('containers', $_SESSION['containers']);

//mostrar la plantilla
$smarty->display("index.tpl");