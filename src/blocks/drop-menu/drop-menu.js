function dropMenu() {
        $('.drop-menu__button').click(function(e){
            e.preventDefault();
            $('.drop-menu__drop').toggleClass('drop-menu__drop--active');
        });
        $(document).mouseup(function (e) {
            let container = $(".header__drop-menu");
            if (container.has(e.target).length === 0){
                $('.drop-menu__drop').removeClass('drop-menu__drop--active');
            }
        });
}
dropMenu()