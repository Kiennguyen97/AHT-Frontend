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

  owl = $("#slider-header").owlCarousel({

    navigation: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    items: 1,


  });
  owl.on('changed.owl.carousel', function (e) {
    restart();
  });
});


$(document).ready(restart());
function restart() {
  $('.item-extend').css({ 'right': '-1px' }),
    $('.item-extend').css({ 'display': 'none' }),
    $('.item-extend').animate({ 'right': '19.4vw' }, { "duration": 2000, "queue": false });
  $('.item-extend').fadeIn(2000);
}

$(document).ready(function () {

  owl = $(".slider-bestsell").owlCarousel({
    navigation: true,

    slideSpeed: 300,
    paginationSpeed: 400,
    items: 1,
    responsive: {
      
      600: {
        items: 3,
      },
      1100: {
        items: 4,
      }
    }
  });

});

//TODO: Navbar-nav
$('ul.navbar-nav li.dropdown').hover(function () {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function () {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

//li
// $("li").click(function () {
//   $("li").css("color", "black");
//   $(this).css("color", "#c44860");
// });

//list
document.getElementById("defaultOpen").click();
function showList(evt, name) {
  var i, tabproduct, link;
  tabproduct = document.getElementsByClassName("tabproduct");
  for (i = 0; i < tabproduct.length; i++) {
    tabproduct[i].style.display = "none";
  }
  link = document.getElementsByClassName("link");
  for (i = 0; i < link.length; i++) {
    link[i].className = link[i].className.replace(" active", "");
  }
  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
}
//list-footer
//TODO: bật tắt class
$("span.badge-submit").click(function () {
  var right = $("input.email-submit").css("right");
  // $("input.email").toggleClass("col-xl-9");
  // if($("span.sub").hasClass("offset-3")){
  //   $("input.email").removeClass("col-xl-6");
  //   $("input.email").addClass("col-xl-9");
  //   $("span.sub").removeClass("offset-3");
  // }else{
  //   $("input.email").addClass("col-xl-6");
  //   $("input.email").removeClass("col-xl-9");
  //   $("span.sub").addClass("offset-3");
  // }
  $("input.email-submit").toggleClass("open");
  $(this).toggleClass("rotate");
});