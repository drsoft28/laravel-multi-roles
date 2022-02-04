<?php

namespace App\Http\Controllers\Roles\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class RoleUsersCollection extends ResourceCollection
{  public $collect = RoleUsersResource::class;
    public function toArray($request)
    {
        return [
            'list' => $this->collection
        ];
    }
}
