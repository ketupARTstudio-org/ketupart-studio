<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="KetupArt Studio, Technology Solution craft for Industries and SMEs.">
        <meta name="keywords" content="ketupart, development, web">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta property="og:locale" content="en_US">
        <meta property="og:type" content="article">
        <meta property="og:title" content="Ketupart Studio">
        <meta property="og:url" content="">
        <meta property="og:site_name" content="KetupArt Studio">
        <meta name="application-name" content="KetupArt Studio">

        <title inertia>{{ config('app.name', 'KetupArt') }}</title>


        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Favicon -->
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
        
        <!-- Vendor Stylesheet -->
        <link rel="stylesheet" href="/assets/abstract/css/vendor/bootstrap.min.css">
        <link rel="stylesheet" href="/assets/abstract/css/vendor/font-awesome.css">
        <link rel="stylesheet" href="/assets/abstract/css/vendor/slick.css">
        <link rel="stylesheet" href="/assets/abstract/css/vendor/slick-theme.css">
        <link rel="stylesheet" href="/assets/abstract/css/vendor/sal.css">
        <link rel="stylesheet" href="/assets/abstract/css/vendor/magnific-popup.css">
        <link rel="stylesheet" href="/assets/abstract/css/vendor/green-audio-player.min.css">
        <link rel="stylesheet" href="/assets/abstract/css/vendor/odometer-theme-default.css">

        <!-- Site Stylesheet -->
        <link rel="stylesheet" href="/assets/abstract/css/app.css">
        <link rel="stylesheet" href="/assets/abstract/css/custom.css">

        <script src="https://kit.fontawesome.com/116c15aa0d.js" crossorigin="anonymous"></script>
       
        <!-- Scripts -->
        @routes
        @vite('resources/js/app.js')
        @inertiaHead
        @laravelPWA
    </head>
    <body class="antialiased sticky-header">
        @inertia

        <!-- Jquery Js -->
        <script src="/assets/abstract/js/vendor/jquery-3.6.0.min.js"></script>
        <script src="/assets/abstract/js/vendor/bootstrap.min.js"></script>
        <script src="/assets/abstract/js/vendor/isotope.pkgd.min.js"></script>
        <script src="/assets/abstract/js/vendor/imagesloaded.pkgd.min.js"></script>
        <script src="/assets/abstract/js/vendor/odometer.min.js"></script>
        <script src="/assets/abstract/js/vendor/jquery-appear.js"></script>
        <script src="/assets/abstract/js/vendor/slick.min.js"></script>
        <script src="/assets/abstract/js/vendor/sal.js"></script>
        <script src="/assets/abstract/js/vendor/jquery.magnific-popup.min.js"></script>
        <script src="/assets/abstract/js/vendor/js.cookie.js"></script>
        <!-- <script src="/assets/abstract/js/vendor/jquery.style.switcher.js"></script> -->
        <script src="/assets/abstract/js/vendor/jquery.countdown.min.js"></script>
        <script src="/assets/abstract/js/vendor/tilt.js"></script>
        <script src="/assets/abstract/js/vendor/green-audio-player.min.js"></script>
        <script src="/assets/abstract/js/vendor/jquery.nav.js"></script>

        <!-- Site Scripts -->
        <!-- <script src="/assets/abstract/js/app.js"></script> -->
    </body>
</html>
