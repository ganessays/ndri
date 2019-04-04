<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/','HomeController@index');
Route::get('contact-us','HomeController@contact_us');
Route::get('about-us','HomeController@about_us');
Route::get('get-involved','HomeController@get_involved');
Route::get('news','HomeController@news');
Route::get('introduction','HomeController@introduction');
Route::get('opportunities','HomeController@opportunities');
Route::get('project-development','HomeController@project_development');
Route::get('organizational-objectives','HomeController@organizational_objectives');
Route::get('board-of-directors','HomeController@board_of_director');
Route::get('hari-dhakal','HomeController@hari_dhakal');
Route::get('volunteer-services','HomeController@volunteer_services');
Route::get('researchers-staffs','HomeController@researchers_staffs');
Route::get('faculty-name-list','HomeController@faculty_name_list');
