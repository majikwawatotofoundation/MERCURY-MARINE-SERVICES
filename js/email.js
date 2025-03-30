document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS with your public key
    (function() {
        emailjs.init("1vLNpV00Iis57w_Ca"); // Your EmailJS user ID
    })();
  
    // Listener for the contact form submission
    document.getElementById("quoteForm").addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
  
        // Collect the form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
  
        // Validate the form fields
        if (!name || !email || !subject || !message) {
            alert('Please fill all fields before submitting!');
            return; // Exit if any field is empty
        }
  
        // Send the data via Email.js
        emailjs.send("service_v59rg4t", "template_iy3871s", { 
            name: name,
            email: email,
            subject:subject,
            message:message
            
        
        }).then(function(response) {
            // Success message
            alert('Your message has been successfully sent! Thank you for reaching out to Mercury Marine Services. Our team will review your inquiry and get back to you as soon as possible. We appreciate your interest and look forward to assisting you with your cargo and logistics needs.');

            console.log('SUCCESS!', response); // Log success response
        }, function(error) {
            // Error message
            alert('Failed to send. Please try again.');
            console.error('FAILED...', error); // Log error response
        });
    });
  });