function messageTab() {
    let messageListsName = 'message__lists';
    let $messageLists = document.querySelector('.' + messageListsName);
    let messageItemsName = 'message__item';
    let messageItemsNamePrefix = '--desktop';
    let $messageItems = document.querySelectorAll('.' + messageItemsName + messageItemsNamePrefix);
    let messageContentName = 'message__read';
    let $messageContent = document.querySelectorAll('.' + messageContentName);
    let activeClass = '--active';
    let $messageClose = document.querySelectorAll('.message__read-close');
    let sizeWidth = 768
    let $overlay = document.querySelector('.message__overlay');

    let windowWidth = document.body.clientWidth;

    let triggerMessage = function(e) {
        let target = e.target;
        e.preventDefault()

        if(target.closest('.' + messageItemsName) || target.closest('.' + messageItemsName).classList.contains(messageItemsName)) {
            $messageItems.forEach((item, index) => {
                if(target === item ||  target.closest('.' + messageItemsName) === item) {
                    hideWindow()
                    item.classList.add(messageItemsName + activeClass)
                    showWindow(index)
                    overlayShow()
                }
            })
        }
    }

    $messageClose.forEach(item => {
        item.addEventListener('click', () => {
            hideWindow()
            overlayHide()
        });

    })


    // $messageLists.addEventListener('click', triggerMessage);

    if (windowWidth > sizeWidth) {
    }
        $messageLists.addEventListener('click', triggerMessage);


    window.addEventListener('resize', (e)=>{
        let windowWidth = document.body.clientWidth;
        if (windowWidth < sizeWidth) {
            hideWindow()
        }
        if (windowWidth > sizeWidth) {
            showWindow()
            $messageLists.addEventListener('click', triggerMessage);
            overlayHide()
        }
    })

    function hideWindow() {
        $messageContent.forEach((item) => {
            item.classList.remove(messageContentName + activeClass)
        })
        $messageItems.forEach((item) => {
            item.classList.remove(messageItemsName + activeClass)
        })
    }
    function showWindow(i = 0) {
        $messageItems[i].classList.add(messageItemsName + activeClass)
        $messageContent[i].classList.add(messageContentName + activeClass)

    }
    hideWindow()
    showWindow()
    if (windowWidth < sizeWidth) {
        hideWindow()
    }

    $overlay.addEventListener('click', () => {
        hideWindow()
        overlayHide()
    })

    function overlayShow() {
        if (windowWidth < sizeWidth) {
            $overlay.classList.add('message__overlay--active')
        }
    }
    function overlayHide() {
        $overlay.classList.remove('message__overlay--active')
    }

}

if (document.querySelector('.message__lists')) {
    messageTab();
}