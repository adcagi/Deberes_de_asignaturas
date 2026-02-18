<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;


class AnimalController extends Controller{
    public function index(){

        $perro = new \App\Classes\Perro("link");
        $gato = new \App\Classes\Gato("wilson");


        $animales = [
            'perro' =>[
                'nombre' => $perro->getNombre(),
                'comer' => $perro->comer(),
                'hablar' => $perro->hablar()
            ],
                'gato' =>[
                'nombre' => $gato->getNombre(),
                'comer' => $gato->comer(),
                'hablar' => $gato->hablar()
            ]
        ];

        return view('animales', compact('animales'));

    }
}


?>