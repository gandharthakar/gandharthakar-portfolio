$(function(){

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