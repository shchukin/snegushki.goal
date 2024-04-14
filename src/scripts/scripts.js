(function ($) {

    const catalogSlider = new Swiper('.swiper--catalog', {
        navigation: {
            prevEl: '.swiper__control--prev',
            nextEl: '.swiper__control--next',
            disabledClass: 'swiper__control--disabled',
        },
        mousewheel: {
            forceToAxis: true,
        },
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 4,
    });

})(jQuery);
