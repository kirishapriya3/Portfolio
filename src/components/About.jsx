import { useState, useEffect, useRef } from 'react'

export default function About() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  // Intersection Observer — animate in when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-[70vh] lg:min-h-screen bg-[#e8e4dc] flex items-center px-4 sm:px-8 md:px-10 lg:px-16 py-12 sm:py-16 overflow-hidden"
    >


      {/* ── MAIN GRID: photo | content ── */}
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 sm:gap-12 lg:gap-16 items-center px-4 sm:px-6 md:px-8 lg:px-0">

        {/* LEFT: Photo */}
        <div
          className={`transition-all duration-[900ms] ease-out
            ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
        >
          <div
            className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none aspect-[3/4] rounded-xl overflow-hidden mx-auto lg:mx-0
              shadow-[0_24px_64px_rgba(0,0,0,0.5)]
              hover:shadow-[0_32px_80px_rgba(0,0,0,0.65)]
              hover:scale-[1.01] transition-all duration-500 ease-out"
          >
            <img
              src="/portfolio_center.png"
              alt="Kirisha Priya"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT: Text content */}
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 px-2 sm:px-4 md:px-6 lg:px-0">

          {/* Large headline */}
          <h2
            className={`text-[#111010] font-semibold text-[clamp(20px,3.2vw,48px)] leading-[1.15]
              tracking-[-0.02em] max-w-[clamp(280px,100%,640px)] text-center lg:text-left
              transition-all duration-[900ms] ease-out delay-200
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            I'm a full-stack developer driven by a passion for turning ideas into clean, intuitive digital experiences.
          </h2>

          {/* Divider */}
          <div
            className={`h-px bg-[#2e2b28] transition-all duration-[800ms] delay-300
              ${visible ? 'opacity-100 w-full' : 'opacity-0 w-0'}`}
          />

          {/* Two-column bio row */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-6 sm:gap-8 lg:gap-10
              transition-all duration-[900ms] ease-out delay-[400ms]
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {/* Label */}
            <span
              className={`text-[#6b6557] text-[clamp(11px,0.75rem,12px)] font-medium tracking-[0.14em] uppercase pt-1 shrink-0 text-center sm:text-left`}
            >
              (About Me)
            </span>

            {/* Bio paragraphs */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <p className="text-[#3d3830] text-[clamp(15px,1rem,17px)] leading-[1.75] font-normal text-justify">
                I'm a full-stack developer who builds fast, modern web applications with
                React, Node.js and Tailwind CSS because they just work. I work with businesses
                and companies to turn ideas into reliable, user-friendly products built to scale.
              </p>
              <p className="text-[#3d3830] text-[clamp(15px,1rem,17px)] leading-[1.75] font-normal text-justify">
                I've been building websites for a while now and have developed opinions about things that
                don't matter to most people, like whether a transition should be 150ms or 200ms.
                (It's 150ms, btw). Build the thing, make it work, make it feel good. That's the gig.
              </p>
            </div>
          </div>

          {/* Stats row */}
          {/* <div
            className={`flex gap-10 pt-4 border-t border-[#2e2b28]
              transition-all duration-[900ms] ease-out delay-[500ms]
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {[
              { number: '2+', label: 'Years Experience' },
              { number: '15+', label: 'Projects Built' },
              { number: '10+', label: 'Tech Stack' },
            ].map(({ number, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="text-[#e8e4dc] text-[32px] font-black tracking-[-0.03em] leading-none">
                  {number}
                </span>
                <span className="text-[#6b6557] text-[12px] font-medium tracking-[0.1em] uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 20%, #e8e4dc 0%, transparent 50%)`,
        }}
      />
    </section>
  )
}
