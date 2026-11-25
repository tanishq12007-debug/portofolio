// 1. Show the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();


// 2. Contact form check
var myEmail = "tanish@gmail.com"; // the email that gets the messages
var form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stops the page from reloading

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  // Check if any field is empty
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all the fields.");
    return;
  }

  // Check that the email has @ and a dot
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("Please enter a valid email.");
    return;
  }

  // Open the email app with the message ready to send
  var subject = "Message from " + name;
  var body = message + "\n\nFrom: " + name + " (" + email + ")";
  window.location.href =
    "mailto:" + myEmail +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  alert("Thank you, " + name + "! Your email app will open now.");
  form.reset();
});
