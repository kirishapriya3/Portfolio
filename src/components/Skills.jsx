import { useState, useEffect, useRef } from 'react'

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    accent: '#d97706',
    skills: [
      { name: 'HTML5', logo: `${CDN}/html5/html5-original.svg` },
      { name: 'CSS3', logo: `${CDN}/css3/css3-original.svg` },
      { name: 'Tailwind CSS', logo: `${CDN}/tailwindcss/tailwindcss-original.svg` },
      { name: 'JavaScript', logo: `${CDN}/javascript/javascript-original.svg` },
      { name: 'React', logo: `${CDN}/react/react-original.svg` },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    accent: '#0891b2',
    skills: [
      { name: 'Node.js', logo: `${CDN}/nodejs/nodejs-original.svg` },
      { name: 'Express.js', logo: `${CDN}/express/express-original.svg`, invert: false },
      { name: 'MongoDB', logo: `${CDN}/mongodb/mongodb-original.svg` },
      { name: 'MySQL', logo: `${CDN}/mysql/mysql-original.svg` },
    ],
  },
  {
    id: 'tools',
    label: 'Dev Tools',
    accent: '#16a34a',
    skills: [
      { name: 'Git', logo: `${CDN}/git/git-original.svg` },
      { name: 'GitHub', logo: `${CDN}/github/github-original.svg`, invert: false },
    ],
  },
  {
    id: 'ai',
    label: 'AI Tools',
    accent: '#9333ea',
    skills: [
      { name: 'Windsurf', emoji: '🏄' },
      { name: 'Antigravity', emoji: '🚀' },
      { name: 'Claude', emoji: '🤖' },
    ],
  },
]

function SkillItem({ name, logo, emoji, invert, accent, delay, visible, marginTop }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center gap-3 cursor-default transition-all duration-500 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? 'translateY(-6px) scale(1.05)' : 'translateY(0)'
          : 'translateY(20px)',
        marginTop: marginTop ? '16px' : '0',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Icon box */}
      <div
        className="w-[clamp(56px,4rem,72px)] h-[clamp(56px,4rem,72px)] rounded-2xl flex items-center justify-center
          transition-all duration-300 ease-out border"
        style={{
          backgroundColor: hovered ? accent + '18' : 'rgba(0,0,0,0.04)',
          borderColor: hovered ? accent + '66' : 'rgba(0,0,0,0.1)',
          boxShadow: hovered ? `0 8px 32px ${accent}25, 0 0 0 1px ${accent}22` : '0 2px 8px rgba(0,0,0,0.06)',
        }}
      >
        {logo ? (
          <img
            src={logo}
            alt={name}
            className="w-[clamp(24px,2rem,36px)] h-[clamp(24px,2rem,36px)] object-contain transition-transform duration-300"
            style={{
              transform: hovered ? 'scale(1.15)' : 'scale(1)',
              filter: invert ? 'invert(0)' : 'none',
            }}
          />
        ) : (
          <span
            className="text-[clamp(24px,2rem,32px)] transition-transform duration-300"
            style={{ transform: hovered ? 'scale(1.15)' : 'scale(1)' }}
          >
            {emoji}
          </span>
        )}
      </div>

      {/* Name */}
      <span
        className="text-[clamp(11px,0.875rem,13px)] font-semibold tracking-wide transition-colors duration-300"
        style={{ color: hovered ? accent : '#3d3830' }}
      >
        {name}
      </span>
    </div>
  )
}

export default function Skills() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const totalSkills = categories.reduce((acc, c) => acc + c.skills.length, 0)

  let globalIndex = 0
  const allSkills = categories.flatMap((cat) =>
    cat.skills.map((skill) => ({
      ...skill,
      accent: cat.accent,
      globalIndex: globalIndex++,
    }))
  )

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-[60vh] lg:min-h-screen bg-[#e8e4dc] py-16 sm:py-20 overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full pointer-events-none opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #d97706, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full pointer-events-none opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #9333ea, transparent 70%)' }} />

      <div className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12">

        {/* ── SECTION HEADER ── */}
        <div
          className={`flex flex-col items-center text-center mt-20 sm:mt-24 md:mt-28 mb-16 sm:mb-20 transition-all duration-700 ease-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {/* Eyebrow */}
          <p className="text-[#6b6557] text-[clamp(10px,0.75rem,12px)] font-semibold tracking-[0.2em] uppercase mb-4">
            What I Work With
          </p>
          {/* Headline */}
          <h2 className="text-[#111010] font-black tracking-[-0.04em] leading-none
            text-[clamp(36px,6vw,100px)]">
            MY TECH
            <br />
            <span className="text-transparent"
              style={{ WebkitTextStroke: '1.5px #c5c0b5' }}>
              STACK
            </span>
          </h2>

          {/* Counter */}
          <div className="mt-6">
            <span className="text-[#111010] text-[clamp(40px,5vw,56px)] leading-none tracking-[-0.04em]">
              {totalSkills}
            </span>
            <p className="text-[#6b6557] text-[clamp(10px,0.75rem,12px)] tracking-[0.15em] uppercase mt-1">
              Technologies
            </p>
          </div>
        </div>

        {/* ── SKILLS — CENTERED ICONS + TEXT ── */}
        <div className="flex flex-wrap justify-center items-start gap-x-8 sm:gap-x-12 lg:gap-x-14 gap-y-8 sm:gap-y-12 w-full max-w-[900px] pb-8 sm:pb-10">
          {allSkills.map((skill) => (
            <SkillItem
              key={skill.name}
              name={skill.name}
              logo={skill.logo}
              emoji={skill.emoji}
              invert={skill.invert}
              accent={skill.accent}
              delay={skill.globalIndex * 70 + 200}
              visible={visible}
              marginTop={skill.marginTop}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
