<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Juguete;

class JugueteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Juguete::create([
            'name'=>'playmovil',
            'price'=>23
        ]);
                Juguete::create([
            'name'=>'actionman',
            'price'=>12
        ]);
                Juguete::create([
            'name'=>'lego',
            'price'=>2
        ]);
    }
}
