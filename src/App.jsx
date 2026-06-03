import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <main className='flex flex-col items-center px-4 md:px-8'>
        <Navbar />

        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App