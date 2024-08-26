const nombre = document.getElementById('name');
const password = document.getElementById('password');
const email = document.getElementById('email');
const form = document.getElementById('form');
const nameError = document.getElementById('nameError');
const passwordError = document.getElementById('passwordError');
const emailError = document.getElementById('emailError');
const emailsValidos = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@outlook.com', '@adinet.com'];

form.addEventListener('submit', (e) => {
    borrarErrores();

    let hasError = false;

    if (nombre.value === '' || nombre.value == null) {
        nameError.innerHTML = 'Falta el nombre';
        hasError = true;
    }
    if (password.value.length < 8) {
        passwordError.innerHTML = 'La contraseña debe tener al menos 8 caracteres';
        hasError = true;
    }
    if (!emailsValidos.some(emailValido => email.value.includes(emailValido))) {
        emailError.innerHTML = 'El email no es válido';
        hasError = true;
    }

    if (hasError) {
        e.preventDefault();
    }
});

function borrarErrores() {
    const errorMessages = document.querySelectorAll('form p');
    errorMessages.forEach(error => error.innerHTML = '');
}

