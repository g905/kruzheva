import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
//import 'bootstrap/js/dist/util';
import AOS from 'aos'
import 'slick-carousel'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faViber, faSkype, faWhatsapp, faVk, faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
library.add( faViber, faSkype, faWhatsapp, faVk, faYoutube, faFacebook, faInstagram, faMapMarkerAlt, faSearch );

// ====================================== Replace fa-icons with SVGs ===============================
dom.watch();

$(()=>{
    // Navbar icon animation ==============
    $('.nav-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });

    // Scroll to section ==============
    $('.nav-link').each(function () {
        $(this).on('click', function (e) {
            //e.preventDefault();
            var sec = $(this).attr('href');
            var offs = 0;

            if (window.scrollY < 150) {
                offs = 40;
            }

            if (sec === '#portfolio' || sec === '#order' || sec === '#contact') {
                $("html, body").animate({
                    scrollTop: $(sec).offset().top - (70 + offs)
                }, 'slow');
            } else {
                $("html, body").animate({
                    scrollTop: $(sec).find('h2').offset().top - (70 + offs)
                }, 'slow');
            }
        });
    });
    // ====================================== Animate on scroll ====================================
    AOS.init();

    // ====================================== Loader ===============================================

    $('.loader-area').fadeOut().end().delay(400).fadeOut('slow');

    // ====================================== Show phone by click ==================================

    $('.sh').click((e)=>{
        let phone = $(e.target).data('phone');
        if(!$(e.target).hasClass('clicked')){
            $(e.target).addClass('clicked');
            $(e.target).text(phone);
        } else {
            location.href = 'tel:'+phone;
        }

    });

    // ====================================== Search ===============================================

    $('.search').focus(function(e){
        $('.search').addClass('full-width');
    });
    $('.search').focusout(function(e){
        $('.search').removeClass('full-width');
    });

    // ====================================== Vacancy slide ========================================

    $('.vacancy-title').click(function(e){console.log($(e.target).closest('.mycard').hasClass('hidden')); $(e.target).closest('.mycard').toggleClass('hidden')});

    // ====================================== Vacancy-resize =======================================

    if ($(window).width() < 514) {
        $('.mycard').addClass('hidden');
    } else {
        $('.mycard').removeClass('hidden');
    }

    // ====================================== Test pug and js ======================================

    let template = require("../pug/users.pug");
    let locals = {
        users: [
            "user1",
            "user2",
            "user3"
        ]
    };

    $('.test').html(template(locals));

    // ====================================== Slick sliders ========================================

    let slick1 = {
        "infinite": true,
        "arrows": false,
        "dots": true,
        "autoplay": true,
        "slidesToShow": 1
    };

    let slick4 = {
        "infinite": false,
        "arrows": false,
        "dots": true,
        "appendDots": $('.slick-controls'),
        "autoplay": false,
        "slidesToShow": 4,
        responsive: [{
            "breakpoint": "960",
            "settings": {
                "slidesToShow": 1
            }
        }]
    };

    let slickAfisha = {
        "infinite": false,
        "arrows": false,
        "dots": true,
        "appendDots": $('.slick-controls-afisha'),
        "autoplay": false,
        "slidesToShow": 4,
        responsive: [{
            "breakpoint": "960",
            "settings": {
                "slidesToShow": 1
            }
        }]
    };
    let slickGallery = {
        "infinite": false,
        "arrows": false,
        "dots": true,
        "appendDots": $('.slick-controls-gallery'),
        "autoplay": false,
        "slidesToShow": 4,
        responsive: [{
            "breakpoint": "960",
            "settings": {
                "slidesToShow": 1
            }
        }]
    };

    let slickServices = {
        "infinite": false,
        "arrows": false,
        "dots": true,
        "appendDots": $('.slick-controls-services'),
        "autoplay": false,
        "slidesToShow": 4,
        responsive: [{
            "breakpoint": "960",
            "settings": {
                "slidesToShow": 4,
                "vertical": true,
                "verticalSwiping": true
            }
        }]
    };

    let slickNews = {
        "infinite": false,
        "arrows": false,
        "dots": true,
        "appendDots": $('.slick-controls-news'),
        "autoplay": false,
        "slidesToShow": 2,
        responsive: [{
            "breakpoint": "960",
            "settings": {
                "slidesToShow": 1
            }
        }]
    };

    let slickArticles = {
        "infinite": false,
        "arrows": false,
        "dots": true,
        "appendDots": $('.slick-controls-articles'),
        "autoplay": false,
        "slidesToShow": 2,
        responsive: [{
            "breakpoint": "960",
            "settings": {
                "slidesToShow": 1
            }
        }]
    };

    let slickAlbum = {
        "infinite": false,
        "arrows": false,
        "dots": true,
        "autoplay": false,
        "slidesToShow": 4,
        responsive: [{
            "breakpoint": "960",
            "settings": {
                "slidesToShow": 1
            }
        }]
    };

    $('.slick-events').slick(slickAfisha);
    $('.slick-gallery').slick(slickGallery);
    $('.slick-services').slick(slickServices);
    $('.slick-news').slick(slickNews);
    $('.slick-articles').slick(slickArticles);
    $('.slick-album').slick(slickAlbum);
    $('.slick1').each((idx, el)=>{
        $(el).slick(slick1);
    });

});