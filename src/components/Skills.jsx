export default function Skills() {
  const technicalSkills = [
    { categoria: "Lenguajes", items: ["C#","Java", "Python (Flask)", "Lua", "SQL", "HTML", "CSS", "JavaScript"] },
    { categoria: "Bases de Datos", items: ["SQL Server", "IBM Informix"] },
    { categoria: "QA & Testing", items: ["Scripts de Pruebas Automatizadas", "Pruebas de Rendimiento", "Pruebas de Estrés", "QC"] },
    { categoria: "Software & Herramientas", items: ["Jira", "Git", "ERP", "CRM", "Contpaqi", "Azure AZ-900", "Power BI", "Looker Studio"] },
    { categoria: "Hardware & NPI", items: ["Diagnóstico a nivel PCB", "L10/L12/Burn-down Testing", "NVIDIA AI Units", "NPI"] }
  ];
  const certificaciones = [
    {
      categoria: "Especialista en IA y Data Infrastructure (NVIDIA & MS)",
      items: [
        { titulo: "Introduction to Networking", emisor: "NVIDIA", fecha: "Oct 2025", id: "HC2FKAVQ25UB", icono: "🌐" },
        { titulo: "AI Infrastructure Fundamentals", emisor: "NVIDIA", fecha: "Sep 2025", id: "VDN7GNIABQVO", icono: "🤖" },
        { titulo: "Azure Fundamentals AZ-900", emisor: "Microsoft", fecha: "Nov 2021", id: "992313286", icono: "☁️" }
      ]
    },
    {
      categoria: "Ciberseguridad y Networking (Cisco & Fortinet)",
      items: [
        { titulo: "Introduction to Cybersecurity", emisor: "Cisco", fecha: "Ene 2025", id: "Verified", icono: "🛡️" },
        { titulo: "Ethical Hacker", emisor: "Cisco", fecha: "Sep 2024", id: "Verified", icono: "🕵️" },
        { titulo: "Fortinet Certified Fundamentals", emisor: "Fortinet", fecha: "Ago 2024", id: "4022410645JO", icono: "🔒" },
        { titulo: "Networking Devices", emisor: "Cisco", fecha: "Jun 2024", id: "Verified", icono: "🔌" }
      ]
    },
    {
      categoria: "Desarrollo y Programación (Cisco & Universidades)",
      items: [
        { titulo: "JavaScript Essentials 1", emisor: "Cisco", fecha: "Ago 2024", id: "Verified", icono: "📜" },
        { titulo: "Python Essentials 1", emisor: "Cisco", fecha: "May 2024", id: "Verified", icono: "🐍" },
        { titulo: "Introduction to IoT", emisor: "Cisco", fecha: "May 2024", id: "Verified", icono: "🔌" }
      ]
    },
    {
      categoria: "Gestión de Operaciones y Calidad",
      items: [
        { titulo: "Inventory Management", emisor: "UC Irvine", fecha: "Oct 2025", id: "U7KWVCIYZ7E2", icono: "📦" },
        { titulo: "Lean Six Sigma White Belt", emisor: "International Lean Six Sigma", fecha: "Dic 2020", id: "LSSWB-102", icono: "📈" },
        { titulo: "Fundamentos de Power BI", emisor: "U. Tecmilenio", fecha: "Sep 2025", id: "Verified", icono: "📊" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Certificaciones</h2>

        {certificaciones.map((cat, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-xl font-semibold text-blue-400 mb-6 flex items-center gap-3 italic">
               {cat.categoria}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.items.map((cert, i) => (
                <div key={i} className="bg-slate-800/40 p-5 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all flex items-start gap-4">
                  <div className="text-3xl p-3 bg-slate-900 rounded-lg">{cert.icono}</div>
                  <div>
                    <h4 className="text-white font-bold text-sm leading-tight">{cert.titulo}</h4>
                    <p className="text-blue-400 text-xs mt-1">{cert.emisor}</p>
                    <p className="text-slate-500 text-[10px] uppercase tracking-tighter mt-1">{cert.fecha}</p>
                    <p className="text-slate-600 text-[9px] font-mono mt-2 truncate max-w-[150px]">ID: {cert.id}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-4xl font-bold text-white mb-16 text-center">Skills</h2>

        {/* --- NUEVA SECCIÓN: HABILIDADES TÉCNICAS (KEYWORDS CV) --- */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="h-1 w-8 bg-blue-500"></span> Habilidades Técnicas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalSkills.map((grupo, idx) => (
              <div key={idx} className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50">
                <h4 className="text-blue-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                  {grupo.categoria}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {grupo.items.map((skill, i) => (
                    <span 
                      key={i} 
                      className="bg-slate-900 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-700 hover:border-blue-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}