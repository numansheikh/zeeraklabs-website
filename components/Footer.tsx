import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Contact', href: '#contact' },
  { label: 'Twitter', href: 'https://twitter.com/zeeraklabs', external: true },
  { label: 'GitHub', href: 'https://github.com/zeeraklabs', external: true },
]

export default function Footer() {
  return (
    <footer className="w-full bg-[#0c1518] border-t border-[#41494d]/20 py-10 px-12">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <Link href="#hero" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/logo-mark.svg"
              alt=""
              width={36}
              height={36}
              className="h-9 w-auto"
            />
            <span style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: '1.35em', letterSpacing: '-0.01em' }}>
              <span style={{ color: '#15ffd1' }}>Zeerak</span>
              <span style={{ color: '#ffffff' }}> Labs</span>
            </span>
          </Link>
          <p className="font-inter text-sm tracking-wide text-[#6e777a]">
            © {new Date().getFullYear()} Zeerak Labs. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {footerLinks.map(({ label, href, external }) =>
            external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-sm tracking-wide text-[#6e777a] hover:text-[#b9ffe8] transition-colors"
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className="font-inter text-sm tracking-wide text-[#6e777a] hover:text-[#b9ffe8] transition-colors"
              >
                {label}
              </Link>
            )
          )}
        </div>
      </div>
    </footer>
  )
}
