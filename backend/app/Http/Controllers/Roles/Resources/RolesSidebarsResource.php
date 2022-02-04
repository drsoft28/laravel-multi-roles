<?php

namespace App\Http\Controllers\Roles\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RolesSidebarsResource extends JsonResource
{
   
    public function toArray($request)
    {
        return [
            'id'    => $this->getKey(),
            'title' => $this->title,
            'link'  => $this->link,
            'icon'  => $this->icon,
            'parent_id' => $this->parent_id
        ];
    }
}
