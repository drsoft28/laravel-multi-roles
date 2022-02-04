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
    Route::prefix('roles')->namespace('Roles')->group(function () {
        Route::post('/', 'RolesController@index');
        Route::post('/update', 'RolesController@update');
        Route::post('/store', 'RolesController@store');
        Route::post('/destroy', 'RolesController@destroy');
        //user roles
        Route::prefix('users')->group(function () {
            Route::post('/', 'RoleUsersController@index');           
            Route::post('/store', 'RoleUsersController@store');
            Route::post('/destroy', 'RoleUsersController@destroy');
        });
    });
    Route::prefix('users')->group(function () {
        Route::post('/', 'Users\UsersController@index');
        Route::post('/list-only', 'Users\UsersController@listOnly');
        Route::post('/update', 'Users\UsersController@update');
        Route::post('/store', 'Users\UsersController@store');
        Route::post('/destroy', 'Users\UsersController@destroy');
    });

});
