@section('header')
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="author" content="Codrops" />
    @if(isset($title))
        <title>{!! $title !!}</title>
    <title>NDRI | Quality research and academic programs </title>
    @endif
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="{{asset('public/client/css/main.css')}}" type="text/css" media="screen" />
    <link rel="stylesheet" href="{{asset('public/client/css')}}/reset.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="{{asset('public/client/css')}}/menu.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="{{asset('public/client/css')}}/slider.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="{{asset('public/client/css')}}/responsive.css" type="text/css" media="screen"/>

    <script type="text/javascript" src="{{asset('public/client/js')}}/jquery-1.9.1.min.js"></script>

    <script type="text/javascript" src="{{asset('public/client/js')}}/jssor.core.js"></script>
    <script type="text/javascript" src="{{asset('public/client/js')}}/jssor.utils.js"></script>
    <script type="text/javascript" src="{{asset('public/client/js')}}/jssor.slider.js"></script>

    <script type="javascript" src="{{asset('public/client/js')}}/script.js"></script>
<script type="text/javascript" src="{{asset('public/client/js')}}/jssor.core.js"></script>
<script type="text/javascript" src="{{asset('public/client/js')}}/jssor.utils.js"></script>
<script type="text/javascript" src="{{asset('public/client/js')}}/jssor.slider.js"></script>
    <script>
        jssor_sliderb_starter = function (containerId) {
            //Reference http://www.jssor.com/development/slider-with-slideshow.html
            //Reference http://www.jssor.com/development/tool-slideshow-transition-viewer.html

            var _SlideshowTransitions = [
                //Fade in R
                {$Duration: 1200, $During: { $Left: [0.3, 0.7] }, $FlyDirection: 2, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 0.3, $Opacity: 2 }
                //Fade out L
                , { $Duration: 1200, $SlideOut: true, $FlyDirection: 1, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 0.3, $Opacity: 2 }
            ];

            var options = {
                $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
                $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
                $AutoPlayInterval: 4000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
                $PauseOnHover: 0,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, default value is 3

                $ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
                $SlideDuration: 500,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
                //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
                //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
                $SlideSpacing: 0, 					                //[Optional] Space between each slide in pixels, default value is 0
                $DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
                $ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
                $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
                $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, default value is 1
                $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

                $SlideshowOptions: {                                //[Optional] Options to specify and enable slideshow or not
                    $Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
                    $Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
                    $TransitionsOrder: 1,                           //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
                    $ShowLink: true                                    //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
                },

                $BulletNavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
                    $Class: $JssorBulletNavigator$,                       //[Required] Class to create navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
                    $SpacingX: 10,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
                    $SpacingY: 10                                    //[Optional] Vertical space between each item in pixel, default value is 0
                },

                $ArrowNavigatorOptions: {
                    $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
                    $ChanceToShow: 2                                //[Required] 0 Never, 1 Mouse Over, 2 Always
                },

                $ThumbnailNavigatorOptions: {
                    $Class: $JssorThumbnailNavigator$,              //[Required] Class to create thumbnail navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $ActionMode: 0,                                 //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
                    $DisableDrag: true                              //[Optional] Disable drag or not, default value is false
                }
            };

            var jssor_sliderb = new $JssorSlider$(containerId, options);
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizes
            function ScaleSlider() {
                var parentWidth = jssor_sliderb.$Elmt.parentNode.clientWidth;
                if (parentWidth)
                    jssor_sliderb.$SetScaleWidth(Math.min(parentWidth, 1920));
                else
                    $JssorUtils$.$Delay(ScaleSlider, 30);
            }

            ScaleSlider();
            $JssorUtils$.$AddEvent(window, "load", ScaleSlider);

            if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
                $JssorUtils$.$OnWindowResize(window, ScaleSlider);
            }
            //responsive code end
        };
    </script>

    <script>
        jQuery(document).ready(function ($) {
            var options = {
                $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
                $PlayOrientation: 2,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, default value is 1
                $DragOrientation: 2,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

                $ArrowNavigatorOptions: {
                    $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $AutoCenter: 1,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
                }
            };

            var jssor_slider1 = new $JssorSlider$("slider1_container", options);
        });
    </script>

    <script>
        ( function( $ ) {
            $( document ).ready(function() {
                $('#cssmenu').prepend('<div id="menu-button"></div>');
                $('#cssmenu #menu-button').on('click', function(){
                    var menu = $(this).next('ul');
                    if (menu.hasClass('open')) {
                        menu.removeClass('open');
                    }
                    else {
                        menu.addClass('open');
                    }
                });
            });
        } )( jQuery );

    </script>
    <script src='https://www.google.com/recaptcha/api.js'></script>

</head>

<body>
{{--<div class="underC" style="color:white; padding-top:5px; text-align:center;width:100%; background:blue; height:32px;">--}}

    {{--<h1>--}}
        {{--<strong class="ribbon-content">This Website Under Construction</strong>--}}
    {{--</h1>--}}

{{--</div>--}}
<div class="head">


    <div class="wrapperTop">

        <div class="wrapper">

            <div class="logo">

                <a href ="http://ndri.com.np/"><img src="{{asset('public/client/images/logo.png')}}" alt=""></a>

            </div>

            <div class="CompanyN" style="">
                <h2>Nepal Development Research Initiative  Pvt. Ltd.</h2>
            </div>

            <!--/CompanyN-->

        </div><!--end of wrapper-->
    </div><!--/wrapperTop-->
</div><!--end of header-->

<div class="menuBox" style="width:100%;">

    <div class="wrapper">

        <div id='cssmenu'>

            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link active" href="{{url('')}}">Home</a>
                </li>
                {{--<li class="nav-item">--}}
                    {{--<a class="nav-link" href="about-us">About</a>--}}
                {{--</li>--}}
                <li class="nav-item">
                    <a class="nav-link" href="{{url('introduction')}}">Introduction</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{url('get-involved')}}">Get Involved</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{url('project-development')}}">Project & Development</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{url('organizational-objectives')}}">Organizational Objectives</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{url('board-of-directors')}}">Board of Directors</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{url('contact-us')}}">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</div>


<div class="CB"></div>
    @endsection