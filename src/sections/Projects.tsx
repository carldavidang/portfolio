import capstoneTeamImg from "../assets/images/capstone_team.jpeg";

function Projects() {
  return (
    <div id="projects">
      <div>
        <h1>Projects</h1>

        {/* Projects */}
        <section>
          <h2>Projects</h2>

          {/* Capstone */}
          <article>
            <div>
              <img
                src={capstoneTeamImg}
                alt="Capstone project team with professor"
              />
            </div>

            <div>
              <p>Academic Capstone Project</p>

              <h3>Little Scholars Web Portal</h3>

              <p>
                A web-based school portal developed as a capstone project to
                simplify the admission process and provide access to student
                information for guardians, teachers, and administrators.
              </p>

              <p>Technologies used:</p>

              <div>
                <span>Laravel</span>
                <span>Livewire</span>
                <span>PHP</span>
                <span>MySQL</span>
                <span>Tailwind CSS</span>
              </div>

              <p>
                My Contribution: I handled the majority of the application's
                development and database implementation, including core
                functionality, database design, and database relationships. I
                also contributed to the initial design and project
                documentation.
              </p>

              <p>
                What I Learned: [Briefly describe what you learned from the
                project.]
              </p>
            </div>
          </article>

          {/* Portfolio */}
          <article>
            <div>
              <div>{/* Portfolio visual / future image */}</div>
            </div>

            <div>
              <p>Personal Project</p>

              <h3>Personal Portfolio</h3>

              <p>
                A personal portfolio website created to showcase my development
                work, technical skills, and progression into real-time VFX and
                game development.
              </p>

              <p>Technologies used:</p>

              <div>
                <span>React</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
                <span>Vite</span>
              </div>

              <p>
                My Contribution: Designed and developed the portfolio website,
                including its structure, content, visual design, and
                implementation.
              </p>

              <p>
                What I Learned: [Briefly describe what you learned while
                building the portfolio.]
              </p>
            </div>
          </article>

          {/* VFX / Unity projects can be added here later */}
        </section>

        {/* VFX / Unity */}
        <section>
          <h2>VFX & Unity — Learning</h2>

          {/* Impact Effect */}
          <article>
            <div>
              <div>{/* VFX image or video */}</div>
            </div>

            <div>
              <p>VFX · Learning</p>

              <h3>Impact Effect #1</h3>

              <p>
                A real-time impact effect created while learning Unity's
                particle systems and VFX workflows.
              </p>

              <p>Technologies: Unity · Particle Systems · VFX</p>

              <p>
                Progress: [What changed between versions / what you learned.]
              </p>
            </div>
          </article>

          {/* Projectile Effect */}
          <article>
            <div>
              <div>{/* VFX image or video */}</div>
            </div>

            <div>
              <p>VFX · Learning</p>

              <h3>Projectile Effect #2</h3>

              <p>
                A projectile effect created as part of my ongoing exploration of
                real-time visual effects.
              </p>

              <p>Technologies: Unity · Particle Systems · VFX</p>

              <p>
                Progress: [What changed between versions / what you learned.]
              </p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default Projects;
