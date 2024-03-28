const form = document.forms['frm-contact'];
const feedback = document.getElementById('feedback');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Show loading feedback
    feedback.textContent = 'Loading...';
    feedback.classList.add('loading');

    // Send form data asynchronously
    fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // If response is okay, display 'sent' message
            feedback.textContent = 'Your message has been sent. Thank you!';
            feedback.classList.remove('loading');
            feedback.classList.add('sent-message');
        })
        .catch(error => {
            // If there's an error, display 'error' message
            feedback.textContent = 'Error sending the message';
            feedback.classList.remove('loading');
            feedback.classList.add('error');
            console.error('There was a problem with the send operation:', error);
        });
});