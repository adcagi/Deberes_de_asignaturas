<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product; 

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'name'=>'mouse',
            'price'=>29,
            'stock'=>3
        ]);
                Product::create([
            'name'=>'keyboard',
            'price'=>40,
            'stock'=>8
        ]);
                Product::create([
            'name'=>'screen',
            'price'=>160,
            'stock'=>20
        ]);
    }
}
