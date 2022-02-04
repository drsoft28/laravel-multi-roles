<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\User;
use App\Models\Sidebar;

class AuthJwtController extends Controller
{
     /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth:api', ['except' => ['login']]);
    }
    public function loginRole()
    {
        $user = auth()->user();
        $role_id = request('role_id');
        $rules = [
            'role_id'=>'required|exists:roles,id|exists:user_roles,role_id,user_id,'.$user->id,
        ];
        $validator =  Validator(request()->all(),$rules);
        if($validator->fails()){
            return $this->responseValidator( $validator->errors());
        }
        $role = Role::find($role_id);
        $token =  auth()->claims(['role'=>$role->name,'role_id'=>$role->id])->login($user);
        return $this->respondWithToken($token,$role);
    }
    public function username()
    {
        $field = request('email');
        //return "email";
        if (!filter_var($field, FILTER_VALIDATE_EMAIL)) {
            return "name";
        } else {
            return "email";
        }

    }
    public function login()
    {
        
        $lo=$this->username();
        $rules = [
            $lo=>'required',
            'password'=>'required|min:6',
        ];
        request()->merge(['name'=>request('email')]);
        $validator =  Validator(request()->all(),$rules);
        if($validator->fails()){
            return $this->responseValidator( $validator->errors());
        }
        $credentials = request([$lo, 'password']);
        if (! $token = auth()->attempt($credentials)) {
            return $this->responseValidator(['email'=>[trans('auth.failed')]]);
     
        }

        return $this->respondWithToken($token);
    }

    
    public function me()
    {
        if(!auth()->check())
        return $this->responseMessage('401');
        return $this->responseData(auth()->user());
    }
    public function myrole()
    {
        $payload = auth()->payload();

        
       $role = $payload->get('role');
        return $this->responseData($role);
    }
    public function sidebar()
    {
        $payload = auth()->payload();

        
       $role_id = $payload->get('role_id'); 
     $sidebars =  Sidebar::where('role_id',$role_id)->orderByRaw("seqno")->get();
     return $this->responseData(\App\Http\Resources\RoleSidebarResource::collection($sidebars));
    }
    
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    
    protected function respondWithToken($token,$role=null)
    {
        $user  = auth()->user();
        $sidebar = [];

     if($role){
        $sidebar =  Sidebar::where('role_id',$role->getKey())->orderByRaw("seqno")->get();
        $sidebar =\App\Http\Resources\RoleSidebarResource::collection($sidebar);
     }
     

        $data=[
            'access_token' => $token,
            'user'=>$user,
            'sidebar'=>$sidebar,
            'role'=>optional($role)->name,
            'roles'=>\App\Http\Resources\RolesListResource::collection($user->roles),
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ];
        return response()->json(['success'=>true,'data'=>$data]);
    }
}
