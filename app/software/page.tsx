import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Software | Zeerak Labs' }

export default function SoftwarePage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-8">
      <div className="text-center">
        <p className="text-primary font-label font-bold uppercase tracking-[0.3em] text-xs mb-4">Coming Soon</p>
        <h1 className="text-5xl font-headline font-bold text-on-surface mb-6">Software</h1>
        <p className="text-on-surface-variant mb-10 max-w-md mx-auto">
          This section is being assembled. Check back soon.
        </p>
        <Link href="/" className="text-primary font-label font-bold uppercase tracking-widest text-xs flex items-center gap-2 justify-center hover:gap-4 transition-all">
          <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Home
        </Link>
      </div>
    </main>
  )
}
