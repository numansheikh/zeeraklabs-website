'use client'

import { motion, type Variants, type Easing } from 'framer-motion'
import Link from 'next/link'

const pillars = [
  {
    id: 'research',
    icon: 'science',
    title: 'Research',
    description:
      "Exploring new frontiers in neural architectures and quantum-ready algorithms. We push the boundaries of what's possible.",
    cta: 'Deep Dive',
    href: '/research',
    variant: 'gradient' as const,
  },
  {
    id: 'ai-agents',
    icon: 'smart_toy',
    title: 'AI Agents',
    description:
      'Designing autonomous entities that learn, adapt, and execute complex workflows with superhuman precision and speed.',
    cta: 'Meet the Agents',
    href: '/ai-agents',
    variant: 'featured' as const,
  },
  {
    id: 'software',
    icon: 'terminal',
    title: 'Software',
    description:
      'Building robust, scalable, and mission-critical digital infrastructure for the next generation of global enterprises.',
    cta: 'Architecture',
    href: '/software',
    variant: 'gradient' as const,
  },
]

const ease: Easing = 'easeOut'

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease },
  }),
}

export default function Pillars() {
  return (
    <section id="pillars" className="py-32 px-12 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-on-surface mb-6">
              The Three Pillars
            </h2>
            <p className="text-on-surface-variant text-lg">
              Zeerak Labs operates at the intersection of three distinct but
              synergistic technological wings.
            </p>
          </div>
          <div className="h-px flex-grow bg-primary/10 mx-12 hidden md:block" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              id={pillar.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className={`group p-10 rounded-lg flex flex-col justify-between aspect-square ${
                pillar.variant === 'featured'
                  ? 'relative overflow-hidden bg-surface-container border border-primary/30'
                  : 'cyan-border-gradient bg-surface-container'
              }`}
            >
              {pillar.variant === 'featured' && (
                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
              )}
              <div className="z-10">
                <span className="material-symbols-outlined text-primary text-4xl mb-8 block">
                  {pillar.icon}
                </span>
                <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">
                  {pillar.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <Link
                href={pillar.href}
                className="text-primary font-label font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-4 transition-all z-10 w-fit"
              >
                {pillar.cta}{' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
