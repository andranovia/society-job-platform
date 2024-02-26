<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\JobVacancyResource;
use App\Models\JobVacancy;
use App\Models\Society;
use App\Models\Validation;
use Illuminate\Http\Request;

class JobVacancyController extends Controller
{
    public function index(Request $request)
    {
        $token = $request->input('token');
        $user = Society::where('login_tokens', $token)->first();

        if ($user) {
            $validation = Validation::where('society_id', $user->id)->first();
            $jobVacancy = JobVacancy::where('job_category_id', $validation->job_category_id)->get();

            if ($jobVacancy) {
                return response()->json([
                    'vacancies' => JobVacancyResource::collection($jobVacancy)
                ], 200);
            } else {
                return response()->json([
                    'message' => 'vacancy not found'
                ], 404);
            }
        } else {
            return response()->json([
                'error' => 'Unauthorize user'
            ], 401);
        }
    }

    public function jobVacancyDetail(Request $request, string $id)
    {
        $token = $request->input('token');
        $user = Society::where('login_tokens', $token)->first();

        if ($user) {

            $jobVacancy =  JobVacancy::where('id', $id)->first();


            if ($jobVacancy) {
                return response()->json([
                    'vacancies' => new JobVacancyResource($jobVacancy)
                ], 200);
            } else {
                return response()->json([
                    'message' => 'vacancy not found'
                ], 404);
            }
        } else {
            return response()->json([
                'error' => 'Unauthorize user'
            ], 401);
        }
    }
}
