/*
 * DATOS DE LOS CURSOS — Emotion Campus
 * ------------------------------------------------------------------
 * Este es el ÚNICO lugar donde se definen los cursos, sus lecciones
 * y sus evaluaciones. Todas las páginas leen de aquí.
 *
 * Para agregar un curso: copia un bloque completo, cambia el id
 * (la clave, p. ej. "extintores") y llena sus campos.
 *
 * Cada lección tiene:
 *   titulo    -> nombre de la lección
 *   contenido -> texto en HTML sencillo (<p>, <ul><li>, <strong>)
 *   video     -> (opcional) enlace de YouTube en formato "embed"
 *
 * Cada pregunta tiene:
 *   pregunta, opciones (lista), correcta (posición, empezando en 0)
 *   y explicacion (se muestra al terminar la evaluación).
 *
 * IMPORTANTE: el contenido es una base de ejemplo. Debe revisarlo y
 * ajustarlo el área responsable de cada tema con las políticas
 * propias de la empresa antes de publicarlo.
 */

const NOTA_APROBACION = 70; // porcentaje mínimo para aprobar

const CURSOS = {
    induccion: {
        titulo: "Inducción Corporativa",
        descripcion: "Bienvenida y primeros pasos para nuevos colaboradores.",
        icono: "🎯",
        color: "#5D2F8A",
        duracion: "20 min",
        lecciones: [
            {
                titulo: "Bienvenida a e-motion",
                contenido: `<p>Te damos la bienvenida al equipo. En esta inducción conocerás quiénes somos, cómo trabajamos y qué esperamos unos de otros.</p>
                <p><strong>Reemplaza este texto</strong> con la historia de la empresa: cuándo nació, qué hace y a quién sirve.</p>`
            },
            {
                titulo: "Misión, visión y valores",
                contenido: `<p>Nuestros valores guían cómo tomamos decisiones y cómo tratamos a clientes y compañeros.</p>
                <ul><li>Misión: <em>(escribir aquí)</em></li><li>Visión: <em>(escribir aquí)</em></li><li>Valores: <em>(escribir aquí)</em></li></ul>`
            },
            {
                titulo: "Estructura organizacional",
                contenido: `<p>Conoce las áreas de la empresa y a quién acudir para cada tema: Talento Humano, Calidad, SST, Cumplimiento y tu jefe inmediato.</p>`
            }
        ],
        evaluacion: [
            {
                pregunta: "Si tienes una duda sobre tu contrato o tus vacaciones, ¿a qué área acudes primero?",
                opciones: ["Talento Humano", "Calidad", "Sistemas"],
                correcta: 0,
                explicacion: "Talento Humano gestiona los temas contractuales y de vacaciones."
            },
            {
                pregunta: "¿Para qué sirven los valores corporativos?",
                opciones: ["Solo para publicarlos en la página web", "Para orientar decisiones y comportamientos en el trabajo", "Para evaluar el salario"],
                correcta: 1,
                explicacion: "Los valores orientan cómo actuamos y decidimos en el día a día."
            },
            {
                pregunta: "¿Cuál de estos cursos es obligatorio para todos los colaboradores?",
                opciones: ["Ninguno, todos son opcionales", "Solo Inducción", "Todos los del catálogo marcados como obligatorios"],
                correcta: 2,
                explicacion: "Los cursos marcados como obligatorios deben completarse y aprobarse."
            }
        ]
    },

    th: {
        titulo: "Talento Humano",
        descripcion: "Procesos internos y políticas de personal.",
        icono: "👤",
        color: "#5D2F8A",
        duracion: "25 min",
        lecciones: [
            {
                titulo: "Políticas de contratación",
                contenido: `<p>La contratación se hace de forma transparente, con base en el perfil del cargo y sin discriminación por género, edad, origen, religión, orientación sexual o discapacidad.</p>
                <p><strong>Completa</strong> con el procedimiento interno de selección y vinculación.</p>`
            },
            {
                titulo: "Bienestar laboral",
                contenido: `<p>El programa de bienestar busca mejorar la calidad de vida de los colaboradores y sus familias: actividades de integración, salud mental, reconocimientos y beneficios.</p>`
            },
            {
                titulo: "Evaluación de desempeño",
                contenido: `<p>La evaluación de desempeño permite reconocer logros, identificar oportunidades de mejora y definir un plan de desarrollo con tu jefe inmediato.</p>`
            }
        ],
        evaluacion: [
            {
                pregunta: "¿Con base en qué se debe hacer la selección de personal?",
                opciones: ["Recomendaciones personales únicamente", "El perfil del cargo, sin discriminación", "La edad del candidato"],
                correcta: 1,
                explicacion: "La selección se basa en el perfil del cargo y prohíbe cualquier discriminación."
            },
            {
                pregunta: "¿Cuál es el objetivo principal de la evaluación de desempeño?",
                opciones: ["Sancionar errores", "Reconocer logros y definir un plan de desarrollo", "Reducir el salario"],
                correcta: 1,
                explicacion: "Busca reconocer logros y acordar oportunidades de mejora y desarrollo."
            },
            {
                pregunta: "¿A quién beneficia el programa de bienestar?",
                opciones: ["Solo a los directivos", "A los colaboradores y sus familias", "Solo a quienes llevan más de 10 años"],
                correcta: 1,
                explicacion: "El bienestar laboral está dirigido a todos los colaboradores y sus familias."
            }
        ]
    },

    calidad: {
        titulo: "Calidad",
        descripcion: "Procesos y estándares de calidad de la empresa.",
        icono: "✅",
        color: "#F38B33",
        duracion: "20 min",
        lecciones: [
            {
                titulo: "Sistema de Gestión de Calidad",
                contenido: `<p>Un Sistema de Gestión de Calidad (por ejemplo, bajo la norma ISO 9001) organiza los procesos para cumplir los requisitos del cliente de forma consistente.</p>`
            },
            {
                titulo: "Indicadores de calidad",
                contenido: `<p>Los indicadores miden si los procesos cumplen sus objetivos: satisfacción del cliente, cumplimiento de entregas, quejas y no conformidades.</p>`
            },
            {
                titulo: "Mejora continua (ciclo PHVA)",
                contenido: `<ul><li><strong>Planear</strong>: definir objetivos y cómo lograrlos.</li><li><strong>Hacer</strong>: ejecutar lo planeado.</li><li><strong>Verificar</strong>: medir resultados.</li><li><strong>Actuar</strong>: corregir y mejorar.</li></ul>`
            }
        ],
        evaluacion: [
            {
                pregunta: "¿Qué significa la sigla PHVA?",
                opciones: ["Planear, Hacer, Verificar, Actuar", "Producir, Hacer, Vender, Ajustar", "Proceso, Hora, Valor, Acción"],
                correcta: 0,
                explicacion: "PHVA es el ciclo de mejora continua: Planear, Hacer, Verificar y Actuar."
            },
            {
                pregunta: "¿Para qué sirven los indicadores de calidad?",
                opciones: ["Para decorar los informes", "Para medir si los procesos cumplen sus objetivos", "Para reemplazar las auditorías"],
                correcta: 1,
                explicacion: "Los indicadores permiten medir y tomar decisiones sobre los procesos."
            },
            {
                pregunta: "¿Qué norma internacional se usa comúnmente para sistemas de gestión de calidad?",
                opciones: ["ISO 9001", "ISO 14001", "ISO 45001"],
                correcta: 0,
                explicacion: "ISO 9001 es la norma de gestión de calidad. ISO 14001 es ambiental e ISO 45001 de seguridad y salud."
            }
        ]
    },

    sst: {
        titulo: "SST",
        descripcion: "Seguridad y Salud en el Trabajo.",
        icono: "🦺",
        color: "#34C759",
        duracion: "30 min",
        lecciones: [
            {
                titulo: "Marco legal del SG-SST",
                contenido: `<p>En Colombia, el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) está reglamentado principalmente en el <strong>Decreto 1072 de 2015</strong> y los estándares mínimos de la <strong>Resolución 0312 de 2019</strong>.</p>`
            },
            {
                titulo: "Peligros, riesgos y prevención",
                contenido: `<p>Un <strong>peligro</strong> es una fuente con potencial de causar daño; el <strong>riesgo</strong> es la probabilidad de que ese daño ocurra y su severidad.</p>
                <p>Reporta condiciones y actos inseguros, usa tus elementos de protección personal y participa en las capacitaciones.</p>`
            },
            {
                titulo: "COPASST y reporte de accidentes",
                contenido: `<p>El <strong>COPASST</strong> (o el Vigía de SST en empresas con menos de 10 trabajadores) promueve y vigila las normas de seguridad y salud.</p>
                <p>Todo accidente de trabajo debe reportarse de inmediato a tu jefe y al área de SST, para que se notifique a la ARL dentro de los plazos legales.</p>`
            }
        ],
        evaluacion: [
            {
                pregunta: "¿Qué norma reglamenta principalmente el SG-SST en Colombia?",
                opciones: ["Ley 1581 de 2012", "Decreto 1072 de 2015", "Ley 2050 de 2020"],
                correcta: 1,
                explicacion: "El Decreto Único Reglamentario del Sector Trabajo (1072 de 2015) reglamenta el SG-SST."
            },
            {
                pregunta: "¿Cuál es la diferencia entre peligro y riesgo?",
                opciones: ["Son lo mismo", "El peligro es la fuente de daño; el riesgo es la probabilidad y severidad del daño", "El riesgo solo existe en oficinas"],
                correcta: 1,
                explicacion: "Ejemplo: un piso mojado es un peligro; la posibilidad de resbalar y lesionarse es el riesgo."
            },
            {
                pregunta: "¿Qué comité promueve y vigila las normas de seguridad y salud en la empresa?",
                opciones: ["COPASST", "Junta Directiva", "Comité de Compras"],
                correcta: 0,
                explicacion: "El COPASST (o el Vigía de SST) cumple esa función."
            },
            {
                pregunta: "Si sufres un accidente de trabajo, ¿qué debes hacer?",
                opciones: ["Esperar a ver si empeora", "Reportarlo de inmediato a tu jefe y al área de SST", "Contarlo solo a un compañero"],
                correcta: 1,
                explicacion: "El reporte inmediato permite atenderte y notificar a la ARL a tiempo."
            }
        ]
    },

    etica: {
        titulo: "Ética y Transparencia",
        descripcion: "Código de ética y Programa de Transparencia y Ética Empresarial (PTEE).",
        icono: "⚖️",
        color: "#5D2F8A",
        duracion: "25 min",
        lecciones: [
            {
                titulo: "Código de ética",
                contenido: `<p>El código de ética define los comportamientos esperados: honestidad, respeto, responsabilidad y cumplimiento de la ley.</p>`
            },
            {
                titulo: "Conflictos de interés",
                contenido: `<p>Hay conflicto de interés cuando un interés personal (familiar, económico o de amistad) puede influir en una decisión que tomas para la empresa.</p>
                <p>Si identificas uno, <strong>decláralo</strong> antes de participar en la decisión.</p>`
            },
            {
                titulo: "PTEE y canales de denuncia",
                contenido: `<p>El <strong>Programa de Transparencia y Ética Empresarial (PTEE)</strong>, supervisado por la Superintendencia de Sociedades para las empresas obligadas, busca prevenir el soborno transnacional y la corrupción.</p>
                <p>Puedes reportar cualquier situación irregular por los canales de denuncia de la empresa, que garantizan confidencialidad y no represalias.</p>`
            }
        ],
        evaluacion: [
            {
                pregunta: "¿Qué debes hacer si tienes un conflicto de interés en una decisión?",
                opciones: ["Ocultarlo", "Declararlo antes de participar en la decisión", "Decidir rápido para que nadie lo note"],
                correcta: 1,
                explicacion: "Declararlo a tiempo protege a la empresa y a ti."
            },
            {
                pregunta: "¿Qué busca prevenir el PTEE?",
                opciones: ["Accidentes de tránsito", "El soborno transnacional y la corrupción", "Errores contables menores"],
                correcta: 1,
                explicacion: "El PTEE está orientado a prevenir corrupción y soborno transnacional."
            },
            {
                pregunta: "¿Qué garantizan los canales de denuncia?",
                opciones: ["Confidencialidad y no represalias", "Que el denunciante pague una multa", "Que la denuncia sea pública"],
                correcta: 0,
                explicacion: "Los canales protegen la identidad del denunciante y prohíben represalias."
            }
        ]
    },

    sarlaft: {
        titulo: "SARLAFT",
        descripcion: "Sistema de Administración del Riesgo de LA/FT.",
        icono: "🛡️",
        color: "#EF4444",
        duracion: "25 min",
        lecciones: [
            {
                titulo: "¿Qué es el lavado de activos?",
                contenido: `<p>El <strong>lavado de activos</strong> es dar apariencia de legalidad a dinero o bienes de origen ilícito. La <strong>financiación del terrorismo</strong> es aportar recursos, legales o ilegales, a actividades terroristas.</p>`
            },
            {
                titulo: "Señales de alerta",
                contenido: `<ul><li>Clientes o proveedores que se niegan a entregar información.</li><li>Pagos en efectivo inusuales o fraccionados.</li><li>Operaciones que no coinciden con la actividad económica declarada.</li><li>Coincidencias en listas restrictivas.</li></ul>`
            },
            {
                titulo: "Reporte de operaciones sospechosas",
                contenido: `<p>Si detectas una operación inusual, infórmala al <strong>Oficial de Cumplimiento</strong>. Él analiza el caso y, si corresponde, presenta el Reporte de Operación Sospechosa (ROS) ante la <strong>UIAF</strong>.</p>
                <p>Nunca le avises al cliente que su operación está siendo reportada.</p>`
            }
        ],
        evaluacion: [
            {
                pregunta: "¿Qué es el lavado de activos?",
                opciones: ["Limpiar los equipos de la oficina", "Dar apariencia de legalidad a recursos de origen ilícito", "Pagar impuestos atrasados"],
                correcta: 1,
                explicacion: "Lavar activos es ocultar el origen ilícito de dinero o bienes."
            },
            {
                pregunta: "¿Ante qué entidad se presenta el Reporte de Operación Sospechosa (ROS)?",
                opciones: ["DIAN", "UIAF", "Cámara de Comercio"],
                correcta: 1,
                explicacion: "La Unidad de Información y Análisis Financiero (UIAF) recibe los ROS."
            },
            {
                pregunta: "Si detectas una operación inusual, ¿a quién debes informar?",
                opciones: ["Al Oficial de Cumplimiento", "Al cliente involucrado", "A nadie"],
                correcta: 0,
                explicacion: "El Oficial de Cumplimiento analiza el caso. Nunca se debe alertar al cliente."
            },
            {
                pregunta: "¿Cuál de estas es una señal de alerta?",
                opciones: ["Un cliente que entrega todos sus documentos", "Pagos en efectivo fraccionados sin justificación", "Un proveedor con facturación electrónica"],
                correcta: 1,
                explicacion: "Fraccionar pagos en efectivo puede ser un intento de evitar controles."
            }
        ]
    },

    datos: {
        titulo: "Protección de Datos",
        descripcion: "Manejo responsable de datos personales (Ley 1581 de 2012).",
        icono: "🔒",
        color: "#F38B33",
        duracion: "20 min",
        lecciones: [
            {
                titulo: "Principios del tratamiento de datos",
                contenido: `<p>La <strong>Ley 1581 de 2012</strong> regula el tratamiento de datos personales en Colombia. Algunos principios: legalidad, finalidad, libertad (autorización del titular), veracidad, seguridad y confidencialidad.</p>`
            },
            {
                titulo: "Derechos del titular",
                contenido: `<p>El titular puede <strong>conocer, actualizar, rectificar</strong> sus datos, solicitar prueba de la autorización, revocarla o pedir la supresión, y presentar quejas ante la <strong>Superintendencia de Industria y Comercio (SIC)</strong>.</p>`
            },
            {
                titulo: "Manejo seguro de la información",
                contenido: `<ul><li>No compartas bases de datos por canales personales.</li><li>Bloquea tu equipo al levantarte.</li><li>Usa contraseñas seguras y no las compartas.</li><li>Recolecta solo los datos necesarios para la finalidad autorizada.</li></ul>`
            }
        ],
        evaluacion: [
            {
                pregunta: "¿Qué ley regula la protección de datos personales en Colombia?",
                opciones: ["Ley 1581 de 2012", "Ley 1010 de 2006", "Ley 100 de 1993"],
                correcta: 0,
                explicacion: "La Ley 1581 de 2012 es el régimen general de protección de datos personales."
            },
            {
                pregunta: "¿Qué entidad vigila el cumplimiento de la protección de datos?",
                opciones: ["Superintendencia de Industria y Comercio", "Superintendencia Financiera", "Ministerio de Transporte"],
                correcta: 0,
                explicacion: "La SIC es la autoridad de protección de datos personales."
            },
            {
                pregunta: "¿Cuál es una buena práctica de seguridad de la información?",
                opciones: ["Enviar bases de datos por WhatsApp personal", "Bloquear el equipo al levantarse del puesto", "Compartir contraseñas con el equipo"],
                correcta: 1,
                explicacion: "Bloquear el equipo evita accesos no autorizados."
            }
        ]
    },

    acoso: {
        titulo: "Prevención del Acoso Sexual",
        descripcion: "Identificación, prevención y ruta de atención del acoso sexual laboral.",
        icono: "🚫",
        color: "#EF4444",
        duracion: "30 min",
        lecciones: [
            {
                titulo: "¿Qué es el acoso sexual?",
                contenido: `<p>El <strong>artículo 210A del Código Penal</strong> tipifica el acoso sexual cuando alguien, valiéndose de una posición de superioridad o de relaciones de autoridad, poder, edad, sexo, posición laboral, social, familiar o económica, acosa, persigue, hostiga o asedia física o verbalmente a otra persona con fines sexuales no consentidos.</p>
                <p>La pena es de <strong>prisión de uno a tres años</strong>.</p>`
            },
            {
                titulo: "Circular 026 de 2023",
                contenido: `<p>La <strong>Circular 026 de 2023 del Ministerio del Trabajo</strong> establece medidas que deben adoptar los empleadores para prevenir y atender el acoso sexual y el acoso laboral, incluyendo capacitación, protocolos y una ruta de atención.</p>
                <p>Las ARL deben brindar asesoría y capacitación a las empresas sobre estos temas.</p>`
            },
            {
                titulo: "Ruta de atención y confidencialidad",
                contenido: `<p>Si eres víctima o testigo:</p>
                <ul><li>Reporta ante el <strong>Comité de Convivencia Laboral</strong> o el canal definido por la empresa.</li><li>La información se maneja con <strong>confidencialidad</strong> y está prohibida cualquier represalia.</li><li>También puedes denunciar ante la Fiscalía o el Ministerio del Trabajo.</li></ul>`
            }
        ],
        evaluacion: [
            {
                pregunta: "¿Qué norma establece las acciones de prevención y atención del acoso laboral y sexual que deben implementar las empresas?",
                opciones: ["Ley 100 de 1993", "Circular 026 de 2023", "Decreto 1072 de 2015"],
                correcta: 1,
                explicacion: "La Circular 026 de 2023 del Ministerio del Trabajo fija esas medidas."
            },
            {
                pregunta: "¿Qué órgano es obligatorio en las empresas para atender casos de convivencia laboral?",
                opciones: ["Comité de Convivencia Laboral", "Junta Directiva", "Sindicato"],
                correcta: 0,
                explicacion: "El Comité de Convivencia Laboral recibe y gestiona estos casos."
            },
            {
                pregunta: "Según el artículo 210A del Código Penal, ¿qué pena puede tener el acoso sexual?",
                opciones: ["Solo una multa económica", "Prisión de uno a tres años", "Suspensión temporal del empleo"],
                correcta: 1,
                explicacion: "El artículo 210A establece prisión de uno a tres años."
            },
            {
                pregunta: "¿Quién tiene el deber de dar asesoría y capacitación sobre prevención de acoso laboral y sexual?",
                opciones: ["La ARL a la que está afiliada la empresa", "Únicamente el Ministerio de Trabajo", "Cada empleado por su cuenta"],
                correcta: 0,
                explicacion: "Las ARL deben asesorar y capacitar a las empresas afiliadas."
            }
        ]
    },

    vial: {
        titulo: "Seguridad Vial",
        descripcion: "Normas de tránsito y prevención de accidentes viales.",
        icono: "🚗",
        color: "#34C759",
        duracion: "25 min",
        lecciones: [
            {
                titulo: "Normas básicas de tránsito",
                contenido: `<p>Respeta los límites de velocidad, las señales y la prelación del peatón. No uses el celular mientras conduces y nunca conduzcas bajo efectos del alcohol o sustancias psicoactivas.</p>`
            },
            {
                titulo: "Casco, cinturón y elementos de protección",
                contenido: `<ul><li><strong>Motociclistas</strong>: casco abrochado y certificado, chaleco o prenda reflectiva cuando la norma lo exija.</li><li><strong>Vehículos</strong>: cinturón de seguridad para todos los ocupantes.</li><li><strong>Ciclistas</strong>: casco y elementos reflectivos.</li></ul>`
            },
            {
                titulo: "Plan Estratégico de Seguridad Vial (PESV)",
                contenido: `<p>La <strong>Ley 2050 de 2020</strong> define qué organizaciones deben implementar un PESV según su número de vehículos o conductores. El plan busca reducir los accidentes en los desplazamientos laborales.</p>
                <p>En caso de accidente: protege la zona, llama a emergencias (123), no muevas a los heridos y reporta a tu jefe y al área de SST.</p>`
            }
        ],
        evaluacion: [
            {
                pregunta: "¿Qué ley regula el Plan Estratégico de Seguridad Vial (PESV)?",
                opciones: ["Ley 2050 de 2020", "Ley 1581 de 2012", "Ley 1010 de 2006"],
                correcta: 0,
                explicacion: "La Ley 2050 de 2020 modificó y actualizó las reglas del PESV."
            },
            {
                pregunta: "En un accidente con heridos, ¿qué NO debes hacer?",
                opciones: ["Llamar al 123", "Mover a los heridos sin necesidad", "Señalizar la zona"],
                correcta: 1,
                explicacion: "Mover a un herido puede agravar sus lesiones. Espera a los organismos de socorro."
            },
            {
                pregunta: "¿Quiénes deben usar cinturón de seguridad en un vehículo?",
                opciones: ["Solo el conductor", "Todos los ocupantes", "Solo en carretera"],
                correcta: 1,
                explicacion: "El cinturón es obligatorio para todos los ocupantes."
            }
        ]
    }
};

// Orden en que se muestran los cursos en el catálogo
const ORDEN_CURSOS = ["induccion", "th", "calidad", "sst", "etica", "sarlaft", "datos", "acoso", "vial"];
