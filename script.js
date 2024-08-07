$(document).ready(function () {
    $('.slider_article').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: CSSScale,
        arrows: true
    });
});
$(document).ready(function () {
    $('.slider_video_library').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true
    });
});
$(document).ready(function () {
    $('.slider_podcast').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true
    });
});

var loader = document.querySelector("#loader")
// set timeout basically dalay in execution
setTimeout(function(){
    loader.style.top = "-100%";
},3500)


// js for scroll detection:
document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('.heading-animation');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        headings.forEach(heading => {
            const rect = heading.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > 0) {
                heading.classList.add('visible');
            } else {
                heading.classList.remove('visible');
            }
        });
    }

    // Check visibility on scroll and resize
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Initial check
    checkVisibility();
});