import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: "🏠", text: "Inicio", link: "#inicio" },
    { icon: "👤", text: "Experiencia Laboral", link: "#about" },
    { icon: "💻", text: "Certificaciones", link: "#skills" },
    { icon: "🎓", text: "Educación", link: "#educacion" },
    { icon: "💼", text: "Portafolio", link: "#portafolio" },
    { icon: "✉️", text: "Contacto", link: "#correo" },
  ];

  return (
    <nav className={`fixed left-0 top-0 h-screen bg-slate-800 border-r border-slate-700 transition-all duration-300 z-50 ${isOpen ? 'w-64' : 'w-20'}`}>
      {/* Botón para abrir/cerrar (Tu menu-btn anterior) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-10 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-blue-400 transition-colors"
      >
        {isOpen ? '◀' : '▶'}
      </button>

      {/* Header del Sidebar */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-white font-bold">
            EO
          </div>
          {isOpen && (
            <div className="overflow-hidden">
              <p className="text-white font-bold truncate">Eduardo Oropeza</p>
              <p className="text-slate-400 text-xs truncate">Software Engineer</p>
            </div>
          )}
        </div>
      </div>

      {/* Menú de Navegación */}
      <ul className="mt-6 px-3 space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a 
              href={item.link} 
              className="flex items-center gap-4 p-3 rounded-xl text-slate-300 hover:bg-slate-700 hover:text-white transition-all group"
            >
              <span className="text-xl">{item.icon}</span>
              {isOpen && <span className="font-medium">{item.text}</span>}
              {!isOpen && (
                <span className="absolute left-20 bg-slate-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.text}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}