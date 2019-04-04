@include('client.layouts.header')
@include('client.layouts.nav_header')
@include('client.layouts.banner')
@include('client.layouts.ndri_content')
@include('client.layouts.testimonials_h')

@include('client.layouts.footer')
@include('client.layouts.nav_footer')

@yield('header')
@yield('nav_header')
@yield('banner')
@yield('ndri_content')
@yield('testimonials_h')


@yield('content')

@yield('footer')
@yield('nav_footer')
