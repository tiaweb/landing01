(function ($) {
    'use strict';


    jQuery(document).ready(function ($) {

        //define all carousels
        if ($.fn.owlCarousel) {
            var logos_slide     = $('.logos');
            var client_carousel = $('.client_carousel');
            var blog_slide      = $('.blog_slide');

            logos_slide.owlCarousel({
                loop: true,
                nav: false,
                items: 5,
                autoplay: false,
                smartplay:2000,
                autoplayspeed:1000,
                margin:30,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    800:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }

            });

            client_carousel.owlCarousel({
                loop: true,
                nav: false,
                items: 1,
                autoplay: false,
                smartplay:2000,
                autoplayspeed:1000,
                responsive:{
                    0:{
                        margin:0
                    },
                    1000:{
                        margin:30
                    }
                }

            });

            blog_slide.owlCarousel({
                loop: true,
                nav: false,
                items: 1,
                autoplay: false,
                smartplay:2000,
                autoplayspeed:1000,
                responsive:{
                    0:{
                        margin:0
                    },
                    1000:{
                        margin:30
                    }
                }

            });
        };

        function wowAnimation(){
          //animimate active
          new WOW().init();
        };
        wowAnimation();


        //fixed nav bar active
        function stickyNav() {

            window.onscroll = function () {
                myFunction()
            };

            var header = document.getElementById("myHeader");
            var sticky = header.offsetTop;

            function myFunction() {
                if (window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                } else {
                    header.classList.remove("sticky");
                }
            }
        }
        stickyNav();

        //current class adding 
        $('.navbar').onePageNav();

        //counter up 
        $('.counter').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {

                    duration: 8000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });


    });




    /*---------------====================
          07.Butoon Revel Effects
    ================-------------------*/
    var xs__btn       = $('.xs-btn');
    var xs__btn__span =$('.xs-btn span');

    if (xs__btn.length > 0)
    {
        xs__btn.mouseenter(function (e)
        {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;

            if ($(this).find('span'))
            {
                xs__btn__span.css(
                    {
                        top: relY,
                        left: relX,
                    });
            }
        });
        xs__btn.mouseout(function (e)
        {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;

            if ($(this).find('span'))
            {
                xs__btn__span.css(
                    {
                        top: relY,
                        left: relX,
                    });
            }
        });
    }
        
        var tab__slider__body  =  $(".tab-slider--body");
        var tab__slider__li    =  $(".tab-slider--nav li");
        var tab__slider__first =  $(".tab-slider--body:first");
        var tab__slider__tabs  =  $('.tab-slider--tabs');
    

      tab__slider__body.hide();
      tab__slider__first.show();

        tab__slider__li.click(function(e) {

        tab__slider__body.hide();
        var activeTab = $(this).attr("rel");

        $("#"+activeTab).fadeIn();

        if($(this).attr("rel") == "tab2"){
        tab__slider__tabs.addClass('slide');
        }else{
        tab__slider__tabs.removeClass('slide');
        }
        tab__slider__li.removeClass("active");
        $(this).addClass("active");
    });



    // Off Canvas Open close start
    var off__canvas  =  $(".off-canvas-btn");
    var body         = $("body");
    var wraper       = $(".off-canvas-wrapper");
    var canvas__wrap = $(".btn-close-off-canvas,.off-canvas-overlay");

    off__canvas.click(function(e) {
        body.addClass('fix');
        wraper.addClass('open');
    });

    canvas__wrap.click(function(e) {
        body.removeClass('fix');
        wraper.removeClass('open');
    });
    

    // slide effect dropdown
    function dropdownAnimation() {
        var dropdown = $('.dropdown');

        dropdown.click('show.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown(500);
        });

        dropdown.click('hide.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(500);
        });
    }
    dropdownAnimation();

    //offcanvas mobile menu start 
    var $offCanvasNav = $('.mobile-menu'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');
    
    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');
    $offCanvasNavSubMenu.slideUp();
    $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
    });

    //jquery load function start
    jQuery(window).on("load", function () {
        //Hide Loading Box (Preloader)
        function handlePreloader() {
            var loader = $('.load-wrapp');
            if (loader.length) {
                loader.delay(200).fadeOut(500);
            }
        }
        handlePreloader();

    });


}(jQuery));


$(function () {
    $('#test')
      .gmap3({
        center: [-33.8540399, 150.9893092],
        zoom: 6,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      })
      .route({
        origin:"48 Pirrama Road, Pyrmont NSW",
        destination:"Bondi Beach, NSW",
        travelMode: google.maps.DirectionsTravelMode.DRIVING
      })
      .directionsrenderer(function (results) {
        if (results) {
          return {
            panel: $("<div></div>").addClass("gmap3").insertAfter($("#test")), // accept: string (jQuery selector), jQuery element or HTML node targeting a div
            directions: results
          }
        }
      })
    ;
  });