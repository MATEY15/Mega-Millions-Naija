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

function dropCart() {
    let cartItem = $('.header__cart');
    let cartDrop = $('.header__cart-preview');
    let cartDropActive = 'header__cart-preview--active';

    cartItem.click(function(e){
        e.preventDefault();
        cartDrop.toggleClass(cartDropActive);
    });
    $(document).mouseup(function (e) {
        let container = $(".header__cart-wrapper");
        if (container.has(e.target).length === 0){
            cartDrop.removeClass(cartDropActive);
        }
    });

}
dropCart()