import Header from './components/Header';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Header />
      <Hero />
      <ProjectShowcase />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
