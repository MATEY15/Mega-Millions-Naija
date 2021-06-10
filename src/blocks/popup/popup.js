import "magnific-popup";
// npm i magnific-popup --save


// Video popups

$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
});

$(".popup").magnificPopup({
    type: 'inline',
    removalDelay: 300,
    mainClass: 'mfp-zoom-in',
    // fixedContentPos: 'auto',
    fixedContentPos: true,
});

$('.popup-default__close, .popup-default__close-mobile').on('click', function () {
    $(this).magnificPopup('close');
})

// setTimeout(function() {
//     // Remove event and data (not sure about data)
//     $('a', $galleryContainer).off('click')
//     $('a', $galleryContainer).removeData('magnificPopup')
//
//     // Custom function to initiate MagnificPopup
//     initMagnificPopup($('.filtered a', $galleryContainer))
// }, 500)

// (function() {
//
//     let enableMagnific = false;
//
//     enquire.register("screen and (min-width: 992px)", {
//         deferSetup: true,
//         setup: function() {
//             $('.slider').each(function() { // the containers for all your galleries
//                 $(this).magnificPopup({
//                     delegate: 'a',
//                     type: 'image',
//                     gallery: {
//                         enabled:true
//                     },
//                     disableOn: function() {
//                         return enableMagnific;
//                     }
//                 });
//             });
//         },
//         match: function() {
//             enableMagnific = true;
//         },
//         unmatch: function() {
//             enableMagnific = false;
//         }
//     });
//
// })();

// $(".message__item--popup").magnificPopup({
//     type: 'inline',
//     removalDelay: 300,
//     mainClass: 'mfp-zoom-in',
//     fixedContentPos: false,
// });

//
// // Gallery popups
// $('#image-popups').magnificPopup({
//     delegate: 'a',
//     type: 'image',
//     removalDelay: 500,
//     callbacks: {
//         beforeOpen: function () {
//             this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
//             this.st.mainClass = this.st.el.attr('data-effect');
//         }
//     },
//     closeOnContentClick: true,
//     midClick: true,
//     gallery: {
//         enabled: true
//     }
// });