// $(document).ready(function(){

// 	$('div.bgParallax').each(function(){
// 		 var $obj = $(this);
// 	});  


//  var yPos = -($(window).scrollTop() / $obj.data('speed')); 
//  var bgpos = '50% '+ yPos + 'px';

//  $('div.bgParallax').each(function(){
//     var $obj = $(this);

//     $(window).scroll(function() {
//         var yPos = -($(window).scrollTop() / $obj.data('speed')); 

//         var bgpos = '50% '+ yPos + 'px';

//         $obj.css('background-position', bgpos );

// 		}); 
// 	});

// });


// const parallaxImages = document.querySelectorAll(".parallax__image");
// document.querySelector(".parallax__noscript--image").style.display = "none";

// window.addEventListener("scroll", () => {
// 	parallaxImages.forEach( ( image, index ) => {
// 		image.style.transform = 'translateY(-' + window.scrollY * (index + 1) / 10 + 'px)';
// 	})
// })