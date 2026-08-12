import portraitImg from "../assets/images/portrait_pro.jpg";

function Hero() {
  return (
    <div
      id="home"
      className="flex min-h-screen items-center bg-primary px-6"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-12 text-surface">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold">Carl David T. Ang</h1>

          <p className="py-2 text-2xl">
            IT student focused on web development and software, currently
            expanding my skills in real-time VFX and game development.
          </p>

          <div className="py-2 text-lg">
            <a
              href="#projects"
              className="rounded-full px-4 py-2 hover:bg-primary-hover hover:font-bold"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full px-4 py-2 hover:bg-primary-hover hover:font-bold"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="w-1/2">
          <img
            src={portraitImg}
            alt="Portrait of Carl David T. Ang"
            className="ml-auto max-w-full rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;