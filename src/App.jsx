import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="overflow-x-hidden font-gilroy-regular bg-[#f6f7fb] text-[#111827]">
      <Navbar />
      <Hero />
      <Profile />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
