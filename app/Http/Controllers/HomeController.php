<?php

namespace App\Http\Controllers;

use App\Menu;
use App\Menus;
use App\NewsCategory;
use App\tbl_page;
use Illuminate\Http\Request;
use App\Comments;
use App\News;
use App\Table;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
//    public function __construct()
//    {
//        $this->middleware('auth');
//    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $title ="Home | NDRI | Quality research and academic programs";
        $news =News::all();

        $comments =Comments::all();

        return view('client.index' ,compact('news','comments','Menus','title'));
    }
    public function contact_us(){
        $title ="Contact Us | NDRI | Quality research and academic programs";
        return view('client.contact_us',compact('title'));
    }
    public function news(){
        $title ="News | NDRI | Quality research and academic programs";
        $NewsPage = News::all();
        return view('client.news',compact('NewsPage','title'));
    }
    public function about_us(){
        $title ="About Us | NDRI | Quality research and academic programs";
        return view('client.about_us',compact('table','title'));
    }
    public function get_involved(){
        $title ="Get Involved | NDRI | Quality research and academic programs";
        return view('client.get_involved',compact('title'));
    }
    public function introduction(){
        $title ="Introduction | NDRI | Quality research and academic programs";
        return view('client.introduction',compact('title'));
    }
    public function opportunities(){
        $title ="Opportunities | NDRI | Quality research and academic programs";
        return view('client.opportunities',compact('title'));
    }
    public function project_development(){
        $title ="Project-Development | NDRI | Quality research and academic programs";
        return view('client.project_development',compact('title'));
    }
    public function organizational_objectives(){
        $title ="Organizational-Objectives | NDRI | Quality research and academic programs";
        return view('client.organizational_objectives',compact('title'));
    }
    public function board_of_director(){
        $title ="Board of Directors | NDRI | Quality research and academic programs";
        return view('client.board_of_director',compact('title'));
    }
    public function hari_dhakal(){
        $title ="Hari Dhakal | NDRI | Quality research and academic programs";
        return view('client.hari_dhakal',compact('title'));
    }
    public function volunteer_services(){
        $title ="Hari Dhakal | NDRI | Quality research and academic programs";
        return view('client.volunteer_services',compact('title'));
    }
    public function researchers_staffs(){
        $title ="Researchers and Administrative Staffs | NDRI | Quality research and academic programs";
        return view('client.researchers_staffs',compact('title'));
    }
    public function faculty_name_list(){
        $title ="Researchers and Administrative Staffs | NDRI | Quality research and academic programs";
        return view('client.faculty_name_list',compact('title'));
    }
}
