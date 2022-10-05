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
  $('.description-slider').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<img src="../img/slider_arw_prev.svg" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="../img/slider_arw_next.svg" class="slide-arrow next-arrow">',
    responsive: [
      {
        breakpoint: 767, // 767px未満で・・・
        settings: "unslick", // スライダーを無効
      },
    ],
  });
});
$(window).on("resize orientationchange", function () {
  $('.description-slider').slick('resize');
});
