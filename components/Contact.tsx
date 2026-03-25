'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const data = Object.fromEntries(new FormData(e.currentTarget))

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-surface-container border border-outline-variant rounded-sm px-4 py-3 text-on-surface text-sm font-inter placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all'

  return (
    <section id="contact" className="py-32 px-12 bg-surface-container-low">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-primary font-label font-bold uppercase tracking-[0.4em] text-xs mb-6">
              Let&apos;s Build Together
            </h4>
            <h2 className="text-5xl md:text-6xl font-headline font-bold tracking-tight text-on-surface mb-8 leading-tight">
              Ready to evolve?
            </h2>
            <p className="text-on-surface-variant text-xl leading-relaxed mb-10">
              Join industry leaders building the future with Zeerak Labs. Tell
              us about your project and let&apos;s engineer your next
              breakthrough.
            </p>
            <ul className="space-y-5">
              <li className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm">mail</span>
                <span className="font-inter text-sm">hello@zeeraklabs.com</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm">schedule</span>
                <span className="font-inter text-sm">Typical response within 24 hours</span>
              </li>
            </ul>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-gradient p-10 rounded-sm border border-primary/10 relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#15ffd1 1.5px, transparent 1.5px)',
                backgroundSize: '32px 32px',
              }}
            />

            {status === 'success' ? (
              <div className="relative z-10 flex flex-col items-center justify-center py-16 gap-4 text-center">
                <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
                <h3 className="text-2xl font-headline font-bold text-on-surface">Message received.</h3>
                <p className="text-on-surface-variant">We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2" htmlFor="name">
                      Name
                    </label>
                    <input className={inputClass} id="name" name="name" placeholder="Jane Smith" required type="text" />
                  </div>
                  <div>
                    <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2" htmlFor="email">
                      Email
                    </label>
                    <input className={inputClass} id="email" name="email" placeholder="jane@company.com" required type="email" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2" htmlFor="interest">
                    Area of Interest
                  </label>
                  <select className={inputClass} id="interest" name="interest">
                    <option value="">Select a wing...</option>
                    <option value="research">Research Collaboration</option>
                    <option value="ai-agents">AI Agents</option>
                    <option value="software">Software Development</option>
                    <option value="solutions">Full-Stack Solutions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea className={inputClass} id="message" name="message" placeholder="Tell us about your project..." required rows={5} />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm font-inter">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  disabled={status === 'loading'}
                  className="w-full bg-primary text-on-primary font-label font-bold text-sm uppercase tracking-widest py-4 rounded-sm hover:brightness-110 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-xl shadow-primary/10 disabled:opacity-60 disabled:cursor-not-allowed"
                  type="submit"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
