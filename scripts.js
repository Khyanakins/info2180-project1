/* Add your JavaScript to this file */

/* Add your JavaScript to this file */
/*When the form is submitted 
get the email address
display thank you email 
no email displays enter a valid email address*/


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.getElementById("email");
    const message = document.querySelector(".newsletter .message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const email = emailInput.value.trim();

        if (email !== "" && email.includes("@")) {
            message.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
        } else {
            message.textContent = "Please enter a valid email address.";
        }
    });
});
