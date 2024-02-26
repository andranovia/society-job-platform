<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AvailablePosition extends Model
{
    use HasFactory;
    
    protected $guarded = [];
    protected $primaryKey = 'id';
    protected $table = 'available_positions';
    public $timestamps = false;

}
