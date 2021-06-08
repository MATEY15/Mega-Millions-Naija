require('slick-carousel');

let maxWidth = 992,
    slickVar = {
        // lazyLoad: 'ondemand',
        dots: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dot: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: maxWidth,
                settings: 'unslick',
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    },
    runSlick = function() {
        $('.clients__wrapper').slick(slickVar);
    };
runSlick();
$(window).on('resize', function(){
    var width = $(window).width();
    if(width < maxWidth) {
        runSlick();
    }
});