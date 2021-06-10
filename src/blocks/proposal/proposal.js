require('slick-carousel');

let sliderEven = function () {
    let sliderMain = $('.proposal__games');

    sliderMain.each(function (index, item) {
        let sliderNavigate = $(item).next(".proposal__games__navigate");
        $(item).not('.slick-initialized').slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: false,
            arrows: true,
            speed: 400,
            autoplaySpeed: 7000,
            appendArrows: sliderNavigate,
            prevArrow: '<div class="slider-header__nav slider-header__nav--prev"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M11.9108 23.8237C11.8262 23.8237 11.7424 23.807 11.6643 23.7746C11.5862 23.7422 11.5153 23.6946 11.4557 23.6346L0.188721 12.3666C0.128914 12.3069 0.0814445 12.236 0.0490723 12.1579C0.0167 12.0798 0 11.9961 0 11.9116C0 11.8271 0.0167 11.7434 0.0490723 11.6653C0.0814445 11.5873 0.128914 11.5164 0.188721 11.4567L11.4557 0.18866C11.5154 0.128853 11.5864 0.0813835 11.6644 0.0490112C11.7425 0.016639 11.8262 0 11.9108 0C11.9953 0 12.0789 0.016639 12.157 0.0490112C12.2351 0.0813835 12.306 0.128853 12.3657 0.18866C12.4863 0.309402 12.554 0.473001 12.554 0.643616C12.554 0.814231 12.4863 0.97789 12.3657 1.09863L1.55371 11.9106L12.3657 22.7227C12.4863 22.8434 12.554 23.007 12.554 23.1776C12.554 23.3482 12.4863 23.5119 12.3657 23.6326C12.3062 23.6929 12.2354 23.7408 12.1573 23.7736C12.0793 23.8064 11.9955 23.8234 11.9108 23.8237V23.8237Z" fill="#707070"/>\n' +
                '</svg>\n</div>',
            nextArrow: '<div class="slider-header__nav slider-header__nav--next"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '    <path d="M0.643189 1.8875e-07C0.727747 -6.47653e-05 0.811559 0.0166353 0.889649 0.0490725C0.967738 0.0815097 1.03864 0.129069 1.09827 0.189026L12.3653 11.457C12.4251 11.5167 12.4725 11.5877 12.5049 11.6657C12.5373 11.7438 12.554 11.8275 12.554 11.912C12.554 11.9965 12.5373 12.0802 12.5049 12.1583C12.4725 12.2364 12.4251 12.3072 12.3653 12.367L1.09827 23.635C1.03855 23.6948 0.9676 23.7422 0.889527 23.7746C0.811454 23.807 0.727708 23.8236 0.643189 23.8236C0.55867 23.8236 0.475046 23.807 0.396973 23.7746C0.3189 23.7422 0.247953 23.6948 0.188233 23.635C0.0676893 23.5142 0 23.3506 0 23.18C0 23.0094 0.0676893 22.8457 0.188233 22.725L11.0003 11.913L0.188233 1.10101C0.0676893 0.980271 0 0.816672 0 0.646057C0 0.475442 0.0676893 0.311783 0.188233 0.19104C0.247727 0.130766 0.318517 0.0828295 0.396607 0.0500491C0.474696 0.0172686 0.558498 0.00025198 0.643189 1.8875e-07Z" fill="#707070"/>\n' +
                '</svg>\n</div>',
            // fade: true,
            // cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 991,
                    settings: 'unslick'
                },
                {
                    breakpoint: 1190,
                    settings: {
                        variableWidth: true,
                        slidesToScroll: 2,
                    }
                },
            ]
        });
    });
};

sliderEven();
$(window).on('resize', function () {
    let width = $(window).width();
    if (width > 991) {
        sliderEven();
    }
});

let maxWidth = 992,
    slickVar = {
        // lazyLoad: 'ondemand',
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dot: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        mobileFirst: true,
        // variableWidth: true,
        responsive: [
            {
                breakpoint: maxWidth,
                settings: 'unslick',
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,

                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true,
                    slidesToScroll: 1,
                }
            },
        ]
    },
runSlick = function() {
    $('.proposal__slide-mobile').each(function (index, item) {
        $(item).not('.slick-initialized').slick(slickVar);
    })
};
runSlick();
$(window).on('resize', function(){
    let width = $(window).width();
    if(width < maxWidth) {
        runSlick();
    }
});