<?php

namespace App\Http\Controllers\Users\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    
    public function toArray($request)
    {
        return [
            'id'=>$this->getKey(), // primarykey(id)
            'name'=>$this->name,
            'email'=>$this->email
        ];
    }
}
