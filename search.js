$(document).ready(function () {

  window.searchContent = function () {

    let keyword = $("#searchBox").val().toLowerCase().trim();

    if (keyword === "html") {
      window.location.href = "c html.html";
    }
    else if (keyword === "css") {
      window.location.href = "c css.html .html";
    }
    else if (keyword === "javascript" || keyword === "js") {
      window.location.href = "c java.html";
    }
    else if (keyword === "react") {
      window.location.href = "react.html";
    }
    else if (keyword === "python" || keyword === "js") {
      window.location.href = "python.html";
    }
    else if (keyword === "learning roadmap" || keyword === "js") {
      window.location.href = "learning.html";
    }
    else if (keyword === "feedback" || keyword === "js") {
      window.location.href = "jsfeedback.html";
    }
    else {
      alert("Please search for the contents available");
    }

    return false; // stop page refresh
  };

});

 // LOGOUT
  $("#logoutBtn").click(function () {
     alert("Logged out successfully!");
    window.location.href = "login.html";
  });

$(document).ready(function () {

  if (window.location.pathname.includes("index.html")) {
    if (!localStorage.getItem("email")) {
      window.location.href = "login.html";
    }
  }

});

