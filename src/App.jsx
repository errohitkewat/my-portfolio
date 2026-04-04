import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden font-gilroy-regular bg-[#f6f7fb] text-[#111827]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
