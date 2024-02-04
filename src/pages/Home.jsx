import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SocialLinks from "../components/SocialLinks";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
// import Portfolio from "../components/Portfolio";
// import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SocialLinks />
      <Experience />
      {/* <Portfolio /> */}
      <Projects />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
