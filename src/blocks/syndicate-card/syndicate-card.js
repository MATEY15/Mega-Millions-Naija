$.each($('.qty-input__wrapper'), function(){
    let slice = $(this);
    slice.find('i').click(function() {
        let value = parseInt(slice.find('input').val());
        if ($(this).hasClass('qty-input__minus')) {
            value = value - 1;
        } else if ($(this).hasClass('qty-input__plus')) {
            value = value + 1;
        }
        if (value < 1) {
            value = 1;
        }
        slice.find('.qty-input').val(value);
    });
});