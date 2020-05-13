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
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
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