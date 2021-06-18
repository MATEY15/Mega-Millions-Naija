function chatMenu() {
    let chatButton = $('.chat__button');
    let chatClose = $('.chat__cloce');
    let chatMain = $('.chat__main');
    let chatMainActive = 'chat__main--active';

    chatClose.click(function(e){
        chatMain.removeClass(chatMainActive);
    })
    chatButton.click(function(e){
        e.preventDefault();
        chatMain.toggleClass(chatMainActive);
    });
    $(document).mouseup(function (e) {
        let container = $(".chat");
        if (container.has(e.target).length === 0){
            chatMain.removeClass(chatMainActive);
        }
    });

}
chatMenu()