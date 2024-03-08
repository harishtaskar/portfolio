import HeroSection from "@/components/HeroSection";
import styles from "./page.module.css";
import Contact from "@/components/Contact";
import Credits from "@/components/Credits";
import Projects from "@/components/Projects";
import projects from "@/assets/projects.json";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div className={styles.body}>
      <main className={`${styles.main}`}>
        <HeroSection />
        <AboutMe />
        <Projects projects={projects} />
        <Contact />
      </main>
      <Credits />
    </div>
  );
}
