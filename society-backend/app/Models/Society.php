<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Society extends Model
{
    use HasFactory, HasApiTokens;

    protected $table = 'societies';
    protected $guarded = [];
    protected $primaryKey = 'id';
    public $timestamps = false;

    public function regionals(){
        return $this->belongsTo(Regional::class, 'regional_id', 'id');
    }


}
