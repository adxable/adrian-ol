
$(document).ready(function(){
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top}, 500);
          return false;
      }
    }
  });
});
$(window).on('load', function(){
  function goToByScroll(id){
    $("html, body").animate({scrollTop: $("#"+id).offset().top}, 500);
  }
  if(window.location.hash != '') {
    goToByScroll(window.location.hash.substr(1));
  }
});