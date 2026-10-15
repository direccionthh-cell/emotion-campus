/*
 * LAYOUT Y PROGRESO — Emotion Campus
 * ------------------------------------------------------------------
 * - Protege las páginas internas (redirige al login si no hay sesión).
 * - Dibuja el menú lateral en <aside id="sidebar" data-activo="...">.
 * - Guarda y lee el progreso de cada usuario (en el navegador).
 *
 * Nota: por ahora todo se guarda en localStorage, es decir, solo en el
 * navegador de cada persona. Para usuarios reales se reemplazará por
 * una base de datos (Etapa 4).
 */

// ---------- Sesión ----------
if (localStorage.getItem("sesionActiva") !== "true") {
    window.location.href = "index.html";
}

const USUARIO_EMAIL = localStorage.getItem("usuarioEmail") || "";

function cerrarSesion() {
    localStorage.removeItem("sesionActiva");
    localStorage.removeItem("usuarioEmail");
    window.location.href = "index.html";
}

// ---------- Menú lateral ----------
const MENU = [
    { id: "dashboard",     texto: "🏠 Inicio",        href: "dashboard.html" },
    { id: "cursos",        texto: "📖 Cursos",        href: "cursos.html" },
    { id: "evaluaciones",  texto: "📊 Mis resultados", href: "resultados.html" }
];

function dibujarSidebar() {
    const aside = document.getElementById("sidebar");
    if (!aside) return;
    const activo = aside.dataset.activo;
    aside.className = "sidebar";
    aside.innerHTML = `
        <div class="sidebar-logo">
            <img src="assets/images/images/logo-emotion.jpeg" alt="Emotion">
            e-motion
        </div>
        <ul class="sidebar-menu">
            ${MENU.map(m => `<li><a href="${m.href}" class="${m.id === activo ? "active" : ""}">${m.texto}</a></li>`).join("")}
        </ul>
        <div class="sidebar-user">${USUARIO_EMAIL}</div>
        <button class="btn-emotion-outline" id="btnLogout">Cerrar sesión</button>
    `;
    document.getElementById("btnLogout").addEventListener("click", cerrarSesion);
}

document.addEventListener("DOMContentLoaded", dibujarSidebar);

// ---------- Progreso ----------
const CLAVE_PROGRESO = "progreso_" + USUARIO_EMAIL;

function leerProgreso() {
    try {
        return JSON.parse(localStorage.getItem(CLAVE_PROGRESO)) || {};
    } catch (e) {
        return {};
    }
}

function guardarProgreso(progreso) {
    localStorage.setItem(CLAVE_PROGRESO, JSON.stringify(progreso));
}

function progresoCurso(id) {
    const p = leerProgreso()[id] || {};
    return {
        leccionesVistas: p.leccionesVistas || [],
        aprobado: p.aprobado || false,
        porcentaje: p.porcentaje ?? null,
        intentos: p.intentos || 0,
        fecha: p.fecha || null
    };
}

function marcarLeccionVista(id, indice) {
    const progreso = leerProgreso();
    const p = progreso[id] || {};
    p.leccionesVistas = p.leccionesVistas || [];
    if (!p.leccionesVistas.includes(indice)) p.leccionesVistas.push(indice);
    progreso[id] = p;
    guardarProgreso(progreso);
}

function registrarIntento(id, porcentaje) {
    const progreso = leerProgreso();
    const p = progreso[id] || {};
    p.intentos = (p.intentos || 0) + 1;
    // Se conserva la mejor nota obtenida
    if (p.porcentaje == null || porcentaje > p.porcentaje) {
        p.porcentaje = porcentaje;
    }
    if (porcentaje >= NOTA_APROBACION && !p.aprobado) {
        p.aprobado = true;
        p.fecha = new Date().toLocaleDateString("es-CO");
    }
    progreso[id] = p;
    guardarProgreso(progreso);
}

// Estado de un curso: "aprobado", "en-curso" o "pendiente"
function estadoCurso(id) {
    const p = progresoCurso(id);
    if (p.aprobado) return "aprobado";
    if (p.leccionesVistas.length > 0 || p.intentos > 0) return "en-curso";
    return "pendiente";
}

const ETIQUETA_ESTADO = {
    "aprobado": "✅ Aprobado",
    "en-curso": "⏳ En curso",
    "pendiente": "Pendiente"
};
