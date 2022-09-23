$("#fullpage").fullpage({
    menu:".navTop",
    anchor:["m1st","m2st","m3st","m4st"],
    navigation:true,
    navigationPosition:"fp-right"
});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
});

