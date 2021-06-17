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

    function rename(status) {
        $('[data-rename]').each(function () {
            let temp = $(this).text();
            console.log(status)
            if(status) {
                $(this).text(temp)
            } else {
                $(this).text($(this).data('rename'))
            }
            // console.log($(this).data('rename'))
            // $(this).text($(this).data('rename'))
        })
    }
    // rename();
}
renameElem()
