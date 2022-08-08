$(window).scroll(function () {
    let scrollY = window.pageYOffset;

    if (scrollY > 10) {
        $("#header").addClass("fixed");
    } else {
        $("#header").removeClass("fixed");
    }
})



$(".toggle,.xicon").click(function () {
    $(".navbarClone").css("left", 0)
    $(".overlay").show();
})

$(".overlay,.xicon").click(function () {
    $(".navbarClone").css("left", "-100%");
    $(".overlay").hide();
});

$(".bg").slideUp();
$(".navbar>ul>li").hover(function () {
    $(".bg, .navbar .submenuWrap,.navbar .submenu").stop().slideDown();
}, function () {
    $(".bg, .navbar .submenuWrap").stop().slideUp();

})


console.log("index");
$(".navbar>ul>li").clone().appendTo(".mMenu")


$(".mMenu>li>a").click(function (e) {
    e.preventDefault();
    console.log("click")

    $(".mMenu>li>a").parent().find(".submenuWrap").slideUp()
    if ($(this).hasClass("active")) {
        $(".mMenu>li>a").removeClass("active");
    } else {
        $(this).parent().find(".submenuWrap").slideDown();
        $(".mMenu>li>a").removeClass("active");
        $(this).addClass("active");
    }

})

$(".modal").click(function (e) {
    e.preventDefault();
    let aModal = $(this).attr("href");
    console.log(aModal)

    $(".gLayer").css("display", "flex");
    $(".overLayer img").attr("src", aModal)
})

$(".m_icon").click(function () {
    $(this).parent().parent().hide();
})

var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "fade",
    navigation: {
        nextEl: ".ben-button-next",
        prevEl: ".ben-button-prev",
    },
});

setInterval(slideNum, 3000);

let num = 0;
let view = 1;

function slideNum() {
    num++;
    if (num == $(".slide>div").length) {
        num = 0;
    }
    $(".slide>div").eq(num).css({ "z-index": view++, opacity: 0 }).stop().animate({ opacity: 1 }, 500)
}

function tab() {
    $(".tab li").click(function () {
        let i = $(this).index();
        console.log(i);
        $(".tab li").removeClass("active");
        $(this).addClass("active");

        $(".content>div").hide().eq(i).show();

    })
}
let params = new URLSearchParams(location.search);
//console.log(params.get("submenu"))


function views(i) {
    if (i != null) {
        console.log("ok")
        $(".tab li").removeClass("active").eq(i).addClass("active");
        $(".content div").hide().eq(i).show();

        tab()
    } else {
        tab()
    }
}
views(params.get("submenu"))