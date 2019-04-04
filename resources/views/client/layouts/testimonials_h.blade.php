
@section('testimonials_h')
    @foreach($comments as $rowComments)
        <div class="testimonial">
            <div class="wrapper top">
                <h1 class="H1"><div class="H0">Participants testimonials</div>
                    <div class="line"></div>
                    <a href="#" class="viewAll">View All</a>
                </h1>
                <div class="CB" style="height:25px;"></div>
                <p class="views">"{{$rowComments->comments}}". </p>
                <!--<div class="clip-circle"><img src="images/banner9.jpg" width="160" height="160"/></div>-->
                <div class="CB"></div>
                <p class="name"><b>{{$rowComments->full_name}}</b><br />
                    {{$rowComments->address}} <br />
                </p>
            </div><!--end of wrapper-->
        </div><!--end of testimonials-->
        @endforeach
        </div>

@endsection



