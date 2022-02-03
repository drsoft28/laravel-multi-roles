<?php

namespace App\Http\Controllers\Roles\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class RoleCollection extends ResourceCollection
{  public $collect = RoleResource::class;
    public function toArray($request)
    {
        return [
            'list' => $this->collection
        ];
    }
}
