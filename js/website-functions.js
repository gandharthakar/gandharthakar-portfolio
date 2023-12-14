
function reduce_header_on_scroll() {
    let minpos = 50;
    let winTop = $(window).scrollTop();
    let header = $('.js-hdrotr');

    if(winTop > minpos) {
        header.addClass('minipad');
    } else {
        header.removeClass('minipad');
    }
}

$(window).on('scroll', function(){
    reduce_header_on_scroll();
});

$(function(){

    // Set Footer Year.
    let year = new Date().getFullYear();
    $("#footer-year").text(year);

    $('.js-menu-toggle').on('click', function(){
        let menu = $('.js-nav');
        let isMenuOpened = $(this).hasClass('active');

        if(!isMenuOpened) {
            $(this).addClass('active');
            menu.slideDown();
        } else {
            $(this).removeClass('active');
            menu.slideUp({
                complete: function(){
                    menu.removeAttr('style');
                }
            });
        }
    });

}); // End of $( document ).ready() Function.