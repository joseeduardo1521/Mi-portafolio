export default function About() {
  const experiencias = [
    {
      puesto: "Ingeniero de Análisis de Fallas (Proyectos Nvidia / Amazon) ",
      empresa: "Foxconn",
      periodo: "Oct 2024 - Presente",
      puntos: [
        "Asistí en la identificación, documentación y seguimiento de fallas durante pruebas funcionales de unidades NVIDIA AI (HGX H100, DGX B200, GB200).",
        "Realicé diagnóstico a nivel PCB en unidades PG520 y 548 (GB200) para clasificación de material (Scrap) y participé en procesos de NPI (New Product Introduction).",
        "Brindé apoyo en actividades del Líder de Área de FA (Failure Analysis), incluyendo coordinación de operadores, redacción de requerimientos y análisis de bitácoras de fallas para apoyar a los Ingenieros de Análisis de Fallas.",
        "Ejecuté pruebas iniciales clave (L10, L12 y burn-down), asignando velocidades a los switches de rack (Proyecto Amazon).",
        "Realicé la validación y documentación de logs para la liberación de racks."
      ]
    },
    {
      puesto: "IT HelpDesk",
      empresa: "Asesoría Limac",
      periodo: "Ago 2023 - Oct 2024",
      puntos: [
        "Brindé soporte al cliente mediante la creación y asignación de tickets de soporte y requerimientos para sistemas contables CONTPAQi.",
        "Proporcioné soporte remoto a clientes para sistemas contables como facturación electrónica, nóminas, contabilidad y sistemas comerciales.",
        "Utilicé sistemas ERP y CRM.",
        "Colaboré en la migración del sistema de registro de tickets de un servidor comercial a un servidor interno.",
        "Participé en pruebas manuales y en la documentación de calidad durante la migración del sistema.",
        "Diseñé, desarrollé e implementé un sistema de visualización para mostrar un resumen de tickets, utilizando Python con el framework Flask.",
        "Gestioné y di seguimiento a actividades en Jira y utilicé Git para control de versiones.",
        "Utilicé bases de datos SQL y SQL Server.",
        "Administré Power BI y Looker Studio para la generación de reportes.",
        "Utilicé la suite Office 365."
      ]
    },
    {
      puesto: "Desarrollo de Sistemas",
      empresa: "Bansi S.A.",
      periodo: "Dic 2022 - Apr 2023",
      puntos: [
        "Realicé actividades de full-stack en el área de desarrollo de sistemas, incluyendo el desarrollo e implementación de nuevas secciones para programas internos, así como la integración de funcionalidades de seguridad para sistemas internos y comerciales, incluyendo banca móvil, utilizando C#.",
        "Apoyo en la migración de base de datos de IBM Informix a SQL Server",
        "Uso de Office 365 para la elaboración de reportes con fines técnicos y de pruebas de calidad."
      ]
    },
    {
      puesto: "QA Test Engineer",
      empresa: "Halo Studios (343 Industries)",
      periodo: "Ago 2021 - Dic 2022",
      puntos: [
        "Realicé pruebas de rendimiento en diversas configuraciones de hardware para garantizar una experiencia de juego fluida.",
        "Ejecuté scripts automatizados y pruebas manuales para validar funcionalidades clave.",
        "Llevé a cabo pruebas de estrés en servidores para evaluar la capacidad y el rendimiento bajo cargas extremas.",
        "Realicé pruebas de Aseguramiento de Calidad (QA) en mapas multijugador y campañas cooperativas para identificar errores y mejorar la experiencia del usuario.",
        "Me enfoqué en pruebas específicas por plataforma para la adaptación de Halo: The Master Chief Collection para PC, incluyendo optimización de rendimiento, compatibilidad de controladores e integración del sistema."
      ]
    },
    {
      puesto: "Transcriptor",
      empresa: "Appen",
      periodo: "Agos 2022 - Oct 2022",
      puntos: [
        "Participé en la traducción de documentos y páginas web, adaptándolos a los regionalismos y modismos propios de México y neutros para el resto de Latinoamérica."
      ]  
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Experiencia Profesional</h2>
        <div className="space-y-8">
          {experiencias.map((exp, i) => (
            <div key={i} className="bg-slate-900 p-6 rounded-2xl border-l-4 border-blue-500 hover:bg-slate-800/50 transition-all">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-white">{exp.puesto}</h3>
                <span className="text-blue-400 font-mono text-sm">{exp.periodo}</span>
              </div>
              <p className="text-blue-200 font-medium mb-4">{exp.empresa}</p>
              <ul className="list-disc list-inside text-slate-400 space-y-1 text-sm">
                {exp.puntos.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}