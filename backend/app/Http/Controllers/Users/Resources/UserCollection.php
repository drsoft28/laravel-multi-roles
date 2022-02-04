<?php

namespace App\Http\Controllers\Users\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class UserCollection extends ResourceCollection
{  public $collect = UserResource::class;
    public function toArray($request)
    {
        return [
            'list' => $this->collection
        ];
    }
}
