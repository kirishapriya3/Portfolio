import { useState, useEffect, useRef } from 'react'

const projects = [
  {
    title: 'StayMate',
    image: '/staymate.png',
    description:
      'StayMate is a full-stack MERN application designed to manage hostel operations like room allocation, resident details, billing, and maintenance requests. It provides secure authentication and real-time data management through a user-friendly dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: [
      { label: 'Frontend', url: 'https://github.com/kirishapriya3/ManagementFrontend.git' },
      { label: 'Backend', url: 'https://github.com/kirishapriya3/ManagementBackend.git' },
    ],
    demo: 'https://darling-jelly-524929.netlify.app/',
    accent: '#d97706',
  },
  {
    title: 'Kanban Board',
    image: '/kanban.png',
    description:
      'A simple and responsive task management application that allows users to add, update, and delete daily tasks. It helps users stay organized by tracking their progress efficiently.',
    tags: ['React', 'CSS', 'LocalStorage'],
    github: [
      { label: 'GitHub', url: 'https://github.com/kirishapriya3/Kanban.git' },
    ],
    demo: 'https://gleeful-valkyrie-8a9e9a.netlify.app/',
    accent: '#0891b2',
  },
  {
    title: 'Movie Search App',
    image: '/movieapp.png',
    description:
      'A movie search application that fetches real-time data from an external API and displays movie details like title, rating, and poster. It provides a fast and interactive way for users to explore movies.',
    tags: ['React', 'REST API', 'CSS'],
    github: [
      { label: 'GitHub', url: 'https://github.com/kirishapriya3/Task7.git' },
    ],
    demo: 'https://benevolent-mochi-705e41.netlify.app/',
    accent: '#9333ea',
  },
]

/* ── GitHub SVG icon ── */
function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

