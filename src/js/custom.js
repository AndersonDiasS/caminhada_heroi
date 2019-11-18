// #ideathon - id primeiro swiper
jQuery('.swiper').slick({
    centerMode: true,
    // centerPadding: '60px',
    slidesToShow: 1,
    slidesToScroll:1,
    infinite: false,
    swipe: false,
    prevArrow: $(".btn-prev"),
    nextArrow: $(".btn-next"),
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
 
  });
 
  // Scrolling - Parametros 


  $( window ).ready(function() {
  
    var wHeight = $(window).height();

    $('.change')
      .height(wHeight)
      .scrollie({
        scrollOffset : -50,
        scrollingInView : function(elem) {
                   
          var bgColor = elem.data('background');
          
          $('.scrolling-content').css('background', bgColor);
          
        }
      });

  });