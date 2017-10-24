// Adicionando cor ao menu fixo ao usar a rolagem
$(window).on('scroll', function () {
  if ($(window).scrollTop() > 100) {
      $('.header').addClass('navigation-background');
      $('.header-right').addClass('btn-background');
  } else {
      $('.header').removeClass('navigation-background');
      $('.header-right').removeClass('btn-background');
  }
});

//Animação para scroll topo
$('.btn-home').click(function(){
  $('html, body').animate({scrollTop: 0},800);
});
