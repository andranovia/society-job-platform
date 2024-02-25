<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ValidationRequest;
use App\Models\Society;
use App\Models\Validation;
use Illuminate\Http\Request;

class ValidationRequestController extends Controller
{
    public function validationRequest(ValidationRequest $request)
    {
        $token = $request->input('token');
        $user = Society::where('login_tokens', $token)->first();
        
        if ($user) {
            
            $validationRequestData = $request->except('token');
            $validationRequest = Validation::create(array_merge($validationRequestData, ['society_id' => $user->id]));
            $validationRequest->save();


            return response()->json([
                'message' => 'Request data validation sent successful'
            ], 200);
        } else {
            return response()->json([
                'error' => 'Unauthorized user'
            ], 401);
        }
    }


    public function getValidationRequest(Request $request)
    {
        $token = $request->input('token');
        $user = Society::where('login_tokens', $token)->first();

        if ($token) {
            $data = validation::where('society_id', $user->id)->first();

            return response()->json(
                $data,
                200
            );
        } else {
            return response()->json([
                'message' => 'Unauthorized user'
            ], 401);
        }
    }
}
