const navItems = ["Services", "Why Maya", "How It Works", "Cities", "For Tutors"];

const featureCards = [
  {
    title: "Built for Ethiopian families",
    text: "We connect KG to Grade 12 students with trusted university tutors for home and online classes."
  },
  {
    title: "Simple and transparent",
    text: "Tell us your subject and schedule. We match, verify, and support your tutor journey end-to-end."
  },
  {
    title: "Pay only for sessions",
    text: "Affordable rates, flexible plans, and agency support with no hidden subscription complexity."
  }
];

const serviceCards = [
  {
    icon: "⚡",
    title: "Fast tutor matching",
    text: "Get matched in 24–48 hours based on grade, subject, and location."
  },
  {
    icon: "🌍",
    title: "All major cities",
    text: "Addis Ababa, Adama, Bahir Dar, Hawassa, Mekelle and online nationwide."
  },
  {
    icon: "🛡️",
    title: "Verified tutors",
    text: "University ID checks, references, and onboarding before first lesson."
  },
  {
    icon: "📊",
    title: "Progress tracking",
    text: "Monthly feedback with goals, attendance, and academic improvement notes."
  },
  {
    icon: "🔔",
    title: "Smart support",
    text: "Session reminders, parent follow-up, and support for exam season planning."
  },
  {
    icon: "🎯",
    title: "Exam readiness",
    text: "Focused support for national exams and high school subject performance."
  }
];

const pricing = [
  {
    name: "Starter",
    price: "Custom",
    subtitle: "For occasional tutoring",
    points: [
      "KG–Grade 12 subject matching",
      "Weekly or weekend options",
      "Online or home sessions",
      "Parent support line"
    ]
  },
  {
    name: "Intensive",
    price: "Custom",
    subtitle: "For exam and high-impact prep",
    points: [
      "Everything in Starter",
      "Priority tutor assignment",
      "Progress report every month",
      "Exam timetable planning"
    ]
  }
];

const footerColumns = [
  {
    title: "Tutoring",
    links: ["KG & Primary", "Junior School", "Grade 9–12", "National Exam Prep"]
  },
  {
    title: "Agency",
    links: ["How matching works", "Tutor verification", "Cities", "Support"]
  },
  {
    title: "For Tutors",
    links: ["Apply as tutor", "Requirements", "Earnings", "FAQ"]
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Cookies", "Contact"]
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#04070d] text-white">
      <div className="maya-grid-bg">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
          <header className="sticky top-3 z-20 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-white px-2 py-1 text-lg font-black text-black">e_</div>
                <p className="text-xl font-bold tracking-tight">maya tutor</p>
              </div>

              <nav className="hidden items-center gap-8 text-sm font-semibold text-white/85 lg:flex">
                {navItems.map((item) => (
                  <a key={item} href="#" className="transition hover:text-white">
                    {item}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <a href="#" className="hidden px-3 text-sm font-semibold text-white/90 sm:block">
                  Sign In
                </a>
                <a
                  href="#"
                  className="rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100"
                >
                  Start Free
                </a>
              </div>
            </div>
          </header>

          <section className="relative overflow-hidden border-x border-white/10 px-4 pb-24 pt-24 text-center sm:px-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.28),transparent_60%)]" />
            <div className="relative mx-auto max-w-4xl">
              <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
                Maya Tutor Ethiopia.
                <br />
                KG to Grade 12, done right.
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-base text-white/65 sm:text-xl sm:leading-relaxed">
                University students teaching school students with agency quality, modern support, and beautiful
                mobile-first experience.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href="#"
                  className="rounded-full bg-white px-7 py-3 text-base sm:px-9 sm:py-4 sm:text-2xl font-semibold text-black transition hover:bg-white/90"
                >
                  Find a Tutor →
                </a>
                <a
                  href="#"
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3 text-base sm:px-9 sm:py-4 sm:text-2xl font-semibold text-white"
                >
                  Become a Tutor
                </a>
              </div>
            </div>
          </section>

          <section className="grid border border-white/10 md:grid-cols-3">
            {featureCards.map((card) => (
              <article key={card.title} className="border-b border-white/10 p-8 md:border-b-0 md:border-r last:border-r-0">
                <h3 className="text-2xl font-bold sm:text-4xl">{card.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/65 sm:text-2xl sm:leading-9">{card.text}</p>
              </article>
            ))}
          </section>

          <section className="border-x border-b border-white/10 px-5 py-20 text-center sm:px-10">
            <a
              href="#"
              className="inline-flex rounded-full bg-white px-8 py-4 text-lg sm:px-14 sm:py-5 sm:text-4xl font-semibold text-black shadow-[0_0_60px_rgba(255,255,255,0.22)]"
            >
              Start Learning Today →
            </a>
          </section>

          <section className="border-x border-b border-white/10 px-4 py-20 text-center sm:px-8">
            <h2 className="text-3xl font-extrabold sm:text-6xl">Subjects and support that scale</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-white/65 sm:text-4xl">
              Math, science, English, exam coaching, and homework support with measurable progress.
            </p>

            <div className="mt-12 grid gap-0 md:grid-cols-3">
              {serviceCards.map((item) => (
                <article
                  key={item.title}
                  className="border border-white/10 bg-black/40 p-8 text-left transition hover:bg-white/[0.04]"
                >
                  <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl sm:text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold sm:text-4xl">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white/60 sm:text-2xl sm:leading-9">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="border-x border-b border-white/10 px-4 py-20 text-center sm:px-8">
            <h2 className="text-3xl font-extrabold sm:text-6xl">Simple pricing</h2>
            <p className="mt-4 text-lg text-white/65 sm:text-4xl">Start with what you need. Upgrade when you want more support.</p>
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
              {pricing.map((plan, i) => (
                <article
                  key={plan.name}
                  className={`rounded-3xl border p-8 text-left ${
                    i === 1 ? "border-white/20 bg-white/[0.07]" : "border-white/10 bg-black/60"
                  }`}
                >
                  <h3 className="text-2xl font-bold sm:text-4xl">{plan.name}</h3>
                  <p className="mt-2 text-4xl font-black sm:text-6xl">{plan.price}</p>
                  <p className="mt-1 text-base text-white/60 sm:text-2xl">{plan.subtitle}</p>
                  <ul className="mt-6 space-y-3 text-base sm:text-2xl text-white/85">
                    {plan.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="text-emerald-400">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <footer className="border-x border-b border-white/10 px-4 py-16 sm:px-8">
            <div className="grid gap-10 md:grid-cols-[1.5fr_3fr]">
              <div>
                <h3 className="text-3xl font-extrabold sm:text-5xl">maya tutor</h3>
                <p className="mt-4 max-w-md text-base leading-7 text-white/65 sm:text-2xl sm:leading-9">
                  The modern tutoring agency in Ethiopia connecting university students with KG to Grade 12 learners.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {footerColumns.map((col) => (
                  <div key={col.title}>
                    <h4 className="text-lg font-bold uppercase tracking-wide text-white/90">{col.title}</h4>
                    <ul className="mt-4 space-y-2 text-base text-white/60">
                      {col.links.map((link) => (
                        <li key={link}>{link}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:justify-between">
              <p>Made and hosted in Ethiopia.</p>
              <p>© 2026 Maya Tutor. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
