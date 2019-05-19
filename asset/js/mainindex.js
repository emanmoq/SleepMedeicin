$(document).ready(function () {
    
   
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
    });