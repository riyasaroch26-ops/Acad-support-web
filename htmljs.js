$(document).ready(function () {

  /* =====================================
     1. LIVE HTML EDITOR (Run + Reset)
     ===================================== */

  let defaultCode = $("#liveHtml").val();

  $("#runBtn").click(function () {
    let code = $("#liveHtml").val();
    let iframe = document.getElementById("preview");
    let doc = iframe.contentDocument || iframe.contentWindow.document;

    doc.open();
    doc.write(code);
    doc.close();
  });

  $("#resetBtn").click(function () {
    $("#liveHtml").val(defaultCode);
    let iframe = document.getElementById("preview");
    let doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write("");
    doc.close();
  });


  /* =====================================
     2. TAG SEARCH (HTML TAGS TABLE)
     ===================================== */

  $("#tagSearch").on("keyup", function () {
    let value = $(this).val().toLowerCase();

    $("#tagsTable tbody tr").filter(function () {
      $(this).toggle(
        $(this).text().toLowerCase().indexOf(value) > -1
      );
    });
  });


  /* =====================================
     3. QUIZ FUNCTIONALITY
     ===================================== */

  $(".choice").click(function () {

    let isCorrect = $(this).data("correct");

    $(".choice").css({
      "background": "",
      "color": "",
      "pointer-events": "none"
    });

    if (isCorrect === true) {
      $(this).css("background", "#c8f7c5");
      $("#quizResult").text("✅ Correct Answer!");
    } else {
      $(this).css("background", "#f7c5c5");
      $("#quizResult").text("❌ Wrong Answer");
    }
  });

  $("#resetQuiz").click(function () {
    $(".choice").css({
      "background": "",
      "pointer-events": "auto"
    });
    $("#quizResult").text("");
  });

});
