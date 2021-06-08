window.overlayBody = $('.overlay-fill');
window.overlayBodyActive = 'overlay-fill--active';

function mobileMenu() {
    let burgerButton = $('.burger-menu '),
        burgerButtonActive = 'burger-menu--active',
        wrapperMenu = $('.mobile-menu'),
        wrapperMenuActive = 'mobile-menu--active';

    burgerButton.on('click', function(){
        $(this).toggleClass(burgerButtonActive);
        wrapperMenu.toggleClass(wrapperMenuActive);
        overlayBody.toggleClass(overlayBodyActive);
    });

    $(window).on('resize scroll', function(){
        burgerButton.removeClass(burgerButtonActive);
        wrapperMenu.removeClass(wrapperMenuActive);
        overlayBody.removeClass(overlayBodyActive);
    });

    overlayBody.on('click', function(){
        burgerButton.removeClass(burgerButtonActive);
        wrapperMenu.removeClass(wrapperMenuActive);
        overlayBody.removeClass(overlayBodyActive);
    })


}
mobileMenu();