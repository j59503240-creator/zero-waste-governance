import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative border-t border-border bg-card py-32 lg:py-40"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="container relative z-10 px-6 lg:px-12">
        <div className="mx-auto max-w-3xl">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 flex items-center gap-4"
          >
            <div className="h-px flex-1 bg-border" />
            <span className="font-mono text-xs tracking-widest text-muted-foreground">
              THE PHILOSOPHY
            </span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>

          {/* Manifesto content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-light leading-relaxed text-foreground md:text-4xl">
              Engineering talent is the scarcest resource in technology.
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Every feature built without validation is a systemic waste—of time, 
                capital, and human potential. The conventional development cycle 
                inverts the natural order: code first, validate later.
              </p>
              <p>
                We propose a reversal. Validate before the first line is written. 
                Measure behavioral intent before committing engineering hours. 
                Build only what has proven demand.
              </p>
              <p className="border-l-2 border-primary pl-6 text-foreground">
                This is the Zero-Waste doctrine: eliminate speculative development 
                through pre-code validation.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <button className="group inline-flex items-center gap-3 font-mono text-sm tracking-widest text-primary transition-all hover:gap-5">
              READ THE MANIFESTO
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
