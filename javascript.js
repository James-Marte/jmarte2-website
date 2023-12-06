function validate(e){

    hideErrors();

    let errorFlag = false;

    let requiredFields = ["name", "phone", "email", "subject", "message"];

    for (let i = 0; i < requiredFields.length; i++) {
        let textField = document.getElementById(requiredFields[i]);
        if (textField.value.trim() === "") {
            document.getElementById(requiredFields[i] + "_error").style.display = "block";
            if (!errorFlag) {
                textField.focus();
                textField.select();
            }
            errorFlag = true;
        }
    }

    // Validate email format
    let emailField = document.getElementById("email");
    let emailFormat = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // Regular expression for email format
    if (emailField.value.trim() !== "" && !emailFormat.test(emailField.value.trim())) {
        document.getElementById("emailformat_error").style.display = "block";
        if (!errorFlag) {
            emailField.focus();
            emailField.select();
        }
        errorFlag = true;
    }

     // Validate phone number format
    let phoneField = document.getElementById("phone");
    let phoneFormat = /^\d{10}$/; // Regular expression for phone format

    if (phoneField.value.trim() !== "" && !phoneFormat.test(phoneField.value.trim())) {
        document.getElementById("phoneformat_error").style.display = "block";
        if (!errorFlag) {
            phoneField.focus();
            phoneField.select();
        }
        errorFlag = true;
    }

     // If there are errors, prevent form submission
    if (errorFlag) {
        e.preventDefault();
        return false;
    }

    // If there are no errors, redirect to thankyou.html
   else{
    window.location.href = "thankyou.html";
   }
    
}

function hideErrors() {
    
  // Get an array of error elements
  let error = document.getElementsByClassName("error");

  // Loop through each element in the error array
  for (let i = 0; i < error.length; i++) {
    // Hide the error element by setting it's display style to "none"
    error[i].style.display = "none";
  }
}

window.onload = function() {

    // Get an array of error elements
    let errors = document.getElementsByClassName("error");

    // Loop through each element in the error array
    for (let i = 0; i < errors.length; i++) {
        // Hide the error element by setting its display style to "none"
        errors[i].style.display = "none";
    }
};

function clearForm() {

    // Get all input elements
    let inputs = document.getElementsByTagName('input');

    // Loop through each input element and clear its value
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }

    // Clear the textarea
    document.getElementById('message').value = '';

    // Hide all error messages
    hideErrors();

    // Focus on the name input
    document.getElementById('name').focus();
}

    // Typing effect
    document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed('#element', {
    strings: ['James Marte.', 'a Programmer.', 'a Web Developer.', 'a Web Designer.'],
    typeSpeed: 10,
    backSpeed: 10,
    loop: true
});
});
    