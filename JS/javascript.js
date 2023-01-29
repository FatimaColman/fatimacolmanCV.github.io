$(document).ready(function(){
  
   $('#Menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
   })

   $(window).on('scroll load',function(){
    
    $('#Menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrolltop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

   });

   $('a[href*-"#"]').on('click',function(e){
      e.preventDefault();

      $('html, body').animate({

         scrolltop : $($(this).attr('href')).offset().top,

      },
         500,
         'linear'
      );

   });

});

