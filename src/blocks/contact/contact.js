function renameElem() {
    let widthTrue = true
    let temp = $('[data-rename]').text();

    $(window).on('resize', function () {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 768) {
            $('[data-rename]').text($('[data-rename]').data('rename'))
        }
        if (windowWidth >= 768) {
            $('[data-rename]').text(temp)
        }
    });
}
renameElem()
