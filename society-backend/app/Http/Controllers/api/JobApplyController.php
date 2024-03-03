<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\JobApplyRequest;
use App\Models\AvailablePosition;
use App\Models\JobApplyPosition;
use App\Models\JobApplySociety;
use App\Models\JobCategory;
use App\Models\JobVacancy;
use App\Models\Society;
use Illuminate\Http\Request;

class JobApplyController extends Controller
{
    public function jobApplySociety(JobApplyRequest $request)
    {
        $token = $request->input('token');

        $user = Society::where('login_tokens', $token)->first();


        if ($user) {

            $jobApplySociety = JobApplySociety::create([
                'notes' => $request->notes,
                'date' => now(),
                'society_id' => $user->id,
                'job_vacancy_id' => $request->job_vacancy_id,
            ]);
            $jobApplySociety->save();

            $jobApplyPosition = new JobApplyPosition();

            $jobApplyPosition = JobApplyPosition::create([
                'date' => now(),
                'society_id' => $user->id,
                'job_vacancy_id' => $request->job_vacancy_id,
                'position_id' => $request->position,
                'job_apply_societies_id' => $jobApplySociety->id,
                'status' => 'pending',

            ]);
            $jobApplyPosition->save();

            return response()->json([
                'message' => 'Applying for job successfull'
            ], 200);
        } else {
            return response()->json(['error' => 'Unauthorized user'], 401);
        }
    }
    public function show(Request $request)
    {
        $token = $request->input('token');

        $user = Society::where('login_tokens', $token)->first();


        if ($user) {

            $jobApplyPositions = JobApplyPosition::where('society_id', $user->id)->get();
            $vacancies = [];

            foreach ($jobApplyPositions as $jobApplyPosition) {
                $jobVacancy = JobVacancy::where('id', $jobApplyPosition->job_vacancy_id)->first();
                $availablePosition = AvailablePosition::where('job_vacancy_id', $jobVacancy->id)->first();

                if ($jobVacancy) {
                    $jobCategory = JobCategory::where('id', $jobVacancy->job_category_id)->first();
                    $jobApplySociety = JobApplySociety::where('id', $jobApplyPosition->job_apply_societies_id)->first();
               
                    $positionData = [
                        'position' => $availablePosition->position,
                        'apply_status' => $jobApplyPosition->status,
                        'notes' => $jobApplySociety->notes,
                        'apply_date' => $jobApplyPosition->date,
                    ];


                    $data = [
                        'id' => $jobVacancy->id,
                        'category' => $jobCategory,
                        'company' => $jobVacancy->company,
                        'address' => $jobVacancy->address,
                        'position' => $positionData
                    ];

                    $vacancies[] = $data;
                }
            }
            return response()->json(['vacancies' => $vacancies], 200);
        } else {
            return response()->json(['error' => 'Unauthorized user'], 401);
        }
    }
}
