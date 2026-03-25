'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const checks = [
  {
    title: 'Research-Led Development',
    body: 'Our software is built on proprietary algorithms born in our lab.',
  },
  {
    title: 'Agentic Orchestration',
    body: 'Complex systems managed by intelligent agents for zero-downtime evolution.',
  },
]

export default function Synergy() {
  return (
    <section id="solutions" className="py-40 px-12 overflow-hidden bg-surface">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 relative"
        >
          <div className="aspect-square w-full bg-surface-container-high rounded-sm overflow-hidden relative border border-outline-variant/20">
            {/* TODO: replace with your own image in /public */}
            <img
              alt="Abstract 3D render of interconnected glass spheres and digital lines representing network synergy"
              className="w-full h-full object-cover grayscale opacity-40 mix-blend-lighten"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ8NtnI9se_JAK3FSwB5T7xzBXAbvSrMsniyjm9ATXZ2hc1QDX0Stq8If18vEcw2N5IFTiL4QD9kczdNw8l84i0sXw10q6z_on9Z__4KQkd7nDui_mr3Y5xCtk-6sf1fBlUOzf1Ll8hR49tU2675oazrpgPwEnwIFHpPpjpAU-lOh8PI2yLdiYFw9_jd5MLZDdGpx7xdc272NJlW3ltBPIdOUAaqkXwgdX-3nPdFUvD8LYjdO87891o80n3WcaZ8d5bgj7-6YLzWU"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 rounded-full blur-[100px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-6 lg:pl-12"
        >
          <h4 className="text-primary font-label font-bold uppercase tracking-[0.4em] text-xs mb-6">
            Cross-Wing Synergy
          </h4>
          <h2 className="text-5xl font-headline font-bold tracking-tight text-on-surface mb-8 leading-tight">
            Where Innovation Collides.
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
            The true power of Zeerak Labs lies in the intersection of our three
            wings. We don&apos;t just build software; we build software powered
            by custom-researched AI models and operated by autonomous agents.
            This holistic approach creates unique, high-impact solutions
            impossible to replicate with off-the-shelf tools.
          </p>

          <ul className="space-y-6 mb-10">
            {checks.map(({ title, body }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">
                  check_circle
                </span>
                <div>
                  <h5 className="text-on-surface font-bold">{title}</h5>
                  <p className="text-on-surface-variant text-sm">{body}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            href="/solutions"
            className="text-primary font-label font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-4 transition-all w-fit"
          >
            Explore Solutions{' '}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
