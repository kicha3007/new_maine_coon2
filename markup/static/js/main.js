/*$(document).ready(function() {
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
});*/

$(document).ready(function() {
    var trigger = $('.nav__trigger');
    var nav = $('.nav');

    $(trigger).on('click',function(e){
        $('.nav__trigger').toggleClass('active');
        e.preventDefault();
        nav.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 750 && nav.is(':hidden')) {
            nav.removeAttr("style");
        }
    })
});





$('#slider1').owlCarousel({
    loop:true,
    autoplay: false,
    items: 1,
    responsiveClass:true,
    nav:true,
    navText: [""],
    smartSpeed:1000,

});