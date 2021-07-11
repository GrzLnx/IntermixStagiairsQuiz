<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Api\Answer;
use Illuminate\Http\Request;

class AnswersController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $answer = new Answer();

        $answer->version = $request->version;
        $answer->name = $request->name;
        $answer->question_id = $request->question_id;
        $answer->question_name = $request->question_name;
        $answer->question_title = $request->question_title;
        $answer->question_type = $request->question_type;
        $answer->question_answer = $request->question_answer;
        $answer->final = $request->final;
        $answer->timer = $request->timer;

        $answer->save();

        return response()->json( $answer );
    }

}
