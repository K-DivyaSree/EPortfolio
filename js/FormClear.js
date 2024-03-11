document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    var form = document.querySelector('form');

    // Function to clear input fields
    function clearInputs() {
        form.reset();
    }

    // Add a timeout to clear the inputs after a minute (60000 milliseconds)
    setTimeout(clearInputs, 60);
});
