import Header from './components/Header';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import Skills from './components/Skills';
import TryHackMe from './components/TryHackMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Header />
      <Hero />
      <ProjectShowcase />
      <Skills />
      <TryHackMe />
      <Footer />
    </div>
  );
}

export default App;
