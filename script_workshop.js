$(document).ready(function () {
  // Fade up animation for testimonials
  $('.testimonial').each(function (i) {
      $(this).delay(i * 300).queue(function (next) {
          $(this).addClass('fade-up');
          next();
      });
  });

  // Scroll animation
  $(window).scroll(function () {
      $('.fade-up').each(function () {
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (position < scroll + windowHeight - 100) {
              $(this).addClass('active');
          }
      });
  });
});
