$(document).ready(function () {
    $("#hamburger-menu").click(function () {
        $("#menu-sidebar").toggle();
    });
    $("#hamburgerMenu-close").click(function () {
        $("#menu-sidebar").toggle();
    });

    $("#multiLanguageCcSettingsButton-0-2-204-button").click(function () {
        $("#multiLanguageCcSettingsButton-0-2-204").toggle();
    });

    $("#exitPopupButton-0-2-320-close").click(function () {
        $("#multiLanguageCcSettingsButton-0-2-204").toggle();
    });
    

    $('#iconContainer, #login-dialog').hover(
        function () {
            $('#login-dialog').css('display', 'block');
        },
        // When the mouse leaves the icon or the login dialog, hide the login dialog
        function () {
            $('#login-dialog').css('display', 'none');
        }
    );
//    channel-info
    
    $("#Category-popup").click(function () {
        $("#catgory-pop").toggle();
    });

    $(".channel-0-2-249").click(function () {
        $("#channel-info").toggle();
    })

    $("#channel-info-close").click( function () {
        $("#channel-info").toggle();
    })

    $("#Categorypopup-close").click(function () {
        $("#catgory-pop").toggle();
    });

    // Click event to close the login dialog
    $("#close-login-dialog").click(function () {
        $("#login-dialog").hide();
    });
    $('.jump-to-category-btn').on('click', function() {
        var target = $(this).data('target');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });

    //Channel Selection Tab Begins
    var lastScrollTop = 0;
        var lastTargetId = null;

        $(".item-0-2-225").on("click", function() {
            // Remove the selected classes from all buttons
            $(".item-0-2-225").removeClass("selected selected-l2-category-atc");

            var dataId = $(this).attr("data-id");
            var $targetDiv = $(".channelList-0-2-237").find("[data-id='" + dataId + "']");
            if ($targetDiv.length) {
                var containerOffset = $(".channelList-0-2-237").offset().top;
                var targetOffset = $targetDiv.offset().top - containerOffset;
                var currentScrollTop = $(".channelList-0-2-237").scrollTop();
                var containerHeight = $(".channelList-0-2-237").height();

                if (lastTargetId === dataId && Math.abs(currentScrollTop - lastScrollTop) < containerHeight) {
                    // Target div already within visible portion of the container, do nothing
                    return;
                }

                // Calculate the target position relative to the current scroll position
                var scrollToPosition = targetOffset + currentScrollTop;

                // Scroll to the calculated position
                $(".channelList-0-2-237").animate({
                    scrollTop: scrollToPosition
                }, 500);
                lastScrollTop = scrollToPosition;

                lastTargetId = dataId;

                // Add the classes to the clicked button
                $(this).addClass("selected selected-l2-category-atc");
            }
        });
    //Channel Selection Tab Ends


});





const video = document.getElementById('custom-video');
const muteBtn = document.getElementById('mute-btn');
const volumeRange = document.getElementById('volume-range');
const fullScreenBtn = document.getElementById('full-screen-btn');
const pipBtn = document.getElementById('pip-btn');

let hls;

muteBtn.addEventListener('click', toggleMute);
volumeRange.addEventListener('input', setVolume);
fullScreenBtn.addEventListener('click', toggleFullScreen);
pipBtn.addEventListener('click', togglePiP);


function initHls() {
    if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource('https://live-par-2-cdn-alt.livepush.io/live/bigbuckbunnyclip/index.m3u8');
        hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = 'https://live-par-2-cdn-alt.livepush.io/live/bigbuckbunnyclip/index.m3u8';
    }
}

