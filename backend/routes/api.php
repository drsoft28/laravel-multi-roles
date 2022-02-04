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
    Route::post('auth/login-role', 'AuthJwtController@loginRole');
    Route::post('auth/logout', 'AuthJwtController@logout');
    Route::post('auth/refresh', 'AuthJwtController@refresh');
    Route::post('auth/me', 'AuthJwtController@me');
    Route::post('auth/me/role', 'AuthJwtController@myrole');
    Route::prefix('roles')->namespace('Roles')->group(function () {
        Route::post('/', 'RolesController@index');
        Route::post('/list-only', 'RolesController@listOnly');
        Route::post('/update', 'RolesController@update');
        Route::post('/store', 'RolesController@store');
        Route::post('/destroy', 'RolesController@destroy');
        //Role users
        Route::prefix('users')->group(function () {
            Route::post('/', 'RoleUsersController@index');           
            Route::post('/store', 'RoleUsersController@store');
            Route::post('/destroy', 'RoleUsersController@destroy');
        });
        //sidebar
        Route::group(['prefix' => 'sidebars'], function () {
            Route::post('/init', 'RolesSidebarController@init');
            Route::post('/list', 'RolesSidebarController@listOnly');
            Route::post('/', 'RolesSidebarController@index');
            Route::post('/store', 'RolesSidebarController@store');
            Route::post('/update', 'RolesSidebarController@update');
            Route::post('/destroy', 'RolesSidebarController@destroy');
            Route::post('/update-all', 'RolesSidebarController@updateAll');
        });
    });
    Route::prefix('users')->namespace('Users')->group(function () {
        Route::post('/', 'UsersController@index');
        Route::post('/list-only', 'UsersController@listOnly');
        Route::post('/update', 'UsersController@update');
        Route::post('/store', 'Users\UsersController@store');
        Route::post('/destroy', 'UsersController@destroy');
        //user roles
        Route::prefix('roles')->group(function () {
            Route::post('/', 'UserRolesController@index');           
            Route::post('/store', 'UserRolesController@store');
            Route::post('/destroy', 'UserRolesController@destroy');
        });
    });

});
