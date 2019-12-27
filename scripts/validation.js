

$(document).ready(function () {

// sticky nav
  window.onscroll = function() {scroll()};

  var nav = document.getElementById("nav");
  var dropdown=document.getElementById("dropdown");

  var sticky = nav.offsetTop;
  var sticky2= dropdown.offsetTop;

  function scroll() {
    if (window.pageYOffset >= 200) {
      $('.backtotop').css('display', 'block');
    } else {
      $('.backtotop').css('display', 'none');
    }

    if (window.pageYOffset >= sticky || window.pageYOffset >= sticky2 ) {
      nav.classList.add("sticky");
      dropdown.classList.add("sticky2");
    } else {
      nav.classList.remove("sticky");
      dropdown.classList.remove("sticky2");
    }
  }
});
/* Smooth Scrolling */
  $("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function(){
            window.location.hash = hash;
        });
    }
  });

// back to top functionality
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  $('.backtotop').css('display', 'none');
}
