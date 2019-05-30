$(document).ready(function () {
    new WOW().init();

    shareItem=false;
    navbartoggler=false;

    $(".shareItemDisplay").click(function() {
        if(shareItem)
        $(this).parent().find(".shareItem").css("display","none");
        else{
            $(this).parent().find(".shareItem").css("display","block");

        }
        shareItem=!shareItem;
      });
      $(".navbar-toggler").click(function() {

          $(".MobileMenu").animate({left:0,}, 200, function() {});
          
      });
        $(".MobileMenu .close").click(function() {
                $(".MobileMenu").animate({left: -1000,},200, function() {});
        });
      $(".nav-link").click(function() {
       $(".nav-link").removeClass("aciveLink");
      $(this).addClass("aciveLink");
      });
      $(window).scroll(function () {
        scrollTop = $(window).scrollTop();

         if( scrollTop >$('.header').height()){
            $('.navbar').addClass('scrollNav');
            $('.MobileMenu').addClass('scrollNav');


         }
         else{
            $('.navbar').removeClass('scrollNav');    
          $('.MobileMenu').removeClass('scrollNav');

         }
         
   
        });
        $(".servicesLink").click(function() { 
	
            $('.nav-link').removeClass('activeLink');
            $(this).addClass('activeLink');
            
                $('html, body').animate({
                    scrollTop: $("#services").offset().top
                }, 1000);
            });
            $(".teamLink").click(function() { 
	
                $('.nav-link').removeClass('activeLink');
                $(this).addClass('activeLink');
                
                    $('html, body').animate({
                        scrollTop: $("#team").offset().top
                    }, 1000);
                });
                $(".blogLink").click(function() { 
	
                    $('.nav-link').removeClass('activeLink');
                    $(this).addClass('activeLink');
                    
                        $('html, body').animate({
                            scrollTop: $("#blog").offset().top
                        }, 1000);
                    });
                    $(".contactLink").click(function() { 
	
                        $('.nav-link').removeClass('activeLink');
                        $(this).addClass('activeLink');
                        
                            $('html, body').animate({
                                scrollTop: $("#contact").offset().top
                            }, 1000);
                        });

      $('.DoctorSlider').owlCarousel({
        loop:true,
        autoplay:false,
        nav:true,
        margin:20,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    $('.GuestCarusel').owlCarousel({
        navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
        loop:true,
        autoplay:false,
        nav:true,
        margin:20,
        navClass:['owl-prev','owl-next'],
        responsive:{
            0:{
                items:1
         
            }
        }
    });
    $('.galaryCarusel').owlCarousel({
        loop:true,

        autoplay:true,
        
        responsive:{
            0:{
                items:2
         
            }
        }
    });
    $('.heroCarusel').owlCarousel({
        loop:true,
dots:true,
     autoplay:true,
        responsive:{
            0:{
                items:1
         
            }
        }
    });
   
});


