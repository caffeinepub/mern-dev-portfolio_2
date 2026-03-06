import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import GitHubSection from "./components/GitHubSection";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import { useActor } from "./hooks/useActor";

type Theme = "dark" | "light";

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("portfolio-theme");
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const { actor } = useActor();

  useEffect(() => {
    if (actor) {
      actor.incrementVisitorCount().catch(() => {
        // Silently ignore errors
      });
    }
  }, [actor]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <GitHubSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
