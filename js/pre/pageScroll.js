
jQuery(document).ready(function(){
  jQuery('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
      var target = jQuery(this.hash);
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        jQuery('html, body').animate({
          scrollTop: target.offset().top}, 500);
          return false;
      }
    }
  });
});
jQuery(window).on('load', function(){
  function goToByScroll(id){
    jQuery("html, body").animate({scrollTop: jQuery("#"+id).offset().top}, 500);
  }
  if(window.location.hash != '') {
    goToByScroll(window.location.hash.substr(1));
  }
});