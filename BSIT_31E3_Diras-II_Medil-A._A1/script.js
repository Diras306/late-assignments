document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('messageSent').style.display = 'block';

   
    document.getElementById('contactForm').reset();
});
