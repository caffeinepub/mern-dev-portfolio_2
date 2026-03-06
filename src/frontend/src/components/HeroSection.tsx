import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "Backend Architect",
  "Problem Solver",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1));
      }, 80);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length - 1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Availability badge */}
        <div className="animate-fadeInUp mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-sm font-medium text-primary">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          Open to opportunities
        </div>

        {/* Greeting */}
        <div className="animate-fadeInUp delay-100">
          <p className="text-lg sm:text-xl text-muted-foreground font-sans mb-3">
            Hi there! I'm
          </p>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mb-4 leading-[1.05] tracking-tight">
            Alex
            <span className="gradient-text"> Johnson</span>
          </h1>
        </div>

        {/* Animated role */}
        <div className="animate-fadeInUp delay-200 flex items-center justify-center gap-2 h-12 mb-6">
          <span className="font-display font-semibold text-xl sm:text-2xl md:text-3xl text-muted-foreground">
            {displayText}
          </span>
          <span className="w-0.5 h-7 sm:h-8 bg-primary animate-blink" />
        </div>

        {/* Tagline */}
        <p className="animate-fadeInUp delay-300 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-10">
          Building{" "}
          <span className="text-foreground font-medium">
            scalable web applications
          </span>{" "}
          with the MERN stack. Passionate about clean architecture, elegant
          code, and delivering real-world impact.
        </p>

        {/* CTAs */}
        <div className="animate-fadeInUp delay-400 flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            onClick={() => scrollTo("projects")}
            className="h-12 px-8 font-semibold text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow hover:shadow-glow-lg transition-all duration-300"
            data-ocid="hero.primary_button"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("contact")}
            className="h-12 px-8 font-semibold text-base border-primary/40 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            data-ocid="hero.secondary_button"
          >
            Contact Me
          </Button>
        </div>

        {/* Social links */}
        <div className="animate-fadeInUp delay-500 flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg border border-border hover:border-primary/50 bg-card hover:bg-accent/50 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
            aria-label="GitHub profile"
            data-ocid="hero.github.link"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg border border-border hover:border-primary/50 bg-card hover:bg-accent/50 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
            aria-label="LinkedIn profile"
            data-ocid="hero.linkedin.link"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:alex.johnson@example.com"
            className="w-10 h-10 rounded-lg border border-border hover:border-primary/50 bg-card hover:bg-accent/50 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Send email"
            data-ocid="hero.email.link"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors animate-float"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-medium tracking-widest uppercase opacity-60">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4" />
      </button>
    </section>
  );
}
