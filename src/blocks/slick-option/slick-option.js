require('slick-carousel');

let sliderPreviewPotions = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 6000,
};
let runSlick = function (element, parametr) {
    $(element).slick(parametr);
};
runSlick('.slider-preview__init', sliderPreviewPotions);