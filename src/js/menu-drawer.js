// Abrir Drawer 

$("#drawer-button").click(function () {
  
    if ($('#Drawer').width() < 300) {
       $('#Drawer').toggleClass("drawer-opened");
    
    } else {
       $('#Drawer').toggleClass("drawer-opened");
     }
   $('#drawer-button').toggleClass("opened"), 500;
 });


 $("#drawer-close").click(function(){
     if ($('#Drawer').width() >= 500){
         $('#Drawer').toggleClass('drawer-opened');
     } else{
         $('#Drawer').toggleClass('drawer-opened');
     }
     $('#drawer-button').toggleClass("opened"), 500;

 })

// Abrir Drawer


// $('menu-row a').on('click', function() {

//     var scrollAnchor = $(this).attr('data-scroll'),
//         scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

//     $('body,html').animate({
//         scrollTop: scrollPoint
//     }, 500);

//     return false;

// })

 
 // Cache selectors
//  $(document).ready(function(){
  
//     function smoothScroll(target) {
//           const headerHeight = $("#main-nav").outerHeight() + 10;
//           $("html,body").animate(
//               {"scrollTop":target.offset().top - headerHeight},
//               300
//           );
//       }
    
 
//     $(window).scroll(function(){
//       let scrollPos = $(this).scrollTop();
//       let scrollDistance = scrollPos + 130;
      
//       $("#main-nav ul li 'a[href*=\\#]'").each(function () {
//               let currLink = $(this);
//               let refElement = $(currLink.attr("href"));
//               if (refElement.position().top <= scrollDistance && refElement.position().top + refElement.height() > scrollDistance) {
//                   $("#main-nav ul li a").removeClass("active");
//                   currLink.addClass("active");
//               }
//               else {
//                   currLink.removeClass("active");
//               }
//           });
//     });
    
//   });


 
   