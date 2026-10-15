// Piezas visuales reutilizables

// Tarjeta de curso con estado y barra de progreso
function tarjetaCurso(id) {
    const c = CURSOS[id];
    const p = progresoCurso(id);
    const estado = estadoCurso(id);
    const pct = p.aprobado ? 100 : Math.round((p.leccionesVistas.length / (c.lecciones.length + 1)) * 100);

    const a = document.createElement("a");
    a.className = "course-card";
    a.href = `curso.html?id=${id}`;
    a.dataset.estado = estado;
    a.dataset.texto = (c.titulo + " " + c.descripcion).toLowerCase();
    a.innerHTML = `
        <div class="course-icon" style="background-color:${c.color};">${c.icono}</div>
        <h3>${c.titulo}</h3>
        <p>${c.descripcion}</p>
        <div class="course-meta">
            <span class="estado estado-${estado}">${ETIQUETA_ESTADO[estado]}</span>
            <span class="course-duracion">⏱ ${c.duracion} · ${c.lecciones.length} lecciones</span>
        </div>
        <div class="barra"><span style="width:${pct}%"></span></div>
        <div class="barra-texto">${p.aprobado ? `Nota: ${p.porcentaje}%` : `${pct}% completado`}</div>
    `;
    return a;
}
