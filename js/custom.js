//only js

$(function () {

    //swipe_area
    var swiper = new Swiper(".work_slide", {
        spaceBetween: 30,
        freeMode: true,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
    });

    // scrollMagic_area

    var controller = new ScrollMagic.Controller();



    new ScrollMagic.Scene({
        triggerElement: "#trigger3",
        triggerHook: 0.9,
        duration: "0",
        offset: 0,
    })
        .setClassToggle("#reveal3", "revealing03")
        .addTo(controller);


    new ScrollMagic.Scene({
        triggerElement: "#trigger4",
        triggerHook: 0.9,
        duration: "0",
        offset: 0,
    })
        .setClassToggle("#reveal4", "revealing04")
        .addTo(controller);


    new ScrollMagic.Scene({
        triggerElement: "#trigger5",
        triggerHook: 0.9,
        duration: "0",
        offset: 0,
    })
        .setClassToggle("#reveal5", "revealing05")
        .addTo(controller);



    new ScrollMagic.Scene({
        triggerElement: "#trigger6",
        triggerHook: 0.9,
        duration: "0",
        offset: 0,
    })
        .setClassToggle("#reveal6", "revealing06")
        .addTo(controller);


    new ScrollMagic.Scene({
        triggerElement: "#trigger7",
        triggerHook: 0.9,
        duration: "0",
        offset: 0,
    })
        .setClassToggle("#reveal7", "revealing07")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#trigger8",
        triggerHook: 0.9,
        duration: "0",
        offset: 0,
    })
        .setClassToggle("#reveal8", "revealing08")
        .addTo(controller);
    new ScrollMagic.Scene({
        triggerElement: "#trigger10",
        triggerHook: 0.9,
        duration: "0",
        offset: 0,
    })
        .setClassToggle("#reveal10", "revealing10")
        .addTo(controller);


    new ScrollMagic.Scene({
        triggerElement: "#project01",
        triggerHook: 0.9,
        duration: "0",
        offset: 0,
    })
        .setClassToggle(".project", "fade-in")
        .addTo(controller);


    new ScrollMagic.Scene({
        triggerElement: "#project02",
        triggerHook: 0.9,
        duration: "0",
        offset: 0,
    })
        .setClassToggle(".project1", "fade-in1")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#project03",
        triggerHook: 0.9,
        duration: "0",
        offset: 0,
    })
        .setClassToggle(".project2", "fade-in2")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#project04",
        triggerHook: 0.9,
        duration: "0",
        offset: 0,
    })
        .setClassToggle(".project3", "fade-in3")
        .addTo(controller);

    var revealElements = document.getElementsByClassName("list");
    for (var i = 0; i < revealElements.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: revealElements[i],
            offset: 50,
            triggerHook: 0.9,
        })
            .setClassToggle(revealElements[i], "visible")
            .addTo(controller);
    }

    var tween1 = TweenMax.to('.connect01', 0.5, {
        x: '80%'
    });
    var tween2 = TweenMax.to('.connect02', 0.5, {
        x: '-80%'
    });
    var scene = new ScrollMagic.Scene({
        triggerElement: ".info_area",
        duration: "100%",
        offset: 150
    })
        .setTween(tween2)
        .addTo(controller)
    /*.addIndicators({
      name: "1"
    }) */

    var scene = new ScrollMagic.Scene({
        triggerElement: ".view_container",
        duration: "100%",
        offset: 150
    })
        .setTween(tween1)
        .addTo(controller)

    var tween3 = TweenMax.to('.work_slider', 0.5, {
        x: '-200%'
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: ".view_container",
        duration: "100%",
        offset: 150
    })
        .setTween(tween3)
        .addTo(controller)
    /*.addIndicators({
      name: "1"
    }) */

    var scene = new ScrollMagic.Scene({
        triggerElement: ".info_area",
        duration: "100%",
        offset: 150
    })
        .setTween(tween1)
        .addTo(controller)


    var tween5 = TweenMax.to('#scrollOpacity', 0.1, {
        opacity: 0,
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger5",
        duration: "0",
    })
        .setTween(tween5)
        .addTo(controller)







    $(function () {
        $('.projectGo').mouseenter(function () {
            //alert('hover')
            $('.capa_02').css('display', 'block');
        })
        $('.projectGo').mouseleave(function () {
            //alert('hover')
            $('.capa_02').css('display', 'none');
        })
    })

    //main-slider-nav-circle-click-event

    $(function () {
        $('.single-bullet.single02').click(function () {
            //alert('transform')
            $('.slide_img_box ul').css('transform', 'translateY(-100%)');
        })
        $('.single-bullet.single03').click(function () {
            //alert('transform')
            $('.slide_img_box ul').css('transform', 'translateY(-200%)');
        })
        $('.single-bullet.single04').click(function () {
            //alert('transform')
            $('.slide_img_box ul').css('transform', 'translateY(-300%)');
        })
        $('.single-bullet.single01').click(function () {
            //alert('transform')
            $('.slide_img_box ul').css('transform', 'translateY(0)');
        })
    })

    for (let i = 0; i < $('.single-bullet').length; i++) {
        $('.single-bullet').eq(i).click(function () {
            //alert('single-bullet준비완료')
            $('.single-bullet-child').css('display', 'none');
            $('.single-bullet-child').eq(i).css('display', 'block');
        })
    }
})


//hover_area

//패럴렉스 scroll

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        var mainListScroll = -scroll / 5

        $('.sec02-txt').css({
            'transform': 'translate3d(0,' + mainListScroll + 'px, 0)'
        })
        $('.sec03-txt').css({
            'transform': 'translate3d(-50%,' + mainListScroll + 'px, -50%)'
        })


    })
})

$(document).ready(function () {
    $('.scrollDown').click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $('.section02').offset().top + 210 }, 1000);
    })
})

//footer langs click for문
for (let i = 0; i < $('.step').length; i++) {
    $('.step').eq(i).click(function () {
        //alert('footer 클릭')
        $('.step').removeClass('on');
        $('.step').eq(i).addClass('on');
    })
}

//sub-menu

var subSlide = 1;

$('.header_menu').click(function () {
    if (subSlide == 1) {
        $('.sub_menu').css('transform', 'translateX(0%)')
        $('body').addClass('active');
        subSlide = 2;
    } else if (subSlide == 2) {
        $('.sub_menu').css('transform', 'translateX(-150%)')
        $('body').removeClass('active');
        subSlide = 1;
    }
})

var msubSlide = 1;

$('.m_header_menu').click(function () {
    if (msubSlide == 1) {
        $('.header_response_list').css('transform', 'translateY(0%)')
        $('body').addClass('active');
        msubSlide = 2;
    } else if (msubSlide == 2) {
        $('.header_response_list').css('transform', 'translateY(-150%)')
        $('body').removeClass('active');
        msubSlide = 1;
    }
})


$('.menu').click(function () {
    h = $(this).siblings('.sub').find('ul').height();

    if ($(this).siblings('.sub').height() > 0) {
        $('.sub').stop().animate({ height: 0 }, 500);
    } else {
        $('.sub').stop().animate({ height: 0 }, 500);
        $(this).siblings('.sub').stop().animate({ height: h }, 500);
    }
})



