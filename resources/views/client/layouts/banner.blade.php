@section('banner')
    <div class="CB"></div>



    <div class="banner">



        <div id="sliderb_container" style="position: relative; width: 1300px; height: 452px; overflow: hidden; ">





            <!-- Slides Container -->

            <div u="slides" style="cursor: move; position: absolute; left: 0px; top: 0px; width:1300px; height: 505px;

            overflow: hidden;">

                <div>

                    <img u=image src="{{asset('public/client')}}/images/banner65.jpg" />
                    <div u="thumb">NDRI</div>

                </div>

                <div>

                    <img u=image src="{{asset('public/client')}}/images/banner63.jpg" />
                    <div u="thumb">NDRI</div>

                </div>
                <div>

                    <img u=image src="{{asset('public/client')}}/images/banner64.jpg" />
                    <div u="thumb">NDRI</div>

                </div>


                <div>

                    <img u=image src="{{asset('public/client')}}/images/banner2.jpg" />

                    <div u="thumb">Economic Development, Infrastructure and Planning</div>

                </div>

                <div>

                    <img u=image src="{{asset('public/client')}}/images/banner3.jpg" />

                    <div u="thumb">Poverty Reduction and Sustainable Livelihood</div>

                </div>

                <div>

                    <img u=image src="{{asset('public/client')}}/images/banner4.jpg" />

                    <div u="thumb">Climate Change, Environment, and Agriculture and Food Policy</div>

                </div>



            </div>



            <!-- ThumbnailNavigator Skin Begin -->

            <!-- ThumbnailNavigator Skin Begin -->

            <div  u="thumbnavigator" class="sliderb-T" style="position: absolute; bottom: 100px; right: 0px; height:45px; width:600px;">

                <div style="filter: alpha(opacity=40); opacity:0.4; position: absolute; display: block;

                background-color: #000000; top: 0px; left: 0px; width: 100%; height: 100%;">

                </div>

                <!-- Thumbnail Item Skin Begin -->

                <div u="slides">

                    <div u="prototype" style="position: absolute; width: 600px; height: 45px; top: 0; left: 0;">

                        <thumbnailtemplate style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; font-family:'Open Sans'; font-weight: normal; color:#fff; line-height: 45px; font-size:17px; padding-left:10px;"></thumbnailtemplate>

                    </div>

                </div>

                <!-- Thumbnail Item Skin End -->

            </div>

            <!-- ThumbnailNavigator Skin End -->

            <!-- ThumbnailNavigator Skin End -->



            <!-- Bullet Navigator Skin Begin -->

            <!-- jssor slider bullet navigator skin 01 -->



            <!-- bullet navigator container -->

            <div u="navigator" class="jssorb01" style="position: absolute; top: 16px; right: 10px;">

                <!-- bullet navigator item prototype -->

                <div u="prototype" style="POSITION: absolute; WIDTH: 12px; HEIGHT: 12px;"></div>

            </div>

            <!-- Bullet Navigator Skin End -->





            <span u="arrowleft" class="jssora05l" style="width: 40px; height: 40px; top: 245px; left: 8px;">

        </span>

            <!-- Arrow Right -->

            <span u="arrowright" class="jssora05r" style="width: 40px; height: 40px; top: 245px; right: 8px">

        </span>



            <script>

                jssor_sliderb_starter('sliderb_container');

            </script>

        </div>



    </div><!--end of banner-->



    <div class="CB" style="height:25px;"></div>



@endsection