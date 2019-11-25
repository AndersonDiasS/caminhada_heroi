new WOW().init();


var sliders = {
  1: {slider: '#ideathon', navprev: '.navideathonprev', navnext: '.navideathonnext'},
  2: {slider: '#Leaners' , navprev: '.navLeanersprev',  navnext: '.navLeanersnext' },
  3: {slider: '#Builders', navprev: '.navBuildersprev', navnext: '.navBuildersnext'},
  4: {slider: '#Players' , navprev: '.navPlayersprev', navnext: '.navPlayersnext'},
  5: {slider: '#Justice' , navprev: '.navJusticeprev', navnext: '.navJusticenext'}
};

$.each(sliders, function(){
  $(this.slider).slick({
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll:1,
    infinite: false,
    swipe: false,
    // Colocar em um array
    prevArrow: (this.navprev),
    nextArrow: (this.navnext), 
  });
 
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


  // $(document).ready(function(){
  //   $("a").click(function(event){
  //     var link = $(this);
  //     if (link.attr('class').match('.hidden-content'))

  //      $('.div-close').hide("slow"),
  //      $('.div-open').show('slow');
        
  //     else 
  //     $('.div-close').show('slow'),
  //     $('.div-open').hide('slow');      
  //   })
  // })
 
  function change(step){
    switch(step) {
      case 0:
        alert(0);
        $('.div-close').show("slow"),
        $('.div-open').hide('slow'),
        $('.div-open1').hide('slow');  
        $('.div-open2').hide('slow');  
        break;
      case 1:
        alert(1);
        $('.div-close').hide("slow"),
        $('.div-open').show('slow'),
        $('.div-open1').hide('slow');  
        $('.div-open2').hide('slow');  
        break;
      case 2:
        alert(2);
        $('.div-open').hide('slow'), 
        $('.div-close').hide('slow'),  
        $('.div-open1').show('slow');  
        $('.div-open2').hide('slow');  
        break;
        case 3:
          alert(3);
          $('.div-open').hide('slow'), 
          $('.div-close').hide('slow'),  
          $('.div-open1').hide('slow');  
          $('.div-open2').show('slow');  
          break;
      default:
        break;      
    }
  }


 
