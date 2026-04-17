import { useState, useEffect, useRef } from 'react'

export default function Contact() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [focused, setFocused] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !message) return

    const subject = encodeURIComponent('Portfolio Contact')
    const body = encodeURIComponent(`From: ${email}\n\n${message}`)
    window.open(`mailto:kirishapriya3@gmail.com?subject=${subject}&body=${body}`, '_self')

    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
      setMessage('')
    }, 3000)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-white overflow-hidden"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(60px,6rem,80px) clamp(16px,2rem,24px) clamp(32px,3rem,40px) clamp(16px,2rem,24px)' }}
    >
      <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* ── SECTION HEADER ── */}
        <div
          className={`flex flex-col items-center text-center transition-all duration-700 ease-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-[#6b6557] text-[clamp(10px,0.75rem,12px)] font-semibold tracking-[0.2em] uppercase mb-4 sm:mb-6">
            GET IN TOUCH
          </p>
          <h2
            className="tracking-[-0.02em] leading-none text-[#111010] "
            style={{ fontSize: 'clamp(28px,5vw,72px)', fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            Let's{' '}
            <span
              className="italic"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                background: 'linear-gradient(135deg, #c062d6, #e07070)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Connect
            </span>
          </h2>
        </div>

        <div style={{ height: 'clamp(32px,3rem,48px)' }} />

        {/* ── CONTACT CARD ── */}
        <div
          className={`transition-all duration-700 ease-out delay-200
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{
            width: '100%',
            maxWidth: 'clamp(320px,90%,750px)',
            borderRadius: '24px',
            background: '#ffffff',
            boxShadow: '0 4px 60px rgba(0,0,0,0.10), 0 2px 12px rgba(0,0,0,0.04)',
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <div style={{ padding: 'clamp(24px,3rem,48px) clamp(20px,3rem,56px)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            {/* ── EMAIL DISPLAY (clickable) ── */}
            <a
              id="contact-email-link"
              href="mailto:kirishapriya3@gmail.com"
              className="no-underline transition-all duration-300 hover:bg-[#f5f3f0]"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                width: '100%',
                justifyContent: 'center',
                padding: '18px 20px',
                borderRadius: '14px',
                fontSize: '15px',
                fontWeight: 500,
                color: '#3d3830',
                border: '1px solid #e0ddd6',
                textDecoration: 'none',
              }}
            >
              {/* Mail icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6b6557"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13 2 4" />
              </svg>
              kirishapriya3@gmail.com
            </a>

            {/* ── DIVIDER ── */}
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', margin: 'clamp(20px,2rem,32px) 0', gap: 'clamp(12px,1rem,16px)' }}>
              <div style={{ flex: 1, height: '1px', background: '#ddd9d1' }} />
              <span style={{ fontSize: 'clamp(10px,0.75rem,12px)', fontWeight: 500, color: '#9e9889', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
                Or send a message
              </span>
              <div style={{ flex: 1, height: '1px', background: '#ddd9d1' }} />
            </div>

            {/* ── FORM ── */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px,1.5rem,20px)', width: '100%' }}>

              {/* Your Email */}
              <div className="relative">
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  placeholder="Your Email"
                  required
                  className="transition-all duration-300 ease-out"
                  style={{
                    width: '100%',
                    padding: 'clamp(14px,1.25rem,18px) clamp(16px,1.5rem,20px)',
                    borderRadius: '14px',
                    fontSize: 'clamp(13px,0.875rem,14px)',
                    fontWeight: 500,
                    outline: 'none',
                    background: focused === 'email' ? '#faf9f7' : '#f5f3f0',
                    border: `1.5px solid ${focused === 'email' ? '#c062d6' : '#e0ddd6'}`,
                    color: '#3d3830',
                    boxShadow: focused === 'email' ? '0 0 0 3px rgba(192,98,214,0.12)' : 'none',
                  }}
                />
              </div>

              {/* Your Message */}
              <div className="relative">
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="transition-all duration-300 ease-out"
                  style={{
                    width: '100%',
                    padding: 'clamp(14px,1.25rem,18px) clamp(16px,1.5rem,20px)',
                    borderRadius: '14px',
                    fontSize: 'clamp(13px,0.875rem,14px)',
                    fontWeight: 500,
                    outline: 'none',
                    resize: 'none',
                    background: focused === 'message' ? '#faf9f7' : '#f5f3f0',
                    border: `1.5px solid ${focused === 'message' ? '#c062d6' : '#e0ddd6'}`,
                    color: '#3d3830',
                    boxShadow: focused === 'message' ? '0 0 0 3px rgba(192,98,214,0.12)' : 'none',
                  }}
                />
              </div>

              {/* Send Message button */}
              <button
                id="contact-submit"
                type="submit"
                disabled={submitted}
                className="transition-all duration-300 ease-out hover:scale-[1.015] active:scale-[0.98]"
                style={{
                  width: '100%',
                  padding: '18px 20px',
                  borderRadius: '14px',
                  fontSize: 'clamp(13px,0.875rem,15px)',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  border: 'none',
                  cursor: submitted ? 'default' : 'pointer',
                  marginTop: 'clamp(8px,1rem,12px)',
                  background: submitted ? '#3d3830' : '#111010',
                  color: '#fff',
                  boxShadow: '0 4px 16px rgba(17,16,16,0.18)',
                }}
                onMouseEnter={(e) => {
                  if (!submitted) e.currentTarget.style.boxShadow = '0 8px 28px rgba(17,16,16,0.28)'
                }}
                onMouseLeave={(e) => {
                  if (!submitted) e.currentTarget.style.boxShadow = '0 4px 16px rgba(17,16,16,0.18)'
                }}
              >
                {submitted ? (
                  <span className="inline-flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Sent!
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <div style={{ width: '90%', maxWidth: '1100px', marginTop: 'clamp(40px,4rem,60px)', marginBottom: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '100%', height: '1px', background: '#d5d0c8' }} />
          <p style={{ marginTop: 'clamp(24px,3rem,40px)', marginBottom: '0px', fontSize: 'clamp(14px,1rem,16px)', color: '#111010', fontWeight: 400, letterSpacing: '0.02em' }}>
            © 2026 Kirishapriya. All rights reserved. 
          </p>
        </div>

      </div>

      {/* Arrow Button to Home */}
      <button
        onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
        className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full bg-gray-600 hover:bg-gray-700 text-white shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        style={{
          zIndex: 50,
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </section>
  )
}
