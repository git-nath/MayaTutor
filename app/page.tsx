import Image from "next/image";

const stepsParents = [
  "Tell us your grade level, subject, and schedule.",
  "We match you with a nearby university tutor.",
  "Start sessions and track progress with our support."
];

const stepsTutors = [
  "Apply with your university ID and availability.",
  "Get verified and choose your tutoring requests.",
  "Teach, earn, and build your experience."
];

const subjects = [
  "Grade 1–12 core subjects",
  "Exam preparation (national exams, entrance tests)",
  "Study skills and homework support"
];

export default function HomePage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-lg font-semibold text-slate-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-maya-green text-white">
              MT
            </span>
            Maya Tutor Ethiopia
          </div>
          <div className="hidden gap-3 sm:flex">
            <a
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-slate-300"
              href="#parents"
            >
              Families
            </a>
            <a
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-slate-300"
              href="#tutors"
            >
              Tutors
            </a>
          </div>
        </header>

        <section className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-maya-green">
              Trusted tutoring for Ethiopia
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              We connect university students with families who need tutoring.
            </h1>
            <p className="text-base text-slate-600 sm:text-lg">
              Affordable, trusted tutors from Ethiopian universities.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="rounded-full bg-maya-green px-6 py-3 text-sm font-semibold text-white shadow-sm"
                href="#find"
              >
                Find a Tutor
              </a>
              <a
                className="rounded-full border border-maya-green px-6 py-3 text-sm font-semibold text-maya-green"
                href="#tutors"
              >
                Become a Tutor
              </a>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-maya-cream p-4 text-sm text-slate-700">
              Serving Addis Ababa, Adama, Bahir Dar, Hawassa, and nearby towns.
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-maya-cream p-6 shadow-sm">
            <Image
              src="/hero-placeholder.svg"
              alt="Students learning together"
              width={640}
              height={480}
              className="h-auto w-full"
              priority
            />
          </div>
        </section>
      </div>

      <section id="find" className="bg-maya-cream py-14">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-2xl font-semibold text-slate-900">How It Works</h2>
          <p className="mt-2 text-sm text-slate-600">
            Simple steps for parents, students, and tutors.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div id="parents" className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">For Parents / Students</h3>
              <ol className="mt-4 space-y-3 text-sm text-slate-700">
                {stepsParents.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-maya-green text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div id="tutors" className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">For Tutors</h3>
              <ol className="mt-4 space-y-3 text-sm text-slate-700">
                {stepsTutors.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-maya-gold text-sm font-semibold text-slate-900">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-6 lg:grid-cols-[2fr_3fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Subjects We Support</h2>
              <p className="mt-2 text-sm text-slate-600">
                Focused on school success and exam readiness.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {subjects.map((subject) => (
                <li
                  key={subject}
                  className="rounded-2xl border border-slate-100 bg-white p-5 text-sm text-slate-700 shadow-sm"
                >
                  {subject}
                </li>
              ))}
              <li className="rounded-2xl border border-slate-100 bg-white p-5 text-sm text-slate-700 shadow-sm">
                Specialized support for STEM, English, and local curricula.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-14 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Trusted by Families</h2>
              <p className="text-sm text-slate-200">
                We screen every tutor and provide ongoing support so families feel confident.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-800 p-5">
                <p className="text-base font-semibold">Verified university tutors</p>
                <p className="mt-2 text-sm text-slate-300">
                  ID checks, references, and training for each tutor.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-800 p-5">
                <p className="text-base font-semibold">Agency-managed support</p>
                <p className="mt-2 text-sm text-slate-300">
                  We coordinate schedules, payments, and follow-ups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-slate-900">Get in touch</p>
            <p>Telegram: @MayaTutorET</p>
            <p>Email: hello@mayatutor.et</p>
          </div>
          <p>© 2024 Maya Tutor Ethiopia. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
