// Get the form and response message elements
const form = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh

    // Collect form data
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Log data to console for debugging
    console.log('Form Data:', data);

    // Send the data via EmailJS
    emailjs.send('service_usgmo05', 'template_ge67qz6', data)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            responseMessage.textContent = 'Form submitted successfully! We’ll get back to you soon.';
            responseMessage.style.color = 'green';
            form.reset(); // Clear the form
        }, (error) => {
            console.log('FAILED...', error);
            responseMessage.textContent = 'Oops! Something went wrong. Please try again.';
            responseMessage.style.color = 'red';
        });
});