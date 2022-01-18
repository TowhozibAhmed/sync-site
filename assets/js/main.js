(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {




        $('.menu-open , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').addClass('active');

        });
        $('.menu-close , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').removeClass('active');

        });



        $(".slider__wrapper").owlCarousel({
            items: 2,
            nav: false,
            dot: false,
            loop: true,
            margin: 20,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true, 
            responsive: {
                0: {
                    items: 1,
                } ,
                575: {
                    items: 1,
                    margin: 15,
                    stagePadding: 50
                },
                768: {
                    items: 2,
                    margin: 20,
                },
                991: {
                    items: 2,
                    margin: 25,
                },
                1200: {
                    items: 2,
                    margin: 30,
                },
                1500: {
                    items: 2,
                    margin: 30,
                }
            }


        });

        $(".team__items__wrapper").owlCarousel({
            items: 1,
            nav: false,
            dot: false,
            loop: true,
            margin: 20,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true,  
            responsive: {
                0: {
                    items: 1,
                    margin: 12,
                    stagePadding: 10
                },
                450: {
                    items: 1,
                    margin: 12,
                    stagePadding: 20
                },
                575: {
                    items: 1, 
                    margin: 12,
                    stagePadding: 50
                },
                650: { 
                    items: 1,
                    margin: 16,
                    stagePadding: 80
                },
                768: {
                    items: 1,
                    margin: 16,
                    stagePadding: 100
                },
                991: {
                    items: 1,
                    margin: 19,
                    stagePadding: 150
                },
                1100: {
                    items: 1,
                    margin: 20,
                    stagePadding: 190
                },
                1200: {
                    items: 1,
                    margin: 25,
                    stagePadding: 260
                },
                1400: {
                    items: 1,
                    margin: 30,
                    stagePadding: 260
                }
            } 
        });

        $(".how__area__thumbs").owlCarousel({
            items: 1,
            nav: false,
            dot: false,
            loop: true,
            margin: 20,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true, 
            responsive: {
                0: {
                    items: 1,
                    margin: 12,
                    stagePadding: 10
                },
                450: {
                    items: 1,
                    margin: 12,
                    stagePadding: 20
                },
                575: {
                    items: 1, 
                    margin: 12,
                    stagePadding: 50
                },
                650: { 
                    items: 1,
                    margin: 15,
                    stagePadding: 80
                },
                768: {
                    items: 1, 
                    margin: 16,
                    stagePadding: 100
                },
                991: {
                    items: 1, 
                    margin: 19,
                    stagePadding: 150
                },
                1100: {
                    items: 1,
                    margin: 20,
                    stagePadding: 190
                },
                1200: {
                    items: 1,
                    margin: 20,
                    stagePadding: 230
                },
                1300: {
                    items: 1,
                    margin: 25,
                    stagePadding: 260
                },
                1400: {
                    items: 1,
                    margin: 30,
                    stagePadding: 260
                }
            }


        });

 

        
    });
 
 

}(jQuery));