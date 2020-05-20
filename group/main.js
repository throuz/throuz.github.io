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

    // 獲取鼠標位置
    const getMousePos = (e) => {
        // let posx = 0;
        // let posy = 0;
        // if (!e) e = window.event;
        // if (e.pageX || e.pageY) {
        //     posx = e.pageX;
        //     posy = e.pageY;
        // }
        // else if (e.clientX || e.clientY) {
        //     posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
        //     posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
        // }

        // console.log(posx,posy);
        // return { x: posx, y: posy }


        // 測試
        var posx = 0;
        var posy = 0;
        if (!e) var e = window.event;
        if (e.pageX || e.pageY) {
            posx = e.pageX - document.documentElement.scrollLeft - document.body.scrollLeft;
            posy = e.pageY - document.documentElement.scrollTop - document.body.scrollTop;
        }
        else if (e.clientX || e.clientY) {//for fucking IE
            posx = e.clientX;//+ document.body.scrollLeft+ document.documentElement.scrollLeft;
            posy = e.clientY;//+ document.body.scrollTop + document.documentElement.scrollTop;

            //如果想取得目前的捲動值 就把後面的註解拿掉
        }

        return { x: posx, y: posy };//posx posy就是游標的X,Y值了
    }

    // 測試
    // function getMousePos(event) {
    //     var e = event || window.event;
    //     var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    //     var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    //     var x = e.pageX || e.clientX + scrollX;
    //     var y = e.pageY || e.clientY + scrollY;
    //     //alert('x: ' + x + '\ny: ' + y);
    //     return { 'x': x, 'y': y };
    // }

    // 測試
    // function getMousePos(ev) {
    //     if (ev.pageX || ev.pageY) {
    //         return { x: ev.pageX, y: ev.pageY };
    //     }
    //     return {
    //         x: ev.clientX   document.body.scrollLeft - document.body.clientLeft,
    //         y: ev.clientY   document.body.scrollTop - document.body.clientTop
    //     };
    // }

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

            // setInterval(ev => this.mousePos = getMousePos(ev), 1000);

            this.initEvents();
            requestAnimationFrame(() => this.render());
        }
        // 監聽滑鼠移動，獲取鼠標位置
        initEvents() {
            window.addEventListener('mousemove', ev => this.mousePos = getMousePos(ev));


            // window.addEventListener('mouseover', ev => this.mousePos = getMousePos(ev));
            // document.addEventListener('mousemove', ev => this.mousePos = getMousePos(ev));
            // document.addEventListener('mouseover', ev => this.mousePos = getMousePos(ev));

            // let test = querySelector('.content')
            // test.addEventListener('mousemove', ev => this.mousePos = getMousePos(ev));

            // $(function () {
            //     setInterval(oneSecondFunction, 1000);
            // });

            // function oneSecondFunction() {
            //     // stuff you want to do every second
            //     ev => this.mousePos = getMousePos(ev)
            // }

            // setInterval(ev => this.mousePos = getMousePos(ev), 1000);
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

    window.addEventListener('wheel', ev => {
        this.mousePos = getMousePos(ev)

    });

}
