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
          Technologies and tools I work with and am currently exploring.
        </p>
      </div>

      {/* skills */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {/* web/programming/development */}
        <div className="rounded-2xl bg-accent-soft p-6 sm:col-span-2 md:col-span-1">
          <h2 className="mb-6 text-2xl font-semibold">Programming / Web</h2>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-surface px-4 py-2">HTML</span>
            <span className="rounded-full bg-surface px-4 py-2">CSS</span>
            <span className="rounded-full bg-surface px-4 py-2">
              JavaScript
            </span>
            <span className="rounded-full bg-surface px-4 py-2">
              TypeScript
            </span>
            <span className="rounded-full bg-surface px-4 py-2">PHP</span>
            <span className="rounded-full bg-surface px-4 py-2">Laravel</span>
            <span className="rounded-full bg-surface px-4 py-2">React</span>
            <span className="rounded-full bg-surface px-4 py-2">
              Livewire
            </span>
            <span className="rounded-full bg-surface px-4 py-2">
              Tailwind CSS
            </span>
            <span className="rounded-full bg-surface px-4 py-2">MySQL</span>
          </div>
        </div>

        {/* tools i used */}
        <div className="rounded-2xl bg-accent-soft p-6">
          <h2 className="mb-6 text-2xl font-semibold">Tools</h2>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-surface px-4 py-2">Git</span>
            <span className="rounded-full bg-surface px-4 py-2">GitHub</span>
            <span className="rounded-full bg-surface px-4 py-2">
              VS Code
            </span>
          </div>
        </div>

        {/* learning for future */}
        <div className="rounded-2xl bg-accent-soft p-6">
          <h2 className="mb-6 text-2xl font-semibold">Currently Learning</h2>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-accent px-4 py-2 text-surface">
              Unity
            </span>
            <span className="rounded-full bg-accent px-4 py-2 text-surface">
              Particle Systems
            </span>
            <span className="rounded-full bg-accent px-4 py-2 text-surface">
              VFX
            </span>
            <span className="rounded-full bg-accent px-4 py-2 text-surface">
              Game Development
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;