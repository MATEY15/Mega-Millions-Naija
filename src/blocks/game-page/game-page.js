function ticketDrop() {
    let $ticketDropItem = $('.game-page__ticket-drop')
    let $ticketDropItemTitle = $('.game-page__ticket-drop-title')
    let $ticketDropList = $ticketDropItem.parent().next('.game-page__ticket-list')

    let $ticketLink = $('.game-page__ticket-link')
    let $ticketLinkActive = 'game-page__ticket-link--active'

    $ticketLink.each(function (index, item) {
        $(item).on('click', function (e) {
            e.preventDefault()
            $ticketLink.removeClass($ticketLinkActive)
            $(this).addClass($ticketLinkActive)
            $ticketDropItemTitle.text($(this).text())
        })
    })

    if($ticketLink.hasClass($ticketLinkActive)) {
        $ticketDropItemTitle.text($('.'+$ticketLinkActive).text())
    }

    $ticketDropItem.on('click', function () {
        if($(this).hasClass('game-page__ticket-drop--active')) {
            $(this).removeClass('game-page__ticket-drop--active')
            $ticketDropList.slideUp()
        } else {
            $(this).addClass('game-page__ticket-drop--active')
            $ticketDropList.slideDown()
        }
    })

}
ticketDrop();