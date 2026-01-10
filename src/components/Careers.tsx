import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface Role {
  title: string;
  entity: string;
  location: string;
  type: string;
}

const roles: Role[] = [
  {
    title: "Senior Infrastructure Engineer",
    entity: "ZeroState Systems",
    location: "Remote / Delaware",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    entity: "Preta",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Full-Stack Engineer",
    entity: "Preta",
    location: "Gujarat / Remote",
    type: "Full-time",
  },
  {
    title: "Head of Enterprise Sales",
    entity: "ZeroState Systems",
    location: "Delaware",
    type: "Full-time",
  },
];

const Careers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="careers"
      ref={ref}
      className="relative border-t border-border bg-card py-32 lg:py-40"
    >
      <div className="container relative z-10 px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="font-mono text-xs tracking-widest text-muted-foreground">
            CAREERS
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16 text-4xl font-light text-foreground lg:text-5xl"
        >
          Join the Foundry
        </motion.h2>

        {/* Roles list */}
        <div className="space-y-px">
          {roles.map((role, index) => (
            <motion.a
              key={role.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group flex flex-col gap-4 border border-border bg-background p-6 transition-all hover:border-primary/50 hover:bg-secondary lg:flex-row lg:items-center lg:justify-between lg:p-8"
            >
              <div className="flex-1">
                <h3 className="mb-2 text-lg text-foreground transition-colors group-hover:text-primary lg:text-xl">
                  {role.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="font-mono text-xs tracking-wider text-primary/70">
                    {role.entity}
                  </span>
                  <span className="text-border">•</span>
                  <span>{role.location}</span>
                  <span className="text-border">•</span>
                  <span>{role.type}</span>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          ))}
        </div>

        {/* General application */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-muted-foreground">
            Don't see a role that fits? We're always looking for exceptional talent.
          </p>
          <a
            href="mailto:careers@zerostatesystems.com"
            className="inline-flex items-center gap-2 font-mono text-sm tracking-widest text-primary transition-all hover:gap-4"
          >
            GENERAL APPLICATION
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
