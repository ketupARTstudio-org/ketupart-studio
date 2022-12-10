<script setup>
import { ref } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-vue3';
import ApplicationMark from '@/Components/ApplicationMark.vue';
import Banner from '@/Components/Banner.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';

defineProps({
    title: String,
});

(function(window, document, $, undefined) {
    'use strict';

    var axilInit = {
        i: function(e) {
            axilInit.s();
            axilInit.methods();
        },

        s: function(e) {
            this._window = $(window),
                this._document = $(document),
                this._body = $('body'),
                this._html = $('html')
        },

        methods: function(e) {
            axilInit.w();
            axilInit.contactForm();
            axilInit.axilBackToTop();
            axilInit.stickyHeaderMenu();
            axilInit.mobileMenuActivation();
            axilInit.salActivation();
            axilInit.axilMasonary();
            axilInit.counterUp();
            axilInit.axilSlickActivation();
            axilInit.magnificPopupActivation();
            axilInit.countdownInit('.countdown', '2022/12/01');
            axilInit.tiltAnimation();
            axilInit.menuLinkActive();
            axilInit.audioPlayerActivation();
            axilInit.onePageNav();
            axilInit.pricingPlan();
            axilInit.marqueImages();
            axilInit.axilHover();
            axilInit.onePageTopFixed();
            axilInit.blogModalActivation();
            axilInit.portfolioModalActivation();
            axilInit.caseModalActivation();
            axilInit.themeColorSet();
           
        },

        w: function(e) {
            this._window.on('load', axilInit.l).on('scroll', axilInit.res)
        },

        contactForm: function() {
            $('.axil-contact-form').on('submit', function(e) {
                e.preventDefault();
                var _self = $(this);
                var _selector = _self.closest('input,textarea');
                _self.closest('div').find('input,textarea').removeAttr('style');
                _self.find('.error-msg').remove();
                _self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');
                var data = $(this).serialize();
                $.ajax({
                    url: 'mail.php',
                    type: 'post',
                    dataType: 'json',
                    data: data,
                    success: function(data) {
                        _self.closest('div').find('button[type="submit"]').removeAttr('disabled');
                        if (data.code === false) {
                            _self.closest('div').find('[name="' + data.field + '"]');
                            _self.find('.btn-primary').after('<div class="error-msg"><p>*' + data.err + '</p></div>');
                        } else {
                            $('.error-msg').hide();
                            $('.form-group').removeClass('focused');
                            _self.find('.btn-primary').after('<div class="success-msg"><p>' + data.success + '</p></div>');
                            _self.closest('div').find('input,textarea').val('');

                            setTimeout(function() {
                                $('.success-msg').fadeOut('slow');
                            }, 5000);
                        }
                    }
                });
            });
        },

        axilBackToTop: function() {
            var btn = $('#backto-top');
            $(window).on('scroll', function() {
                if ($(window).scrollTop() > 300) {
                    btn.addClass('show');
                } else {
                    btn.removeClass('show');
                }
            });
            btn.on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: 0
                }, '300');
            });
        },

        themeColorSet: function() {

            var defaultColor = 'active-light-mode';

            if ($('body').hasClass('active-dark-mode')) {
                $('body').removeClass('active-light-mode');
            }else if ($('body').hasClass('active-light-mode')) {
                $('body').removeClass('active-dark-mode');
            }else {
                $('body').addClass(defaultColor);
            }

        },

        stickyHeaderMenu: function() {

            $(window).on('scroll', function() {
                // Sticky Class Add
                if ($('body').hasClass('sticky-header')) {
                    var stickyPlaceHolder = $('#axil-sticky-placeholder'),
                        menu = $('.axil-mainmenu'),
                        menuH = menu.outerHeight(),
                        topHeaderH = $('.axil-header-top').outerHeight() || 0,
                        targrtScroll = topHeaderH + 200;
                    if ($(window).scrollTop() > targrtScroll) {
                        menu.addClass('axil-sticky');
                        stickyPlaceHolder.height(menuH);
                    } else {
                        menu.removeClass('axil-sticky');
                        stickyPlaceHolder.height(0);
                    }
                }
            });
        },

        mobileMenuActivation: function(e) {
            
            $('.menu-item-has-children > a').on('click', function(e) {
                
                var targetParent = $(this).parents('.mainmenu-nav'),
                    target = $(this).siblings('.axil-submenu'),
                    targetSiblings = $(this).parent('.menu-item-has-children').siblings().find('.axil-submenu');
                
                if (targetParent.hasClass('offcanvas')) {
                    $(target).slideToggle(400);
                    $(targetSiblings).slideUp(400);
                    $(this).parent('.menu-item-has-children').toggleClass('open');
                    $(this).parent('.menu-item-has-children').siblings().removeClass('open');
                }

            });
           
            function resizeClassAdd() {
                if (window.matchMedia('(min-width: 992px)').matches) {
                    $('body').removeClass('mobilemenu-active');
                    $('#mobilemenu-popup').removeClass('offcanvas show').removeAttr('style');
                    $('.axil-mainmenu .offcanvas-backdrop').remove();
                    $('.axil-submenu').removeAttr('style');
                } else {
                    $('body').addClass('mobilemenu-active');
                    $('#mobilemenu-popup').addClass('offcanvas');
                    $('.menu-item-has-children > a').on('click', function(e) {
                        e.preventDefault();
                    });
                }
            }

            $(window).on('resize', function() {
                resizeClassAdd();
            });
            
            resizeClassAdd();
        },

        salActivation: function() {
            sal({
                threshold: 0.1,
                once: true
            });
        },

        axilMasonary: function () {
            $('.axil-isotope-wrapper').imagesLoaded(function () {
                // filter items on button click
                $('.isotope-button').on('click', 'button', function () {
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({
                        filter: filterValue
                    });
                });
                
                // init Isotope
                var $grid = $('.isotope-list').isotope({
                    itemSelector: '.project',
                    percentPosition: true,
                    transitionDuration: '0.7s',
                    layoutMode: 'fitRows',
                    masonry: {
                        // use outer width of grid-sizer for columnWidth
                        columnWidth: 1,
                    }
                });
            });
        
            $('.isotope-button button').on('click', function (event) {
                $(this).siblings('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
                event.preventDefault();
            });

            // Masonry
            var galleryIsoContainer = $('#no-equal-gallery');
            if (galleryIsoContainer.length) {
                var blogGallerIso = galleryIsoContainer.imagesLoaded(function () {
                    blogGallerIso.isotope({
                        itemSelector: '.no-equal-item',
                        masonry: {
                            columnWidth: '.no-equal-item'
                        }
                    });
                });
            }
        },

        counterUp: function () {
			
            var elementSelector = $('.count');
            elementSelector.each(function(){
                elementSelector.appear(function(e) {
                    var el = this;
                    var updateData = $(el).attr("data-count");
                    var od = new Odometer({
                        el: el,
                        format: 'd',
                        duration: 2000
                    });
                    od.update(updateData);
                });
            });
        },

        axilSlickActivation: function(e) {
            $('.slick-slider').slick();
        },

        magnificPopupActivation: function() {

            var yPopup = $('.popup-youtube');
            if (yPopup.length) {
                yPopup.magnificPopup({
                    disableOn: 300,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false
                });
            }
        },

        countdownInit: function(countdownSelector, countdownTime) {
            var eventCounter = $(countdownSelector);
            if (eventCounter.length) {
                eventCounter.countdown(countdownTime, function(e) {
                    $(this).html(
                        e.strftime(
                            "<div class='countdown-section'><div><div class='countdown-number'>%D</div> <div class='countdown-unit'>Day%!D</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%H</div> <div class='countdown-unit'>Hour%!H</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%M</div> <div class='countdown-unit'>Minutes</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%S</div> <div class='countdown-unit'>Seconds</div> </div></div>"
                        )
                    );
                });
            }
        },
        
        tiltAnimation: function () {
            var _tiltAnimation = $('.paralax-image');
            if (_tiltAnimation.length) {
                _tiltAnimation.tilt({
                    max: 12,
                    speed: 1e3,
                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                    transition: !1,
                    perspective: 1e3,
                    scale: 1
                })
            }
        },

        menuLinkActive: function () {
            var currentPage = location.pathname.split("/"),
                current = currentPage[currentPage.length-1];
            $('.mainmenu li a, .main-navigation li a').each(function(){
                var $this = $(this);
                if($this.attr('href') === current){
                    $this.addClass('active');
                    $this.parents('.menu-item-has-children').addClass('menu-item-open')
                }
            });
        },

        audioPlayerActivation: function () {
            GreenAudioPlayer.init({
                selector: '.green-player',
                stopOthersOnPlay: true
            })
        },

        onePageNav: function () {
            $('#onepagenav').onePageNav({
                currentClass: 'current',
                changeHash: false,
                scrollSpeed: 500,
                scrollThreshold: 0.2,
                filter: '',
                easing: 'swing',
            });
        },

        pricingPlan: function () {
            var yearlySelectBtn = $('#yearly-plan-btn'),
                monthlySelectBtn = $('#monthly-plan-btn'),
                monthlyPrice = $('.monthly-pricing'),
                yearlyPrice = $('.yearly-pricing');
               
            
            $(monthlySelectBtn).on('click', function() {
                $(this).addClass('active').parent('.nav-item').siblings().children().removeClass('active');
                monthlyPrice.css('display', 'block');
                yearlyPrice.css('display', 'none');

            });
            
            $(yearlySelectBtn).on('click', function() {
                $(this).addClass('active').parent('.nav-item').siblings().children().removeClass('active');
                monthlyPrice.css('display', 'none');
                yearlyPrice.css('display', 'block');
            });
        },

        marqueImages: function () {
            $('.marque-images').each(function () {
                var t = 0;
                var i = 1;
                var $this = $(this);
                setInterval(function () {
                    t += i;
                    $this.css('background-position-x', -t + 'px');
                }, 10);
            });
        },

        axilHover : function () {
            $('.services-grid, .counterup-progress, .testimonial-grid, .pricing-table, .brand-grid, .blog-list, .about-quality, .team-grid, .splash-hover-control').mouseenter(function() {
                var self = this;
                setTimeout(function() {
                    $('.services-grid.active, .counterup-progress.active, .testimonial-grid.active, .pricing-table.active, .brand-grid.active, .blog-list.active, .about-quality.active, .team-grid.active, .splash-hover-control.active').removeClass('active');
                    $(self).addClass('active');
                }, 0);
                
            });
        },

        onePageTopFixed : function () {
            if ($('.onepagefixed').length) {
                var fixedElem = $('.onepagefixed'),
                    distance = fixedElem.offset().top - 100,
                    $window = $(window),
                    totalDistance = $('.service-scroll-navigation-area').outerHeight() + distance;

                $(window).on('scroll', function () {
                    if ( $window.scrollTop() >= distance ) {
                        fixedElem.css({
                            position: 'fixed',
                            left: '0',
                            right: '0',
                            top: '0',
                            zIndex: '5'
                        });
                    }else {
                        fixedElem.removeAttr('style');
                    }

                    if ($window.scrollTop() >= totalDistance ) {
                        fixedElem.removeAttr('style');
                    }
                });
            }
        },

        blogModalActivation : function () {

            var modalBox = $('.op-blog-modal');
            var blogList = $('.blog-list');
            var modalClose = modalBox.find('.close');

            if ($('body').hasClass('onepage-template')) {
                
                blogList.each(function() {
                    
                    var $this = $(this);
                    var buttons = $this.find('.post-thumbnail a, .title a, .more-btn');
                    var mainImg = $this.find('.modal-thumb');
                    var title = $this.find('.title');
                    var paragraph = $this.find('.post-content p');
                    var socialShare = $this.find('.blog-share');
                    
                    buttons.on('click', function(e){
                        $('body').addClass('op-modal-open');
                        modalBox.addClass('open');
                        mainImg.clone().appendTo('.op-modal-content .post-thumbnail');
                        title.clone().appendTo('.op-modal-content .post-content');
                        paragraph.clone().appendTo('.op-modal-content .post-content');
                        socialShare.clone().appendTo('.op-modal-content .post-content');
                        e.preventDefault();
                        
                    })
                    
                });
                
                modalClose.on('click', function(e) {
                    $('body').removeClass('op-modal-open');
                    modalBox.removeClass('open');
                    modalBox.find('.op-modal-content .post-content').html('');
                    modalBox.find('.op-modal-content .post-thumbnail').html('');
                    e.preventDefault();
                });

                $('#onepagenav li a').on('click', function() {
                    var popupMenuWrap = $('#mobilemenu-popup .mobile-menu-close, .header-offcanvasmenu .btn-close');
                    if ($('#mobilemenu-popup, .header-offcanvasmenu').hasClass('offcanvas')) {
                        popupMenuWrap.trigger('click');
                        
                    }
                });
            }
        },

        portfolioModalActivation : function () {
            
            var modalBox = $('.op-portfolio-modal');
            var projectList = $('.project-grid');
            var modalClose = modalBox.find('.close');

            if ($('body').hasClass('onepage-template')) {
                
                projectList.each(function() {
                    
                    var $this = $(this);
                    var buttons = $this.find('.thumbnail a, .title a');
                    var mainImg = $this.find('.thumbnail .modal-thumb');
                    var title = $this.find('.title');
                    var paragraph = $this.find('.content p');
                    var socialShare = $this.find('.project-share');
                    buttons.on('click', function(e){
                        $('body').addClass('op-modal-open');
                        modalBox.addClass('open');
                        mainImg.clone().appendTo('.op-modal-content .portfolio-thumbnail');
                        title.clone().appendTo('.op-modal-content .portfolio-content');
                        paragraph.clone().appendTo('.op-modal-content .portfolio-content');
                        socialShare.clone().appendTo('.op-modal-content .portfolio-content');
                        e.preventDefault();
                        
                    })
                    
                });
                
                modalClose.on('click', function(e) {
                    $('body').removeClass('op-modal-open');
                    modalBox.removeClass('open');
                    modalBox.find('.op-modal-content .portfolio-content').html('');
                    modalBox.find('.op-modal-content .portfolio-thumbnail').html('');
                    e.preventDefault();
                });
            }
        },

        caseModalActivation : function () {
            
            var modalBox = $('.op-case-modal');
            var caseList = $('.case-study-featured');
            var modalClose = modalBox.find('.close');

            if ($('body').hasClass('onepage-template')) {
                
                caseList.each(function() {
                    
                    var $this = $(this);
                    var buttons = $this.find('.axil-btn');
                    var title = $this.find('.title');
                    var paragraph = $this.find('.section-heading p');

                    buttons.on('click', function(e){
                        $('body').addClass('op-modal-open');
                        modalBox.addClass('open');
                        title.clone().appendTo('.op-modal-content .case-content');
                        paragraph.clone().appendTo('.op-modal-content .case-content');
                        e.preventDefault();
                        
                    })
                    
                });
                
                modalClose.on('click', function(e) {
                    $('body').removeClass('op-modal-open');
                    modalBox.removeClass('open');
                    modalBox.find('.op-modal-content .case-content').html('');
                    e.preventDefault();
                });
            }
        },
    }

    setTimeout(() => {
        axilInit.i();
        console.log('loaded');
      }, "500")



})(window, document, jQuery);
</script>

