$(document).ready(function () {
    var wow = new WOW(
        {
          boxClass:     'wow',   
          mobile:false,

          // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null // optional scroll container selector, otherwise use window
        }
      );
      wow.init();

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
         scrollTop = $(window).scrollTop()

         if(scrollTop>=$("#services").offset().top & scrollTop < $(".AcceptedSec").offset().top ){
            $(".nav-link").removeClass("activeLink");
            $(".servicesLink").addClass("activeLink");
         }
         else if(scrollTop>=$("#team").offset().top & scrollTop < $(".makeAppoint").offset().top ){
            $(".nav-link").removeClass("activeLink");
            $(".teamLink").addClass("activeLink");
           
         }
         else if(scrollTop>=$("#blog").offset().top & scrollTop < $(".GuestSec").offset().top ){
            $(".nav-link").removeClass("activeLink");
            $(".blogLink").addClass("activeLink");
           
         }
         else if(scrollTop>=$("#contact").offset().top ){
            $(".nav-link").removeClass("activeLink");
            $(".contactLink").addClass("activeLink");
           
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
        responsive:{
            0:{
                items:1
         
            }
        }
    });
    $('.galaryCarusel').owlCarousel({
        loop:true,

        autoplay:true,
        margin:20,
        responsive:{
            0:{
                items:2
         
            }
        }
    });
   
});


