import About from "../components/about/About";
import Card from "../components/card/Card";
import Experience from "../components/experience/Experience";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import HeroTop from "../components/hero_top/HeroTop";
import Navbar from "../components/navbar/Navbar";
import Projects from "../components/projects/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroTop />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}
