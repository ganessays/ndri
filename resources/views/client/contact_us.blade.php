@extends('client.layouts.page_master')
@section('content')

    <style>

        .videos{width:990px; margin: 0px auto 0px auto; padding:5px; overflow:hidden; min-height:500px;}

        .Con-DET{width:340px;  line-height:28px; float:left;}

        .GMAP{width:617px; border:1px solid #999; height:462px; float:right;}

        .formSub{width:340px; line-height:28px; float:left; margin-top:45px;}

        .inputname{width:215px; height:25px; border:1px solid #000!important;  border-radius:3px; margin-bottom:10px; padding:0 5px; color:#000;}


        .inputTEXT{ border-radius:3px; border:1px solid #000!important; padding:5px; width:215px; color:#000; height:90px;}


        .textT{width:100px; float:left; line-height:18px; color: #000;}
        .textT{
            color: #000!important;
        }

        .btnsubmit{background: white none repeat scroll 0 0;
            border: 1px solid #f5f5f5;
            border-radius: 3px;
            cursor: pointer;
            float: right;
            font-size: 15px;
            font-weight: bold;
            height: 38px;
            margin-right: 25px;
            margin-top: 10px;
            padding: 5px 10px;
            width: 215px;}

        .btnsubmit:hover{border:1px solid #ccc; color:#666;}


    </style>

<div class="container">
   <div class="wrapper">
       <div class="wrapperInner">
           <!-- heading-box -->
           <div class="heading-box" style="padding-bottom:24px;">
               <h1>Nepal Development Research Initiative Pvt. Ltd</h1>
               <h1>Contact Us</h1>
           </div>
           <!-- /heading-box -->
           <div class="Con-DET">
               <strong>Country Office, Nepal</strong><br/>
               Samriddha Pahad UK<br/>
               Pulchowk, Lalitpur, Nepal<br />
               Phone : +977-01-5554975<br />
               Email : consulting@ndri.com.np
           </div>
           <div class="GMAP">
               {{--<img src="{{asset('public/client/uploads/images/map.jpg')}}" height="460"/>--}}
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.2290743824897!2d85.31578231506145!3d27.679313982803524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ca33a50fed%3A0x9ba4ae52ef4b3161!2sNepal+Development+Research+Institute+(NDRI)!5e0!3m2!1sen!2snp!4v1554369768609!5m2!1sen!2snp" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
           </div>
           <div class="formSub">
               <strong>Submit Queries</strong>
               <div class="CB" style="height:15px;"></div>
               <form>
                   <div class="textT">First name : </div> <input type="text" name="first_name" class="inputname" />
                   <br>
                   <div class="textT">Last name : </div> <input type="text" name="last_name" class="inputname" />
                   <br>
                   <div class="textT">Email : </div> <input type="email" name="last_name" class="inputname" />
                   <br>
                   <div class="textT">Description :</div>
                   <textarea rows="5" cols="36" name="description" class="inputTEXT"></textarea>
                   <input type="submit" name="submit" value="Submit"  class="btnsubmit"/>
               </form>
           </div>
       </div>
       <div class="CB" style="height:25px;"></div>
   </div>
</div>


@endsection