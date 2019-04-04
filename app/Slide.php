<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Slide extends Model
{
    protected $fillable = [
        'slide_id',
        'slide_date',
        'slide_title',
        'slide_summary',
        'slide_details',
        'image',
        'imagename',
        'image_captions',
        'thumb_image',
        'thumb_imagename',
    ];
}
