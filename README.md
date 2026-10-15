# Emotion Campus

Plataforma de capacitación de e-motion para cursos obligatorios (Inducción, Talento Humano, Calidad, SST, Ética y Transparencia, SARLAFT, Protección de Datos, Prevención del Acoso Sexual y Seguridad Vial).

## Cómo probarla

Abre `index.html` en el navegador (o con la extensión *Live Server* de VS Code).

Usuario demo: `demo@emotioncampus.com` / `123456`

## Estructura

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Inicio de sesión |
| `dashboard.html` | Inicio: avance general y cursos sugeridos |
| `cursos.html` | Catálogo con filtros y buscador |
| `curso.html?id=...` | Lecciones del curso, una por una |
| `evaluacion.html?id=...` | Evaluación paso a paso con revisión de respuestas |
| `resultados.html` | Notas, intentos y fechas de aprobación |
| `js/datos.js` | **Contenido de todos los cursos, lecciones y preguntas** |
| `js/layout.js` | Menú lateral, sesión y progreso |
| `js/componentes.js` | Tarjetas de curso |
| `css/style.css` | Estilos |

## Cómo editar un curso

Todo el contenido está en `js/datos.js`. Para agregar una lección, una pregunta o un curso nuevo, copia un bloque existente y cambia el texto. Para agregar un video, usa el enlace *embed* de YouTube en el campo `video` de la lección.

## Limitaciones actuales

El login y el progreso se guardan solo en el navegador de cada persona. Para usuarios reales y reportes se necesita una base de datos (por ejemplo, Supabase o Firebase).
