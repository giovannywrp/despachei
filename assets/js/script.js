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

var smoothScroll = require('smoothScroll.js');

function handleScroll(target){
  smoothScroll.scrollTo(target, 'y')
}

