import { Mail } from "lucide-react";
import { GithubCommitCard } from "@/components/sections/github-commit-card";
import { SimpleContactForm } from "@/components/sections/simple-contact-form";
import { FeaturedWorksBrowser } from "@/components/sections/featured-works-browser";
import { getGithubActivity } from "@/lib/github/activity";
import { SkillsCarousel } from "@/components/sections/skills-carousel";
import { TypewriterWord } from "@/components/sections/typewriter-word";
import { ThemeDotToggle } from "@/components/layout/theme-dot-toggle";
import { ServicesPanels } from "@/components/sections/services-panels";
import { AvailableCircle } from "@/components/effects/available-circle";

const featuredProjects = [
  {
    title: "TRACER - FACULTY MANAGEMENT SYSTEM",
    category: "EDTECH / RESEARCH",
    description:
      "Built a complete faculty academic management system to track publications, conferences, patents, awards, guest lectures, and funded projects in one place. Implemented role-based flows for faculty, HOD, and admin users, structured forms for yearly reporting, and searchable records to simplify accreditation and audit-ready documentation.",
    image: "/tracermain.jpeg",
    hoverImage: "/tracer.png",
    stack: ["NEXT.JS", "NODE.JS", "MONGODB", "RBAC"],
    liveUrl: "https://github.com/Deepanshu12344",
  },
  {
    title: "EVERSURE MEDICAL PRODUCTS",
    category: "PRODUCT Based",
    description:
      "Developed a scalable and responsive product website for Polybond India's Eversure brand with a reusable MERN architecture. Focused on SEO-first page structure, fast-loading product sections, and mobile-first UX so users can quickly explore categories, compare offerings, and contact the business with minimal friction.",
    image: "/eversuremain.png",
    hoverImage: "/eversure.png",
    stack: ["MERN", "SEO", "RESPONSIVE UI"],
    liveUrl: "https://www.eversuremedical.com/",
  },
  {
    title: "PORTFOLIO WEBSITE",
    category: "portfolio",
    description:
      "Engineered a modern portfolio experience with interactive sections, theme support, animated skill presentation, and project showcase flows optimized for clarity. Emphasized performance, component reusability, and maintainable structure so content updates, UI enhancements, and future integrations can be shipped quickly.",
    image: "/portfoliomain.png",
    hoverImage: "/projectmain.png",
    stack: ["FASTAPI", "COHERE", "DOCKER", "WEBSOCKETS"],
    liveUrl: "https://graphicpandit.framer.website",
  },
];

const skillGroups = [
  { title: "FRONTEND", items: ["REACT", "NEXT.JS", "JAVASCRIPT", "TYPESCRIPT", "TAILWIND CSS"] },
  { title: "BACKEND", items: ["NODE.JS", "EXPRESS.JS", "FASTAPI", "DJANGO"] },
  { title: "DATABASES", items: ["MONGODB", "POSTGRESQL"] },
  { title: "DEVOPS & TOOLS", items: ["DOCKER", "LINUX", "GIT", "REST APIS", "WEBSOCKETS"] },
  { title: "AI & ADVANCED", items: ["COHERE API", "REAL-TIME SYSTEMS", "SOCKET PROGRAMMING", "POSIX THREADS"] },
];

function GitHubLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.17c-3.34.72-4.04-1.41-4.04-1.41-.54-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.48-1.34-5.48-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.25 0 0 1.01-.33 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.56 3.29-1.23 3.29-1.23.66 1.69.24 2.94.12 3.25.77.84 1.24 1.91 1.24 3.22 0 4.63-2.82 5.64-5.51 5.94.43.37.82 1.1.82 2.23v3.31c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm7 0h3.83v1.71h.05c.53-1 1.85-2.06 3.8-2.06C21.16 8.65 22 10.8 22 14.02V21h-4v-6.19c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.37 1.61-2.37 3.27V21h-4V9Z" />
    </svg>
  );
}

