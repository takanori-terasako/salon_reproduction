
/*
hamberger_menu
*/
$(function() {
  var headerHbBtn = $('.header-hb-area');
  headerHbBtn.hide();
  $(window).scroll(function() {
    if($(this).scrollTop() > 100) {
      headerHbBtn.fadeIn();
    } else {
      headerHbBtn.fadeOut();
    }
  });
});

$(function(){
  $('.header-hb-area').click(function(){
    $('.header-hb-area, .header-nav').toggleClass('active');
  });
});