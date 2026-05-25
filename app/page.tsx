import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
