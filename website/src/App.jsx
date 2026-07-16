const REPO = 'https://github.com/eclipsesource/ai-coding-cheat-sheet'

const links = [
  {
    title: 'Online Training',
    href: 'https://eclipsesource.teachable.com/p/ai-coding',
    description: 'AI coding training course',
  },
  {
    title: 'Calculator Exercise',
    href: 'https://github.com/eclipsesource/systematic-ai-coding-calculator-exercise',
    description: 'Exercise repository for the training',
  },
  {
    title: 'Fan Control Exercise',
    href: 'https://github.com/eclipsesource/fan-control-exercise',
    description: 'Second exercise repository for the training',
  },
  {
    title: 'grill-me skill',
    href: 'https://ai.open-vsx.org/?skill=io.github.mattpocock%2Fgrill-me',
    description: 'Skill by Matt Pollock to stress-test a plan',
  },
  {
    title: 'grilling skill',
    href: 'https://ai.open-vsx.org/?skill=io.github.mattpocock%2Fgrilling',
    description: 'Companion skill by Matt Pollock for relentless interviewing',
  },
]

const skills = [
  {
    command: '/explain',
    description: 'Summarizes what was done and why it works',
    path: 'skills/explain/SKILL.md',
  },
  {
    command: '/implement-phase',
    description: 'Implement a single phase from a phased plan, then stop for review',
    path: 'skills/implement-phase/SKILL.md',
  },
  {
    command: '/plan-phases',
    description: 'Restructure a plan into human-reviewable phases (5-15 min each)',
    path: 'skills/plan-phases/SKILL.md',
  },
  {
    command: '/review-guide',
    description: 'List which files to review and in what order',
    path: 'skills/review-guide/SKILL.md',
  },
]

function ExternalLink({ href, children, className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <span className="inline-block ml-1 text-sm">&#8599;</span>
    </a>
  )
}

function Section({ title, children }) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
        {title}
      </h2>
      {children}
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            AI Coding Cheat Sheet
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Resources and tools for the{' '}
            <ExternalLink
              href="https://eclipsesource.teachable.com/p/ai-coding"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              EclipseSource AI Coding Training
            </ExternalLink>{' '}
            and beyond.
          </p>
        </header>

        <Section title="Links">
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <ExternalLink
                  href={link.href}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  {link.title}
                </ExternalLink>
                <span className="text-gray-500 dark:text-gray-400"> &mdash; {link.description}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Claude Code Skills">
          <p className="mb-6 text-gray-500 dark:text-gray-400">
            Copy into{' '}
            <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
              ~/.claude/skills/
            </code>{' '}
            or{' '}
            <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
              .claude/skills/
            </code>{' '}
            to use.
          </p>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div
                key={skill.command}
                className="flex items-baseline gap-4 py-3 border-b border-gray-100 dark:border-gray-800 last:border-0"
              >
                <ExternalLink
                  href={`${REPO}/blob/main/${skill.path}`}
                  className="font-mono text-sm font-semibold text-gray-900 dark:text-gray-100 shrink-0 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {skill.command}
                </ExternalLink>
                <span className="text-gray-500 dark:text-gray-400">{skill.description}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Claude Code Settings">
          <p className="text-gray-500 dark:text-gray-400">
            Curated settings for{' '}
            <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
              ~/.claude/settings.json
            </code>{' '}
            &mdash; attribution, permissions, status line, and more.
          </p>
          <p className="mt-4">
            <ExternalLink
              href={`${REPO}/blob/main/claude-code/settings.md`}
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              View settings cheat sheet
            </ExternalLink>
          </p>
        </Section>

        <footer className="pt-8 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-400 dark:text-gray-500 flex justify-between">
          <ExternalLink
            href={REPO}
            className="hover:text-gray-600 dark:hover:text-gray-300"
          >
            GitHub
          </ExternalLink>
          <span>
            <ExternalLink
              href="https://eclipsesource.com"
              className="hover:text-gray-600 dark:hover:text-gray-300"
            >
              EclipseSource
            </ExternalLink>
          </span>
        </footer>
      </div>
    </div>
  )
}

export default App
