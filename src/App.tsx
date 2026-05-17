import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { LoadingScreen } from './components/layout/LoadingScreen'
import { Navbar } from './components/layout/Navbar'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { Footer } from './components/layout/Footer'
import { ParticleBackground } from './components/ui/ParticleBackground'
import { Spotlight } from './components/ui/Spotlight'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Certifications } from './components/sections/Certifications'
import { Hackathons } from './components/sections/Hackathons'
import { Contact } from './components/sections/Contact'
import { useTheme } from './hooks/useTheme'

function App() {
  const [loading, setLoading] = useState(true)
  const { theme, toggle } = useTheme()

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#151c2c',
            color: '#f1f5f9',
            border: '1px solid rgba(34, 211, 238, 0.2)',
          },
        }}
      />
      <ScrollProgress />
      <ParticleBackground />
      <Spotlight />
      <div className="noise grid-bg relative min-h-screen">
        <Navbar theme={theme} onToggleTheme={toggle} />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Hackathons />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
