import Hero from "@/components/Hero";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
