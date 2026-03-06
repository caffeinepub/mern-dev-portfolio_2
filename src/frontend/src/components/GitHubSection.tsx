import { BookOpen, GitCommitHorizontal, Info, Star } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

// Generate a seeded heatmap to look realistic
function generateHeatmap(): number[][] {
  const rows = 7;
  const cols = 52;
  const grid: number[][] = [];

  for (let r = 0; r < rows; r++) {
    const row: number[] = [];
    for (let c = 0; c < cols; c++) {
      // Create realistic-looking contribution pattern
      const base = Math.random();
      const weekWeight = c > 20 && c < 48 ? 1.4 : 0.7; // more activity in middle months
      const dayWeight = r > 0 && r < 6 ? 1.2 : 0.6; // less on weekends
      const val = base * weekWeight * dayWeight;

      if (val < 0.35) row.push(0);
      else if (val < 0.55) row.push(1);
      else if (val < 0.72) row.push(2);
      else if (val < 0.88) row.push(3);
      else row.push(4);
    }
    grid.push(row);
  }
  return grid;
}

const HEATMAP = generateHeatmap();

const INTENSITY_CLASSES = [
  "bg-muted/50 border border-border/50",
  "bg-primary/20",
  "bg-primary/40",
  "bg-primary/65",
  "bg-primary",
];

const LANGUAGES = [
  { name: "JavaScript", pct: 45, color: "bg-yellow-400" },
  { name: "TypeScript", pct: 25, color: "bg-blue-400" },
  { name: "CSS", pct: 15, color: "bg-purple-400" },
  { name: "HTML", pct: 10, color: "bg-orange-400" },
  { name: "Other", pct: 5, color: "bg-muted-foreground/50" },
];

const STATS = [
  {
    icon: GitCommitHorizontal,
    label: "Total Commits",
    value: "500+",
    sub: "Across all repos",
  },
  {
    icon: BookOpen,
    label: "Public Repos",
    value: "20+",
    sub: "Open source projects",
  },
  {
    icon: Star,
    label: "GitHub Stars",
    value: "50+",
    sub: "Community appreciation",
  },
];

export default function GitHubSection() {
  const sectionRef = useScrollReveal();

  return (
    <section id="github" data-ocid="github.section" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="section-fade">
          {/* Header */}
          <div className="mb-16 text-center">
            <p className="text-sm font-mono text-primary mb-2 uppercase tracking-widest">
              {"// code.activity"}
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
              GitHub Activity
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              A snapshot of my coding consistency and open source engagement.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
            {STATS.map(({ icon: Icon, label, value, sub }) => (
              <StatCard
                key={label}
                Icon={Icon}
                label={label}
                value={value}
                sub={sub}
              />
            ))}
          </div>

          {/* Heatmap */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="p-5 sm:p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-sm text-foreground">
                  Contribution Activity
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span>Less</span>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-sm ${INTENSITY_CLASSES[i]}`}
                    />
                  ))}
                  <span>More</span>
                </div>
              </div>

              {/* Month labels */}
              <div className="overflow-x-auto pb-1">
                <div className="min-w-[600px]">
                  {/* Day labels + heatmap */}
                  <div className="flex gap-2">
                    {/* Day labels */}
                    <div className="flex flex-col gap-[3px] shrink-0">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                        (day, i) => (
                          <div
                            key={day}
                            className={`h-3 flex items-center text-[9px] font-mono text-muted-foreground ${
                              i % 2 === 0 ? "opacity-100" : "opacity-0"
                            }`}
                            style={{ lineHeight: 1 }}
                          >
                            {day}
                          </div>
                        ),
                      )}
                    </div>

                    {/* Grid */}
                    <div className="flex-1 grid grid-rows-7 grid-flow-col gap-[3px]">
                      {HEATMAP.flatMap((row, ri) =>
                        row.map((val, ci) => ({
                          key: `cell-${ri}-${ci}`,
                          val,
                        })),
                      ).map(({ key, val }) => (
                        <div
                          key={key}
                          className={`heatmap-cell ${INTENSITY_CLASSES[val]}`}
                          title={
                            val > 0
                              ? `${val * 3} contributions`
                              : "No contributions"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Language bars */}
          <div className="max-w-3xl mx-auto">
            <div className="p-5 sm:p-6 rounded-xl bg-card border border-border">
              <h3 className="font-display font-semibold text-sm text-foreground mb-4">
                Top Languages
              </h3>

              {/* Progress bar */}
              <div className="flex rounded-full overflow-hidden h-3 mb-4">
                {LANGUAGES.map(({ name, pct, color }) => (
                  <div
                    key={name}
                    className={`${color} h-full transition-all duration-700`}
                    style={{ width: `${pct}%` }}
                    title={`${name} ${pct}%`}
                  />
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4">
                {LANGUAGES.map(({ name, pct, color }) => (
                  <div key={name} className="flex items-center gap-1.5">
                    <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
                    <span className="text-xs font-mono text-muted-foreground">
                      {name}
                    </span>
                    <span className="text-xs font-mono text-foreground font-medium">
                      {pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-muted-foreground">
            <Info className="w-3.5 h-3.5 shrink-0" />
            <span>
              Stats shown are representative. Visit GitHub for live data.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  Icon,
  label,
  value,
  sub,
}: {
  Icon: React.ElementType;
  label: string;
  value: string;
  sub: string;
}) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="section-fade group p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 text-center"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="font-display font-extrabold text-2xl sm:text-3xl text-foreground mb-0.5">
        {value}
      </div>
      <div className="text-sm font-medium text-foreground mb-0.5">{label}</div>
      <div className="text-xs text-muted-foreground">{sub}</div>
    </div>
  );
}
