<?php

namespace App\Http\Controllers\Roles\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RoleResource extends JsonResource
{
    
    public function toArray($request)
    {
        return [
            'id'=>$this->getKey(), // primarykey(id)
            'name'=>$this->name
        ];
    }
}
