function Header() {
  return (
    <>
      <header className="sticky top-0 bg-linear-to-t from-primary to-primary-hover text-2xl font-bold">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-20 items-center justify-between">
            <a href="#home" className="text-surface text-3xl">
              Carl David T. Ang
            </a>

            <div className="hidden items-center gap-8 md:flex text-2xl">
              <a
                href="#about"
                className="rounded-full px-4 py-2 text-primary-soft hover:bg-primary-soft hover:text-text"
              >
                About
              </a>

              <a
                href="#skills"
                className="rounded-full px-4 py-2 text-primary-soft hover:bg-primary-soft hover:text-text"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="rounded-full px-4 py-2 text-primary-soft hover:bg-primary-soft hover:text-text"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="rounded-full px-4 py-2 text-primary-soft hover:bg-primary-soft hover:text-text"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
