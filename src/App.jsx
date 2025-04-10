import "./App.css";

import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Slider from "./components/Slider";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="content-container">
      <Header />
      <Presentation />
      <Services />
      <Experience />
      <Projects />
      <Slider />
      <Tools />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
