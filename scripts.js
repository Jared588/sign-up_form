document.addEventListener('DOMContentLoaded', function() {
    const submit = document.getElementById('submit');
    const inputs = document.querySelectorAll('input');

    submit.addEventListener('click', function(event) {
        let errors = 0;
        let passMatch = false;
        inputs.forEach(function(input) {
            // Display a red border on invalid fields
            if (!input.checkValidity()) {    
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
            }
        });

        // Password confirmation
        const password = document.getElementById('password');
        const confirmedPassword = document.getElementById('confirmed-password');
        const passwordValidation = document.getElementById('password-validation');

        if (password.value !== confirmedPassword.value) {
            passwordValidation.innerHTML = "* Passwords do not match";
            passMatch = false;
        } else {
            passwordValidation.innerHTML = "";
            passMatch = true;
        } 

        // check for errors
        inputs.forEach(function(input) {
            if (!input.checkValidity()) {
                errors += 1;
            }
        });

        // If submission is successful(no errors), alert and reload
        console.log(errors);
        if (errors === 0 && passMatch === true) {
            event.preventDefault();
            alert("Success!");
            location.reload();
        } else if (errors === 0 && passMatch === false) {
            event.preventDefault();
        }
    });

    inputs.forEach(function(input) {
        input.addEventListener('input', function(event) {
          if (!input.checkValidity()) {
            input.classList.add('invalid');
          } else {
            input.classList.remove('invalid');
          }
        });
    });
});