$(document).ready(function () {

  /* ===============================
     EMAILJS INITIALIZATION
     =============================== */

  emailjs.init("VDSmgAPaJ4fNDeWF_");   // 🔑 Public Key

  /* ===============================
     FEEDBACK FORM SUBMISSION
     =============================== */

  $("#feedbackForm").submit(function (e) {
    e.preventDefault();

    $("#status").text("Sending feedback...").css("color", "blue");

    emailjs.sendForm(
      "service_a4mf2vf",     // 📩 Service ID
      "template_j3nugh6",    // 📄 Template ID
      this
    ).then(
      function () {
        $("#status").text("✅ Feedback sent successfully!").css("color", "green");
        $("#feedbackForm")[0].reset();
      },
      function (error) {
        $("#status").text("❌ Failed to send feedback").css("color", "red");
        console.error("EmailJS Error:", error);
      }
    );
  });

});
