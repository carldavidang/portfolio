import capstoneTeamImg from "../assets/images/capstone_team.jpg";
import portfolioPreviewMobile from "../assets/images/portfolio_preview_mobile.jpg";
import portfolioPreviewDesk from "../assets/images/portfolio_preview_desk.jpg";

function Projects() {
  return (
    <div
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16 text-text sm:py-24"
    >
      <section>
        {/* section heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Projects</h2>
          <p className="mt-2 text-text-muted">
            A look at what I've built, from academic work to personal
            explorations.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {/* capstone */}
          <article className="flex flex-col overflow-hidden rounded-2xl bg-accent-soft md:flex-row md:items-start">
            <div className="md:w-1/2">
              <img
                src={capstoneTeamImg}
                alt="Capstone project team with professor"
                className="h-56 w-full object-cover sm:h-72 md:h-auto md:max-h-105 md:w-full md:object-contain md:bg-surface-alt md:p-4"
              />
              <div className="mx-5 mt-3 text-xs text-gray-500 md:text-sm">
                <p>Project access: Private academic project</p>
                <p className="mt-1">
                  System access and materials are not publicly available.
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-wide text-accent">
                Academic Capstone Project
              </p>
              <h3 className="text-2xl font-semibold">
                Little Scholars Web Portal
              </h3>
              <p className="text-text-muted">
                A web-based school portal developed as a capstone project to
                simplify the admission process and provide access to student
                information for guardians, teachers, and administrators.
              </p>
              <div className="flex flex-wrap gap-2 py-1">
                <span className="rounded-full bg-surface px-3 py-1 text-sm">
                  Laravel
                </span>
                <span className="rounded-full bg-surface px-3 py-1 text-sm">
                  Livewire
                </span>
                <span className="rounded-full bg-surface px-3 py-1 text-sm">
                  PHP
                </span>
                <span className="rounded-full bg-surface px-3 py-1 text-sm">
                  MySQL
                </span>
                <span className="rounded-full bg-surface px-3 py-1 text-sm">
                  Tailwind CSS
                </span>
              </div>
              <p className="text-text-muted">
                <span className="font-semibold text-text">
                  My Contribution:
                </span>{" "}
                Developed core application functionality, database structure and
                relationships, and contributed to the project's initial UI
                design and documentation.
              </p>
              <p className="text-text-muted">
                <span className="font-semibold text-text">What I Learned:</span>{" "}
                I gained experience building a fullstack website with Laravel
                and Livewire, structuring relational databases, connecting
                application logic to database relationships, and developing
                features for different types of users.
              </p>
            </div>
          </article>

          {/* portfolio */}
          <article className="flex flex-col overflow-hidden rounded-2xl bg-accent-soft md:flex-row">
            <div className="h-56 overflow-hidden bg-surface-alt sm:h-72 md:h-auto md:w-2/5">
              {/* desktop image for mobile view */}
              <img
                src={portfolioPreviewDesk}
                alt="Preview of my personal portfolio website on desktop"
                className="h-full w-full object-cover md:hidden"
              />

              {/* mobile image for desktop view */}
              <img
                src={portfolioPreviewMobile}
                alt="Preview of my personal portfolio website on mobile"
                className="hidden h-full w-full object-cover md:block"
              />
            </div>
            {/* 
            <div className="h-56 overflow-hidden bg-surface-alt sm:h-72 md:h-auto md:w-2/5">
              <img
                src={portfolioPreview}
                alt="Preview of my personal portfolio website"
                className="h-full w-full object-cover object-top"
              />
            </div>
*/}
            <div className="flex flex-1 flex-col gap-3 p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-wide text-accent">
                Personal Project
              </p>

              <h3 className="text-2xl font-semibold">Personal Portfolio</h3>

              <p className="text-text-muted">
                A personal portfolio website created to showcase my development
                work, technical skills, and progression into real-time VFX and
                game development.
              </p>

              <div className="flex flex-wrap gap-2 py-1">
                <span className="rounded-full bg-surface px-3 py-1 text-sm">
                  React
                </span>
                <span className="rounded-full bg-surface px-3 py-1 text-sm">
                  TypeScript
                </span>
                <span className="rounded-full bg-surface px-3 py-1 text-sm">
                  Tailwind CSS
                </span>
                <span className="rounded-full bg-surface px-3 py-1 text-sm">
                  Vite
                </span>
              </div>

              <p className="text-text-muted">
                <span className="font-semibold text-text">
                  My Contribution:
                </span>{" "}
                Designed and developed the portfolio website, including its
                structure, content, visual design, and implementation.
              </p>

              <p className="text-text-muted">
                <span className="font-semibold text-text">What I Learned:</span>{" "}
                Strengthened my skills in React, TypeScript, and Tailwind CSS
                while learning how to plan, design, and build a responsive
                website.
              </p>
            </div>
          </article>
        </div>

        {/* VFX / Unity projects can be added here later */}
      </section>

      {/* VFX / Unity 
        <section>
          <h2>VFX & Unity — Learning</h2>

           Impact Effect 
          <article>
            <div>
              <div> VFX image or video </div>
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

           Projectile Effect 
          <article>
            <div>
              <div> VFX image or video </div>
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
        </section>*/}
    </div>
  );
}

export default Projects;
