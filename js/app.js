const usuarioDemo = {
    email: "demo@emotioncampus.com",
    password: "123456"
};

document.addEventListener("DOMContentLoaded", () => {
    const btnLogin = document.querySelector(".btn-emotion");
    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');

    btnLogin.addEventListener("click", (e) => {
        e.preventDefault();
        const email = inputEmail.value.trim();
        const password = inputPassword.value.trim();

        if (!email || !password) {
            mostrarError("Por favor completa todos los campos");
            return;
        }

        if (email === usuarioDemo.email && password === usuarioDemo.password) {
            localStorage.setItem("sesionActiva", "true");
            localStorage.setItem("usuarioEmail", email);
            window.location.href = "dashboard.html";
        } else {
            mostrarError("Correo o contraseña incorrectos");
        }
    });
});

function mostrarError(mensaje) {
    let error = document.querySelector(".error-msg");
    if (!error) {
        error = document.createElement("p");
        error.className = "error-msg";
        error.style.color = "red";
        error.style.fontSize = "14px";
        document.querySelector(".login-card").appendChild(error);
    }
    error.textContent = mensaje;
}