function toggleMute() {
    video.muted = !video.muted;

    // Remove existing class and toggle between classes
    if (
        muteBtn.classList.contains('unmuteIconOnlyButton-0-2-88') ||
        muteBtn.classList.contains('unmuteIconOnlyButton-d0-0-2-89') ||
        muteBtn.classList.contains('unmuteButton') ||
        muteBtn.classList.contains('unmute-btn-atc')
    ) {
        muteBtn.classList.remove('unmuteIconOnlyButton-0-2-88', 'unmuteIconOnlyButton-d0-0-2-89', 'unmuteButton', 'unmute-btn-atc');
        muteBtn.classList.add('muteButton-0-2-90', 'muteButton-d97-0-2-322', 'mute-btn-atc');
        // Change the SVG content when the class changes to class2
        muteBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" pointer-events="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.88141V4.68141C14 4.05141 14.63 3.60141 15.21 3.83141C18.6 5.12141 21 8.39141 21 12.2314C21 16.0714 18.6 19.3414 15.21 20.6314C14.63 20.8514 14 20.4114 14 19.7814V19.5814C14 19.2014 14.24 18.8714 14.6 18.7314C17.18 17.7014 19 15.1714 19 12.2314C19 9.29141 17.18 6.76141 14.6 5.73141C14.25 5.59141 14 5.26141 14 4.88141ZM3 10.2314V14.2314C3 14.7814 3.45 15.2314 4 15.2314H7L10.29 18.5214C10.92 19.1514 12 18.7014 12 17.8114V6.64142C12 5.75142 10.92 5.30142 10.29 5.93142L7 9.23142H4C3.45 9.23142 3 9.68142 3 10.2314ZM16.5 12.2314C16.5 10.4614 15.48 8.9414 14 8.2014V16.2514C15.48 15.5214 16.5 14.0014 16.5 12.2314Z"></path></svg>';
    } else {
        muteBtn.classList.remove('muteButton-0-2-90', 'muteButton-d97-0-2-322', 'mute-btn-atc');
        muteBtn.classList.add('unmuteIconOnlyButton-0-2-88', 'unmuteIconOnlyButton-d0-0-2-89', 'unmuteButton', 'unmute-btn-atc');
        // Change the SVG content when the class changes to specified classes
        muteBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" pointer-events="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.63 5.04503C3.24 4.65503 3.24 4.02503 3.63 3.63503C4.03 3.24503 4.66 3.24503 5.05 3.63503L20.36 18.955C20.75 19.345 20.75 19.975 20.36 20.365C19.97 20.755 19.34 20.755 18.95 20.365L17.61 19.025C16.94 19.565 16.19 20.005 15.39 20.335C14.73 20.605 14 20.145 14 19.425C14 19.035 14.22 18.655 14.58 18.505C15.16 18.275 15.69 17.965 16.18 17.595L12 13.415V17.585C12 18.475 10.92 18.925 10.29 18.295L7 15.005H4C3.45 15.005 3 14.555 3 14.005V10.005C3 9.45503 3.45 9.00503 4 9.00503H7L7.29 8.70503L3.63 5.04503ZM18.59 14.345C18.85 13.615 19 12.825 19 12.005C19 9.06503 17.18 6.54503 14.61 5.50503C14.25 5.36503 14 5.03503 14 4.65503V4.46503C14 3.83503 14.63 3.37503 15.22 3.60503C18.6 4.89503 21 8.17503 21 12.005C21 13.395 20.68 14.705 20.12 15.875L18.59 14.345ZM10.29 5.71503L10.12 5.88503L12 7.76503V6.41503C12 5.52503 10.92 5.08503 10.29 5.71503ZM14 7.97503C15.48 8.71503 16.5 10.235 16.5 12.005C16.5 12.085 16.49 12.165 16.48 12.245L14 9.76503V7.97503Z"></path></svg>';
    }
}



function togglePiP() {
    if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
    } else {
        video.requestPictureInPicture();
    }
}


function setVolume() {
    video.volume = volumeRange.value;
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        // Entering fullscreen
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }

        // Hide the default controls in fullscreen
        video.controls = false;
    } else {
        // Exiting fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }

        // Restore the default controls when exiting fullscreen
        video.controls = true;
    }
}
// Initialize hls.js when the DOM is ready
document.addEventListener('DOMContentLoaded', initHls);




// Recently Watched Channels Slider 
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const slider = document.querySelector('.slider');
const slideWidth = slider.offsetWidth;

let scrollPosition = 0;

// Initially hide the previous button
prevButton.style.opacity = '0';
prevButton.style.pointerEvents = 'none';

// Function to show the previous button
function showPrevButton() {
    prevButton.style.opacity = '1';
    prevButton.style.pointerEvents = 'auto';
}

prevButton.addEventListener('click', () => {
    if (scrollPosition > 0) {
        scrollPosition -= slideWidth;
        slider.scroll({
            left: scrollPosition,
            behavior: 'smooth'
        });
        if (scrollPosition == 0) {
            prevButton.style.opacity = '0';
            prevButton.style.pointerEvents = 'none';
        }
    }
});

nextButton.addEventListener('click', () => {
    if (scrollPosition < slider.scrollWidth - slider.clientWidth) {
        scrollPosition += slideWidth;
        slider.scroll({
            left: scrollPosition,
            behavior: 'smooth'
        });
        showPrevButton();
    }
}); 

