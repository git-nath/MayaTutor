import Image from "next/image";

const stats = [
  { label: "Active tutors", value: "250+" },
  { label: "Families supported", value: "1,800+" },
  { label: "Cities reached", value: "15" }
];

const features = [
  {
    title: "University Tutors You Can Trust",
    description:
      "Every tutor is an active university student in Ethiopia and goes through ID and profile verification.",
    tag: "Verified"
  },
  {
    title: "KG to Grade 12 Support",
    description:
      "From reading basics to advanced mathematics, we match each learner with the right subject specialist.",
    tag: "K-12"
  },
  {
    title: "Flexible Home or Online Sessions",
    description:
      "Book classes after school, on weekends, or during exam seasons with convenient scheduling.",
    tag: "Flexible"
  },
  {
    title: "Agency-led Progress Tracking",
    description:
      "We follow up with families, monitor goals, and help tutors improve learning outcomes every month.",
    tag: "Managed"
  }
];

const levels = [
  "Kindergarten foundation and reading readiness",
  "Primary school support (Grade 1 to Grade 6)",
  "Junior school tutoring (Grade 7 and Grade 8)",
  "High school & national exam preparation (Grade 9 to Grade 12)"
];

const tutorFlow = [
  "Submit your university ID, profile, and available days.",
  "Complete orientation and child-safe tutoring guidelines.",
  "Get matched to nearby students and begin earning."
];

const testimonials = [
  {
    quote:
      "Maya Tutor helped my Grade 10 daughter improve in physics and math in less than 3 months.",
    author: "Parent, Addis Ababa"
  },
  {
    quote:
      "As a university student, this gave me stable part-time income and meaningful teaching experience.",
    author: "Tutor, Bahir Dar University"
  }
];

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-white">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-16 top-20 h-52 w-52 rounded-full bg-maya-green/30 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-500/30 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 pb-14 pt-6 sm:px-6 lg:px-8 lg:pb-20">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-maya-green to-emerald-400 text-sm font-bold text-slate-950">
                MT
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide">Maya Tutor</p>
                <p className="text-xs text-slate-300">Tutoring Agency • Ethiopia</p>
              </div>
            </div>
            <a
              href="#contact"
              className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-lg shadow-white/20 transition hover:-translate-y-0.5"
            >
              Book a Tutor
            </a>
          </header>

          <section className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-2">
            <div>
              <p className="inline-flex rounded-full border border-maya-green/40 bg-maya-green/10 px-3 py-1 text-xs font-medium text-maya-green">
                Mobile-first • Fast • Responsive
              </p>
              <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                A beautiful tutoring platform connecting university mentors with KG–Grade 12 students.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Maya Tutor is a modern tutoring agency in Ethiopia that helps families find trusted, affordable,
                and inspiring tutors from local universities.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#services"
                  className="rounded-full bg-maya-green px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  Explore Services
                </a>
                <a
                  href="#become-tutor"
                  className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Become a Tutor
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                    <p className="text-lg font-bold text-maya-green sm:text-xl">{item.value}</p>
                    <p className="mt-1 text-[11px] text-slate-300 sm:text-xs">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-2xl backdrop-blur-sm sm:p-6">
              <Image
                src="/hero-placeholder.svg"
                alt="University tutor helping students learn"
                width={640}
                height={480}
                priority
                className="h-auto w-full rounded-2xl border border-white/10 bg-white"
              />
              <div className="mt-4 rounded-2xl bg-slate-900/80 p-4">
                <p className="text-sm font-semibold">Now enrolling students for 2026 term support</p>
                <p className="mt-1 text-xs text-slate-300">
                  Addis Ababa, Adama, Hawassa, Bahir Dar, Mekelle, and online across Ethiopia.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section id="services" className="bg-white py-14 text-slate-900 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-maya-green">Why families choose us</p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Amazing support designed for modern Ethiopian families</h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm">
                <span className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold text-white">{feature.tag}</span>
                <h3 className="mt-3 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-maya-cream py-14 text-slate-900 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Learning levels we support</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              {levels.map((level) => (
                <li key={level} className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-sm">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-maya-green text-xs font-bold text-white">
                    ✓
                  </span>
                  <span>{level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="become-tutor" className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-maya-green">For university students</p>
            <h3 className="mt-3 text-2xl font-bold">Start tutoring with Maya Tutor</h3>
            <ol className="mt-5 space-y-4">
              {tutorFlow.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm text-slate-200">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-maya-gold font-semibold text-slate-900">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <a
              href="#contact"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Apply as Tutor
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">What people say</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {testimonials.map((item) => (
              <figure key={item.author} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <blockquote className="text-sm leading-relaxed text-slate-200">“{item.quote}”</blockquote>
                <figcaption className="mt-3 text-xs font-semibold text-maya-green">{item.author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 bg-slate-950 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-sm text-slate-300 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-base font-semibold text-white">Maya Tutor Ethiopia</p>
            <p>Telegram: @MayaTutorET</p>
            <p>Email: hello@mayatutor.et</p>
            <p>Phone: +251 9XX XXX XXX</p>
          </div>
          <p>© 2026 Maya Tutor. Empowering students across Ethiopia.</p>
        </div>
      </footer>
    </main>
  );
}
