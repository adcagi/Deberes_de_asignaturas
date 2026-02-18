<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Coche; 

class CocheSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Coche::create([
            'modelo' => 'G3',
            'marca' => 'Nissan',
            'antigüedad' => 2 . 'años'
        ]);
        Coche::create([
            'modelo' => 'R6',
            'marca' => 'toyota',
            'antigüedad' => 5 . 'años'
        ]);
        Coche::create([
            'modelo' => '700',
            'marca' => 'corvette',
            'antigüedad' => 29 . 'años'
        ]);
    }
}
