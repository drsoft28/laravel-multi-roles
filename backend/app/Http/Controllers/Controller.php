<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function responseValidator($errors)
    {
        return response()->json(['success'=>false,'type'=>'validator','data' => $errors]);
    }

    public function responseMessage($message)
    {
        return response()->json(['success'=>false,'type'=>'message','data' => $message]);
    }
    public function responseData($data)
    {
        return response()->json(['success'=>true,'data' => $data]);
    }
}
