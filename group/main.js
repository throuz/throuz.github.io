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
    },
    observer: true,
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 30,
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
    observer: true,
});



$(function () {
    // start
    var block = document.querySelector(".block")
    var content = document.querySelector(".content")
    var hash = window.location.hash;
    
    console.log(hash);

    setTimeout(function () {
        block.classList.add("none")
        content.classList.remove("none")
        // aos.js initial
        AOS.init();
        jump(hash)
    }, 1500);

});



function jump(h) {
    if(h){
        var top = document.querySelector(h).offsetTop;
        console.log(top);
        window.scrollTo(0, top);
    }
}

// footprint animation
$(function () {
    $(document).scroll(function () {
        var $footprint = $(".fa-shoe-prints:nth-child(1)");
        var scrollTop = $(window).scrollTop(),
            elementOffset = $footprint.offset().top,
            distance = (elementOffset - scrollTop);
        $footprint.toggleClass('footprint_scrolled', distance < window.innerHeight / 2);
    });
    $(document).scroll(function () {
        var $footprint = $(".fa-shoe-prints:nth-child(2)");
        var scrollTop = $(window).scrollTop(),
            elementOffset = $footprint.offset().top,
            distance = (elementOffset - scrollTop);
        $footprint.toggleClass('footprint_scrolled', distance < window.innerHeight / 2);
    });
    $(document).scroll(function () {
        var $footprint = $(".fa-shoe-prints:nth-child(3)");
        var scrollTop = $(window).scrollTop(),
            elementOffset = $footprint.offset().top,
            distance = (elementOffset - scrollTop);
        $footprint.toggleClass('footprint_scrolled', distance < window.innerHeight / 2);
    });
    $(document).scroll(function () {
        var $footprint = $(".fa-shoe-prints:nth-child(4)");
        var scrollTop = $(window).scrollTop(),
            elementOffset = $footprint.offset().top,
            distance = (elementOffset - scrollTop);
        $footprint.toggleClass('footprint_scrolled', distance < window.innerHeight / 2);
    });
    $(document).scroll(function () {
        var $footprint = $(".fa-shoe-prints:nth-child(5)");
        var scrollTop = $(window).scrollTop(),
            elementOffset = $footprint.offset().top,
            distance = (elementOffset - scrollTop);
        $footprint.toggleClass('footprint_scrolled', distance < window.innerHeight / 2);
    });
    $(document).scroll(function () {
        var $footprint = $(".fa-shoe-prints:nth-child(6)");
        var scrollTop = $(window).scrollTop(),
            elementOffset = $footprint.offset().top,
            distance = (elementOffset - scrollTop);
        $footprint.toggleClass('footprint_scrolled', distance < window.innerHeight / 2);
    });
    $(document).scroll(function () {
        var $footprint = $(".fa-shoe-prints:nth-child(7)");
        var scrollTop = $(window).scrollTop(),
            elementOffset = $footprint.offset().top,
            distance = (elementOffset - scrollTop);
        $footprint.toggleClass('footprint_scrolled', distance < window.innerHeight / 2);
    });
    $(document).scroll(function () {
        var $footprint = $(".fa-shoe-prints:nth-child(8)");
        var scrollTop = $(window).scrollTop(),
            elementOffset = $footprint.offset().top,
            distance = (elementOffset - scrollTop);
        $footprint.toggleClass('footprint_scrolled', distance < window.innerHeight / 2);
    });
    $(document).scroll(function () {
        var $footprint = $(".fa-shoe-prints:nth-child(9)");
        var scrollTop = $(window).scrollTop(),
            elementOffset = $footprint.offset().top,
            distance = (elementOffset - scrollTop);
        $footprint.toggleClass('footprint_scrolled', distance < window.innerHeight / 2);
    });
    $(document).scroll(function () {
        var $footprint = $(".fa-shoe-prints:nth-child(10)");
        var scrollTop = $(window).scrollTop(),
            elementOffset = $footprint.offset().top,
            distance = (elementOffset - scrollTop);
        $footprint.toggleClass('footprint_scrolled', distance < window.innerHeight / 2);
    });
    $(document).scroll(function () {
        var $footprint = $(".fa-shoe-prints:nth-child(11)");
        var scrollTop = $(window).scrollTop(),
            elementOffset = $footprint.offset().top,
            distance = (elementOffset - scrollTop);
        $footprint.toggleClass('footprint_scrolled', distance < window.innerHeight / 2);
    });
    $(document).scroll(function () {
        var $footprint = $(".fa-shoe-prints:nth-child(12)");
        var scrollTop = $(window).scrollTop(),
            elementOffset = $footprint.offset().top,
            distance = (elementOffset - scrollTop);
        $footprint.toggleClass('footprint_scrolled', distance < window.innerHeight / 2);
    });
    $(document).scroll(function () {
        var $footprint = $(".fa-shoe-prints:nth-child(13)");
        var scrollTop = $(window).scrollTop(),
            elementOffset = $footprint.offset().top,
            distance = (elementOffset - scrollTop);
        $footprint.toggleClass('footprint_scrolled', distance < window.innerHeight / 2);
    });
    $(document).scroll(function () {
        var $footprint = $(".fa-shoe-prints:nth-child(14)");
        var scrollTop = $(window).scrollTop(),
            elementOffset = $footprint.offset().top,
            distance = (elementOffset - scrollTop);
        $footprint.toggleClass('footprint_scrolled', distance < window.innerHeight / 2);
    });
    $(document).scroll(function () {
        var $footprint = $(".fa-shoe-prints:nth-child(15)");
        var scrollTop = $(window).scrollTop(),
            elementOffset = $footprint.offset().top,
            distance = (elementOffset - scrollTop);
        $footprint.toggleClass('footprint_scrolled', distance < window.innerHeight / 2);
    });
    $(document).scroll(function () {
        var $footprint = $(".fa-shoe-prints:nth-child(16)");
        var scrollTop = $(window).scrollTop(),
            elementOffset = $footprint.offset().top,
            distance = (elementOffset - scrollTop);
        $footprint.toggleClass('footprint_scrolled', distance < window.innerHeight / 2);
    });
    $(document).scroll(function () {
        var $footprint = $(".fa-shoe-prints:nth-child(17)");
        var scrollTop = $(window).scrollTop(),
            elementOffset = $footprint.offset().top,
            distance = (elementOffset - scrollTop);
        $footprint.toggleClass('footprint_scrolled', distance < window.innerHeight / 2);
    });
    $(document).scroll(function () {
        var $footprint = $(".fa-shoe-prints:nth-child(18)");
        var scrollTop = $(window).scrollTop(),
            elementOffset = $footprint.offset().top,
            distance = (elementOffset - scrollTop);
        $footprint.toggleClass('footprint_scrolled', distance < window.innerHeight / 2);
    });
});