/*
hamburger_menu
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

/*
scroll_fadeUp
*/
$(".js-fadeUp").on("inview", function () {
  $(this).addClass("is-inview");
});

/*
slick
*/
$(function () {
  $(".description-slider").slick({
    arrows: true,
    dots: true,
    prevArrow: '<img src="前へ矢印画像のパス" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="次へ矢印画像のパス" class="slide-arrow next-arrow">',
  });
});
