<?php
//Incluir la libreria de Smarty
require_once 'libs/Smarty.class.php';
use Smarty\Smarty;

//Crear la instancia de Smarty
$smarty = new Smarty();

//configuración de directorios
$smarty->setTemplateDir(__DIR__ .'/templates/');
$smarty->setCompileDir(__DIR__ .'/templates_c/');
$smarty->setConfigDir(__DIR__ .'/configs/');
$smarty->setCacheDir(__DIR__ .'/cache/');

//probar la instalación
$smarty->testInstall();

//mostrar la plantilla
$smarty->display("index.tpl");
?>