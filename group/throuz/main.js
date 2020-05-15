// navbar animation
$(function () {
    $(document).scroll(function () {
        var $nav = $("nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

//collapse
$('nav>div>ul>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

// aos.js initial
AOS.init();

// Initialize Swiper
var galleryThumbs = new Swiper('.gallery-thumbs', {
    slidesPerView: 2,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    // test
    slidesPerColumn: 2,
    breakpoints: {
        768: {
            slidesPerView: 4,
            slidesPerColumn: 1,
        },
    }
});
var galleryTop = new Swiper('.gallery-top', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        // hide: true,
    },
});