export default async function Home() {
  const githubStats = await getGithubActivity();
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <main className="min-h-screen bg-white px-4 py-6 text-zinc-900 dark:bg-black dark:text-zinc-100 sm:px-8 sm:py-10">
      <div className="mx-auto w-full max-w-6xl">
        <header className="fade-up border-b border-zinc-900 pb-4 sm:pb-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-base font-bold uppercase tracking-[0.06em] sm:text-xl">DEEPANSHU SHARMA</p>
            <nav className="flex flex-wrap items-center gap-4 text-sm font-bold uppercase tracking-[0.06em] text-zinc-200 sm:gap-6 sm:text-xl">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="group block h-[1.2em] overflow-hidden">
                  <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                    <span className="block">{item.label}</span>
                    <span className="block">{item.label}</span>
                  </span>
                </a>
              ))}
              <ThemeDotToggle />
            </nav>
          </div>
        </header>

        <section className="fade-up fade-delay-1 py-12 sm:py-16">
          <h1 className="text-soft mt-3 font-mono text-3xl font-bold uppercase leading-tight tracking-[0.06em] text-zinc-200 sm:text-5xl lg:text-7xl">
            BUILDING <TypewriterWord words={["SCALABLE APPS", "AI-READY APPS", "MODERN WEB APPS"]} />,
            <br />
            AI SYSTEMS & REAL-TIME PLATFORMS
          </h1>
          <div className="mt-6 flex max-w-5xl flex-col gap-6 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-soft max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
              I design and build production-grade full stack applications with clean architecture, performance-focused backend systems, and practical AI integrations.
            </p>
            <AvailableCircle className="self-end sm:self-auto" size={156} />
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-s uppercase tracking-[0.15em]">
            <a className="inline-flex items-center text-zinc-200" href="https://github.com/Deepanshu12344" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubLogo /></a>
            <a className="inline-flex items-center text-zinc-200" href="https://www.linkedin.com/in/deepanshu-sharma-164057250/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInLogo /></a>
            <a className="inline-flex items-center text-zinc-200" href="mailto:deepanshu123sharma4@gmail.com" aria-label="Send Email"><Mail className="h-7 w-7" /></a>
          </div>
        </section>

        <section id="about" className="fade-up fade-delay-2 border-t border-zinc-900 py-10 sm:py-14">
          <h2 className="font-mono text-3xl font-bold uppercase tracking-[0.06em] sm:text-4xl">ABOUT</h2>
          <p className="text-soft mt-6 max-w-4xl text-sm leading-7 text-zinc-400 sm:text-base">
            I am a passionate Full Stack Developer and Computer Science Engineering student focused on building scalable web applications, real-time systems, and AI-powered digital experiences. I specialize in modern technologies like React, Next.js, Node.js, MongoDB, and FastAPI, with hands-on experience in developing responsive, high-performance applications.
          </p>
          <p className="text-soft mt-6 max-w-4xl text-sm leading-7 text-zinc-400 sm:text-base">
            As a developer, I am driven by curiosity, creativity, and the desire to build impactful solutions that solve real-world problems while delivering smooth and engaging user experiences.
          </p>
        </section>

        <section id="skills" className="fade-up fade-delay-2 border-t border-zinc-900 py-10 sm:py-14">
          <h2 className="font-mono text-3xl font-bold uppercase tracking-[0.06em] sm:text-4xl">SKILLS</h2>
          <SkillsCarousel groups={skillGroups} />
        </section>

        <section id="projects" className="fade-up fade-delay-3 border-t border-zinc-900 py-10 sm:py-14">
          <h2 className="text-center font-mono text-3xl font-bold uppercase tracking-[0.08em] text-zinc-200 sm:text-5xl lg:text-7xl">FEATURED WORKS</h2>
          <FeaturedWorksBrowser projects={featuredProjects} />
        </section>


        {/* <section className="border-t border-zinc-900 py-14">
          <div className="mb-6 flex items-center justify-between gap-3">
            <h2 className="font-mono text-4xl font-bold uppercase tracking-[0.06em]">GITHUB ACTIVITY</h2>
            <a className="border border-zinc-800 px-3 py-2 text-xs uppercase tracking-[0.15em] text-zinc-300" href="https://github.com/Deepanshu12344" target="_blank" rel="noreferrer">View Profile</a>
          </div>
          <GithubCommitCard stats={githubStats} />
        </section> */}

        <section id="contact" className="fade-up fade-delay-4 border-t border-zinc-900 py-10 sm:py-14">
          <h2 className="mb-6 font-mono text-3xl font-bold uppercase tracking-[0.06em] text-zinc-100 sm:text-4xl">CONTACT ME</h2>

          <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-14">
            <div className="space-y-10">
              <div>
                <p className="text-sm text-zinc-400">Send an email</p>
                <a
                  href="mailto:deepanshu123sharma4@gmail.com"
                  className="mt-2 block font-mono text-lg tracking-[0.03em] text-zinc-100 break-all sm:text-xl"
                >
                  deepanshu123sharma4@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-zinc-400">Phone</p>
                <a href="tel:+919310142140" className="mt-2 block font-mono text-lg text-zinc-100 sm:text-xl">
                  +91 9310142140
                </a>
              </div>
            </div>

            <SimpleContactForm />
          </div>
        </section>

        <footer className="fade-up fade-delay-4 border-t border-zinc-900 py-8 text-[11px] uppercase tracking-[0.12em] text-zinc-500 sm:text-xs sm:tracking-[0.14em]">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center sm:text-left">© {new Date().getFullYear()} Deepanshu Sharma. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="mailto:deepanshu123sharma4@gmail.com" className="hover:text-zinc-700 dark:hover:text-zinc-300">Email</a>
              <a href="https://github.com/Deepanshu12344" target="_blank" rel="noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300">GitHub</a>
              <a href="https://www.linkedin.com/in/deepanshu-sharma-164057250/" target="_blank" rel="noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300">LinkedIn</a>
              <a href="/Deepanshu_Resume_FS.pdf" download className="hover:text-zinc-700 dark:hover:text-zinc-300">Resume</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
