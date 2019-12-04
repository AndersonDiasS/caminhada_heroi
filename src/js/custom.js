new WOW().init();
// Leagues 
var sliders = {
  1: { slider: '#ideathon', navprev: '.navideathonprev', navnext: '.navideathonnext' },
  2: { slider: '#Leaners', navprev: '.navLeanersprev', navnext: '.navLeanersnext' },
  3: { slider: '#Builders', navprev: '.navBuildersprev', navnext: '.navBuildersnext' },
  4: { slider: '#Players', navprev: '.navPlayersprev', navnext: '.navPlayersnext' },
  5: { slider: '#Justice', navprev: '.navJusticeprev', navnext: '.navJusticenext' }
};

$.each(sliders, function () {
  $(this.slider).slick({
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    swipe: false,
    // Colocar em um array
    prevArrow: (this.navprev),
    nextArrow: (this.navnext),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false
        }
      },
 
      
    ]
  });

});

// TEXT SWIPER 

$('.swiper-helper').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
  autosplayspeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false
      }
    }

  ]

});




// Scrolling - Parametros 


$(window).ready(function () {

  var wHeight = $(window).height();

  $('.change')
    .height(wHeight)
    .scrollie({
      scrollOffset: -50,
      scrollingInView: function (elem) {

        var bgColor = elem.data('background');

        $('.scrolling-content').css('background', bgColor);

      }
    });

});

// $(window).ready(function () {
//   var wHeight = $(window).height();
//   $('.change')
//     .height(wHeight)
//     .scrollie({
//       scrollOffset: -50,
//       scrollingInView: function (elem) {
//         var bgColor = elem.data('background');
//         $('.scrolling-content').css('background', bgColor);
//         switch (bgColor) {
//           case 'linear-gradient(463.3deg, rgb(255, 48, 92) 0%, rgb(116, 39, 241) 100%)':  // Ideathon
//             //ativar ideathon 
//             //desativar as outras
//             break;
//           case '#00DFEC':                                                                 // Learners 
//             //ativar learners
//             //desativar as outras
//             break;
//           case '#7427F1':                                                                 // Builders
//             //ativar builders
//             //desativar as outras
//             break;
//           case '#FF305C':                                                                 // Players
//             //ativar players
//             //desativar as outras
//             break;
//           case '#262626':                                                                 // Justice
//             //ativar justice
//             //desativar resto  
//           default:       
//             //defaultzin 
//         }
//       }
//     });
// });








function change(step) {

  switch (step) {
    case 0:
      // alert(0);
      $('.div-close').show("slow"),
        $('.div-open').hide('slow'),
        $('.div-open1').hide('slow');
      $('.div-open2').hide('slow');

      break;
    case 1:
      // alert(1);
      $('.div-close').hide("slow"),
        $('.div-open').show('slow'),
        $('.div-open1').hide('slow');
      $('.div-open2').hide('slow');

      break;
    case 2:
      // alert(2);
      $('.div-open').hide('slow'),
        $('.div-close').hide('slow'),
        $('.div-open1').show('slow');
      $('.div-open2').hide('slow');

      break;
    case 3:
      // alert(3);
      $('.div-open').hide('slow'),
        $('.div-close').hide('slow'),
        $('.div-open1').hide('slow');
      $('.div-open2').show('slow');

      break;
    case 4:
      $('.div-open').hide('slow'),
        $('.div-close').hide('slow'),
        $('.div-open1').hide('slow');
      $('.div-open2').hide('slow');

    default:
      break;
  }
}



// #Parallax

var rellax = new Rellax('.rellax');