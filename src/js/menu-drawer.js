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

// Localizar Scroll 

$(window).scroll(function(){
    var $height = $(window).scrollTop();
    if ($height = ("#ideathon")){
    // if ($("#ideathon").offset().top = $(window).scrollTop()){
        $("#Ideathonm").animate({'opacity': 1}, 100);
    // }
}
        else ($height != ('#ideathon'))
    //  else ($('#ideathon').offset().top != $(window).scrollTop())
        $("#Ideathonm").animate({'opacity': 0.5}, 100);
    
});