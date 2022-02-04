<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
class UsersController extends Controller
{
    public function index()
    {
        $users = User::all();
        return $this->responseData(new Resources\UserCollection($users));
    }
    public function listOnly()
    {
        $users = User::all();
        return $this->responseData(Resources\UserResource::collection($users));
    }
    public function store()
    {
        $rules = [
            'name' =>'required|unique:users,name',
            'email' =>'required|unique:users,email',
        ];
        $validator =  Validator(request()->all(),$rules);

        if($validator->fails()) return $this->responseValidator($validator->errors());
        // add
        $user = new User();
        $user->name = request('name');
        $user->email = request('email');
        $user->save();
        $user->refresh(); //reload row;
        return $this->responseData(new Resources\UserResource($user));
    }
    public function update()
    {
        $user = User::find(request('id'));
        if(!$user) return $this->responseMessage('user not found');
        $rules = [
            'name' =>'required|unique:users,name,'.$user->getKey().',id',
            'email' =>'required|unique:users,email,'.$user->getKey().',id'
        ];
        $validator =  Validator(request()->all(),$rules);

        if($validator->fails()) return $this->responseValidator($validator->errors());
        // update
        
        $user->name = request('name');
        $user->email = request('email');
        $user->save();
     
        return $this->responseData(new Resources\UserResource($user));
    }
    public function destroy()
    {
        $user = User::find(request('id'));
        if(!$user) return $this->responseMessage('user not found');
        if($user->roles()->count()>0)
        return $this->responseMessage('user has roles');
        $user->delete();
        return $this->responseData('Deleted');
        
    }
}
