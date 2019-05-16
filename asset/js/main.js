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
   

      $('.DoctorSlider').owlCarousel({
        loop:true,
        autoplay:false,
        nav:true,
        margin:20,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
   
      
});