/* ── External link SVG icon ── */
function ExternalLinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function ProjectCard({ project, index, visible }) {
  const [hovered, setHovered] = useState(false)
  const [imgHovered, setImgHovered] = useState(false)
  const num = String(index + 1).padStart(2, '0')

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col overflow-hidden rounded-2xl"
      style={{
        background: hovered
          ? `linear-gradient(165deg, ${project.accent}0A 0%, rgba(255,255,255,0.95) 100%)`
          : 'rgba(255,255,255,0.75)',
        backdropFilter: 'blur(12px)',
        border: `1px solid ${hovered ? project.accent + '55' : 'rgba(0,0,0,0.06)'}`,
        boxShadow: hovered
          ? `0 24px 64px rgba(0,0,0,0.12), 0 0 0 1px ${project.accent}18`
          : '0 2px 16px rgba(0,0,0,0.06)',
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? 'translateY(-6px) scale(1.01)' : 'translateY(0) scale(1)'
          : 'translateY(50px) scale(0.96)',
        transition: 'all 600ms cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: visible ? `${index * 180}ms` : '0ms',
        minWidth: '300px',
        width: '100%',
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 w-full transition-all duration-500"
        style={{
          height: hovered ? '3px' : '0px',
          background: `linear-gradient(90deg, ${project.accent}, ${project.accent}88)`,
        }}
      />

      {/* ── PROJECT IMAGE ── */}
      <div
        className="relative overflow-hidden cursor-pointer"
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
        style={{ margin: '20px 20px 0 20px', borderRadius: '12px' }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full object-cover object-top"
          style={{
            height: '180px',
            transform: imgHovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
        {/* Dark overlay on image hover */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: imgHovered
              ? `linear-gradient(180deg, ${project.accent}33 0%, rgba(17,16,16,0.55) 100%)`
              : 'linear-gradient(180deg, transparent 50%, rgba(232,228,220,0.5) 100%)',
            transition: 'all 500ms ease',
            borderRadius: '12px',
          }}
        >
          {/* "View" label appears on hover */}
          <span
            style={{
              opacity: imgHovered ? 1 : 0,
              transform: imgHovered ? 'translateY(0)' : 'translateY(8px)',
              transition: 'all 400ms ease',
              color: '#fff',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '8px 20px',
              borderRadius: '999px',
              border: '1.5px solid rgba(255,255,255,0.5)',
              backdropFilter: 'blur(4px)',
              background: 'rgba(255,255,255,0.1)',
            }}
          >
            View Project
          </span>
        </div>

        {/* Project number badge */}
        <div
          className="absolute top-3 right-3"
          style={{
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(8px)',
            borderRadius: '8px',
            padding: '4px 10px',
            fontSize: '11px',
            fontWeight: 800,
            color: project.accent,
            letterSpacing: '0.04em',
            border: `1px solid ${project.accent}22`,
          }}
        >
          {num}
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div 
        className="flex flex-col flex-1 gap-6"
        style={{ padding: '32px 44px 48px 44px' }}
      >
        {/* Title row */}
        <div className="flex items-center gap-4">
          <h3
            className="font-bold tracking-[-0.02em] transition-colors duration-300"
            style={{
              fontSize: '20px',
              color: hovered ? project.accent : '#1a1816',
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h3>
          <div
            style={{
              height: '1px',
              flex: 1,
              background: hovered
                ? `linear-gradient(90deg, ${project.accent}33, transparent)`
                : 'rgba(0,0,0,0.06)',
              transition: 'all 500ms ease',
            }}
          />
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5" style={{ marginTop: '2px' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '10.5px',
                fontWeight: 600,
                letterSpacing: '0.04em',
                padding: '3px 10px',
                borderRadius: '6px',
                background: hovered ? `${project.accent}10` : 'rgba(0,0,0,0.04)',
                color: hovered ? project.accent : '#7a7367',
                border: `1px solid ${hovered ? project.accent + '22' : 'rgba(0,0,0,0.04)'}`,
                transition: 'all 400ms ease',
                textTransform: 'uppercase',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: '13.5px',
            lineHeight: 1.7,
            color: '#6b6557',
            fontWeight: 400,
            marginTop: '4px',
          }}
          className="flex-1"
        >
          {project.description}
        </p>

        {/* ── BUTTONS ── */}
        <div className="flex items-center justify-between gap-5" style={{ marginTop: '20px' }}>
          {/* GitHub link(s) */}
          <div className="flex gap-2 flex-wrap">
            {project.github.map((gh) => (
              <a
                key={gh.label}
                href={gh.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 no-underline cursor-pointer"
                style={{
                  padding: '12px 24px',
                  borderRadius: '10px',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  background: hovered ? `${project.accent}08` : 'rgba(0,0,0,0.04)',
                  color: hovered ? project.accent : '#4a4439',
                  border: `1px solid ${hovered ? project.accent + '33' : 'rgba(0,0,0,0.08)'}`,
                  transition: 'all 300ms ease',
                  transform: 'scale(1)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.04)'
                  e.currentTarget.style.boxShadow = `0 4px 12px ${project.accent}20`
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <GitHubIcon />
                {gh.label}
              </a>
            ))}
          </div>

          {/* Live Demo button */}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 no-underline cursor-pointer shrink-0 ${project.github.length > 1 ? 'mr-2 sm:mr-4' : ''}`}
            style={{
              padding: '12px 32px',
              borderRadius: '10px',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.03em',
              background: `linear-gradient(135deg, ${project.accent}, ${project.accent}dd)`,
              color: '#ffffff',
              boxShadow: `0 4px 16px ${project.accent}35`,
              transition: 'all 300ms ease',
              transform: 'scale(1)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = `0 8px 28px ${project.accent}45`
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = `0 4px 16px ${project.accent}35`
            }}
          >
            Live Demo
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-[60vh] lg:min-h-screen bg-[#e8e4dc] px-4 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      {/* ── Decorative background elements ── */}
      <div
        className="absolute top-20 left-1/3 w-[600px] h-[400px] rounded-full pointer-events-none opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #d97706, transparent 70%)' }}
      />
      <div
        className="absolute bottom-20 right-1/4 w-[500px] h-[350px] rounded-full pointer-events-none opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #9333ea, transparent 70%)' }}
      />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div style={{ maxWidth: '1080px', width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        {/* ── SECTION HEADER ── */}
        <div
          className={`flex flex-col items-center text-center mb-20 transition-all duration-700 ease-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p
            className="text-[12px] font-semibold tracking-[0.25em] uppercase mb-5"
            style={{ color: '#8a8477' }}
          >
            Selected Work
          </p>
          <div className="mb-4">
            <h2 className="text-[#111010] font-black tracking-[-0.04em] leading-none text-[clamp(48px,7vw,88px)]">
              MY{' '}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: '1.5px #c5c0b5' }}
              >
                PROJECTS
              </span>
            </h2>
          </div>
          {/* Decorative line under heading */}
          <div
            style={{
              width: '48px',
              height: '3px',
              borderRadius: '99px',
              background: 'linear-gradient(90deg, #d97706, #9333ea)',
              marginTop: '16px',
              opacity: visible ? 1 : 0,
              transition: 'opacity 800ms ease 400ms',
            }}
          />
        </div>

        {/* ── PROJECT CARDS GRID ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full"
          style={{ marginBottom: '80px', maxWidth: '1080px' }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
