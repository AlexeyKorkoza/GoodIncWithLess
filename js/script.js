var doc_w = $(document).width();
var slideWidth = 320;
if (doc_w >= 768 && doc_w < 980) {
  slideWidth = 640;
}
if (doc_w >= 981) {
  slideWidth = 960;
}
var sliderTimer;
$(function () {
  $('.slides').width($('.slides').children().size() * slideWidth);
  sliderTimer = setInterval(nextSlide, 2000);
  $('.slider').hover(function () {
    clearInterval(sliderTimer);
  }, function () {
    sliderTimer = setInterval(nextSlide, 2000);
  });
  $('#next_slide').click(function () {
    clearInterval(sliderTimer);
    nextSlide();
    sliderTimer = setInterval(nextSlide, 2000);
  });
  $('#prev_slide').click(function () {
    clearInterval(sliderTimer);
    prevSlide();
    sliderTimer = setInterval(nextSlide, 2000);
  });
});

function nextSlide() {
  var currentSlide = parseInt($('.slides').data('current'));
  currentSlide++;
  var count = $('.slides').children().size();
  if (slideWidth == 640) {
    count = count / 2;
  }
  if (slideWidth == 960) {
    count = count / 3;
  }
  if (currentSlide >= count) {
    currentSlide = 0;
  }
  $('.slides').animate({left: -currentSlide * slideWidth}, slideWidth).data('current', currentSlide);
}

function prevSlide() {
  var currentSlide = parseInt($('.slides').data('current'));
  currentSlide--;
  var count = $('.slides').children().size();
  if (slideWidth == 640) {
    count = count / 2;
  }
  if (slideWidth == 960) {
    count = count / 3;
  }
  if (currentSlide < 0) {
    currentSlide = count - 1;
  }
  $('.slides').animate({left: -currentSlide * slideWidth}, slideWidth).data('current', currentSlide);
}

/*Open or close footer nav*/
$(document).ready(function () {
  $("#button-bottom").click(function () {
    $("#bottom-nav").toggle();
  });
});

/*Open or close header nav*/
$(document).ready(function () {
  $("#button-top").click(function () {
    $("#top-nav").toggle();
  });
});

(function () {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  }
  ;

  function toggleHandler(toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();