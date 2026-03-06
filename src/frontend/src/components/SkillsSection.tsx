import { Database, Monitor, Server, Shield, Wrench } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  color: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    icon: Monitor,
    title: "Frontend",
    color: "text-blue-500 dark:text-blue-400",
    skills: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    color: "text-primary",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    icon: Database,
    title: "Database",
    color: "text-green-500 dark:text-green-400",
    skills: ["MongoDB"],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "text-orange-500 dark:text-orange-400",
    skills: ["Git", "GitHub", "Docker", "Postman", "VS Code"],
  },
  {
    icon: Shield,
    title: "Other",
    color: "text-purple-500 dark:text-purple-400",
    skills: ["JWT Authentication", "API Development", "Deployment"],
  },
];

export default function SkillsSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="skills"
      data-ocid="skills.section"
      className="py-24 sm:py-32 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="section-fade">
          {/* Header */}
          <div className="mb-16 text-center">
            <p className="text-sm font-mono text-primary mb-2 uppercase tracking-widest">
              {"// tech.stack"}
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
              Technical Skills
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {SKILL_CATEGORIES.map(({ icon: Icon, title, color, skills }) => (
              <SkillCard
                key={title}
                Icon={Icon}
                title={title}
                color={color}
                skills={skills}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  Icon,
  title,
  color,
  skills,
}: {
  Icon: React.ElementType;
  title: string;
  color: string;
  skills: string[];
}) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className="section-fade group p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-muted/70 border border-border flex items-center justify-center group-hover:border-primary/30 transition-colors">
          <Icon className={`w-5 h-5 ${color}`} />
        </div>
        <h3 className="font-display font-bold text-base text-foreground">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="skill-tag text-xs font-mono font-medium px-2.5 py-1 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
