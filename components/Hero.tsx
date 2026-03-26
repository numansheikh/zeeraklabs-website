'use client'

import { motion } from 'framer-motion'

// Each node: where the signal originates on the Z stroke (tickStart) → dot endpoint
// Delays are staggered so pulses fire independently and feel random
const CYCLE    = 11    // seconds per full animation cycle (travel + glow + idle)
const TRAVEL   = 1.8   // seconds for signal to travel the tick line
const T_END    = TRAVEL / CYCLE                   // ~0.164 — signal arrives
const GLOW_PK  = (TRAVEL + 0.55) / CYCLE          // ~0.214 — dot at peak brightness
const GLOW_OUT = (TRAVEL + 2.0)  / CYCLE          // ~0.345 — dot fades back to dim

const nodes = [
  { tick: { x1: 62, y1: 22,  x2: 62,  y2: 2   }, dot: { cx: 62,  cy: 2   }, delay: 2.1 },
  { tick: { x1: 32, y1: 62,  x2: 2,   y2: 62  }, dot: { cx: 2,   cy: 62  }, delay: 5.6 },
  { tick: { x1: 92, y1: 62,  x2: 122, y2: 62  }, dot: { cx: 122, cy: 62  }, delay: 3.7 },
  { tick: { x1: 62, y1: 102, x2: 62,  y2: 122 }, dot: { cx: 62,  cy: 122 }, delay: 7.9 },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-48 pb-32 px-12 min-h-screen flex flex-col justify-center overflow-hidden hero-mesh"
    >
      <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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

      {/* Animated Z mark — signal pulses travel from Z to each node dot */}
      <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[520px] hidden lg:block pointer-events-none select-none">
        <svg viewBox="-15 -15 154 154" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">

          {/* Z stroke — draws itself on load */}
          <motion.path
            d="M32,22h60l-60,80h60"
            stroke="#15ffd1"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.18 }}
            transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.3 }}
          />

          {nodes.map((node, i) => (
            <g key={i}>
              {/* Tick line — dims base, brightens briefly as signal passes */}
              <motion.line
                x1={node.tick.x1} y1={node.tick.y1}
                x2={node.tick.x2} y2={node.tick.y2}
                stroke="#15ffd1"
                strokeWidth="1.5"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.08, 0.08, 0.30, 0.10, 0.08],
                }}
                transition={{
                  duration: CYCLE,
                  delay: node.delay,
                  times: [0, T_END - 0.06, T_END, T_END + 0.06, 1],
                  repeat: Infinity,
                }}
              />

              {/* Signal bead — travels along the tick line to the dot */}
              <motion.circle
                r={1.0}
                fill="#15ffd1"
                initial={{ cx: node.tick.x1, cy: node.tick.y1, opacity: 0 }}
                animate={{
                  cx:      [node.tick.x1, node.tick.x1, node.dot.cx, node.dot.cx, node.dot.cx],
                  cy:      [node.tick.y1, node.tick.y1, node.dot.cy, node.dot.cy, node.dot.cy],
                  opacity: [0,            1.0,           1.0,          0,           0],
                }}
                transition={{
                  duration: CYCLE,
                  delay: node.delay,
                  times: [0, 0.01, T_END, T_END + 0.02, 1],
                  repeat: Infinity,
                  ease: 'easeIn',
                }}
              />

              {/* Ripple ring — expands outward when signal arrives */}
              <motion.circle
                cx={node.dot.cx}
                cy={node.dot.cy}
                fill="none"
                stroke="#15ffd1"
                initial={{ r: 2, opacity: 0 }}
                animate={{
                  r:       [2,  2,  2,  8,   12],
                  opacity: [0,  0,  0.55, 0.25, 0],
                  strokeWidth: [0.8, 0.8, 0.8, 0.4, 0.1],
                }}
                transition={{
                  duration: CYCLE,
                  delay: node.delay,
                  times: [0, T_END - 0.01, T_END, GLOW_PK, GLOW_OUT],
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />

              {/* Dot — stays fixed, only opacity changes on signal arrival */}
              <motion.circle
                cx={node.dot.cx}
                cy={node.dot.cy}
                r={2}
                fill="#15ffd1"
                initial={{ opacity: 0.12 }}
                animate={{
                  opacity: [0.12, 0.12, 1.0, 0.65, 0.15, 0.12],
                }}
                transition={{
                  duration: CYCLE,
                  delay: node.delay,
                  times: [0, T_END - 0.02, T_END, GLOW_PK, GLOW_OUT, 1],
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </g>
          ))}

        </svg>
      </div>
    </section>
  )
}
