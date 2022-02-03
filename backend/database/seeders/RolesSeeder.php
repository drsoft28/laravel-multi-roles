<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\User;
use App\Models\UserRole;
class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role = Role::where('name','superuser')->first();
        if(!$role){
            $role = new Role();
            $role->name = 'superuser';
            $role->org_id = 0;
            $role->save();
            $role->refresh();
        }
        $user = User::where('name','superuser')->first();
        if(!UserRole::where('user_id',$user->getKey())->where('role_id',$role->getKey())->first())
        $role->users()->attach($user);
    }
}
