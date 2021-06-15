function toggleAccordion() {
    let $items = $('.faq__item-title');
    let descriptionClass = 'faq__item-desc';
    let $descriptions = $('.' + descriptionClass);
    let activeClass = 'faq__item-title--active';

    // $($items[0]).addClass(activeClass);
    // $($items[0]).find('.' + descriptionClass).slideDown();

    $items.on('click', function () {
        let $item = $(this);
        let $description = $item.next('.' + descriptionClass);

        if ($item.hasClass(activeClass)) {
            $descriptions.slideUp();
            $items.removeClass(activeClass);
        } else {
            $descriptions.slideUp();
            $description.slideDown();
            $items.removeClass(activeClass);
            $item.addClass(activeClass);
        }
    });
}

toggleAccordion();