<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comments extends Model
{
    protected $fillable =[
        'full_name',
        'address',
        'email',
        'summary',
        'comments',
        'commented_date',
        'status',
        'image',
        'imagename',
        'reguser_id',
        'posted_by',
        'view_count'
    ];
}
