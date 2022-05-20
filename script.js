const modal1 = $('#modal1')
const modal2 = $('#modal2')
$(document).ready(function(){
   

    // toggle menu/navbar script

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        if(modal1.css('display') == 'block'){
            modal2.css('display', 'block')
            modal1.css('display', 'none')
        } else{
            modal1.css('display', 'block')
            modal2.css('display', 'none')
        };
    });

    // Owl Carousel Script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // TROCA DE NOMES NA HEAD
    var typed = new Typed(".typing", {
        strings: ["mesa", "vida"],
        typeSpeed: 100,
        backSpeed: 110,
        loop: true
    });
    
    
});