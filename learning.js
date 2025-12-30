$(document).ready(function () {

  /* Smooth scrolling for navbar links */
  $("nav a").click(function (e) {
    e.preventDefault();
    let target = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(target).offset().top - 20
    }, 800);
  });

  /* Fade-in sections on page load */
  $("section").hide().each(function (index) {
    $(this).delay(300 * index).fadeIn(800);
  });

  /* FAQ click highlight */
  $(".faqs li").click(function () {
    $(this).css({
      "background": "#f0f0f0",
      "transition": "0.3s"
    });
  });

  /* Feedback form submission */
  $("form").submit(function (e) {
    e.preventDefault();
    let feedback = $("textarea").val().trim();

    if (feedback === "") {
      alert("Please enter your feedback before submitting.");
    } else {
      alert("Thank you for your feedback!");
      $("textarea").val("");
    }
  });

});
