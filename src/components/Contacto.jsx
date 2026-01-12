export default function Contacto() {
  return (
    <section id="correo" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">¿Hablamos?</h2>
        <p className="text-slate-400 mb-10 text-lg">
          Actualmente estoy buscando nuevas oportunidades. Mi bandeja de entrada siempre está abierta.
        </p>
      <p className="text-slate-400 mb-10 text-lg">
          Puedes escribirme a mi correo: josee375@outlook.com o dar clic en el botón debajo de este texto.
        </p>
        
        <a 
          href="mailto:josee375@outlook.com" 
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-bold text-xl transition-transform hover:scale-105 mb-12"
        >
          Enviar Correo
        </a>

        <div className="flex justify-center gap-8">
          <a href="https://www.linkedin.com/in/joseeduardo1521/" target="_blank" className="text-slate-400 hover:text-blue-400 text-3xl transition-colors">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/joseeduardo1521/" target="_blank" className="text-slate-400 hover:text-white text-3xl transition-colors">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/eloropizza/" target="_blank" className="text-slate-400 hover:text-pink-500 text-3xl transition-colors">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
}