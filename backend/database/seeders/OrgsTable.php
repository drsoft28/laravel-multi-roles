<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Org;
class OrgsTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $org = Org::where('code','*')->first();
        if(!$org){
        $org = new Org();
        $org->code = '*';
        $org->name = '*';
        $org->id=0;
        $org->save();
        $org->refresh(); // reload row;
        }
        $org->id=0;
        $org->save();
    }
}
