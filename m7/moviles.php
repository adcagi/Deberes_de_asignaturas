<?php

session_start();

class movil{

 private $marca;
 private $modelo;
 private $datos;

function __construct($marca, $modelo, $datos ){
    $this->marca = $marca;
    $this->modelo = $modelo;
    $this->datos = $datos;

}

function get_name(){
    return $this->marca." - ".$this->modelo;
}

}





?>



