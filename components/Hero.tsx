'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-48 pb-32 px-12 min-h-screen flex flex-col justify-center overflow-hidden hero-mesh"
    >
      <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          {/* Large wordmark — fades in first as a brand anchor */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <Image
              src="/logo-wordmark.png"
              alt="Zeerak Labs"
              width={320}
              height={100}
              priority
              className="h-16 w-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-[10px] font-label font-bold tracking-[0.2em] text-primary uppercase">
              Shaping the Kinetic Era
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-6xl md:text-8xl font-headline font-bold tracking-tighter leading-[0.9] text-on-surface mb-8"
          >
            Engineering the{' '}
            <span className="text-primary text-glow">Intelligence</span> of
            Tomorrow.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light leading-relaxed mb-12"
          >
            We are a multi-disciplinary studio bridging the gap between frontier
            research, autonomous agency, and high-performance software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-6"
          >
            <a
              href="#pillars"
              className="bg-primary text-on-primary font-label font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm hover:brightness-110 transition-all inline-block"
            >
              Explore Labs
            </a>
            <a
              href="#solutions"
              className="bg-surface-container-highest text-on-surface font-label font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-sm border border-outline-variant hover:bg-surface-container-high transition-colors inline-block"
            >
              View Case Studies
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating decorative panel */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/4 h-2/3 hidden lg:block opacity-30">
        <div className="w-full h-full glass-gradient rounded-l-3xl border-l border-y border-primary/20" />
      </div>
    </section>
  )
}
