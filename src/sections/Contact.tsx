function Contact() {
  const myEmail = "ang.carldavid.t@gmail.com";

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16 text-center text-text sm:py-24"
    >
      <div className="mx-auto max-w-2xl space-y-3">
        <h2 className="text-3xl font-semibold">Let's Connect</h2>

        <p className="text-lg text-text-muted">
          I'm currently interested in opportunities involving IT and software
          development, with a long-term goal of working in real-time VFX and
          game development.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={`mailto:${myEmail}`}
          className="rounded-full bg-accent-soft px-4 py-2 transition-colors hover:bg-accent hover:text-accent-soft"
        >
          {myEmail}
        </a>

        <a
          href="https://www.linkedin.com/in/carl-david-ang-6885b121a"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-accent-soft px-4 py-2 transition-colors hover:bg-accent hover:text-accent-soft"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/carldavidang"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-accent-soft px-4 py-2 transition-colors hover:bg-accent hover:text-accent-soft"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;