import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Offices from "./components/Offices";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

export const revalidate = 3600; // 1 soatda bir yangilanadi (ISR)

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="grid-lines" />
      <div className="pointer-events-none absolute -left-32 top-44 h-72 w-72 rounded-full bg-[var(--sand)] blur-3xl animate-float" />
      <div className="pointer-events-none absolute -right-24 top-16 h-64 w-64 rounded-full border border-black/10 animate-slow-spin" />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Showcase />
        <Projects />
        <Services />
        <Process />
        <Offices />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
