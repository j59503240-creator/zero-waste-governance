import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer
      id="footer"
      ref={ref}
      className="relative border-t border-border bg-background py-20 lg:py-24"
    >
      <div className="container px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid gap-12 lg:grid-cols-4 lg:gap-8"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-8 w-8 border border-primary bg-primary/10" />
              <span className="font-mono text-sm font-medium tracking-wider text-foreground">
                ZEROSTATE SYSTEMS
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Infrastructure for the Zero-Waste Enterprise. 
              Building sovereign governance tools that validate software before it is built.
            </p>
          </div>

          {/* Locations */}
          <div>
            <h4 className="mb-6 font-mono text-xs tracking-widest text-muted-foreground">
              LOCATIONS
            </h4>
            <div className="space-y-4 text-sm text-foreground">
              <div>
                <p className="mb-1 text-muted-foreground">Registered</p>
                <p>Wilmington, Delaware</p>
                <p className="text-muted-foreground">United States</p>
              </div>
              <div>
                <p className="mb-1 text-muted-foreground">Operations</p>
                <p>Gujarat</p>
                <p className="text-muted-foreground">India</p>
              </div>
            </div>
          </div>

          {/* Investor Relations */}
          <div>
            <h4 className="mb-6 font-mono text-xs tracking-widest text-muted-foreground">
              INVESTOR RELATIONS
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:ir@zerostatesystems.com"
                className="block font-mono text-sm text-primary transition-colors hover:text-primary/80"
              >
                ir@zerostatesystems.com
              </a>
              <div className="space-y-2 text-sm">
                <a
                  href="#"
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                >
                  Annual Reports
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                >
                  Press Releases
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                >
                  SEC Filings
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col gap-6 border-t border-border pt-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} ZEROSTATE SYSTEMS, INC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap gap-6 font-mono text-xs text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
