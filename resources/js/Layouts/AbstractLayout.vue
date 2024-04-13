<script>

export default {
  mounted() {
    //ensure body tag overflow is scroll
    document.body.style.overflowY = 'scroll';
    (function($) {
        var jStyleSwitcher,
            _defaultOptions = {
                hasPreview: true,
                defaultThemeId: 'jssDefault',
                fullPath: 'css/',
                cookie: {
                    expires: "",
                    isManagingLoad: true
                }
            },
            // private
            _cookieKey = 'jss_selected',
            _docCookies = {};

        /*\
        |*|
        |*|  :: cookies.js ::
        |*|
        |*|  A complete cookies reader/writer framework with full unicode support.
        |*|
        |*|  revision #1
        |*|
        |*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
        |*|
        |*|  This framework is released under the GNU Public License, version 3 or later.
        |*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
        |*|
        |*|  Syntaxes:
        |*|
        |*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
        |*|  * docCookies.getItem(name)
        |*|  * docCookies.removeItem(name[, path[, domain]])
        |*|  * docCookies.hasItem(name)
        |*|  * docCookies.keys()
        |*|
        \*/
        _docCookies = {
            getItem: function(sKey) {
                if (!sKey) {
                    return null;
                }
                return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
            },
            setItem: function(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
                if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
                    return false;
                }
                var sExpires = "";
                if (vEnd) {
                    switch (vEnd.constructor) {
                        case Number:
                            sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                            break;
                        case String:
                            sExpires = "; expires=" + vEnd;
                            break;
                        case Date:
                            sExpires = "; expires=" + vEnd.toUTCString();
                            break;
                    }
                }
                document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
                return true;
            },
            removeItem: function(sKey, sPath, sDomain) {
                if (!this.hasItem(sKey)) {
                    return false;
                }
                document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
                return true;
            },
            hasItem: function(sKey) {
                if (!sKey) {
                    return false;
                }
                return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
            },
            keys: function() {
                var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
                for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
                    aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
                }
                return aKeys;
            }
        };

        jStyleSwitcher = function($root, config) {
            return this.init($root, config);
        };

        jStyleSwitcher.prototype = {

            /**
             * {Object} DOM reference to style option list
             */
            $root: null,

            /**
             * {Object} configs for the style switcher
             */
            config: {},

            /**
             * {Object} jQuery reference to <link> tag for swapping CSS
             */
            $themeCss: null,

            /**
             * {String} default theme page was loaded with
             */
            defaultTheme: null,

            init: function($root, config) {
                this.$root = $root;
                this.config = config ? config : {};
                this.setDefaultTheme();
                if (this.defaultTheme) {
                    // try cookies
                    if (this.config.cookie) {
                        this.checkCookie();
                    }
                    // try hover
                    if (this.config.hasPreview) {
                        this.addHoverEvents();
                    }
                    // finally, add click events
                    this.addClickEvents();
                } else {
                    this.$root.addClass('jssError error level0');
                }
            },

            setDefaultTheme: function() {
                this.$themeCss = $('link[id=' + this.config.defaultThemeId + ']');
                if (this.$themeCss.length) {
                    this.defaultTheme = this.$themeCss.attr('href');
                }
            },

            resetStyle: function() {
                this.updateStyle(this.defaultTheme);
            },

            updateStyle: function(newStyle) {
                this.$themeCss.attr('href', newStyle);
            },

            getFullAssetPath: function(asset) {
                return this.config.fullPath + asset + '.css';
            },

            checkCookie: function() {
                var styleCookie;
                // if using cookies and using JavaScript to load css
                if (this.config.cookie && this.config.cookie.isManagingLoad) {
                    // check if css is set in cookie
                    styleCookie = _docCookies.getItem(_cookieKey);
                    if (styleCookie) {
                        newStyle = this.getFullAssetPath(styleCookie);
                        // update link tag
                        this.updateStyle(newStyle);
                        // update default ref
                        this.defaultTheme = newStyle;
                    }
                }
            },

            addHoverEvents: function() {
                var self = this;
                this.$root.find('a').hover(
                    function() {
                        var asset = $(this).data('theme'),
                            newStyle = self.getFullAssetPath(asset);
                        // update link tag
                        self.updateStyle(newStyle);
                    },
                    function() {
                        // reset link tag
                        self.resetStyle();
                    }
                );
            },

            addClickEvents: function() {
                var self = this;
                this.$root.find('.setColor').on('click',
                    function() {
                        var asset = $(this).data('theme'),
                            newStyle = self.getFullAssetPath(asset);
                        // update link tag
                        self.updateStyle(newStyle);
                        // update default ref
                        self.defaultTheme = newStyle;
                        // try to store cookie
                        if (self.config.cookie) {
                            _docCookies.setItem(_cookieKey, asset, self.config.cookie.expires, '/');
                        }
                    }
                );
            }
        };

        $.fn.styleSwitcher = function(options) {
            return new jStyleSwitcher(this, $.extend(true, _defaultOptions, options));
        };


        function createCookie(name, value, days) {
            var expires;

            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();
            } else {
                expires = "";
            }
            document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
        }

        function readCookie(name) {
            var nameEQ = encodeURIComponent(name) + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) === ' ')
                    c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0)
                    return decodeURIComponent(c.substring(nameEQ.length, c.length));
            }
            return null;
        }

        function eraseCookie(name) {
            createCookie(name, "", -1);
        }



        //switcher js initialization
        $(function() {

            // $('#my_switcher ul').styleSwitcher({
            //     defaultThemeId: 'papr-dark-css',
            //     hasPreview: false,
            //     fullPath: directory_uri.templateUrl + '/assets/css/',
            //     cookie: {
            //         expires: 2628000, // 3600 == 1 hour
            //         isManagingLoad: true
            //     }
            // });

            function setStyleCookie() {
                var styleCookieVal = $('body').hasClass('active-dark-mode') ? 'dark' : 'light';
                Cookies.set('styleCookieName', styleCookieVal, { expires: 7 });
                // Cookies.set('styleCookieName', styleCookieVal);

            }

            if (Cookies.get('styleCookieName') == 'dark') {
                $('body').addClass('active-dark-mode');
            } else if(Cookies.get('styleCookieName') == 'light') {
                $('body').removeClass('active-light-mode');
            } else {
                $('body').removeClass('active-light-mode');
            }

            // Check Cookie
            // eraseCookie('jss_selected');
            var activeStyle = Cookies.get('styleCookieName');
            if( activeStyle == "dark" ){
                $('.my_switcher').find('.setColor.dark').addClass('active');
                $('body').removeClass('active-light-mode').addClass('active-dark-mode');
            } else if(activeStyle == "light"){
                $('.my_switcher').find('.setColor.light').addClass('active');
                $('body').removeClass('active-dark-mode').addClass('active-light-mode');
            } else {
                // Swicher Active Class Baseon Body Class
                if($("body").hasClass("active-dark-mode")){
                    $('.my_switcher').find('.setColor.light').removeClass('active');
                    $('.my_switcher').find('.setColor.dark').addClass('active');
                }else{
                    $('.my_switcher').find('.setColor.dark').removeClass('active');
                    $('.my_switcher').find('.setColor.light').addClass('active');
                }
            }
            // Set Click
            $('.my_switcher .setColor').on('click', function() {
                $(this).closest('ul').find('li').siblings().find('.active').removeClass('active');
                $(this).addClass('active');
                setStyleCookie();
            });

            // Add or Remove Class into body when click swicher
            $('.my_switcher .setColor.dark').on('click', function() {
                $('body').removeClass('active-light-mode').addClass('active-dark-mode');
                setStyleCookie();
            });
            $('.my_switcher .setColor.light').on('click', function() {
                $('body').removeClass('active-dark-mode').addClass('active-light-mode');
                setStyleCookie();
            });

        });
    })(jQuery);

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

            var defaultColor = 'active-dark-mode';

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
  
        axilInit.i();

    })(window, document, jQuery);

    console.log(`AbstractLayout component is now mounted.`)
  }
}
</script>

