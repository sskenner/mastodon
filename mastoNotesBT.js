// Gets a reference to the form element
var subscribeform = document.getElementById('form02');
var emailform = document.getElementById('form02-email');

// Adds a listener for the "submit" event.
subscribeform.addEventListener('submit', function(event) {
    // Sends the event to Google Analytics only if an email has been entered
    if (emailform.value) {
        ga('send', 'event', 'New subscription', 'submit');
    }
});
