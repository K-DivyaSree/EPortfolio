document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('.box form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get username and password input values
        var username = document.querySelector('.inputBox:nth-child(1) input').value;
        var password = document.querySelector('.inputBox:nth-child(2) input').value;

    });
});
