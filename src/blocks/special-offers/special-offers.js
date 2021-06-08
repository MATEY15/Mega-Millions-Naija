function specialOffer() {
    $('.special-offers__button').click(function(e){
        e.preventDefault();
        $('.special-offers').toggleClass('special-offers--active');
    });
    $(document).mouseup(function (e) {
        let container = $(".special-offers");
        if (container.has(e.target).length === 0){
            $('.special-offers').removeClass('special-offers--active');
        }
    });
}
specialOffer()