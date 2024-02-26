<?php

use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\JobCategoryController;
use App\Http\Controllers\api\JobVacancyController;
use App\Http\Controllers\api\ValidationRequestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




Route::prefix('v1')->group(function () {
    Route::get('job-category', [JobCategoryController::class, 'index']);
    Route::post('login', [AuthController::class, 'login']);
    Route::get('validation-get', [ValidationRequestController::class, 'getValidationRequest']);
    Route::post('validation-request', [ValidationRequestController::class, 'validationRequest']);
    Route::get('job-vacancy', [JobVacancyController::class, 'index']);
    Route::get('job-vacancy/{id}', [JobVacancyController::class, 'jobVacancyDetail']);
});
