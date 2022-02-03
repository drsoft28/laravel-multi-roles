<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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

   
    public function login()
    {
        $credentials = request(['email', 'password']);
        $rules = [
            'email'=>'required|email',
            'password'=>'required|min:6',
        ];
        $validator =  Validator(request()->all(),$rules);
        if($validator->fails()){
            return $this->responseValidator( $validator->errors());
        }

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

    
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    
    protected function respondWithToken($token)
    {
        $data=[
            'access_token' => $token,
            'user'=>auth()->user(),
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ];
        return response()->json(['success'=>true,'data'=>$data]);
    }
}
