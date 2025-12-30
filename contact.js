$(document).ready(function () {

  /* Fade in contact sections one by one */
  $(".contact-section").hide().each(function (index) {
    $(this).delay(300 * index).fadeIn(700);
  });

  /* Hover effect on tables */
  $(".contact-section").hover(
    function () {
      $(this).css({
        "transform": "scale(1.02)",
        "transition": "0.3s",
        "box-shadow": "0 6px 15px rgba(0,0,0,0.2)"
      });
    },
    function () {
      $(this).css({
        "transform": "scale(1)",
        "box-shadow": "none"
      });
    }
  );

  /* Click animation on Home link */
  $(".home-link").click(function () {
    $(this).fadeOut(200).fadeIn(200);
  });

});
