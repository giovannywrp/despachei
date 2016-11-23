document.onload = function () {
  var header = document.getElementById('headerContainer');
  if(window.pageYOffset > 1 ){
    if(header.className === 'topMenu clearfix'){
      header.className += ' fixedMenu';
    }
  }
  if(window.pageYOffset < 2 ){
    header.className = 'topMenu clearfix';
  }
}

window.addEventListener('scroll', function () {
  var header = document.getElementById('headerContainer');
  if(window.pageYOffset > 1 ){
    if(header.className === 'topMenu clearfix'){
      header.className += ' fixedMenu';
    }
  }
  if(window.pageYOffset < 2 ){
    header.className = 'topMenu clearfix';
  }
});



function handleScroll(target){
  var scroll = new smoothScroll();
  scroll.scrollTo(target, 'y')
}

