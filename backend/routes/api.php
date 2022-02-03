<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
 //   return $request->user();
//});
Route::group([
   
    

], function () {

    Route::post('auth/login', 'AuthJwtController@login');
    

});

Route::group([
    'middleware' => 'jwt.auth',


], function () {

    Route::post('auth/logout', 'AuthJwtController@logout');
    Route::post('auth/refresh', 'AuthJwtController@refresh');
    Route::post('auth/me', 'AuthJwtController@me');
    Route::prefix('roles')->group(function () {
        Route::post('/', 'Roles\RolesController@index');
        Route::post('/update', 'Roles\RolesController@update');
        Route::post('/store', 'Roles\RolesController@store');
        Route::post('/destroy', 'Roles\RolesController@destroy');
    });

});
