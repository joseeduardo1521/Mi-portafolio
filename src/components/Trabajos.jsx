export default function Trabajos() {
  const misProyectos = [
    {
      titulo: "VetLog",
      descripcion: "App móvil para control clínico de mascotas mediante códigos QR, optimizando tiempos de búsqueda y gestión de datos.",
      tech: ["Android", "Java", "Firebase"],
      link: "https://www.amazon.com.mx/J1188-VetLog/dp/B0C3KVR8RT",
      imagen: "/img/vetlog.png",
      icono: "🐾"
    },
    {
      titulo: "Dashboard IT HelpDesk",
      descripcion: "Sistema de visualización de tickets en tiempo real para gestión de incidentes y requerimientos de nivel 1.",
      tech: ["Python", "Flask", "SQL Server", "Power BI"],
      link: "https://tuticketlimac.com/itop/web/pages/UI.php",
      imagen: "/img/itop.jpeg",
      icono: "📊"
    },
    {
      titulo: "QA & Network Performance Testing: Halo Infinite Co-op - Halo Studios",
      descripcion: "Participación en el despliegue técnico de la campaña cooperativa de 4 jugadores. Responsable de la validación de sincronización de red, pruebas de rendimiento (benchmarking) y documentación detallada de errores en un entorno cross-platform (Xbox y PC).",
      tech: ["Network Synchronization", "Performance Testing", "Cross-play QA","Technical Documentation"],
      link: "https://www.halowaypoint.com/news/halo-infinite-campaign-network-co-op-preview",
      imagen: "/img/Coop.jpg",
      icono: "🎮"
    },
     {
      titulo: "Technical Level Design: Heaven - Halo Studios",
      descripcion: "Diseño integral de un entorno multijugador competitivo. Implementé lógica de respawns dinámicos mediante Lua y configuré el balance del sandbox, optimizando materiales y texturas PBR para el motor Slipspace.",
      tech: ["Slipspace Engine", "Lua Scripting", "Level Design", "Environment Art"],
      link: "#",
      imagen: "/img/haven.jpg",
      icono: "🎮"
    },
      {
      titulo: "Technical Lighting & Sandbox: The Library Remake - Halo Studios",
      descripcion: "Recreación de la icónica misión de Halo CE en el motor de Halo Infinite. Responsable del diseño de iluminación atmosférica para capturar la esencia del nivel original y del ajuste del sandbox, equilibrando los encuentros de combate y la progresión de dificultad.",
      tech: ["Slipspace Engine", "Dynamic Lighting","Sandbox Design","AI Encounter Design"],
      link: "#",
      imagen: "/img/spark.jpg",
      icono: "🎮"
    }
  ];

  return (
    <section id="portafolio" className="py-20 px-6 bg-slate-800/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="h-1 w-12 bg-blue-500"></span> Proyectos y Experiencia Técnica
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {misProyectos.map((proy, index) => (
            <div key={index} className="bg-slate-900/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all group flex items-start p-4 gap-6">
              
              {/* Thumbnail Lateral (Estilo LinkedIn) */}
              <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-800 rounded-xl overflow-hidden shrink-0 border border-slate-700 flex items-center justify-center">
                {proy.imagen ? (
                  <img 
                    src={proy.imagen} 
                    alt={proy.titulo} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-4xl">{proy.icono}</span>
                )}
              </div>

              {/* Contenido a la derecha */}
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {proy.titulo}
                  </h3>
                  <p className="text-slate-400 text-sm mb-3 leading-snug line-clamp-3">
                    {proy.descripcion}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {proy.tech.map(t => (
                      <span key={t} className="text-[10px] font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {proy.link !== "#" && (
                    <a 
                      href={proy.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-blue-400 text-xs font-bold flex items-center gap-1 hover:text-blue-300 transition-colors"
                    >
                      Ver proyecto <span>→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}