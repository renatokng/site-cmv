$.fn.extend({

  paralax: function (){
    return this.each(function () {
      //bloco 
      var $this = $(this);
      $this.addClass('paralax-header');
      
      var scrollPos = $(window).scrollTop();
      var titulo = $this.children('h1');
      var img = $this.attr("data-imagem");
      var tamanhoHeader = parseInt($this.attr("data-tamanho"));
      
      $this.css("background-image", 'url('+img+')');

      if(scrollPos <= tamanhoHeader){
        titulo.css("transform", 'translateY(' + (-scrollPos/3) +'px' + ')');
        titulo.css("opacity",  1 - (scrollPos/tamanhoHeader));
        //$this.css("transform", 'translateY(' + (-scrollPos/12) +'px' + ')');
      }
    });
  },

});