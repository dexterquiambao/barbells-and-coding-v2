"use strict";

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
                $('.nav').addClass('affix');
                console.log("OK");
            } else {
                $('.nav').removeClass('affix');
            }
        });

console.log('Colour Shifting is Working!!')

let theme = localStorage.getItem('theme')

if(theme == null){
  setTheme('light')
}else{
  setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
  themeDots[i].addEventListener('click', function(){
    let mode = this.dataset.mode
    console.log('Option clicked:', mode)
    setTheme(mode)
  })
}

function setTheme(mode){
  if(mode == 'light'){
    document.getElementById('theme-style').href = 'resources/css/style.css'
  }

  if(mode == 'blue'){
    document.getElementById('theme-style').href = 'resources/css/blue.css'
  }

  if(mode == 'green'){
    document.getElementById('theme-style').href = 'resources/css/green.css'
  }

  if(mode == 'purple'){
    document.getElementById('theme-style').href = 'resources/css/purple.css'
  }

  localStorage.setItem('theme', mode)
}
