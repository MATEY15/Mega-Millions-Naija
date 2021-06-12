import $ from "../../../../../libs/js/jquery.min";

function clickVideo() {
    let videoWindow = $('.video-default')
    videoWindow.each(function(i, item){
        $(item).on('click', function() {
            let video = $(this).get(0);
            if (video.paused === false) {
                $(this).prev('.video-default__play').show()
                video.pause();
            } else {
                $(this).prev('.video-default__play').hide()
                video.play();
            }
            return false;
        })
    })
}
clickVideo()
function clickVideoButton() {
    let videoPlay = $('.video-default__play')
    videoPlay.each(function(i, item){
        $(item).on('click', function() {
            let video = $(this).next('.video-default').get(0);
            if (video.paused === false) {
                video.pause();
            } else {
                video.play();
            }
            return false;
        })

    })
}
clickVideoButton()