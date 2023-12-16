
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

    // Init Skill Slider
    let skill_slider = new Swiper('.js-skills-slider', {
        slidesPerView: "auto",
    });

    // Filter Skills.
    $('.js-filter-skills').on('click', function(){
        let all_links = $('.js-filter-skills');
        $(all_links).removeClass('active');
        $(this).addClass('active');

        let filter = $(this).attr('data-show-panel');
        $('.js-skills-slider .swiper-slide').css('display', 'none');
        $('.js-skills-slider .swiper-slide' + filter).css('display', '');
        skill_slider.updateSize();
        skill_slider.updateSlides();
        skill_slider.updateProgress();
        skill_slider.updateSlidesClasses();
        skill_slider.slideTo(0);
        skill_slider.scrollbar.updateSize();

        return false;
    });

}); // End of $( document ).ready() Function.