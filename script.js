
document.addEventListener("DOMContentLoaded", function () {

    const housingToggle = document.querySelector("#housing-toggle");
    const housingInfo = document.querySelector("#housing-info");

    if (housingToggle && housingInfo) {

        housingToggle.addEventListener("click", function () {

            const isHidden = housingInfo.hidden;

            housingInfo.hidden = !isHidden;

            housingToggle.setAttribute(
                "aria-expanded",
                String(isHidden)
            );

            if (isHidden) {
                housingToggle.textContent = "Hide Housing Details";
            } else {
                housingToggle.textContent = "Show Housing Details";
            }

        });

    }

});



/* Contact Form */

const contactForm = document.querySelector("#contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const nameInput = document.querySelector("#name");
        const emailInput = document.querySelector("#email");
        const messageInput = document.querySelector("#message");
        const errorMessage = document.querySelector("#form-error");

        if (
            nameInput.value.trim() === "" ||
            emailInput.value.trim() === "" ||
            messageInput.value.trim() === ""
        ) {

            errorMessage.textContent =
                "Please complete all fields before submitting.";

            return;
        }

        errorMessage.textContent =
            "Thank you! Your message has been submitted.";

        contactForm.reset();
    });
}
