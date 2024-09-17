(function ($) {
    $(document).ready(function () {
        //time slider
        $('.all-times').owlCarousel({
            loop: false,
            margin: 0,
            autoplay: false,
            responsiveClass: true,
            nav: true,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true
                }
            }
        });
    });
})(jQuery);