<?php
namespace App\Classes;

class Animal {
    protected $nombre;

    public function __construct($nombre) {
        $this->nombre = $nombre;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function comer() {
        return $this->nombre . " está comiendo";
    }
}