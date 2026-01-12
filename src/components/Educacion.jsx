export default function Educacion() {
  const estudios = [
    {
      titulo: "Ingeniería en Desarrollo de Software",
      institucion: "CETI Colomos",
      periodo: "2019 - 2023",
      descripcion: "Formación especializada en ingeniería de software, especialidad en ciberseguridad, base de datos en la nube y gestión de proyectos."
    },
    {
      titulo: "Técnologo en Desarrollo de Software",
      institucion: "CETI Rio Santiago",
      periodo: "2015 - 2019",
      descripcion: "Formación especializada en el desarrollo de software, enfocada en dispositivos móviles, bases de datos y diseño de interfaces de usuario."
    }
    
    // Puedes agregar certificaciones aquí
  ];

  return (
    <section id="educacion" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
          <span className="h-1 w-10 bg-blue-500"></span> Educación
        </h2>
        <div className="space-y-8">
          {estudios.map((item, i) => (
            <div key={i} className="relative pl-8 border-l border-slate-700">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[8.5px] top-1 shadow-[0_0_10px_#3b82f6]"></div>
              <span className="text-blue-400 font-mono text-sm">{item.periodo}</span>
              <h3 className="text-xl font-bold text-white">{item.titulo}</h3>
              <p className="text-slate-300">{item.institucion}</p>
              <p className="text-slate-500 mt-2 text-sm">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}