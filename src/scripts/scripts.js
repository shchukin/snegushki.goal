(function ($) {


    $(document).ready(function () {
        $('.slick--catalog .slick__plugin').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next')
        });
    });

})(jQuery);
