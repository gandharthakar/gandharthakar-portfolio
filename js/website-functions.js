
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

    // Mobile Menu Toggle Menu
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

    // Filter Skills items.
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

    // CHange Work Tabs On Click.
    $('.js-work-tabs').on('click', function(){
        $('.js-work-tabs').removeClass('active');
        $(this).addClass('active');

        $('.js-work-panel').hide();
        let curr_panel = $(this).attr("data-show-panel");
        $(curr_panel).fadeIn();
    });

    // Init Commercial Slider
    let cw_slider = new Swiper('.js-work-slider-cm', {
        slidesPerView: "auto",
        navigation: {
            prevEl: ".js-cwsc-prev",
            nextEl: ".js-cwsc-next",
        },
    });

    // Init Personal Slider
    let pw_slider = new Swiper('.js-work-slider-pr', {
        slidesPerView: "auto",
        navigation: {
            prevEl: ".js-pwsc-prev",
            nextEl: ".js-pwsc-next",
        },
    });

}); // End of $( document ).ready() Function.