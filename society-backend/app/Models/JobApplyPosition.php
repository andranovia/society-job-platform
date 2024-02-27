<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobApplyPosition extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $primaryKey = 'id';
    protected $table = 'job_apply_positions';
    public $timestamps = false;


    public function positions()
    {
        return $this->belongsTo(AvailablePosition::class, 'position_id', 'id');
    }
}
