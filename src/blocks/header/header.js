// headerScroll();

function headerScroll() {
    let $topHeader = $('.header');
    let scrollClass = 'header--scroll';

    checkHeaderPosition();

    function checkHeaderPosition() {

        if ($(window).scrollTop() > 0) {
            $topHeader.addClass(scrollClass);
        } else {
            $topHeader.removeClass(scrollClass);
        }

        requestAnimationFrame(checkHeaderPosition);
    }
}

function headerHeight() {
    let headerHeight = document.querySelector('.header').offsetHeight,
        body = document.querySelector('body');
        body.style.paddingTop = headerHeight + "px";
}
headerHeight();

$(window).on('resize', function(){
    headerHeight();
});