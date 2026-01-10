import { motion } from "framer-motion";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="h-8 w-8 border border-primary bg-primary/10" />
          <span className="font-mono text-sm font-medium tracking-wider text-foreground">
            ZEROSTATE
          </span>
        </button>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 lg:gap-12">
          <li>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="font-mono text-xs tracking-widest text-muted-foreground transition-colors hover:text-primary"
            >
              PORTFOLIO
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("careers")}
              className="font-mono text-xs tracking-widest text-muted-foreground transition-colors hover:text-primary"
            >
              CAREERS
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("footer")}
              className="font-mono text-xs tracking-widest text-muted-foreground transition-colors hover:text-primary"
            >
              INVESTOR RELATIONS
            </button>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
