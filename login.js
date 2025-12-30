function register() {
  let name = document.getElementById("regName").value;
  let email = document.getElementById("regEmail").value;
  let pass = document.getElementById("regPass").value;

  if (name === "" || email === "" || pass === "") {
    alert("All fields are required");
    return;
  }

  localStorage.setItem("email", email);
  localStorage.setItem("password", pass);

  alert("Registration successful!");
  window.location.href = "login.html";
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let pass = document.getElementById("loginPass").value;

  let storedEmail = localStorage.getItem("email");
  let storedPass = localStorage.getItem("password");

  if (email === storedEmail && pass === storedPass) {
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password");
  }
}

