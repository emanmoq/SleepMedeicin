$(document).ready(function () {
   

    shareItem=false;
    $(".shareItemDisplay").click(function() {
        if(shareItem)
        $(this).parent().find(".shareItem").css("display","none");
        else{
            $(this).parent().find(".shareItem").css("display","block");

        }
        shareItem=!shareItem;
      });
      $(".nav-link").click(function() {
       $(".nav-link").removeClass("aciveLink");
      $(this).addClass("aciveLink");
      });
      $(window).scroll(function () {
        scrollTop = $(window).scrollTop();

         if( scrollTop >$('.header').height()){
            $('.navbar').addClass('scrollNav');

         }
         else{
            $('.navbar').removeClass('scrollNav');
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
   
});


