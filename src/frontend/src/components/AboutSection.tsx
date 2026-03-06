import { BookOpen, Lightbulb, Rocket, Server } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const FOCUS_AREAS = [
  {
    icon: Lightbulb,
    title: "Problem Solving",
    desc: "Breaking complex challenges into elegant, efficient solutions.",
  },
  {
    icon: Server,
    title: "Scalable Systems",
    desc: "Designing robust backend architectures that grow with demand.",
  },
  {
    icon: Rocket,
    title: "Real-World Apps",
    desc: "Shipping production-grade applications users actually love.",
  },
  {
    icon: BookOpen,
    title: "DSA & System Design",
    desc: "Deepening expertise for technical excellence and interviews.",
  },
];

export default function AboutSection() {
  const sectionRef = useScrollReveal();
  const codeRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" data-ocid="about.section" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="section-fade">
          {/* Section header */}
          <div className="mb-16 text-center">
            <p className="text-sm font-mono text-primary mb-2 uppercase tracking-widest">
              {"// about.me"}
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
              About Me
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            {/* Left: Text content */}
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I'm a passionate{" "}
                <span className="text-foreground font-semibold">
                  full-stack developer
                </span>{" "}
                who thrives at the intersection of backend engineering and
                polished user experiences. With the MERN stack as my primary
                toolkit, I love building systems that are both powerful under
                the hood and delightful to use.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                My journey is driven by a relentless curiosity—whether it's
                architecting a scalable REST API, optimizing database queries,
                or exploring authentication patterns. I'm currently deepening my
                expertise in{" "}
                <span className="text-foreground font-semibold">
                  Data Structures & Algorithms
                </span>{" "}
                and{" "}
                <span className="text-foreground font-semibold">
                  System Design
                </span>{" "}
                to write more efficient, production-grade code.
              </p>

              {/* Focus areas grid */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {FOCUS_AREAS.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/30 hover:bg-accent/30 transition-all duration-200 group"
                  >
                    <div className="shrink-0 w-9 h-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">
                        {title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Code block visual */}
            <div ref={codeRef} className="section-fade">
              <div className="relative">
                {/* Glow behind card */}
                <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-2xl pointer-events-none" />

                <div className="relative rounded-xl overflow-hidden border border-border bg-card shadow-card">
                  {/* Code editor chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                    <div className="w-3 h-3 rounded-full bg-destructive/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <div className="w-3 h-3 rounded-full bg-green-400/70" />
                    <span className="ml-3 text-xs font-mono text-muted-foreground">
                      alex.johnson.ts
                    </span>
                  </div>

                  {/* Code content */}
                  <div className="p-5 sm:p-6 font-mono text-sm leading-7">
                    <div>
                      <span className="text-primary">const</span>
                      <span className="text-foreground"> developer </span>
                      <span className="text-muted-foreground">= </span>
                      <span className="text-primary">{"{"}</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-chart-4">name</span>
                      <span className="text-muted-foreground">: </span>
                      <span className="text-green-400 dark:text-green-400 text-[oklch(0.65_0.18_155)]">
                        "Alex Johnson"
                      </span>
                      <span className="text-muted-foreground">,</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-chart-4">role</span>
                      <span className="text-muted-foreground">: </span>
                      <span className="text-[oklch(0.65_0.18_155)]">
                        "Full Stack Developer"
                      </span>
                      <span className="text-muted-foreground">,</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-chart-4">stack</span>
                      <span className="text-muted-foreground">: </span>
                      <span className="text-muted-foreground">[</span>
                    </div>
                    {["React", "Node.js", "Express", "MongoDB"].map((tech) => (
                      <div key={tech} className="ml-8">
                        <span className="text-[oklch(0.65_0.18_155)]">
                          "{tech}"
                        </span>
                        <span className="text-muted-foreground">,</span>
                      </div>
                    ))}
                    <div className="ml-4">
                      <span className="text-muted-foreground">],</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-chart-4">learning</span>
                      <span className="text-muted-foreground">: </span>
                      <span className="text-[oklch(0.65_0.18_155)]">
                        ["DSA", "System Design"]
                      </span>
                      <span className="text-muted-foreground">,</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-chart-4">available</span>
                      <span className="text-muted-foreground">: </span>
                      <span className="text-primary">true</span>
                    </div>
                    <div>
                      <span className="text-primary">{"}"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
