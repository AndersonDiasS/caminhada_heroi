// Abrir Drawer 

$("#drawer-button").click(function () {
  
    if ($('#Drawer').width() < 300) {
       $('#Drawer').animate({'width': 500}, 100);
    
    } else {
       $('#Drawer').animate({'width': 0}, 1500);
     }
   $('#drawer-button').toggleClass("opened");
 });


 $("#drawer-close").click(function(){
     if ($('#Drawer').width() >= 500){
         $('#Drawer').animate({'width': 0}, 100);
     } else{
         $('#Drawer').animate({'width': 500}, 150);
     }
     $('#drawer-button').toggleClass("opened");

 })

// Abrir Drawer

// Localizar Scroll 

$(window).scroll(function(){
    if ($("#ideathon").offset().top > $(window).scrollTop()){
        
    }
});