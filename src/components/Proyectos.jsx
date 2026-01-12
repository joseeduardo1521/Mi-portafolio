export default function Proyectos() {
  // Aquí es donde en el futuro podrías traer tus datos de GitHub
  const misProyectos = [
    {
      titulo: "Mi Antiguo Portafolio",
      descripcion: "La base de este proyecto, migrada de HTML/CSS puro a React.",
      tech: ["HTML", "CSS", "JS"],
      link: "https://github.com/joseeduardo1521/Portafolio"
    },
    {
      titulo: "Proyecto 2",
      descripcion: "Descripción de uno de tus proyectos anteriores.",
      tech: ["React", "Tailwind"],
      link: "#"
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {misProyectos.map((proy, index) => (
            <div key={index} className="bg-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all group">
              <h3 className="text-xl font-bold text-blue-400 mb-2">{proy.titulo}</h3>
              <p className="text-slate-400 mb-4">{proy.descripcion}</p>
              <div className="flex gap-2 mb-4">
                {proy.tech.map(t => (
                  <span key={t} className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <a href={proy.link} target="_blank" className="text-white font-semibold group-hover:underline">
                Ver más →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}