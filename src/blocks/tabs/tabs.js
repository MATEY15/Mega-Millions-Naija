function toggleTabs(options) {

    /* Example options
    {
        toggleButtonsWrapperClass:'className',
        $toggleButtonsWrapper:node,
        toggleButtonClass:'className',
        $toggleButtons:HTMLCollections,
        toggleButtonActiveClass:'className',

        toggleItemsWrapperClass:'className',
        $toggleItemsWrapper:node,
        toggleItemsClass:'className',
        $toggleItems:HTMLCollections,
        toggleItemActiveClass:'className',
        toggleItemActiveEffectClass: 'className'
    }
     */

    let toggleButtonsWrapperClass = options && options.toggleButtonsWrapperClass ? options.toggleButtonsWrapperClass : 'tabs__toggle-buttons';
    let $toggleButtonsWrapper = options && options.$toggleButtonsWrapper ? options.$toggleButtonsWrapper : document.getElementsByClassName(toggleButtonsWrapperClass)[0];
    let toggleButtonClass = options && options.toggleButtonClass ? options.toggleButtonClass : 'tabs__toggle-button';
    let $toggleButtons = options && options.$toggleButtons ? options.$toggleButtons : $toggleButtonsWrapper.getElementsByClassName(toggleButtonClass);
    let toggleButtonActiveClass = options && options.toggleButtonActiveClass ? options.toggleButtonActiveClass : 'tabs__toggle-button--active';

    let toggleItemsWrapperClass = options && options.toggleItemsWrapperClass ? options.toggleItemsWrapperClass : 'tabs__toggle-items';
    let $toggleItemsWrapper = options && options.$toggleItemsWrapper ? options.$toggleItemsWrapper : document.getElementsByClassName(toggleItemsWrapperClass)[0];
    let toggleItemClass = options && options.toggleItemClass ? options.toggleItemClass : 'tabs__toggle-item';
    let $toggleItems = options && options.$toggleItems ? options.$toggleItems : $toggleItemsWrapper.getElementsByClassName(toggleItemClass);
    let toggleItemActiveClass = options && options.toggleItemActiveClass ? options.toggleItemActiveClass : 'tabs__toggle-item--active';
    let toggleItemActiveEffectClass = options && options.toggleItemActiveEffectClass ? options.toggleItemActiveEffectClass : 'tabs__toggle-item--active-effect';

    this.showItem = (index) => {
        showItem(index);
    };

    function hideItems() {
        for (let i = 0; i < $toggleItems.length; i++) {
            $toggleButtons[i].classList.remove(toggleButtonActiveClass);
            $toggleItems[i].classList.remove(toggleItemActiveClass, toggleItemActiveEffectClass);
        }
    }

    function showItem(index) {

        hideItems();
        $toggleButtons[index].classList.add(toggleButtonActiveClass);
        $toggleItems[index].classList.add(toggleItemActiveClass);

        let checkDisplay = setInterval(() => {
            let computedStyle = window.getComputedStyle($toggleItems[index], null);
            let displayState = computedStyle.getPropertyValue('display') !== 'none';

            if (displayState) {
                $toggleItems[index].classList.add(toggleItemActiveEffectClass);
                clearInterval(checkDisplay);
            }
        }, 1);

        let eventInit = new Event('itemStateChange');

        if ($toggleItems[index].querySelectorAll('.masonry-grid')[0]) {
            let $masonry = $toggleItems[index].querySelectorAll('.masonry-grid')[0];
            $masonry.dispatchEvent(eventInit);
        }
    }

    showItem(0);

    $toggleButtonsWrapper.addEventListener('click', (e) => {
        const $target = e.target;

        let $clickButton = false;

        if ($target.classList.contains(toggleButtonClass)) {
            $clickButton = $target;
        } else if ($target.closest('.' + toggleButtonClass) !== null) {
            $clickButton = $target.closest('.' + toggleButtonClass);
        }

        if ($clickButton && !$clickButton.classList.contains(toggleButtonActiveClass)) {

            for (let i = 0; i < $toggleButtons.length; i++) {
                if ($toggleButtons[i] === $clickButton) {
                    showItem(i);
                }
            }
        }


    });

}

// window.firstTabs = new toggleTabs();
//
// window.secondTabs = new toggleTabs({
//     $toggleButtonsWrapper: document.querySelector('.tabs__toggle-buttons--el-2'),
//     toggleItemsWrapperClass: 'tabs__toggle-items--el-2'
// });

// Tabs init

if(document.querySelector('.proposal__menu')) {
    window.secondTabs = new toggleTabs({
        toggleButtonsWrapperClass: 'proposal__menu',
        toggleButtonClass: 'proposal__menu-list',
        toggleButtonActiveClass: 'proposal__menu-list--active',

        toggleItemsWrapperClass: 'proposal__games-wrapper',
        toggleItemClass: 'proposal__games-item',
        toggleItemActiveClass: 'proposal__games-item--active',
    });
}

if(document.querySelector('.proposal__tab-lists')) {
    window.secondTabsMobile = new toggleTabs({
        toggleButtonsWrapperClass: 'proposal__tab-lists',
        toggleButtonClass: 'proposal__tab-list',
        toggleButtonActiveClass: 'proposal__tab-list--active',

        toggleItemsWrapperClass: 'proposal__tab-contents',
        toggleItemClass: 'proposal__tab-content',
        toggleItemActiveClass: 'proposal__tab-content--active',
    });
}

if(document.querySelector('.game-page__tab-list')) {
    window.secondTabsGames = new toggleTabs({
        toggleButtonsWrapperClass: 'game-page__tab-list',
        toggleButtonClass: 'game-page__tab-li',
        toggleButtonActiveClass: 'game-page__tab-li--active',

        toggleItemsWrapperClass: 'game-page__body',
        toggleItemClass: 'game-page__item',
        toggleItemActiveClass: 'game-page__item--active',
    });
}