<template>
    <div>
        <!-- Page Content -->
        <main>

               <!--[if lte IE 9]>
                <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
                <![endif]-->
                <a href="#main-wrapper" id="backto-top" class="back-to-top">
                    <i class="far fa-angle-double-up"></i>
                </a>

                <!-- Preloader Start Here -->
                <div id="preloader"></div>
                <!-- Preloader End Here -->

                <div class="my_switcher d-none d-lg-block">
                    <ul>
                        <li title="Light Mode">
                            <a href="javascript:void(0)" class="setColor light" data-theme="light">
                                <i class="fal fa-lightbulb-on"></i>
                            </a>
                        </li>
                        <li title="Dark Mode">
                            <a href="javascript:void(0)" class="setColor dark" data-theme="dark">
                                <i class="fas fa-moon"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div id="main-wrapper" class="main-wrapper">

                    <!--=====================================-->
                    <!--=        Header Area Start       	=-->
                    <!--=====================================-->
                    <header class="header axil-header header-style-1">
                        <div id="axil-sticky-placeholder"></div>
                        <div class="axil-mainmenu">
                            <div class="container">
                                <div class="header-navbar">
                                    <div class="header-logo">
                                        <a href="index-1.html"><img class="light-version-logo" src="assets/abstract/media/logo.png" alt="logo"></a>
                                        <a href="index-1.html"><img class="dark-version-logo" src="assets/abstract/media/logo-3.png" alt="logo"></a>
                                        <a href="index-1.html"><img class="sticky-logo" src="assets/abstract/media/logo-2.png" alt="logo"></a>
                                    </div>
                                    <div class="header-main-nav">
                                        <!-- Start Mainmanu Nav -->
                                        <nav class="mainmenu-nav" id="mobilemenu-popup">
                                            <div class="d-block d-lg-none">
                                                <div class="mobile-nav-header">
                                                    <div class="mobile-nav-logo">
                                                        <a href="index-1.html">
                                                            <img class="light-mode" src="assets/abstract/media/logo-2.png" alt="Site Logo">
                                                            <img class="dark-mode" src="assets/abstract/media/logo-3.png" alt="Site Logo">
                                                        </a>
                                                    </div>
                                                    <button class="mobile-menu-close" data-bs-dismiss="offcanvas"><i class="fas fa-times"></i></button>
                                                </div>
                                            </div>
                                            <ul class="mainmenu">

                                                <li><Link href="/">Home</Link></li>
                                                <li class="menu-item-has-children">
                                                    <a href="javascript:void(0);">About</a>
                                                    <ul class="axil-submenu">
                                                        <li><Link href="/aboutus">About Us</Link></li>
                                                        <li><Link href="/ouroffice">Our Office</Link></li>
                                                        <li><Link href="/team">Team</Link></li>
                                                        <li><Link href="/ourclient">Our Clients</Link></li>
                                                        <li><Link href="/accreditation">Accreditation</Link></li>
                                                        <li><Link href="/testimonial">Testimonials</Link></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <a href="javascript:void(0);">Services</a>
                                                    <ul class="axil-submenu">
                                                        <li><a href="service.html">Augmented Realities & Virtual Realities</a></li>
                                                        <li><a href="service-2.html">Mobile Development</a></li>
                                                        <li><a href="service-design.html">Web Development</a></li>
                                                        <li><a href="service-design.html">Machine Learning & Articial Intelligence</a></li>
                                                        <li><a href="service-design.html">Computer Vision</a></li>
                                                        <li><a href="service-design.html">Blockchain</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <a href="javascript:void(0);">Portfolio</a>
                                                    <ul class="axil-submenu">
                                                        <li><a href="portfolio.html">Two Column</a></li>
                                                        <li><a href="portfolio-2.html">Three Column</a></li>
                                                        <li><a href="portfolio-3.html">Four Column</a></li>
                                                        <li><a href="portfolio-4.html">Three Column Width</a></li>
                                                        <li><a href="portfolio-5.html">Four Column Width</a></li>
                                                        <li><a href="single-portfolio.html">Portfolio Details</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <a href="javascript:void(0);">Products</a>
                                                    <ul class="axil-submenu">
                                                        <li><a href="about-us.html"><b>K-ERP</b> - Enterprise Resource Planning System</a></li>
                                                        <li><a href="our-office.html"><b>K-XRLearn</b> - Extended Reality ELearning System</a></li>
                                                        <li><a href="case-study.html"><b>K-HSE</b> - Health, Safety & Environment System</a></li>
                                                        <li><a href="case-study.html"><b>K-PayDay</b> - Payroll System</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <a href="javascript:void(0);">Blog</a>
                                                    <ul class="axil-submenu">
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="single-blog.html">Standard Post</a></li>
                                                        <li><a href="single-blog-gallery.html">Gallery Post</a></li>
                                                        <li><a href="single-blog-video.html">Video Post</a></li>
                                                        <li><a href="single-blog-audio.html">Audio Post</a></li>
                                                        <li><a href="single-blog-quote.html">Quote Post</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </nav>
                                        <!-- End Mainmanu Nav -->
                                    </div>
                                    <div class="header-action">
                                        <ul class="list-unstyled">
                                            <li class="sidemenu-btn d-lg-block d-none">
                                                <button class="btn-wrap" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenuRight">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </button>
                                            </li>
                                            <li class="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                                                <button class="btn-wrap" data-bs-toggle="offcanvas" data-bs-target="#mobilemenu-popup">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </button>
                                            </li>
                                            <li class="my_switcher d-block d-lg-none">
                                                <ul>
                                                    <li title="Light Mode">
                                                        <a href="javascript:void(0)" class="setColor light" data-theme="light">
                                                            <i class="fal fa-lightbulb-on"></i>
                                                        </a>
                                                    </li>
                                                    <li title="Dark Mode">
                                                        <a href="javascript:void(0)" class="setColor dark" data-theme="dark">
                                                            <i class="fas fa-moon"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    
                    <slot />


                    <!--=====================================-->
                    <!--=        Footer Area Start       	=-->
                    <!--=====================================-->
                    <footer class="footer-area">
                        <div class="container">
                            <div class="footer-top">
                                <div class="footer-social-link">
                                    <ul class="list-unstyled">
                                        <li><a href="https://facebook.com/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://twitter.com/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="https://www.pinterest.com/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300"><i class="fab fa-pinterest-p"></i></a></li>
                                        <li><a href="https://www.linkedin.com/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="https://www.instagram.com/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="https://vimeo.com/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="600"><i class="fab fa-vimeo-v"></i></a></li>
                                        <li><a href="https://dribbble.com/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="700"><i class="fab fa-dribbble"></i></a></li>
                                        <li><a href="https://www.behance.net/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="800"><i class="fab fa-behance"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="footer-main">
                                <div class="row">
                                    <div class="col-xl-6 col-lg-5" data-sal="slide-right" data-sal-duration="800" data-sal-delay="100">
                                        <div class="footer-widget border-end">
                                            <div class="footer-newsletter">
                                                <h2 class="title">Get in touch!</h2>
                                                <p>Fusce varius, dolor tempor interdum tristique, dui urna bib
                                                    endum magna, ut ullamcorper purus</p>
                                                <form>
                                                    <div class="input-group">
                                                        <input type="email" class="form-control" placeholder="Email address">
                                                        <button class="subscribe-btn" type="submit">Subscribe</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-7" data-sal="slide-left" data-sal-duration="800" data-sal-delay="100">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="footer-widget">
                                                    <h6 class="widget-title">Services</h6>
                                                    <div class="footer-menu-link">
                                                        <ul class="list-unstyled">
                                                            <li><a href="service-design.html">Logo &amp; Branding</a></li>
                                                            <li><a href="service-development.html">Website Development</a></li>
                                                            <li><a href="service-development.html">Mobile App Development</a></li>
                                                            <li><a href="service-marketing.html">Search Engine Optimization</a></li>
                                                            <li><a href="service-marketing.html">Pay-Per-Click</a></li>
                                                            <li><a href="service-marketing.html">Social Media Marketing</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="footer-widget">
                                                    <h6 class="widget-title">Resourses</h6>
                                                    <div class="footer-menu-link">
                                                        <ul class="list-unstyled">
                                                            <li><a href="blog.html">Blog</a></li>
                                                            <li><a href="case-study.html">Case Studies</a></li>
                                                            <li><a href="portfolio.html">Portfolio</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="footer-widget">
                                                    <h6 class="widget-title">Support</h6>
                                                    <div class="footer-menu-link">
                                                        <ul class="list-unstyled">
                                                            <li><a href="contact.html">Contact</a></li>
                                                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                                            <li><a href="terms-of-use.html">Terms of Use</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="footer-bottom" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="footer-copyright">
                                            <span class="copyright-text">© 2021. All rights reserved by <a href="https://axilthemes.com/">Axilthemes</a>.</span>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="footer-bottom-link">
                                            <ul class="list-unstyled">
                                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                                <li><a href="terms-of-use.html">Terms of Use</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>




                    <!--=====================================-->
                    <!--=       Offcanvas Menu Area       	=-->
                    <!--=====================================-->
                    <div class="offcanvas offcanvas-end header-offcanvasmenu" tabindex="-1" id="offcanvasMenuRight">
                        <div class="offcanvas-header">
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <form action="#" class="side-nav-search-form">
                                <div class="form-group">
                                    <input type="text" class="search-field" name="search-field" placeholder="Search...">
                                    <button class="side-nav-search-btn"><i class="fas fa-search"></i></button>
                                </div>
                            </form>
                            <div class="row ">
                                <div class="col-lg-5 col-xl-6">
                                    <ul class="main-navigation list-unstyled">
                                        <li><a href="index-1.html">Digital Agency</a></li>
                                        <li><a href="index-2.html">Creative Agency</a></li>
                                        <li><a href="index-3.html">Personal Portfolio</a></li>
                                        <li><a href="index-4.html">Home Startup</a></li>
                                        <li><a href="index-5.html">Corporate Agency</a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-7 col-xl-6">
                                    <div class="contact-info-wrap">
                                        <div class="contact-inner">
                                            <address class="address">
                                                <span class="title">Contact Information</span>
                                                <p>Theodore Lowe, Ap #867-859 <br> Sit Rd, Azusa New York</p>
                                            </address>
                                            <address class="address">
                                                <span class="title">We're Available 24/7. Call Now.</span>
                                                <a class="tel" href="tel:8884562790"><i class="fas fa-phone"></i>(888)
                                                    456-2790</a>
                                                <a class="tel" href="tel:12125553333"><i class="fas fa-fax"></i>(121)
                                                    255-53333</a>
                                            </address>
                                        </div>
                                        <div class="contact-inner">
                                            <h5 class="title">Find us here</h5>
                                            <div class="contact-social-share">
                                                <ul class="social-share list-unstyled">
                                                    <li><a href="https://facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="https://www.behance.net/"><i class="fab fa-behance"></i></a></li>
                                                    <li><a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </main>
    </div>
</template>
