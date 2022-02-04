<?php

namespace App\Http\Controllers\Roles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Sidebar;
use App\Models\Role;
use Illuminate\Validation\Rule;
class RolesSidebarController extends Controller
{
    public function index(){
       
        $role_id = request('role_id');

        $sidebars = Sidebar::selectRaw("*")
        ->whereRaw("role_id = ?",[$role_id])
        
        ->orderByRaw("seqno")
        ->get();
        return self::responseData(new Resources\RolesSidebarsCollection($sidebars));
    }


    public function store()
    {
        $role_id = request('role_id');
       $rules = [
           'title'=>'required',
           'parent_id'=>'nullable|exists:f_sidebar,f_sidebar_id'
           
       ];
       $validation= Validator(request()->all(),$rules);
       if($validation->fails()) return self::responseValidator($validation->errors());
       $sidebar = Sidebar::create([
           'title' => request('title'),
           'link' => request('link'),
           'icon' => request('icon'),
           'role_id' => $role_id,
           'parent_id' => request('parent_id'),
        ]);
        return self::responseData(new  Resources\RolesSidebarsResource($sidebar));
    }

    public function update()
    {
        $role_id = request('role_id');
        $id = request('id');
        $sidebar = Sidebar::find($id);
       $rules = [
           'title'=>'required',
           'parent_id'=>['nullable',Rule::exists('sidebars','sidebar_id')->where(function ($query)use($sidebar) {
            return $query->whereRaw('sidebar_id !=?', $sidebar->getKey());
        }),  
        ]
       ];

       $validation= Validator(request()->all(),$rules);
       if($validation->fails()) return self::responseValidator($validation->errors());

           $sidebar->title = request('title');
           $sidebar->link = request('link');
           $sidebar->icon = request('icon');

           $sidebar->parent_id = request('parent_id');
           $sidebar->save();

        return self::responseData(new  Resources\RolesSidebarsResource($sidebar));
    }
    public function destroy()
    {
        $role_id = request('role_id');
        $id = request('id');
        $sidebar = Sidebar::find($id);
        $sidebar->delete();

        return self::responseData('success');
    }
    public function updateAll()
    {

                 $role=Role::find(request('role_id'));
               
                  if(!$role)
                  return self::responseMessage('menu not found');

              $children_all=collect(request('children'));

        
            $this->updateChild($children_all,null);
          $key1='side-bar-'.$role->getKey();
          if(\Cache::has($key1 ))
          \Cache::forget($key1 );
                   return self::responseData("ok");
    }

    public function updateChild($children,$parent_id)
    {
      $ordre=0;
      foreach ($children as $childC) {
      $child=Sidebar::find($childC['id']);
      if($child)
      {
        $child->parent_id=$parent_id;
        $child->seqno=++$ordre;
        $child->save();
        if(array_key_exists('children',$childC))
        $this->updateChild($childC['children'],$child->getKey());
      }
      }
    }
}