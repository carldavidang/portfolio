function Contact() {
  const myEmail = "ang.carldavid.t@gmail.com";

  return (
    <div id="contact">
      <div>
        <h1>Connect with me!</h1>
        <p>
          I'm currently interested in opportunities involving IT, software
          development, and eventually real-time VFX and game development.
        </p>
      </div>
      <div>
        <a href={`mailto:${myEmail}`}>{myEmail}</a>
        <a
          href="https://www.linkedin.com/in/carl-david-ang-6885b121a"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/carldavidang"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Contact;
