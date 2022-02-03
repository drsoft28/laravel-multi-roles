<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
class UserTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $user  = User::where('name','superuser')->first();
        if(!$user){
        $user  = new User();
        $user->name ='superuser';
        $user->email = 'super@admin.com';
        $user->password = bcrypt('12345678');
        $user->org_id= 0;
        $user->save();
        }
    }
}
