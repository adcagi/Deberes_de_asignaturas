<?php
namespace App\Classes;

class Gato extends Animal implements Habitable {
    public function hablar() {
        return $this->nombre . " dice: ¡Miau!";
    }
}