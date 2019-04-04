<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class tbl_page extends Model
{
    protected $fillable =[
        'page_id',
        'page_title',
        'page_heading',
        'page_name',
        'page_summary',
        'position',
        'parent_id',
        'recordListingID',
        'page_details',
        'is_link',
        'page_link',
        'page_keywords',
        'image',
        'file',
        'filename',
        'page_status',
        'creation_date',
        'has_content',
        'updated_date'

    ];
}
