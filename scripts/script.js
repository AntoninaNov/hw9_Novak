document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("jobApplicationForm");
    const dobInput = document.getElementById("dob");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    const setMaxDate = () => {
        const today = new Date();
        dobInput.setAttribute('max', today.toISOString().split('T')[0]);
    };

    const validateAge = dob => Math.abs((new Date(Date.now() - dob.getTime())).getUTCFullYear() - 1970) >= 18;

    const validatePasswordStrength = () => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(passwordInput.value);

    const passwordsMatch = () => passwordInput.value === confirmPasswordInput.value;

    const collectFormValues = form => Object.fromEntries(new FormData(form));

    const displayValidValues = data => {
        document.getElementById('output').innerText = JSON.stringify(data, null, 2);
    };

    const validateFields = () => {
        const inputs = form.querySelectorAll('input[required]');
        const errorMessages = {};

        inputs.forEach(input => {
            if (!input.validity.valid) {
                errorMessages[input.id] = input.validationMessage;
            }
        });

        const dob = new Date(dobInput.value);
        if (!validateAge(dob)) {
            errorMessages['dob'] = 'You must be at least 18 years old.';
        }

        form.querySelectorAll('input').forEach(input => {
            input.classList.remove('is-invalid');
        });

        if (!passwordsMatch()) {
            errorMessages['confirm-password'] = 'Passwords do not match';
        }

        if (!validatePasswordStrength()) {
            errorMessages["password"] = "Password is not strong enough";
        }

        return errorMessages;
    };

    const displayErrors = errorMessages => {
        Object.keys(errorMessages).forEach(key => {
            const inputElement = document.getElementById(key);
            inputElement.nextElementSibling.textContent = errorMessages[key];
            inputElement.classList.add('is-invalid');
        });
    };

    form.addEventListener('submit', e => {
        e.preventDefault();
        const errorMessages = validateFields();
        if (Object.keys(errorMessages).length > 0) {
            displayErrors(errorMessages);
        } else {
            const formData = collectFormValues(form);
            displayValidValues(formData);
        }
    });

    setMaxDate();
});
