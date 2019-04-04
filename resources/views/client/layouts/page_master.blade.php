@include('client.layouts.header')
@include('client.layouts.nav_header')


@include('client.layouts.footer')
@include('client.layouts.nav_footer')

@yield('header')
@yield('nav_header')
@yield('content')

@yield('footer')
@yield('nav_footer')
