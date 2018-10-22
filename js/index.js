$(function(){
  $('a[href^="#"]').click(function() {
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  var handleWindowResize = function() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('.arrow').text('⬇︎')
    } else if (window.matchMedia('(min-width:768px)').matches) {
      $('.arrow').text('＞')
    }

  };
  handleWindowResize();

  window.addEventListener('resize', function() {
    handleWindowResize();
  });
});
