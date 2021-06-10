function popupDefault() {
    let popupName = 'popup-m'
    let popupNameLinkName = 'popup-m__show'
    let popupNameLink = document.querySelectorAll('.'+popupNameLinkName)
    let popupOverlay = document.querySelector('.'+popupName+'__overlay')
    let popupWrapper = document.querySelector('.popup-m__wrapper')

    popupNameLink.forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault()
            let currentPopupHash = item.getAttribute('href')
            showPopup(currentPopupHash)
        })
    })

    popupOverlay.addEventListener('click', function (e) {
        e.preventDefault()
        hidePopup()
    })

    popupWrapper.addEventListener('click', function (e) {
        e.preventDefault()
        hidePopup()
    })

    function bodyStop(status) {
        let htmlTag = document.querySelector('html')
        if(status === 'enable') {
            htmlTag.style.overflow = 'hidden'
        } else {
            htmlTag.style.overflow = 'auto'
        }
    }

    function showPopup(hash) {
        let searchPopup = document.querySelector(hash)
        searchPopup.classList.add('popup-m__window--active')
        fadeShow(popupWrapper)
        fadeShow(popupOverlay)
        fadeShow(searchPopup)
        bodyStop('enable')
    }
    function hidePopup() {
        let searchPopupActive = document.querySelector('.popup-m__window--active')
        searchPopupActive.classList.remove('popup-m__window--active')
        fadeHide(popupWrapper)
        fadeHide(searchPopupActive)
        fadeHide(popupOverlay)
        bodyStop('disable')
    }

    function fadeHide(element) {
        let op = 1;  // initial opacity
        let timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 5);
    }

    function fadeShow(element) {
        let op = 0.1;  // initial opacity
        element.style.display = 'block';
        let timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 5);
    }

}
// popupDefault()