// Login de demostración. En la Etapa 4 se reemplaza por usuarios reales.
const usuarioDemo = {
    email: "demo@emotioncampus.com",
    password: "123456"
};

document.addEventListener("DOMContentLoaded", () => {
    // Si ya hay sesión, ir directo al inicio
    if (localStorage.getItem("sesionActiva") === "true") {
        window.location.href = "dashboard.html";
        return;
    }

    const form = document.getElementById("formLogin");
    const inputEmail = form.querySelector('input[type="email"]');
    const inputPassword = form.querySelector('input[type="password"]');

    // Usar un formulario permite ingresar también con la tecla Enter
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = inputEmail.value.trim().toLowerCase();
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
        error.style.color = "#EF4444";
        error.style.fontSize = "14px";
        error.style.margin = "12px 0 0";
        document.querySelector(".login-card").appendChild(error);
    }
    error.textContent = mensaje;
}
