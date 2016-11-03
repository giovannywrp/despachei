function handleScroll(target){
  $('html, body').animate({
      scrollTop: $(target).offset().top
  }, 1200);
}
