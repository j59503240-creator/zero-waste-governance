import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-50" />
      
      {/* Scanline effect */}
      <div className="scanlines absolute inset-0" />

      {/* Gradient orb */}
      <div className="absolute top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
      
      {/* Content */}
      <div className="container relative z-10 px-6 lg:px-12">
        <div className="max-w-4xl">
          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 flex items-center gap-3"
          >
            <div className="h-2 w-2 animate-pulse-glow rounded-full bg-primary" />
            <span className="font-mono text-xs tracking-widest text-muted-foreground">
              SYSTEMS ONLINE
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 text-4xl font-light leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Infrastructure for the{" "}
            <span className="text-glow font-medium text-primary">Zero-Waste</span>{" "}
            Enterprise
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            We build sovereign governance tools that validate software before it is built.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <button
              onClick={scrollToPortfolio}
              className="group inline-flex items-center gap-4 border border-border bg-secondary px-8 py-4 font-mono text-sm tracking-widest text-foreground transition-all hover:border-primary hover:bg-primary/10 border-glow-hover"
            >
              VIEW PORTFOLIO
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default Hero;
