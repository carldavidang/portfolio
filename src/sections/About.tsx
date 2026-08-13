function About() {
  return (
    <div id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6">
      <div className="text-center text-3xl font-semibold text-text sm:text-4xl">
        <h1>About Me</h1>
      </div>
      {/* left side */}
      <div className="mx-auto grid grid-cols-1 gap-6 py-6 text-lg text-text-muted sm:gap-10 md:grid-cols-2 md:gap-24 md:px-8 md:text-xl md:text-justify">
        <div>
          <p className="py-4">
            I am a BSIT student with an interest in web development, game
            development, and VFX.
          </p>
          <p className="py-4">
            I've worked with Laravel, Tailwind, MySQL through academic projects
            and personal learning, including my capstone project, Little
            Scholars Web Portal.
          </p>
        </div>
        {/* right side */}
        <div>
          <p className="py-4">
            I'm currently expanding my skills in Unity and VFX and looking for
            opportunities where I can continue learning while contributing to
            real projects.
          </p>
          <p className="py-4">
            Outside of development, I'm interested in games, visual effects, and
            consumer hardware technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
