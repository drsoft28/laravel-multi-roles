<?php

namespace App\Http\Controllers\Users\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserRolesResource extends JsonResource
{
    
    public function toArray($request)
    {
        return [
            'id'=>intVal($this->id), 
            'user_id'=>intVal($this->user_id), 
            'role_id'=>intVal($this->role_id), 
            'name'=>$this->name,
            'email'=>$this->email,
        ];
    }
}
