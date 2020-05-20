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
    if (h) {
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


// 鼠標
{
    // Some help functions.
    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const getMousePos = (e) => {
        let posx = 0;
        let posy = 0;
        if (!e) e = window.event;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY) {
            posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
        }
        return { x: posx, y: posy }
    }

    // Custom mouse cursor.
    class CursorFx {
        constructor(el) {
            this.DOM = { el: el };
            this.DOM.dot = this.DOM.el.querySelector('.cursor-inner--dot');
            this.DOM.circle = this.DOM.el.querySelector('.cursor-inner--circle');
            this.bounds = { dot: this.DOM.dot.getBoundingClientRect(), circle: this.DOM.circle.getBoundingClientRect() };
            this.scale = 1;
            this.opacity = 1;
            this.mousePos = { x: 0, y: 0 };
            this.lastMousePos = { dot: { x: 0, y: 0 }, circle: { x: 0, y: 0 } };
            this.lastScale = 1;
            this.lastOpacity = 1;

            this.initEvents();
            requestAnimationFrame(() => this.render());
        }
        initEvents() {
            window.addEventListener('mousemove', ev => this.mousePos = getMousePos(ev));
        }
        render() {
            this.lastMousePos.dot.x = lerp(this.lastMousePos.dot.x, this.mousePos.x - this.bounds.dot.width / 2, 1);
            this.lastMousePos.dot.y = lerp(this.lastMousePos.dot.y, this.mousePos.y - this.bounds.dot.height / 2, 1);
            this.lastMousePos.circle.x = lerp(this.lastMousePos.circle.x, this.mousePos.x - this.bounds.circle.width / 2, 0.15);
            this.lastMousePos.circle.y = lerp(this.lastMousePos.circle.y, this.mousePos.y - this.bounds.circle.height / 2, 0.15);
            this.lastScale = lerp(this.lastScale, this.scale, 0.15);
            this.lastOpacity = lerp(this.lastOpacity, this.opacity, 0.1);
            this.DOM.dot.style.transform = `translateX(${(this.lastMousePos.dot.x)}px) translateY(${this.lastMousePos.dot.y}px)`;
            this.DOM.circle.style.transform = `translateX(${(this.lastMousePos.circle.x)}px) translateY(${this.lastMousePos.circle.y}px) scale(${this.lastScale})`;
            this.DOM.circle.style.opacity = this.lastOpacity
            requestAnimationFrame(() => this.render());
        }
        enter() {
            cursor.scale = 2.7;
        }
        leave() {
            cursor.scale = 1;
        }
        click() {
            this.lastScale = 1;
            this.lastOpacity = 0;
        }
    }

    const cursor = new CursorFx(document.querySelector('.cursor'));

    // Custom cursor changes state when hovering on elements with 'data-hover'.
    [...document.querySelectorAll('[data-hover]')].forEach((link) => {
        link.addEventListener('mouseenter', () => cursor.enter());
        link.addEventListener('mouseleave', () => cursor.leave());
        link.addEventListener('click', () => cursor.click());
    });

}
