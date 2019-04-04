<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $fillable =[
        'news_id',
        'news_date',
        'cat_id',
        'title',
        'summary',
        'descrip',
        'url',
        'file',
        'filename',
        'image',
        'imagename',
        'image_caption',
        'publish',
        'hits',
        'is_feature'
        ];
}






