document.onload = function () {
  var header = document.getElementById('headerContainer');
  if(window.pageYOffset > 1 ){
    if(header.className !== 'topMenu fixedMenu'){
      header.className += ' fixedMenu';
    }
  }
  if(window.pageYOffset < 2 ){
    header.className = 'topMenu';
  }
}

window.addEventListener('scroll', function () {
  var header = document.getElementById('headerContainer');
  if(window.pageYOffset > 1 ){
    if(header.className !== 'topMenu fixedMenu'){
      header.className += ' fixedMenu';
    }
  }
  if(window.pageYOffset < 2 ){
    header.className = 'topMenu';
  }
});

function handleScroll(target){
  $('html, body').animate({
      scrollTop: $(target).offset().top
  }, 1200);
}
