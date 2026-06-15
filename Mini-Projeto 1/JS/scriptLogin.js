document.addEventListener("DOMContentLoaded", function () {

    const loginRadio = document.getElementById('log');
    const cadastroRadio = document.getElementById('cad');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const signupForm2 = document.getElementById('signup-form2');
    const formTitle = document.getElementById('form-title');

    function toggleForm() {

        if (loginRadio.checked) {
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
            signupForm2.style.display = 'none';
            formTitle.textContent = 'Login';
        }

        if (cadastroRadio.checked) {
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
            signupForm2.style.display = 'none';
            formTitle.textContent = 'Cadastro';

        }
    }

    loginRadio.addEventListener('change', toggleForm);
    cadastroRadio.addEventListener('change', toggleForm);
});

// LOGIN
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (!this.checkValidity()) {
        this.reportValidity();
        return;
    }

    alert("Login realizado!");
    window.location.href = "index.html";
});

// CADASTRO ETAPA 1
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (!this.checkValidity()) {
        this.reportValidity();
        return;
    }

    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (password !== confirmPassword) {
        alert("Senhas não coincidem.");
        return;
    }

    this.style.display = 'none';
    document.getElementById('signup-form2').style.display = 'block';
});

// CADASTRO FINAL
document.getElementById('signup-form2').addEventListener('submit', function (event) {
    event.preventDefault();

    if (!this.checkValidity()) {
        this.reportValidity();
        return;
    }

    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
});
