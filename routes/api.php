<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

Route::post('SignIn', [AuthController::class, 'SignIn']);
Route::post('SignUp', [AuthController::class, 'SignUp']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('user', [UserController::class, 'getUser']);
    Route::get('role-data', [UserController::class, 'getRoleSpecificData']);


});
