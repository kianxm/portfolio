import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Timeline />
      <Experience />
    </div>
  );
}

export default App;
