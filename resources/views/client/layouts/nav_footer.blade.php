@section('nav_footer')

    <div class="footer">


        <div class="wrapper">

            <div class="footerMenu1">

                <p class="stay00">Get IN touch with us</p>

                <ul>
                    <li><strong>Nepal Development Research Initiative Pvt. Ltd.</strong> <li>
                    <li>Lalitpur Sub-Metropolitan City-3 <li>
                    <li>TEL   : +977-1-5526375<li>
                    <li>Email : info@ndripvtltd.com.np<li>

                </ul>
            </div><!--end of menuBox-->



            <div class="footerMenu">

                <p class="stay00">Pages</p>

                <a href="{{url('')}}"> About</a>

                <a href="{{url('')}}">Academics</a>
                <a href="{{url('faculty-name-list')}}">Faculty Name List</a>

                <a href="#">Research Capacity Building</a>
                <a href="{{url('volunteer-services')}}">Volunteer Services</a>
                <a href="{{url('researchers-staffs')}}">Researchers and Administrative Staffs</a>

                <a href="{{url('project-development')}}">Project & Development</a>

                <!-- <a href="http://ndri.com.np/get-involved-64.html">   Get Involved</a> -->

                <a href="{{url('opportunities')}}">Opportunities</a>

                <a href="{{url('contact-us')}}">Contact</a>


            </div><!--end of menuBox-->


            <!--<div class="events">
            <p class="stay00">Our Projects</p>
            <div class="CB" style="height:7px;"></div>


            <img src="images/proj.jpg" width="217" height="114"/>

            <ul>
            <li><a href="#">• SAFAL (Sustainable Access to Finance and Livlihoods in Nepal) </a><li>

            </ul>
            </div>-->


            <div class="partner">

                <p class="stay00">Quick Contact</p>
                <div class="CB" style="height:7px;"></div>



                <form class="footerFOrm" action="includes/send.php">

                    <div class="textT">First name : </div> <input type="text" name="first_name" class="inputname" required />
                    <br>
                    <div class="textT">Last name : </div> <input type="text"  name="last_name" class="inputname" required />
                    <br>
                    <div class="textT">Email : </div> <input type="email"     name="sender_email" class="inputname" required />
                    <br>
                    <div class="textT">Description :</div>
                    <textarea rows="5" cols="50" name="txtmessage" class="inputTEXT"></textarea>
                    <div class="g-recaptcha" data-sitekey="6LerkQsTAAAAADWmTH7lqcXOLdYC3nMAHfow6v6A"></div>
                    <input type="submit" name="submit" value="Submit"  class="btnsubmit"/>

                </form>

                <style>
                    .inputname{width:200px; height:30px; border:1px solid white; background:transparent; border-radius:3px; margin-bottom:5px; padding:0 5px; color:white;}


                    .inputTEXT{background:transparent; border-radius:3px; border:1px solid white; padding:5px; width:285px; color:white; height:90px;}

                    .footerFOrm{float:right;}

                    .textT{width:100px; float:left; font-family:Arial, Helvetica, sans-serif;  font-size:12px; color:white; line-height:25px;}

                    .btnsubmit{width:299px; height:30px; background:white; padding:5px 10px; cursor:pointer; border-radius:3px; border:1px solid #f5f5f5; float:right; font-family:Arial, Helvetica, sans-serif; font-size:12px; font-weight:bold; margin-top:10px;}

                    .btnsubmit:hover{border:1px solid #ccc; color:#666;}

                    .g-recaptcha{float:right !important; margin-top:5px !important;}

                    .footerMenu a{display:block; color:#fff; line-height:30px;}



                </style>



            </div>

            <div class="CB" style="height:5px;"></div>


            <div class="socialBox">



                <a href="#"><div class="face"></div></a>

                <a href="#"><div class="twit"></div></a>

                <a href="#"><div class="gmail"></div></a>

                <!--<a href="#"><div class="link"></div></a>-->

            </div>

            <div class="CB" style="height:5px;"></div>


        </div>
    </div><!--end of footer-->

    <div class="copy">
        <div class="wrapper">
            <p>

                Copyright 2015 &copy; NDRI, All Right Reserved.</p>
            <p>
                <!-- Start of StatCounter Code for Default Guide -->
                This website has been visited
                <script type="text/javascript">
                    var sc_project=10922274;
                    var sc_invisible=0;
                    var sc_security="621cfff6";
                    var sc_text=2;
                    var scJsHost = (("https:" == document.location.protocol) ?
                        "https://secure." : "http://www.");
                    document.write("<sc"+"ript type='text/javascript' src='" + scJsHost+
                        "statcounter.com/counter/counter.js'></"+"script>");
                </script>
            <noscript><div class="statcounter"><a title="shopify site analytics"
                                                  href="http://statcounter.com/shopify/" target="_blank"><img
                                class="statcounter" src="//c.statcounter.com/10922274/0/621cfff6/0/"
                                alt="shopify site analytics"></a></div></noscript>
            times.
            <!-- End of StatCounter Code for Default Guide -->
            </p>
        </div>
    </div>





    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-3770976-57', 'auto');
        ga('send', 'pageview');

    </script>



    </body>
    </html>




@endsection