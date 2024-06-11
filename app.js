document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('learn-more').addEventListener('click', () => {
        window.location.href = '#features';
    });

    document.getElementById('contact-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your message!');
        document.getElementById('contact-form').reset();
    });
});

