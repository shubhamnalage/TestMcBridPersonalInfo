<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\Models\PersonalDetail;

class PersonalDetailsController extends Controller
{
    public function personalInfo(Request $req)
    {
        $emails = PersonalDetail::all();
        $user = PersonalDetail::where('email', $req->email)->first();
            if ($user) {
                return "user Already exist";
            }
         else{
            $user= new PersonalDetail;
            $user->firstName= $req->input('firstName');
            $user->lastName= $req->input('lastName');
            $user->email= $req->input('email');
            $user->phone= $req->input('phone');
            $user->dob= $req->input('dob');
            $user->Ip = $req->input('Ip');
            $user->device = $req->input('device');
            $user->browser = $req->input('browser');
            $user->address = json_encode($req->input('address'));

            $user->save();
            return $user;
         }

    }
}
