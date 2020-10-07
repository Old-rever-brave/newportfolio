$(function() {

    $('.slider').slick( {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    autoplay: true,
    initialSlide: 1,
    arrows: false
    });

    $(".trigger").click(function () {
            $(this).toggleClass("active");
            $("header nav").toggleClass("onanimation");
    });
    $('header nav li').click(function() {
        $(".trigger").removeClass("active");
        $("header nav").toggleClass("onanimation");
    });

});
