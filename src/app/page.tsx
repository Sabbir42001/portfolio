import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
// import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Education />
      {/* <Experience /> */}
      <Skills />
      <Projects />
      <Blogs />
      <Contact/>
      <Footer />
    </div>
  );
}
