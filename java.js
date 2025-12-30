$(document).ready(function () {

  /* Fade in all sections one by one */
  $(".section").hide().each(function (index) {
    $(this).delay(300 * index).fadeIn(800);
  });

  /* Image hover effect */
  $(".image-section img").hover(
    function () {
      $(this).css({
        "transform": "scale(1.05)",
        "transition": "0.3s",
        "box-shadow": "0 8px 16px rgba(0,0,0,0.3)"
      });
    },
    function () {
      $(this).css({
        "transform": "scale(1)",
        "box-shadow": "none"
      });
    }
  );

  /* Smooth toggle for details */
  $("details summary").click(function () {
    $(this).next().slideToggle(400);
    return false;
  });

});
