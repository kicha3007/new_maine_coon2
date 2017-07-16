(function($){
    $(function() {
        $('.nav__icon').on('click', function() {
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
    navText: [""]

});