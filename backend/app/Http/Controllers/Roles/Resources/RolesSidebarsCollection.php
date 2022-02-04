<?php

namespace App\Http\Controllers\Roles\Resources;

use App\Http\Resources\BaseCollection;
use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Models\Sidebar;

class RolesSidebarsCollection extends ResourceCollection
{
     public $collects = RolesSidebarsResource::class;
 
    public function toArray($request)
    {
         return [
          'list' => $this->collection,
         // 'title'=>$this->title,
         // 'tabs'=>$this->tabs,
          //'params'=>$this->params,
          //'headers' => self::headers(true)

        ];
    }
}
