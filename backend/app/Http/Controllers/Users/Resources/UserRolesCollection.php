<?php

namespace App\Http\Controllers\Users\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class UserRolesCollection extends ResourceCollection
{  public $collect = UserRolesResource::class;
    public function toArray($request)
    {
        return [
            'list' => $this->collection
        ];
    }
}
