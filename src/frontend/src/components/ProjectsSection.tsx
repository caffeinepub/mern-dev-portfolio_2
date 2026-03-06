import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

const PROJECTS: Project[] = [
  {
    title: "Movie Ticket Booking Platform",
    description:
      "Full-stack cinema booking system with interactive seat selection, showtime management, booking history, and secure JWT-based authentication for seamless user experience.",
    image: "/assets/generated/project-movie-booking.dim_800x450.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "#",
    demo: "#",
  },
  {
    title: "Job Portal Web Application",
    description:
      "Feature-rich job board with dual dashboards for job seekers and employers, real-time application tracking, filtering by role/location, and profile management.",
    image: "/assets/generated/project-job-portal.dim_800x450.jpg",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
    github: "#",
    demo: "#",
  },
  {
    title: "2-Factor Authentication System",
    description:
      "Robust security module featuring OTP-based verification via email, session management, rate limiting, and secure token handling using industry-standard practices.",
    image: "/assets/generated/project-2fa-auth.dim_800x450.jpg",
    tags: ["Node.js", "Express", "Nodemailer", "JWT", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Food Delivery Platform",
    description:
      "End-to-end food ordering application with restaurant listings, cart management, discount offers, Stripe payment integration, and a dedicated admin panel.",
    image: "/assets/generated/project-food-delivery.dim_800x450.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Admin Panel"],
    github: "#",
    demo: "#",
  },
];

export default function ProjectsSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="projects"
      data-ocid="projects.section"
      className="py-24 sm:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="section-fade">
          {/* Header */}
          <div className="mb-16 text-center">
            <p className="text-sm font-mono text-primary mb-2 uppercase tracking-widest">
              {"// my.work"}
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
              Featured Projects
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              A selection of full-stack applications I've built end-to-end.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {PROJECTS.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className="section-fade group relative rounded-xl overflow-hidden bg-card border border-border card-hover"
      data-ocid={`projects.item.${index}`}
    >
      {/* Project image */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover action links */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <a
            href={project.github}
            className="w-10 h-10 rounded-lg bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
            aria-label={`${project.title} GitHub`}
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={project.demo}
            className="w-10 h-10 rounded-lg bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
            aria-label={`${project.title} live demo`}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <h3 className="font-display font-bold text-base sm:text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="skill-tag text-xs font-mono px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="flex-1 gap-2 text-xs h-8 border-border hover:border-primary/50 hover:bg-accent/30"
            asChild
          >
            <a
              href={project.github}
              aria-label={`${project.title} source code`}
            >
              <Github className="w-3.5 h-3.5" />
              Source
            </a>
          </Button>
          <Button
            size="sm"
            className="flex-1 gap-2 text-xs h-8 bg-primary/90 hover:bg-primary text-primary-foreground"
            asChild
          >
            <a href={project.demo} aria-label={`${project.title} live demo`}>
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
