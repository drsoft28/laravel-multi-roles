<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\User;
use App\Models\UserRole;
class UserRolesController extends Controller
{
    public function index()
    {
        $users =  Role::join('user_roles','user_roles.role_id','=','roles.id')
       ->whereRaw('user_id=?',[request('user_id')])
       ->selectRaw('user_roles.*,roles.name')
       ->get();
       return $this->responseData(new Resources\UserRolesCollection($users));
    }
    public function store()
    {
        $rules = [
            'role_id' =>'required|exists:roles,id|unique:user_roles,role_id,null,id,user_id,'.request('user_id'),
        ];
        $validator =  Validator(request()->all(),$rules);

        if($validator->fails()) return $this->responseValidator($validator->errors());
        // add
        $user =  User::find(request('user_id'));
        $role =  Role::find(request('role_id'));
        $role->users()->attach($user);
        $user =  Role::join('user_roles','user_roles.role_id','=','roles.id')
        ->whereRaw('role_id=?',[request('role_id')])
        ->whereRaw('user_id=?',[request('user_id')])
        ->selectRaw('user_roles.*,roles.name')
        ->first();
        return $this->responseData(new Resources\UserRolesResource($user));
    }
    public function destroy()
    {
        $user_role =  UserRole::whereRaw('user_id=?',[request('user_id')])
        ->find(request('id'));
        if(!$user_role) return $this->responseMessage('user has not this role,plz refresh table');

        $user_role->delete();

        return $this->responseData('Deleted');

    }
}
