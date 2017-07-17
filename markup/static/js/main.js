(function($){
    $(function() {
        $('.nav__trigger').on('click', function() {
            $(this).closest('.nav').toggleClass('menu_state_open');
        });
    });
})(jQuery);

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