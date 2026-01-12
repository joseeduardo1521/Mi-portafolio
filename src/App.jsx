import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Educacion from './components/Educacion'
import Skills from './components/Skills'
import Trabajos from './components/Trabajos'
import Contacto from './components/Contacto'

function App() {
  return (
    <div className="flex bg-slate-900 min-h-screen text-white">
      <Sidebar />
      <main className="flex-1 ml-20 md:ml-64 transition-all duration-300">
        <Hero />
        <About />
        <Skills />
        <Educacion />
        <Trabajos />
        <Contacto />
      </main>
    </div>
  )
}

export default App