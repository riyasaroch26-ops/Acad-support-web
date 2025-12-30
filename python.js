$(document).ready(function () {

  /* Fade in sections one by one */
  $("section").hide().each(function (index) {
    $(this).delay(300 * index).fadeIn(800);
  });

  /* Smooth scrolling for nav links */
  $("nav a, footer a[href='top']").click(function (e) {
    e.preventDefault();
    let target = $(this).attr("href");

    if (target === "top") {
      $("html, body").animate({ scrollTop: 0 }, 800);
    } else {
      $("html, body").animate({
        scrollTop: $(target).offset().top - 20
      }, 800);
    }
  });

  /* Image hover effect */
  $("img").hover(
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

  /* Table row highlight */
  $("table tr").hover(
    function () {
      $(this).css("background", "#e6f2ff");
    },
    function () {
      $(this).css("background", "");
    }
  );

});
