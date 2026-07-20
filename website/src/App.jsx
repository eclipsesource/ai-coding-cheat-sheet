const REPO = 'https://github.com/eclipsesource/ai-coding-cheat-sheet'

const links = [
  {
    title: 'Online Training',
    href: 'https://eclipsesource.teachable.com/p/ai-coding',
    description: 'Systematic AI Coding Training course',
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
]

const skills = [
  {
    command: '/grill-me',
    description: 'Skill by Matt Pollock to stress-test a plan',
    href: 'https://ai.open-vsx.org/?skill=io.github.mattpocock%2Fgrill-me',
  },
  {
    command: '/grilling',
    description: 'Companion skill by Matt Pollock for relentless interviewing',
    href: 'https://ai.open-vsx.org/?skill=io.github.mattpocock%2Fgrilling',
  },
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
              EclipseSource Systematic AI Coding Training
            </ExternalLink>{' '}
            and beyond.
          </p>
        </header>

        <section className="mb-16 rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/40 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-400 mb-3">
            💡 Tip of the Day
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            <code className="text-sm bg-white dark:bg-gray-900 px-1.5 py-0.5 rounded border border-blue-200 dark:border-blue-900 font-semibold">
              /model opusplan
            </code>{' '}
            uses Opus while you're in plan mode — where the deep reasoning matters most —
            then automatically switches to Sonnet for execution once you exit plan mode. No
            manual switching required. Set it permanently with{' '}
            <code className="text-sm bg-white dark:bg-gray-900 px-1.5 py-0.5 rounded border border-blue-200 dark:border-blue-900">
              claude --model opusplan
            </code>{' '}
            or{' '}
            <code className="text-sm bg-white dark:bg-gray-900 px-1.5 py-0.5 rounded border border-blue-200 dark:border-blue-900">
              "model": "opusplan"
            </code>{' '}
            in your settings.
          </p>
        </section>

        <Section title="Training Links">
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

        <Section title="Recommended Skills">
          <p className="mb-6 text-gray-500 dark:text-gray-400">
            Copy into your coding agent's skills directory to use.
          </p>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div
                key={skill.command}
                className="flex items-baseline gap-4 py-3 border-b border-gray-100 dark:border-gray-800 last:border-0"
              >
                <ExternalLink
                  href={skill.href ?? `${REPO}/blob/main/${skill.path}`}
                  className="font-mono text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline shrink-0"
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

        <Section title="Legal Notice (Impressum)">
          <p id="impressum" className="scroll-mt-8">
            EclipseSource GmbH
            <br />
            Messerschmittstr. 4
            <br />
            80992 München, Germany
          </p>
          <p className="mt-4">
            Managing Directors: Dr. Jonas Helming, Dr. Maximilian Koegel
            <br />
            Registered: Amtsgericht München, HRB 191789
            <br />
            VAT ID: DE 277039104
            <br />
            Phone: +49 89 2155530-1
          </p>
          <p className="mt-4">
            <ExternalLink
              href="https://eclipsesource.com/imprint/"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Full legal notice
            </ExternalLink>
          </p>
        </Section>

        <Section title="Privacy Policy">
          <p id="privacy" className="scroll-mt-8">
            This page is static and does not itself set cookies, run analytics, or collect
            personal data. It is hosted on GitHub Pages, which may process technical data
            such as your IP address to serve the page — see{' '}
            <ExternalLink
              href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub's privacy statement
            </ExternalLink>
            . Links on this page lead to external sites (the training platform, GitHub
            repositories, third-party skills) that are governed by their own privacy
            policies.
          </p>
          <p className="mt-4">
            For questions about data processing, contact EclipseSource GmbH (details above) or
            see the{' '}
            <ExternalLink
              href="https://eclipsesource.com/privacy/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              full privacy policy
            </ExternalLink>
            .
          </p>
        </Section>

        <footer className="pt-8 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-400 dark:text-gray-500 flex justify-between">
          <ExternalLink
            href={REPO}
            className="hover:text-gray-600 dark:hover:text-gray-300"
          >
            GitHub
          </ExternalLink>
          <span className="space-x-4">
            <a href="#impressum" className="hover:text-gray-600 dark:hover:text-gray-300">
              Impressum
            </a>
            <a href="#privacy" className="hover:text-gray-600 dark:hover:text-gray-300">
              Privacy
            </a>
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
