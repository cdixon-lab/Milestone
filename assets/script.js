const housingToggle = document.querySelector("#housing-toggle");
const housingInfo = document.querySelector("#housing-info");

if (housingToggle && housingInfo) {
    housingToggle.addEventListener("click", function () {
        const isHidden = housingInfo.hidden;

        housingInfo.hidden = !isHidden;
        housingToggle.setAttribute("aria-expanded", String(isHidden));

        if (isHidden) {
            housingToggle.textContent = "Hide Housing Details";
        } else {
            housingToggle.textContent = "Show Housing Details";
        }
    });
}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");
    const errorMessage = document.querySelector("#form-error");

    function validateField(field, label) {
        if (field.value.trim() === "") {
            field.setAttribute("aria-invalid", "true");
            return `${label} is required.`;
        }

        field.removeAttribute("aria-invalid");
        return "";
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const errors = [];

        const nameError = validateField(nameInput, "Name");
        const emailError = validateField(emailInput, "Email");
        const messageError = validateField(messageInput, "Message");

        if (nameError) errors.push(nameError);
        if (emailError) errors.push(emailError);
        if (messageError) errors.push(messageError);

        if (errors.length > 0) {
            errorMessage.textContent = errors.join(" ");
            errorMessage.hidden = false;
        } else {
            errorMessage.textContent = "Thank you! Your message is ready to be submitted.";
            errorMessage.hidden = false;
            contactForm.reset();

            nameInput.removeAttribute("aria-invalid");
            emailInput.removeAttribute("aria-invalid");
            messageInput.removeAttribute("aria-invalid");
        }
    });

    [nameInput, emailInput, messageInput].forEach(function (field) {
        field.addEventListener("input", function () {
            if (field.value.trim() !== "") {
                field.removeAttribute("aria-invalid");

                if (
                    nameInput.value.trim() !== "" &&
                    emailInput.value.trim() !== "" &&
                    messageInput.value.trim() !== ""
                ) {
                    errorMessage.hidden = true;
                }
            }
        });
    });
}
