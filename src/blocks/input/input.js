$('input[type=file]').bind('change', function() {
    let str = "";
    str = $(this).val().split("\\").slice(-1)[0];
    console.log(str)
    $(this).prev('.file-load__text').text(str);
});