// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    if (name && email && message) {
        alert('Thank you for contacting us, ' + name + '!');
        this.reset(); // Clear the form
    } else {
        alert('Please fill out all fields.');
    }
});
