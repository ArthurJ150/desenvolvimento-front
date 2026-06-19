document.addEventListener("DOMContentLoaded", function () {

    const loginRadio = document.getElementById('log');
    const cadastroRadio = document.getElementById('cad');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const formTitle = document.getElementById('form-title');

    function toggleForm() {

        if (loginRadio.checked) {
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
            formTitle.textContent = 'Login';
        }

        if (cadastroRadio.checked) {
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
            formTitle.textContent = 'Cadastro';

        }
    }

    loginRadio.addEventListener('change', toggleForm);
    cadastroRadio.addEventListener('change', toggleForm);
});