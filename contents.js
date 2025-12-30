$(document).ready(function () {

  /* Fade-in effect for sections */
  $("section").hide().each(function (index) {
    $(this).delay(300 * index).fadeIn(800);
  });

  /* Hover animation for course cards */
  $(".course-card").hover(
    function () {
      $(this).css({
        "transform": "translateY(-10px)",
        "transition": "0.3s",
        "box-shadow": "0 10px 20px rgba(0,0,0,0.3)"
      });
    },
    function () {
      $(this).css({
        "transform": "translateY(0)",
        "box-shadow": "none"
      });
    }
  );

  /* Smooth scroll for internal links */
  $("a[href^='#']").click(function (e) {
    e.preventDefault();
    let target = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(target).offset().top
    }, 800);
  });

});
