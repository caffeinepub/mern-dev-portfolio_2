import {
  BrainCircuit,
  Layers,
  LayoutTemplate,
  Server,
  ShieldCheck,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface Milestone {
  icon: React.ElementType;
  title: string;
  period: string;
  description: string;
  status: "completed" | "in-progress";
}

const MILESTONES: Milestone[] = [
  {
    icon: Layers,
    title: "Full Stack Development (MERN)",
    period: "2022 – 2023",
    description:
      "Mastered the complete MERN stack — from crafting responsive React UIs to building scalable Express APIs and modeling data with MongoDB.",
    status: "completed",
  },
  {
    icon: Server,
    title: "Backend API Development",
    period: "2023",
    description:
      "Built production-ready RESTful APIs with Node.js and Express.js, focusing on clean code architecture, error handling, and performance optimization.",
    status: "completed",
  },
  {
    icon: ShieldCheck,
    title: "Authentication Systems",
    period: "2023",
    description:
      "Implemented JWT-based auth, 2FA with email OTP, role-based access control, and secure session management patterns across multiple projects.",
    status: "completed",
  },
  {
    icon: LayoutTemplate,
    title: "System Design Fundamentals",
    period: "2024",
    description:
      "Studying scalable architecture patterns — load balancing, caching strategies, database sharding, microservices, and high availability design.",
    status: "in-progress",
  },
  {
    icon: BrainCircuit,
    title: "Data Structures & Algorithms",
    period: "2024 – Present",
    description:
      "Practicing problem-solving patterns for technical interviews — trees, graphs, dynamic programming, and competitive programming challenges.",
    status: "in-progress",
  },
];

export default function JourneySection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="journey"
      data-ocid="journey.section"
      className="py-24 sm:py-32 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="section-fade">
          {/* Header */}
          <div className="mb-16 text-center">
            <p className="text-sm font-mono text-primary mb-2 uppercase tracking-widest">
              {"// my.path"}
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
              Learning Journey
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Milestones that shaped my engineering mindset and technical depth.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

            <div className="space-y-8">
              {MILESTONES.map((milestone, i) => (
                <TimelineItem
                  key={milestone.title}
                  milestone={milestone}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  milestone,
  index,
}: {
  milestone: Milestone;
  index: number;
}) {
  const ref = useScrollReveal();
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`section-fade relative flex items-start gap-4 md:gap-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content */}
      <div
        className={`flex-1 ml-12 md:ml-0 ${
          isLeft ? "md:pr-10 md:text-right" : "md:pl-10"
        }`}
      >
        <div
          className={`group p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 ${
            isLeft ? "md:ml-auto" : ""
          }`}
        >
          <div
            className={`flex items-center gap-2 mb-2 ${
              isLeft ? "md:justify-end" : ""
            }`}
          >
            <span
              className={`text-xs font-mono px-2 py-0.5 rounded-full border ${
                milestone.status === "completed"
                  ? "bg-primary/10 border-primary/25 text-primary"
                  : "bg-orange-400/10 border-orange-400/25 text-orange-500 dark:text-orange-400"
              }`}
            >
              {milestone.status === "completed"
                ? "✓ Completed"
                : "⟳ In Progress"}
            </span>
            <span className="text-xs font-mono text-muted-foreground">
              {milestone.period}
            </span>
          </div>
          <h3 className="font-display font-bold text-base sm:text-lg text-foreground mb-1.5">
            {milestone.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {milestone.description}
          </p>
        </div>
      </div>

      {/* Icon node on timeline */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-glow z-10">
        <milestone.icon className="w-3.5 h-3.5 text-primary" />
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block flex-1" />
    </div>
  );
}
