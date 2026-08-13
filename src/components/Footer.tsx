function Footer() {
  return (
    <footer className="border-t border-footer-border bg-footer text-footer-text">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* top */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a
              href="#home"
              className="font-semibold"
            >
              Carl David T. Ang
            </a>

            <p className="mt-1 text-sm text-muted-foreground">
              IT Student | Developer
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        {/* bottom */}
        <div className="mt-8 flex flex-col gap-2 border-t border-footer-border pt-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 Carl David T. Ang</p>
          <p>Built with React | TypeScript | Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;