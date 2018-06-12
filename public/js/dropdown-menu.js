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

      $('.modal').modal();
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
$("#ebibir-resposta-1").click(exibeResposta(textarea1));

function exibeResposta(id){
  var idCampo = "#" + id;
  var campo = $(campo);
  campo.attr("disabled", true);
  campo.addClass("campo-desativado");
}