<script setup>
import {  Link } from '@inertiajs/inertia-vue3';

defineProps({
    title: String,
});
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
                                        <Link href="/"><img class="light-version-logo" src="/assets/abstract/media/logo.png" alt="logo"></Link>
                                        <Link href="/"><img class="dark-version-logo" src="/assets/abstract/media/logo-3.png" alt="logo"></Link>
                                        <Link href="/"><img class="sticky-logo" src="/assets/abstract/media/logo-2.png" alt="logo"></Link>
                                    </div>
                                    <div class="header-main-nav">
                                        <!-- Start Mainmanu Nav -->
                                        <nav class="mainmenu-nav" id="mobilemenu-popup">
                                            <div class="d-block d-lg-none">
                                                <div class="mobile-nav-header">
                                                    <div class="mobile-nav-logo">
                                                        <Link href="/">
                                                            <img class="light-mode" src="/assets/abstract/media/logo-2.png" alt="Site Logo">
                                                            <img class="dark-mode" src="/assets/abstract/media/logo-3.png" alt="Site Logo">
                                                        </Link>
                                                    </div>
                                                    <button class="mobile-menu-close" data-bs-dismiss="offcanvas"><i class="fas fa-times"></i></button>
                                                </div>
                                            </div>
                                            <ul class="mainmenu">

                                                <li><Link href="/">Home</Link></li>
                                                <li class="menu-item-has-children">
                                                    <a href="javascript:void(0);">About</a>
                                                    <ul class="axil-submenu">
                                                        <li><Link href="/aboutus">KetupArt</Link></li>
                                                        <li><Link href="/team">Team</Link></li>
                                                        <li><Link href="/ourclient">Our Clients</Link></li>
                                                        <!-- <li><Link href="/accreditation">Accreditation</Link></li> -->
                                                        <!-- <li><Link href="/testimonial">Testimonials</Link></li>  -->
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <a href="javascript:void(0);">Services</a>
                                                    <ul class="axil-submenu">
                                                        <li><Link href="/consultancy">Digital Consultancy</Link></li>
                                                        <li><Link href="/immersive">Immersive Technology</Link></li>
                                                        <li><Link href="/blockchain">Blockchain Technology</Link></li>
                                                        <li><Link href="/cloudcomputing">Cloud Computing</Link></li>
                                                        <li><Link href="/microservice">Microservices</Link></li>
                                                        <li><Link href="/gamedevelopment">Game Development</Link></li>
                                                        <li><Link href="/webdevelopment">Web Development</Link></li>
                                                        <li><Link href="/mobiledevelopment">Mobile Apps Development</Link></li>                                                       
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <a href="javascript:void(0);">Portfolio</a>
                                                    <ul class="axil-submenu">
                                                        <li><Link href="/methodology">Work Methodology</Link></li>
                                                        <li><Link href="/casestudy">Case Study</Link></li>
                                                        <li><Link href="/project">Projects</Link></li>
                                                        <li><Link href="/publication">Publications</Link></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <a href="javascript:void(0);">Products</a>
                                                    <ul class="axil-submenu">
                                                        <li><strong class="ms-2 text-success">Education</strong></li>
                                                        <li><a href="javascript:;"><b>K-Tournament</b> - Tournament Management System</a></li>
                                                        <li><a href="javascript:;"><b>K-Learn</b> - ELearning Management System</a></li>
                                                        <li><hr class="my-2"></li>
                                                        <li><strong class="ms-2  text-success">Project Management</strong></li>
                                                        <li><a href="javascript:;"><b>K-Project</b> - Project Management System</a></li>
                                                        <li><hr class="my-2"></li>
                                                        <li><strong class="ms-2  text-success">Human Resources</strong></li>
                                                        <li><a href="javascript:;"><b>K-HR</b> - Human Resources Management System</a></li>
                                                        <li><hr class="my-2"></li>
                                                        <li><strong class="ms-2  text-success">Health & Safety</strong></li>
                                                        <li><a href="javascript:;"><b>K-HSE</b> - Health, Safety & Environment System</a></li>
                                                        <li><hr class="my-2"></li>
                                                        <li><strong class="ms-2  text-success">Financing</strong></li>
                                                        <li><a href="javascript:;"><b>K-PayDay</b> - Payroll System</a></li>                                                       
                                                        <li><hr class="my-2"></li>
                                                        <li><strong class="ms-2  text-success">POS</strong></li>
                                                        <li><a href="javascript:;"><b>K-Resto</b> - Restaurant Ordering Management System</a></li>                                                       
                                                        <!-- <li><hr class="my-2"></li>
                                                        <li><a href="javascript:;"><b>VIEW ALL PRODUCTS</b></a></li> -->
                                                    </ul>
                                                </li>
                                                <!-- <li><Link href="/blog">Blogs</Link></li> -->
                                                <li><Link href="/contact">Contact</Link></li>
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
                                        <!-- <li><a href="https://facebook.com/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://twitter.com/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="https://www.linkedin.com/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400"><i class="fab fa-linkedin-in"></i></a></li> -->
                                    </ul>
                                </div>
                            </div>
                            <div class="footer-main">
                                <div class="row">
                                    <div class="col-xl-3" data-sal="slide-right" data-sal-duration="800" data-sal-delay="100">
                                        <div class="d-flex flex-column">
                                            <img src="/assets/images/logo/Logo V4 for black background.png" alt="" srcset="">
                                            <p class="mb-1">© 2022 - 2024 KetupArt Studio <br> All Rights Reserved</p>
                                            <p>Registration No: 202203172936 (003414323-D)</p>
                                            <a href="https://www.linkedin.com/company/ketupart-studio/" target="_blank" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" class="text-white">LinkedIn | <i class="fab fa-linkedin-in"></i> </a>
                                        </div>
                                    </div>
                                    <div class="col-xl-3" data-sal="slide-right" data-sal-duration="800" data-sal-delay="100">
                                        <div class="d-flex flex-column">
                                            <h5>Get In Touch</h5>
                                            <p>KetupArt Studio, T03, Level 1, University Industry Research Laboratory (UIRL), Universiti Teknologi Malaysia, 81310 Johor Bahru, Johor</p>
                                            <p>ketupartstudio@gmail.com</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-6" data-sal="slide-left" data-sal-duration="800" data-sal-delay="100">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <div class="footer-widget">
                                                    <h6 class="widget-title">Services</h6>
                                                    <div class="footer-menu-link">
                                                        <ul class="list-unstyled">
                                                            <li><Link href="/consultancy"><small>Digital Consultancy</small></Link></li>
                                                            <li><Link href="/immersive"><small>Immersive Technology</small></Link></li>
                                                            <li><Link href="/blockchain"><small>Blockchain Technology</small></Link></li>
                                                            <li><Link href="/cloudcomputing"><small>Cloud Computing</small></Link></li>
                                                            <li><Link href="/microservice"><small>Microservices</small></Link></li>
                                                            <li><Link href="/gamedevelopment"><small>Game Development</small></Link></li>
                                                            <li><Link href="/webdevelopment"><small>Web Development</small></Link></li>
                                                            <li><Link href="/mobiledevelopment"><small>Mobile Development</small></Link></li>  
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="footer-widget">
                                                    <h6 class="widget-title">About us</h6>
                                                    <div class="footer-menu-link">
                                                        <ul class="list-unstyled">
                                                            <li><Link href="/aboutus"><small>KetupArt</small></Link></li>
                                                            <li><Link href="/team"><small>Team</small></Link></li>
                                                            <li><Link href="/ourclient"><small>Our Clients</small></Link></li>
                                                        </ul>
                                                    </div>

                                                    <h6 class="widget-title pt-5">Portfolio</h6>
                                                    <div class="footer-menu-link">
                                                        <ul class="list-unstyled">
                                                            <li><Link href="/methodology"><small>Work Methodology</small></Link></li>
                                                            <li><Link href="/casestudy"><small>Case Study</small></Link></li>
                                                            <li><Link href="/project"><small>Projects</small></Link></li>
                                                            <li><Link href="/publication"><small>Publications</small></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-5">
                                                <div class="footer-widget">
                                                    <h6 class="widget-title">Products</h6>
                                                    <div class="footer-menu-link">
                                                        <ul class="list-unstyled">
                                                            <li><a href="our-office.html"><small><b>K-Tournament</b> - Tournament Management System</small></a></li>
                                                            <li><a href="learn.html"><small><b>K-Learn</b> - ELearning Management System</small></a></li>
                                                            <li><a href="about-us.html"><small><b>K-Project</b> - Project Management System</small></a></li>
                                                            <li><a href="about-us.html"><small><b>K-HR</b> - Human Resources Management System</small></a></li>
                                                            <li><a href="hse.html"><small><b>K-HSE</b> - Health, Safety & Environment System</small></a></li>
                                                            <li><a href="case-study.html"><small><b>K-PayDay</b> - Payroll System</small></a></li>          
                                                            <li><a href="case-study.html"><small><b>K-Resto</b> - Restaurant Ordering Management System</small></a></li>        
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
                                            <span class="copyright-text">Copyright © 2022 - 2024 KetupArt Studio</span>
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
                            <div class="row ">
                                <div class="col-lg-7 col-xl-6">
                                    <div class="contact-info-wrap">
                                        <div class="contact-inner">
                                            <address class="address">
                                                <span class="title">Contact Information</span>
                                                <p>ketupartstudio@gmail.com</p>
                                            </address>
                                            <address class="address">
                                                <span class="title">We're Available 24/7. </span>
                                            </address>
                                        </div>
                                        <div class="contact-inner">
                                            <h5 class="title">Find us here</h5>
                                            <div class="contact-social-share">
                                                <ul class="social-share list-unstyled">
                                                    <!-- <li><a href="https://facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li> -->
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
