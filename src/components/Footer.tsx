import { Mail } from "lucide-react";
import GitHubIcon from "../assets/images/GitHub_Invertocat_Black.svg"; // swap to white/black depending on footer bg
import LinkedInIcon from "../assets/images/LI-In-Bug.png";

function Footer() {
  const myEmail = "ang.carldavid.t@gmail.com";
  return (
    <footer className="border-t border-footer-border bg-footer text-footer-text">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* top */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a href="#home" className="font-semibold">
              Carl David T. Ang
            </a>

            <p className="mt-1 text-sm text-muted-foreground">
              IT Student | Developer
            </p>

            {/* buttons under name */}
            {/* buttons under name */}
            <div className="mt-4 flex items-center gap-4">
              <a
                href={`mailto:${myEmail}`}
                aria-label="My Email"
                title="Email"
                className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-black transition-opacity hover:opacity-70"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/carldavidang"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="My GitHub profile"
                title="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-md bg-white transition-opacity hover:opacity-70"
              >
                <img src={GitHubIcon} alt="GitHub" className="h-6 w-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/carl-david-ang-6885b121a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="My LinkedIn profile"
                title="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-md bg-white transition-opacity hover:opacity-70"
              >
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn"
                  className="h-6 w-6 object-contain"
                />
              </a>
            </div>
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
