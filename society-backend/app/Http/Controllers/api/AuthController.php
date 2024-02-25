<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\loginRequest;
use App\Http\Requests\SocietyAuthRequest;
use App\Models\Society;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(SocietyAuthRequest $request)
    {



        $Society = Society::where('id_card_number', $request->id_card_number)->Where('password', $request->password)->first();


        if ($Society) {
            $token = $Society->createToken('auth_token')->plainTextToken;
      
            $success['data'] = [
                'name' => $Society->name,
                'born_date' => $Society->born_date,
                'gender' => $Society->gender,
                'address' => $Society->address,
                'token' => $token,
                'regional' => $Society->regionals
            ];
            $Society->login_tokens = $token;
            $Society->save();

            return response()->json(
               $success, 200

            );
        } else {
            return response()->json([
                'message' => 'ID Card Number or Password incorrect'

            ], 201);
        }
    }
}
