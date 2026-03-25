'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  { label: 'Research', href: '#research' },
  { label: 'AI Agents', href: '#ai-agents' },
  { label: 'Software', href: '#software' },
  { label: 'Solutions', href: '#solutions' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? 'bg-[#070f12]/95 border-b border-[#41494d]/40 shadow-[0_4px_32px_rgba(0,0,0,0.4)]'
          : 'bg-[#070f12]/70'
      }`}
    >
      <div className="bg-gradient-to-b from-[#1c272c]/20 to-transparent">
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <Link href="#hero" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/logo.svg"
              alt="Zeerak Labs"
              width={155}
              height={74}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden md:flex gap-10 items-center">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-headline font-medium text-[#6e777a] hover:text-[#b9ffe8] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="bg-[#15ffd1] text-[#00372e] font-headline font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-sm hover:scale-95 active:scale-90 transition-transform duration-150"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}
