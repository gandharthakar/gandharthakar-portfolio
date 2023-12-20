
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

$(window).on('load', function(){
    // Hide Preloader after page load.
    $('.js-pre-loader').fadeOut();
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

    // Menu Links Click
    $('#site-nav li a').on('click', function(){
        let winw = $(window).width();
        let menu = $('.js-nav');
        if(winw < 992) {
            $('.js-menu-toggle').removeClass('active');
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
        navigation: {
            prevEl: ".js-mysklsldr-prev",
            nextEl: ".js-mysklsldr-next",
        },
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

    /* ------ hEADER MENU SCROLL ACTIVE NAV LINKS WITH RESPECTIVE SECTION SCROLL POSITION ------ */

    // Cache selectors
    let lastId,
    topMenu = $("#site-nav"),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e){
        let offset = 0;
        let winw = $(window).width();
        if(winw < 992) {
            offset = 93;
        } else {
            offset = 103;
        }
    
        let href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-offset;
        $('html, body').stop().animate({ 
            scrollTop: offsetTop
        }, 300);

        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
        let topMenuHeight_2 = $('.js-hdrotr').outerHeight();
        // Get container scroll position
        let fromTop = $(this).scrollTop()+topMenuHeight_2 + 3;

        // Get id of current scroll item
        let cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop) {
                return this;
            }
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        let id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
            .parent().removeClass("active")
            .end().filter("[href='#"+id+"']").parent().addClass("active");
        }
    });

}); // End of $( document ).ready() Function.