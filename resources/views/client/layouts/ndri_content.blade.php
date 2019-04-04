@section('ndri_content')
    <div class="wrapper">

{{--News Start--}}

        <div class="news">

            <a href="#"><p class="NewsP">NDRI Updates</p></a>

            <p class="newsP1">


            <div id="slider1_container" style="position: relative; top: 0px; left: 0px; width: 720px;height: 30px; float:left;" class="respoHT" >
                <!-- Slides Container -->
                <div u="slides" style="cursor: move; position: absolute; right: 0px; top: 12px; width: 720px; height: 30px;
            overflow: hidden;" id="respoH">
                    @foreach($news as $newsCount=>$newsShow)

                        <div>
                            <a href="#" class="p3"><font color="#E67E22" style="margin-left:10px;">
                                    <?php echo date('F d, Y',strtotime(''))?>{{$newsShow->news_date}}</font>
                                {{str_limit($newsShow->title,90)}}
                            </a>
                        </div>
                        @endforeach
                </div>
                <span u="arrowleft" class="jssorb08l" style="width: 30px; height: 38px; top: 8.4px; right: 15px; margin-left:404px;" title="previous">
        </span>
                <!-- Arrow Right -->
                <span u="arrowright" class="jssorb08r" style="width: 30px; height: 38px; top: 8.4px; right: 8px;  margin-left:440px;" title="next">
        </span>
                <!-- Arrow Navigator Skin End -->
            </div>
            </p>
        </div>
        <style>
            .p3{line-height:15px; color:#000;}

        </style>

{{--News End--}}
        <div class="CB" style="height:9px;"></div>
        <div class="downBox">
            <div class="box1">
                <div id="talkbubble">2014</div>
                <p class="p1">Establishment</p>
                <p class="p2">Nepal Development Research Initiative Private Limited was established under the Company Act of the Government of Nepal in 2014...</p>
            </div>
            <div class="box1">
                <div id="talkbubble">6</div>
                <p class="p1">Objectives</p>
                <p class="p2">Carry out high quality research and academic programs on various socioeconomic issues and broad areas of economic development...</p>
            </div>
            <div class="box1">
                <div id="talkbubble">9</div>
                <p class="p1">Focal Areas</p>
                <p class="p2"> Economic Development & Infrastructural Planning. Poverty Reduction and Sustainable Livelihood.</p>
            </div>
            <div class="box1 borderNOne">
                <div id="talkbubble">100+</div>
                <p class="p1">Trainee</p>
                <p class="p2">Nepal Development Research Initiative (NDRI) have 100 plus trainee till now. Ndri enhance research and proposal writing capacity for different...</p>
            </div>
        </div><!--end of downbox-->
        <div class="CB"></div>
        <div class="divider"></div>
        <div class="CB" style="height:10px;"></div>
        {{--Activites start --}}
        <h1 class="H1"><div class="H0">NDRI in Capacity Building</div>
            <div class="line"></div>
            <a href="#" class="viewAll">View All</a>
        </h1>
        <div class="eventBox" style="padding:35px 0px;">
            @foreach($news as $rowActivity)
            <div class="training1">
                {{--<img src="{{asset('public/uploads/banner').'/'.$searchValue->featured_image}}" alt="">--}}
                <img src="{{asset('public/client/uploads/news/image/').'/'.$rowActivity->image}}" width="315" height="115" />
                <a href="#"><h2 class="HEADING">{{str_limit($rowActivity->title,140)}}</h2></a>
                <p class="DATE"><?php echo date('F d, Y')?>{{$rowActivity->news_date}}</p>
                <p class="DATE">{{str_limit($rowActivity->summary),200}}</p>
            </div>
          @endforeach
        </div><!--end of events-->
    </div><!--end of wrapper-->
    <div class="CB" style="height:44px;"></div>
    {{--Activites End --}}
@endsection