<?php

class container{

    private $tipo;
    private $carga;
    private $capacidadMaxima;
    private $img;

    public function __construct($tipo, $img)
    {
        $this->tipo = $tipo;
        $this->carga=0;
        $this->capacidadMaxima = rand(3, 7);
        $this->img = $img;
    }

    //generate getters and setters
    public function getTipo(){
        return $this->tipo;
    }
    public function getCarga(){
        return $this->carga;
    }
    public function getCapacidadMaxima(){
        return $this->capacidadMaxima;
    }
    public function getImg(){
        return $this->img;
    }   

    public function setTipo($tipo){
        $this->tipo = $tipo;
    }
    public function setCarga($carga){
        $this->carga = $carga;
    }
    public function setCapacidadMaxima($capacidadMaxima){
        $this->capacidadMaxima = $capacidadMaxima;
    }
    public function setImg($img){
        $this->img = $img;
    }

    function checkTrash($trash){
        if($trash == $this->tipo && $this->carga < $this->capacidadMaxima){
            $this->carga++;
            return true;
        }
        return false;
    }
    
}