<?php
namespace App\Classes;

class Perro extends Animal implements Habitable {
    public function hablar() {
        return $this->nombre . " dice: ¡Guau!";
    }
}