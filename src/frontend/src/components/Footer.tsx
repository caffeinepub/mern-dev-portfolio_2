import { Code2, Github, Heart, Linkedin, Mail } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:alex.johnson@example.com" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      data-ocid="footer.section"
      className="bg-foreground/[0.03] dark:bg-card border-t border-border"
    >
      {/* Main footer content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-10 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-primary" />
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                Alex<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Full Stack Developer building scalable applications with the MERN
              stack. Open to exciting opportunities.
            </p>
          </div>

          {/* Quick navigation */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {QUICK_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  data-ocid={`footer.${link.label.toLowerCase()}.link`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={
                    href.startsWith("http") || href === "#"
                      ? "_blank"
                      : undefined
                  }
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-lg border border-border hover:border-primary/50 bg-background hover:bg-accent/50 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  aria-label={label}
                  data-ocid={`footer.${label.toLowerCase()}.link`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Available for freelance &amp; full-time roles.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Alex Johnson. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built with{" "}
            <Heart className="w-3 h-3 text-destructive fill-destructive" />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
