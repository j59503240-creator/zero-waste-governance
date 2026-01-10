import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative border-t border-border bg-background py-32 lg:py-40"
    >
      {/* Subtle gradient */}
      <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[100px]" />

      <div className="container relative z-10 px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="font-mono text-xs tracking-widest text-muted-foreground">
            THE PORTFOLIO
          </span>
        </motion.div>

        {/* Asset Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group relative border border-border bg-card transition-all duration-500 border-glow-hover"
        >
          {/* Status bar */}
          <div className="flex items-center justify-between border-b border-border px-8 py-4">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="font-mono text-xs tracking-widest text-primary">
                LIVE / ENTERPRISE BETA
              </span>
            </div>
            <span className="font-mono text-xs tracking-widest text-muted-foreground">
              ASSET #01
            </span>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Left: Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="mb-2 font-mono text-xs tracking-widest text-muted-foreground">
                    CODENAME
                  </h3>
                  <h2 className="text-4xl font-light tracking-tight text-foreground lg:text-5xl">
                    Preta
                  </h2>
                  <p className="mt-2 font-mono text-sm text-muted-foreground">
                    /ˈprɛtə/ — The Ghost
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-mono text-xs tracking-widest text-muted-foreground">
                    CLASSIFICATION
                  </h3>
                  <p className="text-xl text-foreground">
                    The Ghost Validation Engine
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-mono text-xs tracking-widest text-muted-foreground">
                    CAPABILITY
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Pre-Code, Live-Site Validation. Measure behavioral intent with 
                    production-grade fidelity before committing a single engineering hour. 
                    Deploy ghost features, capture interaction data, validate demand.
                  </p>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="relative flex items-center justify-center">
                <div className="relative aspect-square w-full max-w-sm">
                  {/* Geometric pattern */}
                  <div className="absolute inset-0 border border-border" />
                  <div className="absolute inset-4 border border-border opacity-60" />
                  <div className="absolute inset-8 border border-border opacity-40" />
                  <div className="absolute inset-12 border border-border opacity-20" />
                  
                  {/* Center glow */}
                  <div className="absolute inset-16 bg-primary/10 blur-xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-glow font-mono text-6xl font-light text-primary opacity-50">
                      Ø
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 border-t border-border pt-8">
              <a
                href="https://preta.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-3 border border-primary bg-primary/10 px-8 py-4 font-mono text-sm tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                VISIT PRETA.COM
                <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
