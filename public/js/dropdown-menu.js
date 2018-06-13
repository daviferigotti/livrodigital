$(document).ready(function(){
//Chamando as funções necessárias do materialize
      $(".dropdown-trigger").dropdown({
        coverTrigger: false,
        constrainWidth: false,
      });

      $('.sidenav').sidenav({
        draggable: true,
        outDuration: 500
      });

      $('.materialboxed').materialbox();

      $('.collapsible').collapsible();

      $('.modal').modal({
        preventScrolling: false
      });

});

//chamando paralax
function chamaParallax(){
  $('.parallax').parallax();
};
window.load = chamaParallax();

//daqui para frente é código para fazer animações sem o materialize
//scroll para ancoras deslizarem devagar usando jquery
$('.scroll').click(function(event) {
     event.preventDefault();
     var id = $(this).attr('href');
     targetOffset = $(id).offset().top;
     menuHeight = $('.scroll').innerHeight();
     $('html, body').animate({scrollTop:targetOffset - menuHeight}, 1000)
   });


//campos de autoatividade congelarem ao mostrar resposta
var botao = $(".mostra-resposta-discursiva");
botao.click(congelaCampos);

function congelaCampos(){
  //console.log(this);
  var campo = $(this).parent().parent().parent();
  //console.log(campo);
  var textarea = campo.find('textarea');
  textarea.attr("disabled", true);
  textarea.addClass("campo-desativado");
};
