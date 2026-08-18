function Skills() {
  return (
    <div
      id="skills"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16 text-text sm:py-24"
    >
      {/* section head */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-semibold sm:text-4xl">Skills</h1>
        <p className="mt-2 text-text-muted">
          Technologies I've worked with, and what I'm exploring next.
        </p>
      </div>

      {/* skills */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* web/programming/development */}
        <div className="rounded-2xl bg-accent-soft p-6 sm:col-span-2 md:col-span-1">
          <h2 className="text-2xl font-semibold">Technologies I've Used</h2>
          <p className="mb-6 mt-1 text-sm text-text-muted">
            Through coursework and personal projects
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-surface px-4 py-2">
              TypeScript
            </span>
            <span className="rounded-full bg-surface px-4 py-2">Laravel</span>
            <span className="rounded-full bg-surface px-4 py-2">React</span>
            <span className="rounded-full bg-surface px-4 py-2">Livewire</span>
            <span className="rounded-full bg-surface px-4 py-2">
              Tailwind CSS
            </span>
            <span className="rounded-full bg-surface px-4 py-2">MySQL</span>
          </div>
        </div>

        {/* learning for future */}
        <div className="rounded-2xl bg-accent-soft p-6">
          <h2 className="text-2xl font-semibold">Currently Exploring</h2>
          <p className="mb-6 mt-1 text-sm text-text-muted">
            Diving into game dev and VFX on my own
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-surface px-4 py-2">Unity</span>
            <span className="rounded-full bg-surface px-4 py-2">
              Particle Systems
            </span>
            <span className="rounded-full bg-surface px-4 py-2">
              Blender Modeling
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;