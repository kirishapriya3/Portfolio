import { useState, useEffect } from 'react'
import './index.css'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div id="home" className="min-h-[80vh] lg:min-h-screen bg-[#e8e4dc] font-[Inter,sans-serif] overflow-x-hidden relative">

        {/* ── NAVBAR ── */}
        <nav
          className={`flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-5 relative z-10 transition-all duration-700 ease-out gap-3 sm:gap-0`}
          style={{
            paddingTop: 'clamp(12px,1rem,20px)',
            paddingBottom: 'clamp(12px,1rem,20px)',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(-12px)',
            transition: 'opacity 700ms ease-out, transform 700ms ease-out',
          }}
        >
          <span className="text-[clamp(11px,0.75rem,15px)] font-medium tracking-[0.01em] text-[#3d3830] text-center sm:text-left">
            Full Stack Development
          </span>

          <ul className="flex flex-wrap justify-center sm:justify-start sm:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 list-none m-0 p-0">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  id={`nav-${item.toLowerCase()}`}
                  className="text-[clamp(10px,0.75rem,15px)] font-medium text-[#3d3830] no-underline tracking-[0.01em]
                  hover:text-[#111010] transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── HERO NAME ── */}
        <div className="leading-none relative z-[5] px-4 sm:px-8 md:px-12 lg:px-16" style={{ marginTop: 'clamp(8px,1rem,16px)', textAlign: 'center' }}>
          <h1
            className={`font-bold text-[#111010] tracking-[-0.04em] leading-[0.88]
            select-none transition-all duration-[800ms] ease-out delay-150
            text-[clamp(32px,8vw,120px)]
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            KIRISHA PRIYA
          </h1>
        </div>

        {/* ── CONTENT GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 items-start relative z-[5] px-8 sm:px-12 md:px-16 lg:px-20" style={{ marginTop: 'clamp(20px,2rem,32px)', paddingBottom: 'clamp(24px,2.5rem,40px)', paddingTop: 'clamp(12px,1rem,16px)' }}>

          {/* LEFT: Arrow + tagline + button */}
          <div
            className={`flex flex-col gap-6 transition-all duration-[800ms] ease-out delay-300
            ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
            style={{ marginLeft: '48px', marginRight: '48px', paddingLeft: '24px', paddingRight: '24px' }}
          >
            {/* Diagonal arrow */}
            <span className="text-[22px] text-[#6b6557] leading-none">↘</span>

            {/* Tagline */}
            <p className="text-[clamp(14px,1rem,18px)] leading-relaxed text-[#3d3830] font-normal max-w-[clamp(200px,18rem,260px)] px-4 sm:px-4 md:px-2 lg:px-0">
              I build fast, modern websites that help businesses grow, available
              for freelance projects worldwide.
            </p>

            {/* Contact and Resume buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 px-4 sm:px-4 md:px-2 lg:px-0">
              <button
                id="contact-btn"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 bg-[#111010] text-[#e8e4dc]
                border-none rounded-full text-[13px] font-bold tracking-[0.08em]
                cursor-pointer shadow-[0_2px_12px_rgba(17,16,16,0.2)]
                hover:scale-[1.04] hover:shadow-[0_6px_24px_rgba(17,16,16,0.35)]
                transition-all duration-200 ease-out"
                style={{ padding: 'clamp(12px,1rem,20px) clamp(20px,2rem,32px)' }}
              >
                CONTACT 
              </button>
              <a
                href="/resume.pdf"
                download="resume.pdf"
                className="inline-flex items-center gap-2 bg-[#111010] text-[#e8e4dc]
                border-none rounded-full text-[13px] font-bold tracking-[0.08em]
                cursor-pointer shadow-[0_2px_12px_rgba(17,16,16,0.2)]
                hover:scale-[1.04] hover:shadow-[0_6px_24px_rgba(17,16,16,0.35)]
                transition-all duration-200 ease-out"
                style={{ padding: 'clamp(12px,1rem,20px) clamp(20px,2rem,32px)' }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 15l-6-6-6 6" />
                </svg>
                RESUME
              </a>
            </div>

            {/* Contact button */}
            {/* <button
              id="contact-btn"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-[#111010] text-[#e8e4dc]
              border-none rounded-full text-[13px] font-bold tracking-[0.08em]
              cursor-pointer shadow-[0_2px_12px_rgba(17,16,16,0.2)]
              hover:scale-[1.04] hover:shadow-[0_6px_24px_rgba(17,16,16,0.35)]
              transition-all duration-200 ease-out"
              style={{ marginTop: '32px', padding: '20px' }}
            >
              CONTACT ↗
            </button> */}
          </div>

          {/* CENTER: Photo */}
          <div
            className={`flex justify-center items-center transition-all duration-[900ms] ease-out delay-[400ms]
            ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-[0.97]'}`}
          >
            <div
              className="w-full max-w-[clamp(180px,16rem,240px)] aspect-[4/5] overflow-hidden rounded-[4px]
              shadow-[0_12px_48px_rgba(0,0,0,0.2)]
              hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
              transition-all duration-[400ms] ease-out"
            >
              <img
                src="/portfolio_center.png"
                alt="KIRISHA PRIYA — room with world map"
                className="w-full h-full object-cover grayscale contrast-[1.05] block"
              />
            </div>
          </div>

          {/* RIGHT: Availability */}
          <div
            className={`flex flex-col items-end justify-end transition-all duration-[800ms] ease-out delay-[500ms]
            ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
            style={{ marginTop: 'clamp(80px,8rem,144px)' }}
          >
            <span className="text-[clamp(10px,0.75rem,11px)] font-semibold tracking-[0.18em] text-[#6b6557] uppercase mb-1">
              Available for Work
            </span>
            <span
              className="font-bold text-[#111010] tracking-[-0.03em] leading-[0.9]
              text-[clamp(32px,6vw,96px)]"
            >
              APR'26
            </span>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div
          className={`mx-4 sm:mx-8 md:mx-12 lg:mx-9 h-px bg-[#c5c0b5] transition-opacity duration-[1000ms] delay-[600ms]
          ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* ── SCROLLING TICKER ── */}
        <div
          className={`overflow-hidden py-3 sm:py-4 transition-opacity duration-[1000ms] delay-[700ms]
          ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex gap-8 sm:gap-12 animate-marquee whitespace-nowrap w-max">
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className="text-[clamp(10px,0.75rem,12px)] font-medium tracking-[0.14em] text-[#6b6557] uppercase"
              >
                Javascript &nbsp;·&nbsp; React Js &nbsp;·&nbsp; Tailwind CSS &nbsp;·&nbsp; MYSQL &nbsp;·&nbsp; MONGODB &nbsp;·&nbsp; Node Js &nbsp;·&nbsp; Express Js &nbsp;·&nbsp; Postman &nbsp;·&nbsp; VS Code &nbsp;·&nbsp; Mongoose &nbsp;·&nbsp; Git &nbsp;·&nbsp; GitHub &nbsp;·&nbsp; Cursor AI  &nbsp;·&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
