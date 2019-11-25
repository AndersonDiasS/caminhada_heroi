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

 
 
var alturas = {};
$('.section').each(function () {
  alturas[$(this).prop('id')] = $(this).offset().top; // ex: alturas['section_2'] = 600
});

// quando fazemos scoll vamos percorrer o nosso obj alturas e comparar a altura de cada secção com o que já andamos em scroll
$(window).on('scroll', function() {
  for(var seccao in alturas) {
    if($(window).scrollTop() >= alturas[seccao]) {
      $('a').removeClass('active'); // removemos a classe ative
      $('a[data-section="' +seccao+ '"]').addClass('active'); // adicionamos a class active ao item do menu cuja data-section é igual ao id da secção que está a uma maior ou igual distancia do topo do que aquela que percorremos com o scroll
    }
  }
});