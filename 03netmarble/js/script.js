$(window).scroll(function(){
    let scrollY = window.pageYOffset;

    if (scrollY > 10 ){
        $(".navbar>ul>li>a").css("color","#333");
        $("#header").css("background","#fff");
        $(".logoWrap").css("display","block");

    }else{
        $(".navbar>ul>li>a").css("color","#fff");
        $("#header").css("background","none");
        $(".logoWrap").css("display","none");
    }
    $(".scroll").html(parseInt(scrollY))
});

$(document).ready(function () {
    var slide = $(".slide1").bxSlider({
        auto: true,
        controls: false
    });

    $(".next").click(function () {
        slide.goToNextSlide();
    });

    $(".prev").click(function () {
        slide.goToPrevSlide();
    });

});