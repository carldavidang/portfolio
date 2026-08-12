import Header from './components/Header.tsx'
import About from './sections/About.tsx'
import Hero from './sections/Hero.tsx'
import Skills from './sections/Skills.tsx'
import Projects from './sections/Projects.tsx'
import Contact from './sections/Contact.tsx'
import Footer from './components/Footer.tsx'
import './App.css'

function App() {
  return (
    <div className='bg-background'>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
