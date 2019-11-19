
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


  $(document).ready(function(){
    $("a").click(function(event){
      var link = $(this);
      if (link.attr('class').match('.hidden-content'))

       $('.div-close').hide("slow"),
       $('.div-open').show('slow');
        
      else 
      $('.div-close').show('slow'),
      $('.div-open').hide('slow');      
    })
  })


 

 

 