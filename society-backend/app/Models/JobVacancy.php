<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobVacancy extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $primaryKey = 'id';
    protected $table = 'job_vacancies';
    public $timestamps = false;

    public function categories(){
        return $this->belongsTo(JobCategory::class, 'job_category_id', 'id');
    }

    public function availablePosition(){
        return $this->hasMany(AvailablePosition::class, 'job_vacancy_id', 'id');
    }


}
