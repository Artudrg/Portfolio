import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contact from './components/Contact'
import EntryModal from './components/EntryModal'
import DataHero from './components/DataHero'
import DataTech from './components/DataTech'
import DataProjects from './components/DataProjects'

function App() {
  const [selectedPath, setSelectedPath] = useState(null)

  const handleSelectPath = (path) => {
    setSelectedPath(path)
  }

  return <>
    <div className="fixed top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

    {!selectedPath && <EntryModal onSelectPath={handleSelectPath} />}

    <main className='flex flex-col items-center px-4 md:px-8'>
      <Navbar onResetPath={() => setSelectedPath(null)} />
      {selectedPath === 'web' && (
        <>
          <Hero />
          <Tech />
          <Projects />
          <Contact />
        </>
      )}
      {selectedPath === 'data' && (
        <>
          <DataHero />
          <DataTech />
          <DataProjects />
          <Contact />
        </>
      )}
    </main>
  </>
}

export default App