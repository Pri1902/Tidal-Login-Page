// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the login form element
    const loginForm = document.getElementById("loginForm");

    // Add an event listener for the form submission
    loginForm.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior (page refresh)
        event.preventDefault();
        
        // Get the input value and trim whitespace
        const email = document.getElementById("email").value.trim();

        // Validate the email/username input
        if (email === "") {
            alert("Please enter your email or username.");
            return; // stop execution
        } else {
            alert('Welcome ' + email + '!');
        }
    });
});
