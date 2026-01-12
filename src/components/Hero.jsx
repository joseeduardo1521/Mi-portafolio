export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Imagen de perfil con efecto profesional */}
      <div className="mb-8 w-44 h-44 rounded-full border-4 border-blue-500 overflow-hidden shadow-2xl shadow-blue-500/20 transition-all duration-500 hover:scale-105 relative group">
        <img 
          src="/img/profil.png" 
          alt="Eduardo Oropeza" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tight">
        Eduardo Oropeza
      </h1>
      
      {/* Tu cargo actual como protagonista */}
      <h2 className="text-xl md:text-2xl text-blue-400 font-bold mb-2 uppercase tracking-[0.15em]">
        Failure Analysis Engineer
      </h2>
      <h3 className="text-lg md:text-xl text-slate-400 font-medium mb-8 italic">
        Software Engineer | Level & UX Designer
      </h3>
      
      <p className="max-w-3xl text-slate-300 text-lg md:text-xl leading-relaxed mb-6">
        Ingeniero titulado por <span className="text-blue-300 font-semibold">Excelencia Académica</span>. Actualmente me desempeño como <span className="text-white font-bold">Failure Analysis Engineer</span> en <span className="text-white">Foxconn</span>, especializándome en el diagnóstico avanzado de unidades de <span className="text-blue-400 font-bold text-lg">IA NVIDIA</span>.
        <br /><br />
        Mi perfil único fusiona el rigor técnico del análisis de fallas en hardware crítico con la creatividad del **Diseño de Niveles y QA** desarrollado en <span className="text-white font-semibold">Halo Studios</span>. Soy un apasionado de resolver problemas complejos donde el software y el hardware convergen para crear experiencias de usuario impecables.
      </p>

      {/* --- SECCIÓN DE INSIGNIAS DE XBOX AMBASSADOR --- */}
      <div className="flex justify-center gap-8 mb-12">
        <div className="flex flex-col items-center group">
          <div className="w-14 h-20 bg-slate-800 rounded-full p-2 border border-slate-700 group-hover:border-green-500 transition-all duration-300 shadow-lg">
            <img 
              src="/img/Legacy.webp" 
              alt="Xbox Ambassador Legacy" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[9px] text-slate-500 mt-2 font-black uppercase tracking-widest group-hover:text-green-400 transition-colors">
            Xbox Ambassador
          </span>
        </div>

        <div className="flex flex-col items-center group">
          <div className="w-14 h-20 bg-slate-800 rounded-full p-2 border border-slate-700 group-hover:border-purple-500 transition-all duration-300 shadow-lg">
            <img 
              src="/img/accesible.webp"
              alt="Xbox Ambassador Accessibility Ally" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[9px] text-slate-500 mt-2 font-black uppercase tracking-widest group-hover:text-purple-400 transition-colors">
            Xbox Ambassador Accessibility Ally
          </span>
        </div>
        <div className="flex flex-col items-center group">
          <div className="w-14 h-20 bg-slate-800 rounded-full p-2 border border-slate-700 group-hover:border-purple-500 transition-all duration-300 shadow-lg">
            <img 
              src="/img/sol.avif"
              alt="Sol Testing Grounds" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[9px] text-slate-500 mt-2 font-black uppercase tracking-widest group-hover:text-purple-400 transition-colors">
            Sol Testing Grounds
          </span>
        </div>
        <div className="flex flex-col items-center group">
          <div className="w-14 h-20 bg-slate-800 rounded-full p-2 border border-slate-700 group-hover:border-purple-500 transition-all duration-300 shadow-lg">
            <img 
              src="/img/Namplate.png"
              alt="Ice Unicorn 343 Industries" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[9px] text-slate-500 mt-2 font-black uppercase tracking-widest group-hover:text-purple-400 transition-colors">
            Ice Unicorn 343 Industries
          </span>
        </div>
      </div>
      
      

      <div className="flex flex-wrap justify-center gap-6">
        <a 
          href="#portafolio" 
          className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl font-black transition-all shadow-lg hover:-translate-y-1 uppercase text-sm tracking-widest"
        >
          Ver Proyectos
        </a>
        
        <a 
          href="/CV_Eduardo_Oropeza.pdf" 
          download
          className="group bg-slate-800 hover:bg-slate-700 text-white px-10 py-4 rounded-2xl font-black transition-all border border-slate-700 flex items-center gap-3 hover:-translate-y-1 uppercase text-sm tracking-widest"
        >
          <span>📥</span> Descargar CV
        </a>
      </div>
    </section>
  )
}