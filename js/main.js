(function ($) {
    "use strict";

    // $(document).ready(function () {        
    //     set_equal_height(".our-proprietary-box");
    // });

    // $(window).resize(function () {
    //   set_equal_height(".our-proprietary-box");
    // });

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        margin: 50,
        autoplay: true,
        smartSpeed: 1000,
        items: 2,
        dots: true,
        loop: true,
        nav: false,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            320:{
                items: 1,
                margin:10
            },
            375:{
                items: 1,
                margin:10
            },
            450:{
                items: 1,
                margin:10
            },
            480:{
                items: 1,
                margin:10
            },
            576: {
                items: 2,
                margin: 10
            },
            992: {
                items: 2,
                margin: 30
            },
            1200: {
                items: 2,
                margin: 30
            },
            1440: {
                items: 2,
                margin: 30
            }
        }
    });

    // Blog carousel
    $(".blog-carousel").owlCarousel({
        margin: 50,
        autoplay: true,
        smartSpeed: 1000,
        items: 2,
        rows: 2,
        dots: true,
        loop: true,
        nav: false,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            320:{
                items: 1,
                margin:10
            },
            375:{
                items: 1,
                margin:10
            },
            450:{
                items: 1,
                margin:10
            },
            480:{
                items: 1,
                margin:10
            },
            576: {
                items: 2,
                margin: 10
            },
            992: {
                items: 2,
                margin: 30
            },
            1200: {
                items: 2,
                margin: 30
            },
            1440: {
                items: 2,
                margin: 30
            }
        }
    });


    $('.brand-carousel').owlCarousel({
        loop: true,
        dots: false,
        nav: false,
        rewind: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
        autoplay: true,
        autoplayTimeout: 2000,
        responsiveRefreshRate: 200,
        items: 1,
        responsiveClass: false,
        responsive: {
            481: {
                items: 2,
                margin: 10
            },
            576: {
                items: 3,
                margin: 10
            },
            768: {
                items: 4,
                margin: 10
            },
            992: {
                items: 5,
                margin: 30
            },
            1200: {
                items: 6,
                margin: 30
            }
        }
    });


    function set_equal_height(class_id_name, max_width = 5000, min_width = 0) {
        if (class_id_name != "") {

            var windows_width = jQuery(window).width();
            var set_height = 0;
            var item_max_height = 0;
            jQuery(class_id_name).css("height", "");
            if (windows_width <= max_width && windows_width >= min_width) {
                set_height = 1;
                jQuery(class_id_name).each(function () {
                    if (jQuery(this).height() > item_max_height) { item_max_height = jQuery(this).height(); }
                });
            }
            if (set_height == 1) {
                jQuery(class_id_name).height(item_max_height);
            }
        }
    }


})(jQuery);

// ******************************* active *****************************
$(document).ready(function () {
    $('ul.technical_services li a').click(function () {
        $('ul.technical_services li a').removeClass("active");
        $(this).addClass("active");
    });
});

// ******************************* drop down  *****************************
const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));


// ------
const faqItems = document.querySelectorAll('.faq_accordion button');

console.log('faqItems', faqItems);

function toggleFaqAccordion() {
    const faqItemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < faqItems.length; i++) {
        faqItems[i].setAttribute('aria-expanded', 'false');
    }

    if (faqItemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

faqItems.forEach((item) => item.addEventListener('click', toggleFaqAccordion));

// ******************************* open youtube popup  *****************************
$('.card-deck a').fancybox({
    caption: function (instance, item) {
        return $(this).parent().find('.card-text').html();
    }
});

// ******************************* Menu Active Js  *****************************
//Menu Active Js
// Add active class to the current button (highlight it)

document.addEventListener('DOMContentLoaded', function() {
// Add hover effect for services menu
const servicesMenu = document.querySelector('.menu_item .mobile_arrow a[href="javascript:;"]');
const homeMega = document.querySelector('.home_mega');

servicesMenu.addEventListener('mouseover', function() {
homeMega.classList.add('show');
});

servicesMenu.addEventListener('mouseout', function() {
homeMega.classList.remove('show');
});

// Add active class for internal menu
const menuItems = document.querySelectorAll('.menu_list ul li a');
menuItems.forEach(item => {
if (item.href === window.location.href) {
    item.classList.add('active');
}
});
});
