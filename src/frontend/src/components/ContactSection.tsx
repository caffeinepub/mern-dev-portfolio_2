import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle,
  Github,
  Linkedin,
  Loader2,
  Mail,
  Send,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const sectionRef = useScrollReveal();
  const { actor } = useActor();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setStatus("loading");
    try {
      if (!actor) throw new Error("Actor not available");
      await actor.submitContactMessage(
        form.name.trim(),
        form.email.trim(),
        form.message.trim(),
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent! I'll get back to you soon.");
    } catch (err) {
      console.error(err);
      setStatus("error");
      toast.error("Failed to send message. Please try again.");
    }
  };

  const CONTACT_LINKS = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.johnson@example.com",
      href: "mailto:alex.johnson@example.com",
      color: "text-primary",
      bg: "bg-primary/10 border-primary/20",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/alexjohnson",
      href: "#",
      color: "text-foreground",
      bg: "bg-muted/50 border-border",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/alexjohnson",
      href: "#",
      color: "text-blue-500 dark:text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20",
    },
  ];

  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="py-24 sm:py-32 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="section-fade">
          {/* Header */}
          <div className="mb-16 text-center">
            <p className="text-sm font-mono text-primary mb-2 uppercase tracking-widest">
              {"// let's.connect"}
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
              Get In Touch
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Have a project in mind or just want to say hello? I'd love to hear
              from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Form */}
            <div className="p-6 sm:p-8 rounded-xl bg-card border border-border">
              <h3 className="font-display font-bold text-lg text-foreground mb-6">
                Send a Message
              </h3>

              {status === "success" ? (
                <div
                  data-ocid="contact.success_state"
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-lg text-foreground">
                      Message Sent!
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Thanks for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setStatus("idle")}
                    className="border-primary/30 hover:border-primary/60 text-primary hover:bg-primary/5"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      required
                      className="bg-background border-border focus:border-primary/60"
                      data-ocid="contact.input"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      required
                      className="bg-background border-border focus:border-primary/60"
                      data-ocid="contact.email.input"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hi..."
                      value={form.message}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      required
                      rows={5}
                      className="bg-background border-border focus:border-primary/60 resize-none"
                      data-ocid="contact.textarea"
                    />
                  </div>

                  {status === "error" && (
                    <div
                      data-ocid="contact.error_state"
                      className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/25 text-destructive text-sm"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Failed to send. Please try again.</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full h-11 gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300"
                    data-ocid="contact.submit_button"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Right: contact info */}
            <div className="flex flex-col justify-center gap-4">
              <div className="mb-4">
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently{" "}
                  <span className="text-foreground font-semibold">
                    open to new opportunities
                  </span>
                  . Whether it's a full-time role, freelance project, or just a
                  conversation — my inbox is always open.
                </p>
              </div>

              {CONTACT_LINKS.map(
                ({ icon: Icon, label, value, href, color, bg }) => (
                  <a
                    key={label}
                    href={href}
                    target={
                      href.startsWith("http") || href === "#"
                        ? "_blank"
                        : undefined
                    }
                    rel={href !== "#" ? "noopener noreferrer" : undefined}
                    className={`group flex items-center gap-4 p-4 rounded-xl bg-card border ${bg} hover:border-primary/40 hover:shadow-card transition-all duration-200`}
                    data-ocid={`contact.${label.toLowerCase()}.link`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg ${bg} border flex items-center justify-center shrink-0`}
                    >
                      <Icon className={`w-5 h-5 ${color}`} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-muted-foreground mb-0.5">
                        {label}
                      </p>
                      <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                        {value}
                      </p>
                    </div>
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
