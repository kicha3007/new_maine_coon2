$(document).ready(function() {
    var nav = $('.nav__list');
    $(document).on('click','.nav__trigger',function(){
        $('.nav__trigger').toggleClass('active');
            if(nav.is(':visible')) {
                nav.slideUp();
            } else {
                nav.slideDown();
            }
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 767 && nav.is(':hidden')) {
            nav.removeAttribute("style");
        }
    })
});

$('#slider1').owlCarousel({
    loop:true,
    autoplay: false,
    items: 1,
    responsiveClass:true,
    nav:true,
    animateOut: 'fadeOut',
    navText: [""],
    smartSpeed:1000,
    responsive:{ //Адаптация в зависимости от разрешения экрана
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }

});