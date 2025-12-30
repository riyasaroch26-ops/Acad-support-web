$(document).ready(function () {

  /* ===============================
     EmailJS INITIALIZATION
     =============================== */
  emailjs.init({
    publicKey: "VDSmgAPaJ4fNDeWF_"   // ✅ PUBLIC KEY
  });


  /* ===============================
     FORM SUBMISSION USING jQuery
     =============================== */
  $("form").on("submit", function (e) {
    e.preventDefault();

    // Get values using IDs
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let message = $("#message").val().trim();
    let rating = $("input[name='rating']:checked").val() || "No rating";

    // Basic validation
    if (name === "" || email === "" || message === "") {
      alert("Please fill all fields.");
      return;
    }

    // Disable button while sending
    $("button[type='submit']")
      .text("Sending...")
      .prop("disabled", true);

    // Template parameters
    let templateParams = {
      name: name,
      email: email,
      message: message,
      rating: rating
    };

    /* ===============================
       EMAILJS SEND (WITH IDs)
       =============================== */
    emailjs.send(
      "service_a4mf2vf",   // ✅ SERVICE ID
      "template_j3nugh6",  // ✅ TEMPLATE ID
      templateParams
    ).then(
      function () {
        alert("Feedback sent successfully!");

        // Reset form
        $("form")[0].reset();
      },
      function (error) {
        alert("Failed to send feedback: " + error.text);
      }
    ).finally(function () {
      // Re-enable button
      $("button[type='submit']")
        .text("Submit")
        .prop("disabled", false);
    });

  });

});
