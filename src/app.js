//importacao de estilos
import './sass/style.scss'

//importacao de scripts
import './js/funcoesJQ.js'

//implementacao de Jquery

$(document).ready(function() {

//carrossel da pagina home
    $('.slider').slider(
        {
            height: 600,
            interval: 4000
        }
    );

//Carregar header
    $('.paralax-header').paralax();

//redimensionar tela mudar tamanho dos icones alteralnd as classes
    $(window).resize(function () {
        var viewportWidth = $(window).width();
        if (viewportWidth < 600) {
                $(".mdi").removeClass("mdi-48px").addClass("mdi-36px");
        } else {
                $(".mdi").removeClass("mdi-36px").addClass("mdi-48px");
        }
    });
    
//Eventos de Scroll Nav e Header
    $(window).on("scroll", function() {
        $('.paralax-header').paralax();

        if($(window).scrollTop() >= 600) {
        $(".navegacao").addClass("scroll");
        } else {
        $(".navegacao").removeClass("scroll");
        }
    });

//Eventos de clique.
    var $hamburger = $(".hamburger");
    var $nav = $(".navegacao");
    $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    //$nav.toggleClass("open");
    });

});

