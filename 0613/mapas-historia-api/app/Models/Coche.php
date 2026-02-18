<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Coche extends Model
{
    protected $fillable = [
        'modelo',
        'marca',
        'antigüedad'
    ];
}
