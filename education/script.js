const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (validateForm()) {
    form.submit();
  }
});

function validateForm() {
  const name = document.getElementById("name");
  const mobile = document.getElementById("mobile");
  const email = document.getElementById("email");
const message = document.getElementById("message");
  
  if (name.value.trim() === "") {
    alert("Please enter your name.");
    name.focus();
    return false;
  }
  
  if (mobile.value.trim() === "") {
    alert("Please enter your mobile number.");
    mobile.focus();
    return false;
  }
  
  if (email.value.trim() === "") {
    alert("Please enter your email address.");
    email.focus();
    return false;
  }
  
  if (message.value.trim() === "") {
    alert("Please enter your message.");
    message.focus();
    return false;
  }
  
  return true;
}
