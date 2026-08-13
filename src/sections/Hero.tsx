import portraitImg from "../assets/images/portrait_pro.jpg";

function Hero() {
  return (
    <div
      id="home"
      className="relative flex min-h-[85vh] items-center bg-accent px-6 pb-28 pt-16 [clip-path:url(#heroWaveMobile)] sm:pb-24 md:min-h-[75vh] md:py-0 md:[clip-path:url(#heroWave)] scroll-mt-20"
    >
      {/* wave effect */}
      <svg width="0" height="0">
        <defs>
          {/* less curve for mobile */}
          <clipPath id="heroWaveMobile" clipPathUnits="objectBoundingBox">
            <path
              d="
            M 0 0
            H 1
            V 0.92
            C 0.85 0.97, 0.65 0.87, 0.50 0.92
            C 0.30 0.97, 0.15 0.87, 0 0.92
            Z
          "
            />
          </clipPath>
          {/* more curve for desktop */}
          <clipPath id="heroWave" clipPathUnits="objectBoundingBox">
            <path
              d="
            M 0 0
            H 1
            V 0.85
            C 0.80 0.95, 0.65 0.75, 0.50 0.85
            C 0.30 0.95, 0.15 0.75, 0 0.85
            Z
          "
            />
          </clipPath>
        </defs>
      </svg>
      {/* introduction */}
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center justify-between gap-8 text-surface md:-translate-y-6 md:flex-row md:gap-12">
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h1 className="text-3xl font-bold sm:text-4xl">Carl David T. Ang</h1>

          <p className="py-2 text-lg sm:text-xl md:text-2xl">
            IT student focused on web development and software, currently
            expanding my skills in real-time VFX and game development.
          </p>

          <div className="flex flex-col items-center gap-2 py-2 text-lg sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#projects"
              className="rounded-full px-4 py-2 hover:bg-accent-hover hover:font-bold"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full px-4 py-2 hover:bg-accent-hover hover:font-bold"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="w-1/2 max-w-[55] sm:max-w-[65] md:w-1/3 md:max-w-none">
          <img
            src={portraitImg}
            alt="Portrait of Carl David T. Ang"
            className="mx-auto w-full rounded-4xl md:ml-auto md:mr-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
