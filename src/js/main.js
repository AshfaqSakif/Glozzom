$(document).ready(function(){
  $('.slider').slick({
    infinite : true ,
    SlideToShow: 1,
    SlideToScroll: 1
  });

  $('button').click(function(){
    $('p').hide();
  });

});
