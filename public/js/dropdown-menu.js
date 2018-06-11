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


var campoDeResposta = $(".autoatividade");
botaoExibeResposta = $(".mostra-resposta-discursiva");
botaoExibeResposta.click(function(event){
  var id = $(this).attr('href');
  id.attr("disabled", true);
  id.toggleClass("campo-desativado");
});

function confirmaResposta(){

}
