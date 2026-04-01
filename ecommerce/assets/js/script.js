/* ==============================
   CONTACT FORM VALIDATION
   jQuery & JavaScript
============================== */

$(document).ready(function () {

    $("#form").on("submit", function (e) {
        e.preventDefault(); // stop the form from submitting normally

        var name  = $("#name").val().trim();
        var email = $("#email").val().trim();
        var msg   = $("#msg").val().trim();
        var valid = true;

        // Clear previous errors
        $(".error-msg").remove();
        $("#name, #email, #msg").removeClass("is-invalid");

        // Validate Name
        if (name === "") {
            valid = false;
            $("#name").addClass("is-invalid");
            $("#name").after('<small class="error-msg text-danger">Please enter your name.</small>');
        }

        // Validate Email
        if (email === "") {
            valid = false;
            $("#email").addClass("is-invalid");
            $("#email").after('<small class="error-msg text-danger">Please enter your email address.</small>');
        } else if (!isValidEmail(email)) {
            valid = false;
            $("#email").addClass("is-invalid");
            $("#email").after('<small class="error-msg text-danger">Please enter a valid email address.</small>');
        }

        // Validate Message
        if (msg === "") {
            valid = false;
            $("#msg").addClass("is-invalid");
            $("#msg").after('<small class="error-msg text-danger">Please enter your message.</small>');
        }

        // If all valid — show success
        if (valid) {
            $(".success-msg").remove();
            $("#form").before('<div class="alert alert-success success-msg">✅ Your message has been sent successfully!</div>');
            $("#form")[0].reset();

            // Auto-hide success message after 4 seconds
            setTimeout(function () {
                $(".success-msg").fadeOut(500, function () {
                    $(this).remove();
                });
            }, 4000);
        }
    });

    // Helper: email format check
    function isValidEmail(email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Live: remove error on input
    $("#name, #email, #msg").on("input", function () {
        $(this).removeClass("is-invalid");
        $(this).next(".error-msg").remove();
    });

});
