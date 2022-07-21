console.log(".index");


$(".toggle").click(function(){
    $(".navbarClone").css("left",0)
    $(".overlay").show();
})
$(".overlay").click(function(){
    $(".navbarClone").css("left","-100%");
    $(".overlay").hide();
});




$(".bg").slideUp()
$(".navbar>ul>li").hover(function(){
    $(".bg,.submenuWrap").stop().slideDown()
},function(){
    $(".bg,.submenuWrap").stop().slideUp()

})
 
$(".navbar>ul>").clone().appendTo(".mMenu")

