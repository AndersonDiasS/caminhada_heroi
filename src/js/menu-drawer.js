// Abrir Drawer 

$("#drawer-button").click(function () {
  
    if ($('#Drawer').width() < 300) {
       $('#Drawer').animate({'width': 500}, 100);
    
    } else {
       $('#Drawer').animate({'width': 0}, 1500);
     }
   $('#drawer-button').toggleClass("opened"), 500;
 });


 $("#drawer-close").click(function(){
     if ($('#Drawer').width() >= 500){
         $('#Drawer').animate({'width': 0}, 100);
     } else{
         $('#Drawer').animate({'width': 500}, 150);
     }
     $('#drawer-button').toggleClass("opened"), 500;

 })

// Abrir Drawer


$('menu-row a').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;

})

 
$(window).scroll(function() {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100) {
      // $('nav').addClass('fixed');
      $('.scrolling-content section').each(function(i) {
          if ($(this).position().top <= windscroll - 100) {
              $('menu-row a.active').removeClass('active');
              $('menu-row a').eq(i).addClass('active');
          }
      });

  } else {

      // $('nav').removeClass('fixed');
      $('menu-row a.active').removeClass('active');
      $('menu-row a:first').addClass('active');
  }

}).scroll()