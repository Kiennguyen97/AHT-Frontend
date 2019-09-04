var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos < 10) {
  //   $('#header')
  // .delay(400)
  // .queue(function (next) { 
  //   $(this).css('height', '134px'); 
  //   $(this).css('background', 'transparent'); 

  //   next(); 
  //   });
    document.getElementById("header").style.height = "134px";
    document.getElementById("header").style.background = "transparent";
  } else {
    // $('#header')
    // .delay(400)
    // .queue(function (next) { 
    // $(this).css('height', '80px'); 
    // $(this).css('background', 'white'); 

    // next(); 
    // });
    document.getElementById("header").style.height = "80px";
    document.getElementById("header").style.background = "white";
  }
  prevScrollpos = currentScrollPos;
}

//TODO: slider

$(document).ready(function () {

  owl = $(".owl-carousel").owlCarousel({

    navigation: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    items: 1,
    itemsDesktop: false,
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsMobile: false,

  });
  owl.on('changed.owl.carousel', function(e) {
    restart();
  });
});
  
$(document).ready(restart());
function restart(){
  $('.item-extend').css({'right': '-1px'}),
  $('.item-extend').css({'display': 'none'}),
  $('.item-extend').animate({'right': '19.4%'}, {"duration":2000,"queue":false});
  $('.item-extend').fadeIn(2000);
}


//TODO: Navbar-nav
$('ul.navbar-nav li.dropdown').hover(function () {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function () {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

//style
