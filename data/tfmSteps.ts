
import { TFMStep } from '../types';
import { BookOpenIcon, DocumentTextIcon, LightBulbIcon, PresentationChartLineIcon, BeakerIcon, UsersIcon, CheckCircleIcon, ChartPieIcon, ClipboardListIcon, SparklesIcon, ScaleIcon, ArchiveIcon, DocumentDuplicateIcon, CalendarIcon, ShieldCheckIcon } from '../components/Icons';

export const tfmSteps: TFMStep[] = [
    {
        id: 1,
        title: "Indicaciones Generales",
        subtitle: "Configuración inicial y normativas clave.",
        icon: BookOpenIcon,
        content: {
            introduction: "Antes de escribir una sola palabra, es crucial entender las reglas del juego. Esta sección establece las bases formales, de estilo y citación que garantizarán que tu trabajo sea académicamente sólido desde el principio.",
            keyPoints: [
                {
                    title: "Estructura y Extensión",
                    details: [
                        "<strong>TFE Individual:</strong> Mínimo 50 páginas, máximo 70 (sin anexos).",
                        "<strong>TFE Grupal:</strong> Mínimo 70 páginas, máximo 150 (sin anexos).",
                        "Respeta siempre la plantilla oficial proporcionada por la universidad.",
                    ],
                },
                {
                    title: "Formato y Estética",
                    details: [
                        "<strong>Fuente:</strong> Calibri 12 para texto, interlineado 1.5, justificado.",
                        "<strong>Márgenes:</strong> Izquierdo 3.0 cm, Derecho 2.0 cm, Superior/Inferior 2.5 cm.",
                        "Cuida la ortografía y redacción. Utiliza el corrector y pide a alguien que lo revise.",
                        "La presentación debe ser elegante, profesional y coherente.",
                    ],
                },
                 {
                    title: "Citas, APA y Notas al Pie: ¡Evita el Plagio!",
                    details: [
                        "<strong>¿Por qué citar?</strong> Imagina que cuentas una idea genial de un amigo. Lo justo es decir que la idea es suya, ¿verdad? Citar es eso: dar crédito al autor original. Sirve para demostrar que has investigado, dar fuerza a tus argumentos y, lo más importante, <em>evitar el plagio</em> (que es como 'robar' ideas y es una falta muy grave).",
                        "<strong>¿Cuándo debes citar?</strong> ¡Siempre! Cita cuando uses: las palabras exactas de alguien (entre comillas), una idea o teoría de otro autor, datos, estadísticas, gráficos, o cualquier información que no sea de conocimiento común.",
                        "<strong>¿Qué son las Normas APA?</strong> Son como las 'reglas de tráfico' de la escritura académica. Indican exactamente cómo poner la información del autor para que todo el mundo lo haga igual. Se compone de dos partes: <br>1. <strong>Cita en el texto:</strong> Un pequeño aviso junto a la idea que usaste, así: (Apellido del Autor, Año). <br>2. <strong>Lista de Referencias:</strong> Una lista al final de tu TFM con la información completa de todas las fuentes que citaste.",
                        "<strong>Ejemplo rápido de APA:</strong><br> - <em>En tu texto:</em> ...la estrategia de marketing de contenidos es crucial para atraer clientes (López, 2023). <br> - <em>Al final, en Referencias:</em> López, J. (2023). <em>Marketing Digital para Principiantes</em>. Editorial Académica.",
                        "<strong>¿Y las notas al pie?</strong> En APA, las notas al pie no se usan para citar. Se usan para dar una explicación extra o una aclaración que es interesante, pero que si la pones en el texto principal, cortaría el ritmo de la lectura. Úsalas con moderación.",
                    ]
                }
            ],
            aiPrompt: `Actúa como un asesor de tesis universitario. Proporciona 3 consejos concisos y prácticos sobre cómo un estudiante puede empezar su TFM con buen pie, enfocándose en la organización inicial y la gestión del tiempo, basándose en las indicaciones generales. Devuelve el resultado en un objeto JSON con una clave "tips" que contenga un array de strings. Ejemplo: {"tips": ["Consejo 1", "Consejo 2", "Consejo 3"]}`
        },
    },
    {
        id: 2,
        title: "Portada, Índice y Resumen",
        subtitle: "La primera impresión de tu trabajo.",
        icon: DocumentTextIcon,
        content: {
            introduction: "La portada, el índice y el resumen son la carta de presentación de tu TFM. Deben ser impecables, claros y concisos para captar el interés del lector y facilitar la navegación por el documento.",
            keyPoints: [
                {
                    title: "Portada",
                    details: [
                        "Utiliza el modelo oficial de la plantilla sin modificaciones.",
                        "Incluye toda la información requerida: título, autor(es), tutor, fecha, etc.",
                        "Si es grupal, deben aparecer los nombres de todos los integrantes.",
                    ],
                },
                {
                    title: "Índice",
                    details: [
                        "Debe estar debidamente paginado y ser generado automáticamente para evitar errores.",
                        "Incluye índices separados para contenidos, figuras y tablas si es necesario.",
                        "En trabajos grupales, debe especificar qué parte ha realizado cada miembro.",
                    ],
                },
                {
                    title: "Resumen (Abstract) y Palabras Clave",
                    details: [
                        "Extensión entre <strong>150 y 300 palabras</strong>.",
                        "Debe reflejar: objetivos, metodología, resultados y conclusiones principales.",
                        "Redáctalo al final del todo, cuando tengas una visión completa del trabajo.",
                        "Incluye de 4 a 5 palabras clave (keywords) específicas para la búsqueda.",
                        "El tono debe ser impersonal, en tercera persona y voz activa.",
                    ],
                },
            ],
            aiPrompt: `Actúa como un editor académico. Proporciona 3 consejos clave para redactar un resumen (abstract) de TFM potente y efectivo, que capture la esencia del trabajo en menos de 300 palabras. Devuelve el resultado en un objeto JSON con una clave "tips" que contenga un array de strings.`
        },
    },
     {
        id: 3,
        title: "Introducción",
        subtitle: "Planteamiento del proyecto y objetivos.",
        icon: LightBulbIcon,
        content: {
            introduction: "La introducción es el capítulo que engancha al lector. Aquí debes presentar tu proyecto, justificar su relevancia, definir claramente los objetivos y destacar sus elementos más innovadores.",
            keyPoints: [
                {
                    title: "Planteamiento y Justificación",
                    details: [
                        "Describe el tipo de proyecto que vas a realizar (ej. plan de marketing, mejora de UX...).",
                        "Justifica la elección del tema: ¿Por qué es relevante? ¿Qué problema soluciona?",
                        "Usa datos y fuentes para respaldar la importancia de tu proyecto.",
                    ],
                },
                {
                    title: "Objetivos Académicos del TFE",
                    details: [
                        "Define un <strong>objetivo general</strong> (el gran logro de tu investigación).",
                        "Establece varios <strong>objetivos específicos</strong> (los pasos para alcanzar el general).",
                        "Los objetivos deben ser claros, precisos, alcanzables y medibles. Empieza siempre con un verbo en infinitivo (analizar, proponer, diseñar...).",
                    ],
                },
                {
                    title: "Elementos Innovadores",
                    details: [
                        "Destaca qué hace a tu proyecto diferente o especial.",
                        "La innovación puede ser un nuevo producto, una mejora de proceso, un componente tecnológico, etc.",
                        "Explica la contribución real de tu proyecto al sector o al conocimiento.",
                    ],
                },
            ],
            aiPrompt: `Actúa como un director de TFM. Genera 3 ejemplos de verbos de acción potentes para redactar objetivos específicos de un TFM de Marketing Digital y explica brevemente su uso. Devuelve el resultado en un objeto JSON con una clave "tips" que contenga un array de strings.`
        },
    },
    {
        id: 4,
        title: "Análisis de la Situación",
        subtitle: "Investigación interna y externa.",
        icon: PresentationChartLineIcon,
        content: {
            introduction: "Un diagnóstico preciso es la base de cualquier plan estratégico. En esta fase, realizarás un análisis exhaustivo tanto del entorno de la empresa como de sus capacidades internas para identificar oportunidades y amenazas.",
            keyPoints: [
                {
                    title: "Análisis Interno",
                    details: [
                        "Define el <strong>modelo de negocio</strong> y la propuesta de valor (Business Model Canvas).",
                        "Identifica la <strong>ventaja competitiva</strong> y cómo se comunica (USP).",
                        "Realiza una <strong>auditoría digital</strong> de la presencia online actual de la empresa.",
                    ],
                },
                {
                    title: "Análisis Externo",
                    details: [
                        "<strong>Macroentorno:</strong> Aplica el análisis <strong>PESTEL</strong> (Político, Económico, Social, Tecnológico, Ecológico, Legal).",
                        "<strong>Microentorno:</strong> Usa las <strong>5 Fuerzas de Porter</strong> y realiza un <strong>benchmarking</strong> competitivo detallado.",
                    ],
                },
                {
                    title: "Diagnóstico Final",
                    details: [
                        "Sintetiza toda la información en un análisis <strong>DAFO</strong> (Debilidades, Amenazas, Fortalezas, Oportunidades).",
                        "A partir del DAFO, desarrolla la matriz <strong>CAME</strong> (Corregir, Afrontar, Mantener, Explotar) para empezar a definir líneas estratégicas.",
                    ],
                },
            ],
            aiPrompt: `Actúa como un consultor de estrategia. Proporciona 3 consejos para realizar un benchmarking competitivo efectivo que vaya más allá de simplemente listar competidores en un TFM. Devuelve el resultado en un objeto JSON con una clave "tips" que contenga un array de strings.`
        },
    },
    {
        id: 5,
        title: "Público Objetivo",
        subtitle: "Definición del cliente ideal.",
        icon: UsersIcon,
        content: {
            introduction: "No puedes venderle a todo el mundo. Aquí definirás con precisión a quién te diriges, creando perfiles detallados que te permitirán personalizar tus estrategias y mensajes para maximizar su impacto.",
            keyPoints: [
                {
                    title: "Análisis y Segmentación",
                    details: [
                        "Analiza los clientes actuales, si existen, para encontrar patrones.",
                        "Define los criterios de segmentación que vas a utilizar (demográficos, psicográficos, conductuales...).",
                    ],
                },
                {
                    title: "Buyer Persona",
                    details: [
                        "Crea una o varias fichas de <strong>Buyer Persona</strong>, un arquetipo semi-ficticio de tu cliente ideal.",
                        "Incluye datos como nombre, edad, motivaciones, frustraciones, objetivos y canales de comunicación que utiliza.",
                        "Enriquece el perfil con un <strong>mapa de empatía</strong> para entender qué piensa, siente, ve y oye.",
                    ],
                },
                {
                    title: "Customer Journey",
                    details: [
                        "Mapea el <strong>viaje del cliente</strong> (Customer Journey) desde que descubre la necesidad hasta la post-compra.",
                        "Identifica los puntos de contacto (touchpoints) y las emociones del cliente en cada fase (descubrimiento, consideración, decisión).",
                    ],
                },
            ],
            aiPrompt: `Actúa como un experto en Inbound Marketing. Ofrece 3 preguntas clave que un estudiante debe hacerse para crear un Buyer Persona realmente útil y detallado para su TFM. Devuelve el resultado en un objeto JSON con una clave "tips" que contenga un array de strings.`
        },
    },
    {
        id: 6,
        title: "Objetivos del Plan",
        subtitle: "Fijación de metas SMART.",
        icon: CheckCircleIcon,
        content: {
            introduction: "Con el análisis hecho y el público definido, es hora de establecer qué quieres conseguir. Los objetivos de tu plan de marketing deben estar alineados con los objetivos de negocio y ser específicos, medibles, alcanzables, relevantes y con un plazo de tiempo definido (SMART).",
            keyPoints: [
                {
                    title: "Alineación con el Negocio",
                    details: [
                        "Parte de un objetivo de negocio claro. Ejemplo: 'Aumentar un 25% las ventas online en el año X'.",
                        "Traduce el objetivo de negocio en objetivos de marketing que ayuden a conseguirlo.",
                    ],
                },
                {
                    title: "Definición de Objetivos SMART",
                    details: [
                        "<strong>Específicos (Specific):</strong> ¿Qué quieres lograr exactamente? (Ej. Conseguir visitas a la web).",
                        "<strong>Medibles (Measurable):</strong> ¿Cómo lo medirás? (Ej. Conseguir 10.000 visitas).",
                        "<strong>Alcanzables (Achievable):</strong> ¿Es realista con tus recursos?",
                        "<strong>Relevantes (Relevant):</strong> ¿Ayuda al objetivo de negocio?",
                        "<strong>Limitados en el tiempo (Time-bound):</strong> ¿Para cuándo? (Ej. en el año X).",
                    ],
                },
                 {
                    title: "Ejemplos de Objetivos de Marketing",
                    details: [
                        "'Conseguir 50.000 visitas a la tienda online en el año X'.",
                        "'Lograr una tasa de conversión del 2% en la tienda online en el año X'.",
                        "'Alcanzar un valor medio de transacción de 50€ en el año X'.",
                    ],
                },
            ],
            aiPrompt: `Actúa como un mentor de startups. Transforma el objetivo vago "Mejorar las redes sociales" en 3 objetivos SMART distintos y concretos para un TFM de Marketing Digital. Devuelve el resultado en un objeto JSON con una clave "tips" que contenga un array de strings.`
        },
    },
    {
        id: 7,
        title: "Estrategias y Tácticas",
        subtitle: "El corazón de tu plan de acción.",
        icon: ChartPieIcon,
        content: {
            introduction: "Esta es la sección más extensa e importante. Aquí plasmarás el planteamiento estratégico y el desarrollo detallado de tu proyecto, explicando el qué, cómo, cuándo y con qué recursos lo llevarás a cabo.",
            keyPoints: [
                {
                    title: "Estrategias (Marketing Mix - 4Ps)",
                    details: [
                        "<strong>Producto:</strong> Detalla la oferta, personalización, packaging digital, etc.",
                        "<strong>Precio:</strong> Define la estrategia de precios (bajo coste, premium, dinámico...).",
                        "<strong>Distribución (Place):</strong> Explica los canales de venta (ecommerce propio, marketplace...).",
                        "<strong>Comunicación (Promotion):</strong> Describe cómo te dirigirás al público (canales, mensaje, tono).",
                    ],
                },
                {
                    title: "Tácticas (Plan de Acción)",
                    details: [
                        "Baja la estrategia a acciones concretas. Ej: para SEO, 'hacer un keyword research', para SEM, 'crear 3 campañas en Google Ads'.",
                        "Utiliza un <strong>Diagrama de Gantt</strong> para visualizar el cronograma de acciones, responsables y plazos.",
                        "Incluye ejemplos de contenidos, campañas o prototipos para demostrar tus competencias.",
                    ],
                },
                 {
                    title: "Presupuesto y Previsión de Ventas",
                    details: [
                        "Recopila todos los costes asociados a tu plan de marketing digital.",
                        "Realiza una estimación realista de las ventas que generarás.",
                        "Calcula el <strong>Retorno de la Inversión (ROI)</strong> para justificar la viabilidad del plan.",
                    ],
                },
            ],
            aiPrompt: `Actúa como un Director de Marketing Digital. Sugiere 3 tácticas creativas y de bajo coste (growth hacking) que un estudiante podría incluir en la sección de 'Estrategias y Tácticas' de su TFM. Devuelve el resultado en un objeto JSON con una clave "tips" que contenga un array de strings.`
        },
    },
    {
        id: 8,
        title: "Monitorización y Reporte",
        subtitle: "Medición del éxito y plan de contingencia.",
        icon: ClipboardListIcon,
        content: {
            introduction: "Lo que no se mide, no se puede mejorar. En este punto, definirás cómo vas a monitorizar el éxito de tu plan, qué KPIs son los más importantes y qué harás si las cosas no salen como esperabas.",
            keyPoints: [
                {
                    title: "Establecimiento de KPIs",
                    details: [
                        "Asocia <strong>KPIs (Key Performance Indicators)</strong> a cada uno de los objetivos que definiste.",
                        "Ejemplo: para el objetivo de 'visitas', el KPI es 'Nº de sesiones'. Para el de 'conversión', es 'Tasa de conversión'.",
                        "Define otras métricas de interés que aporten contexto (ej. CTR, tiempo en página, alcance).",
                    ],
                },
                {
                    title: "Herramientas y Periodicidad",
                    details: [
                        "Especifica qué herramientas utilizarás para medir (ej. Google Analytics, SEMrush, Metricool).",
                        "Define con qué periodicidad controlarás los KPIs (diaria, semanal, mensual).",
                    ],
                },
                 {
                    title: "Plan de Contingencia",
                    details: [
                        "Es fundamental anticiparse a los problemas.",
                        "Explica cómo actuarás si algo falla o si no estás cumpliendo los objetivos.",
                        "Ejemplo: 'Si el CTR de la campaña es inferior al 1%, se pausarán los anuncios con peor rendimiento y se testearán nuevos creativos'.",
                    ],
                },
            ],
            aiPrompt: `Actúa como un analista de datos. Recomienda 3 KPIs cruciales, uno para cada fase del embudo de conversión (TOFU, MOFU, BOFU), que un estudiante de marketing digital debería incluir en su TFM. Devuelve el resultado en un objeto JSON con una clave "tips" que contenga un array de strings.`
        },
    },
    {
        id: 9,
        title: "Conclusiones",
        subtitle: "Cierre del trabajo y reflexión final.",
        icon: SparklesIcon,
        content: {
            introduction: "El broche de oro de tu TFM. Las conclusiones cierran tu argumentación, demuestran si has logrado los objetivos propuestos y sintetizan los hallazgos más importantes de tu investigación.",
            keyPoints: [
                {
                    title: "Respuesta a los Objetivos",
                    details: [
                        "La conclusión principal debe ser una respuesta directa a cada uno de los objetivos académicos planteados en la introducción.",
                        "No es un resumen del trabajo, es una síntesis de los logros.",
                        "Pregúntate: ¿Cómo ha contribuido cada apartado del TFM a alcanzar los objetivos?",
                    ],
                },
                {
                    title: "Coherencia y Claridad",
                    details: [
                        "Las conclusiones deben ser claras, concisas y estar conectadas lógicamente con la introducción.",
                        "No incluyas datos nuevos ni valores numéricos que no hayan aparecido antes.",
                        "Redáctalas al final, asegurando que existe una armonía entre lo que prometiste en la introducción y lo que has conseguido.",
                    ],
                },
            ],
            aiPrompt: `Actúa como un miembro de un tribunal de TFM. Indica 3 errores comunes que los estudiantes cometen al redactar las conclusiones y cómo evitarlos. Devuelve el resultado en un objeto JSON con una clave "tips" que contenga un array de strings.`
        },
    },
    {
        id: 10,
        title: "Limitaciones y Prospectiva",
        subtitle: "Valoración crítica y futuras líneas de investigación.",
        icon: ScaleIcon,
        content: {
            introduction: "Ningún trabajo es perfecto. Reconocer las limitaciones de tu proyecto demuestra madurez académica y honestidad intelectual. Además, proponer futuras líneas de trabajo abre la puerta a nuevas investigaciones.",
            keyPoints: [
                {
                    title: "Limitaciones",
                    details: [
                        "Realiza una valoración crítica de tu propio trabajo.",
                        "Expón los problemas o carencias que has encontrado durante el desarrollo (ej. falta de acceso a datos, presupuesto limitado, horizonte temporal corto).",
                        "Explica cómo estas limitaciones han podido afectar a los resultados.",
                    ],
                },
                {
                    title: "Prospectiva (Futuros Planteamientos)",
                    details: [
                        "Plantea futuras líneas de investigación o desarrollo que podrían surgir a partir de tu TFE.",
                        "¿Qué siguientes pasos se podrían dar? ¿Cómo se podría ampliar o mejorar tu proyecto en el futuro?",
                    ],
                },
            ],
            aiPrompt: `Actúa como un investigador experimentado. Sugiere 3 ejemplos de 'prospectiva' o futuras líneas de investigación que podrían derivarse de un TFM centrado en una campaña de Social Media. Devuelve el resultado en un objeto JSON con una clave "tips" que contenga un array de strings.`
        },
    },
    {
        id: 11,
        title: "Referencias y Anexos",
        subtitle: "Soporte documental de tu trabajo.",
        icon: ArchiveIcon,
        content: {
            introduction: "La sección de referencias bibliográficas legitima tu investigación, mientras que los anexos proveen información complementaria sin interrumpir el flujo de lectura del cuerpo principal del trabajo.",
            keyPoints: [
                {
                    title: "Referencias Bibliográficas (¡La prueba de tu investigación!)",
                    details: [
                        "Esta lista es el mapa del tesoro de tu investigación. Cada fuente que mencionaste en tu texto con una cita (Apellido, Año) debe aparecer aquí con todos sus datos.",
                        "<strong>Coherencia Total:</strong> Si algo está en el texto, debe estar en la lista. Si algo está en la lista, debe haber sido citado en el texto. ¡Sin excepciones!",
                        "<strong>Orden Alfabético:</strong> Las referencias se ordenan alfabéticamente por el primer apellido del autor. Como una agenda de contactos.",
                        "<strong>Formato APA Estricto:</strong> Cada tipo de fuente (libro, artículo, web) tiene su propio formato. Sé meticuloso. <br> - <strong>Libro:</strong> Apellido, A. (Año). <em>Título del libro en cursiva</em>. Editorial. <br> - <strong>Artículo de revista:</strong> Apellido, A. (Año). Título del artículo. <em>Nombre de la Revista en Cursiva, Volumen</em>(Número), páginas. <br> - <strong>Página Web:</strong> Apellido, A. o Nombre de la Organización. (Año, día de mes). <em>Título de la página o artículo</em>. Nombre del sitio web. URL",
                        "<strong>Usa un Gestor Bibliográfico:</strong> Herramientas como Mendeley, Zotero o Endnote son tus mejores amigos. Guardan tus fuentes y generan las citas y la lista de referencias automáticamente en formato APA. ¡Te ahorrarán horas y evitarán errores!",
                    ],
                },
                {
                    title: "Anexos",
                    details: [
                        "Son opcionales y no computan en la extensión de páginas.",
                        "Incluye aquí material que complementa pero no es esencial para entender el trabajo (cuestionarios completos, transcripciones de entrevistas, grandes tablas de datos).",
                        "Cada anexo debe estar numerado (Anexo A, Anexo B...) y empezar en una página nueva.",
                    ],
                },
            ],
            aiPrompt: `Actúa como un bibliotecario experto en normativa APA. Proporciona 3 consejos prácticos para gestionar las referencias bibliográficas de forma eficiente y sin errores durante la elaboración del TFM. Devuelve el resultado en un objeto JSON con una clave "tips" que contenga un array de strings.`
        },
    },
     {
        id: 12,
        title: "Entregas y Correcciones",
        subtitle: "El proceso iterativo con tu director.",
        icon: DocumentDuplicateIcon,
        content: {
            introduction: "El TFM no se hace de una sentada. Es un proceso de escritura, revisión y mejora continua en colaboración con tu director. Aprovecha cada entrega para recibir feedback valioso y pulir tu trabajo.",
            keyPoints: [
                {
                    title: "Primera Entrega",
                    details: [
                        "Contiene los <strong>primeros avances</strong>: Título provisional, resumen, estructura e introducción.",
                        "Sirve para que el director conozca tu estilo, nivel de conocimiento y enfoque.",
                    ],
                },
                {
                    title: "Segunda Entrega",
                    details: [
                        "Debe mostrar un <strong>avance cuantitativo y cualitativo</strong> significativo.",
                        "Normalmente incluye el análisis de la situación completo y la fijación de objetivos.",
                    ],
                },
                {
                    title: "Tercera Entrega y Predepósito",
                    details: [
                        "Debe contener el <strong>trabajo finalizado</strong> con todos los capítulos desarrollados.",
                        "A partir de aquí, los ajustes deberían ser menores y de carácter formal.",
                        "El <strong>predepósito</strong> es la versión final que entregas para la evaluación, no se admiten más cambios.",
                    ],
                },
            ],
            aiPrompt: `Actúa como un director de TFM experimentado. Ofrece 3 consejos sobre cómo un estudiante puede aprovechar al máximo el feedback de su director en cada entrega. Devuelve el resultado en un objeto JSON con una clave "tips" que contenga un array de strings.`
        },
    },
    {
        id: 13,
        title: "Copia de Seguridad",
        subtitle: "Protege tu trabajo de imprevistos.",
        icon: ShieldCheckIcon,
        content: {
            introduction: "Un percance técnico de última hora puede arruinar meses de esfuerzo. Establecer una rutina de copias de seguridad es una medida de seguridad indispensable y no negociable.",
            keyPoints: [
                {
                    title: "La Importancia de Prevenir",
                    details: [
                        "Se han dado casos de pérdida de trabajo por borrado de disco, virus, robo del ordenador, etc.",
                        "La pérdida del documento puede suponer la pérdida de la convocatoria.",
                    ],
                },
                {
                    title: "Estrategias de Backup",
                    details: [
                        "<strong>Regla del 3-2-1:</strong> Ten al menos <strong>3 copias</strong> de tu trabajo, en <strong>2 tipos de medios diferentes</strong>, con <strong>1 copia fuera de tu casa</strong>.",
                        "<strong>Servicios en la nube:</strong> Usa Google Drive, Dropbox, OneDrive. Se sincronizan automáticamente.",
                        "<strong>Dispositivos físicos:</strong> Un disco duro externo o un pendrive son buenas opciones secundarias.",
                        "<strong>Email:</strong> Envía una copia a ti mismo periódicamente. Es una solución rápida y eficaz.",
                    ],
                },
            ],
            aiPrompt: `Actúa como un experto en seguridad informática. Describe 3 estrategias sencillas y efectivas para que un estudiante nunca pierda su TFM por un fallo técnico. Devuelve el resultado en un objeto JSON con una clave "tips" que contenga un array de strings.`
        },
    },
];
