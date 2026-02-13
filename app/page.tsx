"use client";

import { useEffect, useState } from "react";

const navigationLinks = ["Services", "Why Maya", "How It Works", "Cities", "For Tutors"];

const trustBullets = [
  "University & graduate tutors",
  "Background-verified",
  "Flexible schedules"
];

const featureCards = [
  {
    title: "Built for Ethiopian families",
    text: "We connect KG to Grade 12 students with trusted university tutors for home and online lessons."
  },
  {
    title: "Simple coordination",
    text: "You tell us the subject, grade, and schedule. We handle tutor matching, verification, and follow-up."
  },
  {
    title: "Flexible, negotiated pricing",
    text: "Rates are discussed based on subject, level, and schedule."
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

const communityCards = [
  {
    title: "Join as a Student",
    description: "Start your journey to academic excellence with personalized tutoring",
    points: ["One-on-one sessions", "Flexible scheduling", "Progress tracking", "All subjects K-12"],
    cta: "Enroll Now"
  },
  {
    title: "Become a Tutor",
    description: "Share your expertise and make a difference in students' lives",
    points: ["Competitive pay", "Flexible hours", "Professional development", "Supportive community"],
    cta: "Apply Today"
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
  const [theme, setTheme] = useState<"dark" | "day">("dark");

  useEffect(() => {
    const isDayMode = document.documentElement.classList.contains("day-mode");
    setTheme(isDayMode ? "day" : "dark");
  }, []);

  useEffect(() => {
    const isDayMode = theme === "day";
    document.documentElement.classList.toggle("day-mode", isDayMode);
    window.localStorage.setItem("maya-theme", isDayMode ? "day" : "dark");
  }, [theme]);

  const isDayMode = theme === "day";

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "day" ? "dark" : "day"));
  };

  return (
    <main className={`min-h-screen ${isDayMode ? "bg-slate-100 text-slate-900" : "bg-[#04070d] text-white"}`}>
      <div className="maya-grid-bg">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
          <header className="sticky top-3 z-20 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img src="/maya-logo.svg" alt="Maya Tutor logo" className="h-10 w-auto rounded-md bg-white p-1" />
              </div>

              <nav className="hidden items-center gap-8 text-sm font-semibold text-white/85 lg:flex">
                {navigationLinks.map((item) => (
                  <a key={item} href="#" className="transition hover:text-white">
                    {item}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label={isDayMode ? "Switch to night mode" : "Switch to day mode"}
                  onClick={toggleTheme}
                  className={`inline-flex h-9 w-9 touch-manipulation items-center justify-center rounded-xl border text-sm sm:hidden ${
                    isDayMode
                      ? "border-slate-300 bg-white text-slate-800"
                      : "border-white/25 bg-white/10 text-white/90"
                  }`}
                >
                  {isDayMode ? "🌙" : "☀"}
                </button>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className={`hidden rounded-xl border px-3 py-2 text-sm font-semibold sm:block ${
                    isDayMode
                      ? "border-slate-300 bg-white text-slate-800"
                      : "border-white/25 bg-white/10 text-white/90"
                  }`}
                >
                  {isDayMode ? "🌙 Night Mode" : "☀ Day Mode"}
                </button>
                <a
                  href="tel:+251982614129"
                  className="rounded-xl border border-[#f4ad62]/60 bg-[#f4ad62] px-4 py-2 text-sm font-semibold text-black"
                >
                  📞 +251982614129
                </a>
              </div>
            </div>
          </header>

          <section className="relative overflow-hidden border-x border-white/10 px-4 pb-24 pt-24 text-center sm:px-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.28),transparent_60%)]" />
            <div className="relative mx-auto max-w-4xl">
              <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
                Maya Home Tutors  KG To Grade 12 in Ethiopia
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-base text-white/65 sm:text-xl sm:leading-relaxed">
                Talk to a coordinator today and get matched in 24 hours.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href="https://t.me/cjimllbethel"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 min-w-[220px] items-center justify-center gap-2 rounded-full bg-white px-5 text-base font-semibold text-black transition hover:bg-white/90 sm:h-14 sm:min-w-[240px] sm:text-lg"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#229ED9] text-white sm:h-8 sm:w-8">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M9.04 15.47 8.9 19.54c.39 0 .56-.17.77-.37l1.86-1.78 3.86 2.82c.7.4 1.2.19 1.39-.65l2.52-11.8.01-.01c.22-1.02-.37-1.42-1.05-1.17L3.45 12.3c-.98.39-.97.93-.16 1.18l3.79 1.18L15.88 9c.41-.27.79-.12.48.15"/>
                    </svg>
                  </span>
                  Chat on Telegram
                </a>
                <a
                  href="tel:+251982614129"
                  className="inline-flex h-12 min-w-[220px] items-center justify-center gap-2 rounded-full border border-[#f4ad62]/70 bg-[#f4ad62] px-5 text-base font-semibold text-black sm:h-14 sm:min-w-[240px] sm:text-lg"
                >
                  📞 +251982614129
                </a>
              </div>
              <p className="mt-4 text-sm font-medium text-white/80 sm:text-base">Trusted by parents in Addis Ababa.</p>
            </div>
          </section>

          <section className="border-x border-b border-white/10 px-4 py-10 sm:px-8">
            <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="text-xl font-bold sm:text-2xl">Why parents trust Maya Tutor</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {trustBullets.map((item) => (
                  <li key={item} className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/85 sm:text-base">
                    • {item}
                  </li>
                ))}
              </ul>
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
              Contact Maya Tutor
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
            <h2 className="text-3xl font-extrabold sm:text-6xl">Join Our Learning Community</h2>
            <p className="mt-4 text-lg text-white/65 sm:text-4xl">
              Whether you're seeking tutoring or want to become a tutor, we'd love to have you
            </p>
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
              {communityCards.map((card, i) => (
                <article
                  key={card.title}
                  className={`rounded-3xl border p-8 text-left ${
                    i === 1 ? "border-white/20 bg-white/[0.07]" : "border-white/10 bg-black/60"
                  }`}
                >
                  <h3 className="text-2xl font-bold sm:text-4xl">{card.title}</h3>
                  <p className="mt-3 text-base text-white/60 sm:text-2xl">{card.description}</p>
                  <ul className="mt-6 space-y-3 text-base text-white/85 sm:text-2xl">
                    {card.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="text-emerald-400">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="mt-7 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-white/90 sm:px-7 sm:py-3 sm:text-base"
                  >
                    {card.cta}
                  </a>
                </article>
              ))}
            </div>
          </section>

          <footer className="border-x border-b border-white/10 px-4 py-16 sm:px-8">
            <div className="grid gap-10 md:grid-cols-[1.5fr_3fr]">
              <div>
                <img src="/maya-logo.svg" alt="Maya Tutor logo" className="h-14 w-auto rounded-lg bg-white p-1" />
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

      <div className="fixed bottom-6 right-4 z-30 flex flex-col gap-3 sm:right-6">
        <a
          href="https://t.me/cjimllbethel"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on Telegram"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-slate-900/90 text-white shadow-lg shadow-black/40 backdrop-blur transition hover:-translate-y-0.5 hover:bg-slate-800 hover:scale-105"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#229ED9] text-white">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M9.04 15.47 8.9 19.54c.39 0 .56-.17.77-.37l1.86-1.78 3.86 2.82c.7.4 1.2.19 1.39-.65l2.52-11.8.01-.01c.22-1.02-.37-1.42-1.05-1.17L3.45 12.3c-.98.39-.97.93-.16 1.18l3.79 1.18L15.88 9c.41-.27.79-.12.48.15"/>
            </svg>
          </span>
        </a>
        <a
          href="tel:+251982614129"
          aria-label="Call +251982614129"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-slate-900/90 text-white shadow-lg shadow-black/40 backdrop-blur transition hover:-translate-y-0.5 hover:bg-slate-800 hover:scale-105"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#22c55e] text-white">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92V20a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3.09a2 2 0 0 1 2 1.72c.12.89.32 1.76.59 2.6a2 2 0 0 1-.45 2.11L9.09 10.6a16 16 0 0 0 4.31 4.31l1.17-1.17a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.6.59A2 2 0 0 1 22 16.92Z" />
            </svg>
          </span>
        </a>
        <a
          href="sms:+251982614129"
          aria-label="Send SMS to +251982614129"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-slate-900/90 text-white shadow-lg shadow-black/40 backdrop-blur transition hover:-translate-y-0.5 hover:bg-slate-800 hover:scale-105"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </span>
        </a>
      </div>
    </main>
  );
}
