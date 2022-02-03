<?php

namespace App\Http\Controllers\Roles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
class RolesController extends Controller
{
    public function index()
    {
        $roles = Role::all();
        return $this->responseData(new Resources\RoleCollection($roles));
    }
    public function store()
    {
        $rules = [
            'name' =>'required|unique:roles,name'
        ];
        $validator =  Validator(request()->all(),$rules);

        if($validator->fails()) return $this->responseValidator($validator->errors());
        // add
        $role = new Role();
        $role->name = request('name');
        $role->save();
        $role->refresh(); //reload row;
        return $this->responseData(new Resources\RoleResource($role));
    }
    public function update()
    {
        $role = Role::find(request('id'));
        if(!$role) return $this->responseMessage('role not found');
        $rules = [
            'name' =>'required|unique:roles,name,'.$role->getKey().',id'
        ];
        $validator =  Validator(request()->all(),$rules);

        if($validator->fails()) return $this->responseValidator($validator->errors());
        // update
        
        $role->name = request('name');
        $role->save();
     
        return $this->responseData(new Resources\RoleResource($role));
    }
    public function destroy()
    {
        $role = Role::find(request('id'));
        if(!$role) return $this->responseMessage('role not found');
        if($role->users()->count()>0)
        return $this->responseMessage('role has users');
        $role->delete();
        return $this->responseData('Deleted');
        
    }
}
