'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const TRUST = ['18+ only', 'Amazon Pay Secured', 'Licensed & Regulated', 'Play Responsibly']

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden bg-amazon-gradient">
      {/* Diagonal texture overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg,rgba(0,0,0,0.2) 0,rgba(0,0,0,0.2) 1px,transparent 0,transparent 50%)',
          backgroundSize: '14px 14px',
        }}
      />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2
          className="font-display text-amazon-dark leading-none mb-4"
          style={{ fontSize: 'clamp(44px, 6.5vw, 86px)' }}
        >
          YOUR PRIZE IS
          <br />
          ONE TICKET AWAY
        </h2>

        <p className="text-amazon-dark/70 text-lg mb-10 max-w-xl mx-auto">
          Join over 1.2 million entries in this quarter's Grand Draw.
          Delivered by Amazon.
        </p>

        <Link href="/auth/register" className="btn-cta">
          Enter the Grand Draw <ArrowRight size={22} />
        </Link>

        <div className="mt-9 flex flex-wrap justify-center gap-6 text-amazon-dark/50 text-sm">
          {TRUST.map(t => (
            <span key={t}>✓ {t}</span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
