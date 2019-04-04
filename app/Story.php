<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Story extends Model
{
    protected $fillable =[
        'date',
        'cat_id',
        'title',
        'summary',
        'descrip',
        'file',
        'filename',
        'image',
        'imagename',
        'image_caption',
        'publish',
        'url'

    ];
}
