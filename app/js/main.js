$(function () {

    $('.testimonials__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonials__slider',
        focusOnSelect: true
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });


    $('.header__menu-btn').on('click', function () {
        $(this).toggleClass('header__menu-btn-active');
    });

    $('.header__menu-btn').on('click', function () {
        $('.menu__list').slideToggle();
    });


});
