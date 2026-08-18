import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 text-text backdrop-blur-md font-bold">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          <a href="#home" className="text-2xl text-text font-extrabold">
            Carl David T. Ang
          </a>

          {/* desktop nav */}
          <div className="hidden items-center gap-8 text-xl md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-accent hover:bg-accent-soft hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-full p-2 text-text hover:bg-accent-soft md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* mobile nav panel */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "max-h-80 pb-6 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-full px-4 py-3 text-accent hover:bg-accent-soft hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;