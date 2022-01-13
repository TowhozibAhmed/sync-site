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
                },
                575: {
                    items: 1,
                    margin: 7,
                },
                750: {
                    items: 2,
                    margin: 7,
                },
                768: {
                    items: 2,
                },
                991: {
                    items: 3,
                    margin: 12,
                },
                1200: {
                    items: 3,
                    margin: 14,
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
                },
                575: {
                    items: 1,
                    margin: 7,
                },
                750: {
                    items: 2,
                    margin: 7,
                },
                768: {
                    items: 2,
                },
                991: {
                    items: 3,
                    margin: 12,
                },
                1200: {
                    items: 3,
                    margin: 24,
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
                },
                575: {
                    items: 1,
                    margin: 7,
                },
                750: {
                    items: 2,
                    margin: 7,
                },
                768: {
                    items: 2,
                },
                991: {
                    items: 3,
                    margin: 12,
                },
                1200: {
                    items: 3,
                    margin: 24,
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