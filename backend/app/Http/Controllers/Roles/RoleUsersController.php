<?php

namespace App\Http\Controllers\Roles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\User;
use App\Models\UserRole;
class RoleUsersController extends Controller
{
    public function index()
    {
        $users =  User::join('user_roles','user_roles.user_id','=','users.id')
       ->whereRaw('role_id=?',[request('role_id')])
       ->selectRaw('user_roles.*,users.name,users.email')
       ->get();
       return $this->responseData(new Resources\RoleUsersCollection($users));
    }
    public function store()
    {
        $rules = [
            'user_id' =>'required|exists:users,id|unique:user_roles,user_id,null,id,role_id,'.request('role_id'),
        ];
        $validator =  Validator(request()->all(),$rules);

        if($validator->fails()) return $this->responseValidator($validator->errors());
        // add
        $user =  User::find(request('user_id'));
        $role =  Role::find(request('role_id'));
        $role->users()->attach($user);
        $user =  User::join('user_roles','user_roles.user_id','=','users.id')
        ->whereRaw('role_id=?',[request('role_id')])
        ->whereRaw('user_id=?',[request('user_id')])
        ->selectRaw('user_roles.*,users.name,users.email')
        ->first();
        return $this->responseData(new Resources\RoleResource($user));
    }
    public function destroy()
    {
        $user_role =  UserRole::whereRaw('role_id=?',[request('role_id')])
        ->find(request('id'));
        if(!$user_role) return $this->responseMessage('role has not this user,plz refresh table');

        $user_role->delete();

        return $this->responseData('Deleted');

    }
}
