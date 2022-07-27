


$(".toggle,.xicon").click(function(){
    $(".navbarClone").css("left",0)
    $(".overlay").show();
})

$(".overlay,.xicon").click(function(){
    $(".navbarClone").css("left","-100%");
    $(".overlay").hide();
});

$(".bg").slideUp();
$(".navbar>ul>li").hover(function(){
    $(".bg,.navbar .submenuWrap").stop().slideDown()
},function(){
    $(".bg,.navbar .submenuWrap").stop().slideUp()

})


console.log("index");
$(".navbar>ul>").clone().appendTo(".mMenu")


$(".mMenu>li>a").click(function(e){
    e.preventDefault();
    console.log("click")

    $(".mMenu>li>a").parent().find(".submenuWrap").slideUp()
    if( $(this).hasClass("active") ){

    }else{
        $(this).parent().find(".submenuWrap").show();
        $(".mMenu>li>a").removeClass("active");
        $(this).addClass("active");
    }

})

$(".modal").click(function(e){
    e.preventDefault();
    let aModal = $(this).attr("href");
    console.log(aModal)

    $(".gLayer").css("display","flex");
    $(".overLayer img").attr("src",aModal)
})

$(".xicon").click(function(){
    $(this).parent().parent().hide();
})

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });