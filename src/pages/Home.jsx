import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SocialLinks from "../components/SocialLinks";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialLinks />
      <About />
      <Projects />
      <Experience />
    </>
  );
}

export default Home;
