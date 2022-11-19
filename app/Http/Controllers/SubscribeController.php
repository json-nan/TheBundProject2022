<?php

namespace App\Http\Controllers;

use App\Models\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SubscribeController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'name' => 'required',
            'reason' => 'required',
            'occupation' => 'required',
            'other_occupation' => 'required_if:occupation,other',
        ]);

        if (Subscriber::ofContact($request->email)->exists()) {
            Subscriber::ofContact($request->email)->first()->touch();
        } else {
            Subscriber::create($request->all());
        }


        return back()->with('success', true);
    }
}
